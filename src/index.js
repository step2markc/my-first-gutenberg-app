import { createRoot, useState } from '@wordpress/element'
import { useSelect } from '@wordpress/data'
import { store as coreDataStore } from '@wordpress/core-data'
import { decodeEntities } from '@wordpress/html-entities'
import { SearchControl, Spinner, Button, Modal, TextControl } from '@wordpress/components'
import { EditPageForm } from './components/EditPageForm'
import { CreatePageButton } from './components/createPageButton'
import { DeletePageButton, Notifications } from './components/deletePageButton'

const PageEditButton = ({ pageId }) => {

	const [isOpen, setOpen] = useState(false)
	const openModal = () => setOpen(true)
	const closeModal = () => setOpen(false)
	return (
		<>
			<Button onClick={openModal}
				variant="primary">Edit</Button>
			{isOpen && (
				<Modal onRequestClose={closeModal} title="Edit Page">
					<EditPageForm pageId={pageId} onCancel={closeModal} onSaveFinished={closeModal} />
				</Modal>
			)}
		</>
	)
}

function MyFirstApp() {
	const [searchTerm, setSearchTerm] = useState('')
	const { pages, hasResolved } = useSelect(
		select => {
			const query = { per_page: 8 }
			if (searchTerm) {
				query.search = searchTerm
			}
			const selectorArgs = ['postType', 'page', query]
			return {
				pages: select(coreDataStore).getEntityRecords(...selectorArgs),
				hasResolved: select(coreDataStore).hasFinishedResolution('getEntityRecords', selectorArgs)
			}
		},
		[searchTerm]
	)
	return (
		<>
			<div className="list-controls">
				<SearchControl
					onChange={setSearchTerm}
					value={searchTerm}
				/>
				<CreatePageButton />
			</div>
			<PagesList hasResolved={hasResolved} pages={pages} />
			<Notifications />
		</>
	)
}

function PagesList({ hasResolved, pages }) {
	if (!hasResolved) {
		return <Spinner />
	}
	if (!pages?.length) {
		return <div>Nothing Found</div>
	}
	return (
		<table className="wp-list-table widefat fixed striped table-view-list">
			<thead>
				<tr>
					<th>Title</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{pages?.map(page => (
					<tr key={page.id}>
						<td>{decodeEntities(page.title.rendered)}</td>
						<td>
							<div className="form-buttons">
								<PageEditButton pageId={page.id} />
								<DeletePageButton pageId={page.id} />
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

const el = document.getElementById('my-first-gutenberg-app')
const root = createRoot(el)
root.render(<MyFirstApp />)

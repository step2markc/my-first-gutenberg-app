import { useDispatch } from '@wordpress/data'
import { Button, Modal, TextControl } from '@wordpress/components'
import { useState } from '@wordpress/element'
import { CreatePageForm } from './CreatePageForm'

export function CreatePageButton() {
	const [isOpen, setOpen] = useState(false)
	const openModal = () => setOpen(true)
	const closeModal = () => setOpen(false)
	return (
		<>
			<Button onClick={openModal} variant="primary">
				New Page
			</Button>
			{isOpen && (
				<Modal onRequestClose={closeModal} title="Create a new Page">
					<CreatePageForm onCancel={closeModal} onSaveFinished={closeModal} />
				</Modal>
			)}
		</>
	)
}

import { Button, Spinner, SnackbarList } from '@wordpress/components'
import { store as noticesStore } from '@wordpress/notices'
import { store as coreDataStore } from '@wordpress/core-data'
import { useSelect, useDispatch } from '@wordpress/data'
import { useEffect } from '@wordpress/element'

export const DeletePageButton = ({ pageId, onCancel, onSavedFinish }) => {
	const { createSuccessNotice, createErrorNotice } = useDispatch(noticesStore)
	const { deleteEntityRecord } = useDispatch(coreDataStore)
	const { isDeleting } = useSelect(
		select => ({
			isDeleting: select(coreDataStore).isDeletingEntityRecord('postType', 'page', pageId)
		})
	)
	const { getLastEntityDeleteError } = useSelect(coreDataStore)
	const handleDelete = async () => {
		const success = await deleteEntityRecord('postType', 'page', pageId)
		if (success) {
			createSuccessNotice("The page was deleted", { type: 'snackbar' })
		} else {
			const lastError = getLastEntityDeleteError('postType', 'page', pageId)
			const msg = (lastError?.message || 'There was a problem') + ' Refresh page, try again'
			createErrorNotice(msg, { type: 'snackbar' })
		}

	}
	return (
		<Button variant="primary" onClick={handleDelete}>
			{isDeleting ? (
				<>
					<Spinner />
					Deleting...
				</>
			) : 'Delete'}
		</Button>
	)
}

export function Notifications() {
	const notices = useSelect(
		select => select(noticesStore).getNotices(),
		[]
	)
	const { removeNotice } = useDispatch(noticesStore)
	const snackbarNotices = notices.filter(({ type }) => type == 'snackbar')

	return (
		<SnackbarList
			notices={snackbarNotices}
			className="components-editor-notices__snackbar"
			onRemove={removeNotice}
		/>
	)
}


import { store as coreDataStore } from '@wordpress/core-data'
import { decodeEntities } from '@wordpress/html-entities'
import { useSelect, useDispatch } from '@wordpress/data'
import PageForm from './PageForm'

export function EditPageForm({ pageId, onCancel, onSaveFinished }) {
	const { isSaving, hasEdits, lastError, page } = useSelect(select => {
		return {
			isSaving: select(coreDataStore).isSavingEntityRecord('postType', 'page', pageId),
			hasEdits: select(coreDataStore).hasEditsForEntityRecord('postType', 'page', pageId),
			page: select(coreDataStore).getEditedEntityRecord('postType', 'page', pageId),
			lastError: select(coreDataStore).getLastEntitySaveError('postType', 'page', pageId)
		}
	}, [pageId])
	const { editEntityRecord } = useDispatch(coreDataStore)
	const handleChange = title => editEntityRecord('postType', 'page', pageId, { title })
	const { saveEditedEntityRecord } = useDispatch(coreDataStore)
	const handleSave = async () => {
		const updatedRecord = await saveEditedEntityRecord('postType', 'page', pageId)
		if (updatedRecord) {
			onSaveFinished()
		}
	}
	return (
		<PageForm
			title={decodeEntities(page.title)}
			onChangeTitle={handleChange}
			hasEdits={hasEdits}
			lastError={lastError}
			isSaving={isSaving}
			onCancel={onCancel}
			onSave={handleSave}
		/>
	)
}

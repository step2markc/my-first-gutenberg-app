import { useState } from '@wordpress/element'
import { store as coreDataStore } from '@wordpress/core-data'
import { useSelect, useDispatch } from '@wordpress/data'
import PageForm from "./PageForm"

export function CreatePageForm({ onCancel, onSaveFinished }) {
	const [title, setTitle] = useState('')
	const { lastError, isSaving } = useSelect(select => {
		return {
			lastError: select(coreDataStore).getLastEntitySaveError('postType', 'page'),
			isSaving: select(coreDataStore).isSavingEntityRecord('postType', 'page')
		}
	}, [title])
	const { saveEntityRecord } = useDispatch(coreDataStore)
	const handleSave = async () => {
		const savedRecord = await saveEntityRecord(
			'postType',
			'page',
			{ title, status: 'publish' }
		)
		if (savedRecord) {
			onSaveFinished()
		}
	}
	return (
		<PageForm
			title={title}
			onChangeTitle={setTitle}
			hasEdits={!!title}
			lastError={lastError}
			isSaving={isSaving}
			onCancel={onCancel}
			onSave={handleSave}
		/>
	)
}

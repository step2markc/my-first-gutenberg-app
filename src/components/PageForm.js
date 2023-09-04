import { Button, TextControl, Spinner } from '@wordpress/components'
import { decodeEntities } from '@wordpress/html-entities'

export default function PageForm({ title, onChangeTitle, hasEdits, lastError, isSaving, onCancel, onSave }) {
	console.log('change', onChangeTitle)
	console.log('lastError', lastError)
	console.log('hasEdits', hasEdits)
	console.log('isSaving', isSaving)
	console.log('onCancel', onCancel)


	return (
		<div className="my-gutenberg-form">
			<TextControl
				value={decodeEntities(title)}
				label='Page title:'
				onChange={onChangeTitle}
			/>
			{lastError ? (
				<div className="form-error">
					Error: {lastError.message}
				</div>
			) : false}
			<div className="form-buttons">
				<Button onClick={onSave} variant="primary" disabled={!hasEdits || isSaving}>
					{isSaving ? (
						<>
							<Spinner />
							Saving
						</>
					) : 'Save'}
				</Button>
				<Button onClick={onCancel} variant="tertiary" disabled={isSaving}>
					Cancel
				</Button>
			</div>
		</div>
	)
}

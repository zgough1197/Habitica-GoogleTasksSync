/**
 * @returns a list of all tasks from Google Tasks
 */
function getAllGoogleTasks(): object[] {
	const taskLists = Tasks.Tasklists?.list().items

	if (taskLists === undefined) return []

	return taskLists

	throw new Error('not implemented')
}

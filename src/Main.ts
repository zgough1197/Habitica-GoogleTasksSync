const DEFAULT_GOOGLE_TASKS_LIST_LIMIT = 100
const DEFAULT_GOOGLE_SHOW_HIDDEN_TASKS = true

/**
 * main function to run each time
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function main() {
	// Initialize the data
	const googleTasks = getAllGoogleTasks()

	console.log(googleTasks)

	// getTodosFromHabitica()

	// Get tasks from GTasks
	// const [ gtasksCompletedIDs, gtasksIncompleteIDs ] = getGTasksId()

	// Get todos from Habitica. This entire list only contains incomplete tasks
	// const habiticaTodoAliases = getHabiticaTodoAliases()

	// console.log(gtasksCompletedIDs, gtasksIncompleteIDs, habiticaTodoAliases)

	// Copy incomplete tasks from GTasks to Habitica
	//      If the GTask ID is not in the list of Habitica aliases
	//      Add it to Habitica

	// const incompleteGTaskIDsToCopy = gtasksIncompleteIDs.filter((x) => !habiticaTodoAliases.includes(x))

	// for (const t of incompleteGTaskIDsToCopy) {
	// addGTaskToHabitica(t)
	// }

	// Mark all completed tasks as done
	// const completeGTaskIDsToMarkAsDone = gtasksCompletedIDs.filter((x) => habiticaTodoAliases.includes(x))

	// for (const t of completeGTaskIDsToMarkAsDone) {
	// markGTaskAsDone(t)
	// }

	// // Update changes in due date

	// //    Find GTasks that are in Habitica
	// const incompleteGTaskIDsInHabitica = gtasksIncompleteIDs.filter((x) => habiticaTodoAliases.includes(x))

	// //    Find any mismatch in due dates
	// for (const t of incompleteGTaskIDsInHabitica) {
	// const habiticaTodo = getHabiticaTodoFromAlias(t)
	// const gtask = getGTaskFromId(t)

	// if (gtask.dueDate === undefined) {
	// // pass
	// } else {
	// const gtaskDueDate = new Date(gtask.dueDate)
	// const habiticaDueDate = new Date(habiticaTodo.dueDate)

	// if (gtaskDueDate.valueOf() === habiticaDueDate.valueOf()) {
	// // pass
	// } else {
	// buildRequest('put', 'tasks/' + habiticaTodo.id, { 'date': gtask.dueDate })
	// }
	// }
	// }
}


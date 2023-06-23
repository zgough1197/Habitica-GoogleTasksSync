interface HabiticaPayload {
	text: string
	type: 'todo'
	alias?: string
	notes?: string
	date?: string
}

interface TaskList {
	id?: string
	name?: string
}

class GoogleTask {
	static allTasks: GoogleTask[]
	static allComplete: GoogleTask[]
	static allIncomplete: GoogleTask[]

	readonly text: string
	readonly taskId: string
	readonly parentId?: string
	readonly taskListId?: string
	readonly taskListName?: string
	readonly isCompleted?: boolean
	readonly dueDate?: string
	readonly notes?: string

	constructor(
		text: string,
		taskId: string,
		parentId?: string,
		taskListId?: string,
		taskListName?: string,
		isCompleted?: boolean,
		dueDate?: string,
		notes?: string
	) {
		this.text = text
		this.taskId = taskId

		if (parentId) {
			this.parentId = parentId
		}

		if (taskListId) {
			this.taskListId = taskListId
		}

		if (taskListName) {
			this.taskListName = taskListName
		}

		if (isCompleted) {
			this.isCompleted = isCompleted
		}

		if (dueDate) {
			this.dueDate = dueDate
		}

		if (notes) {
			this.notes = notes
		}


		GoogleTask.allTasks.push(this)

		if (this.isCompleted) {
			GoogleTask.allComplete.push(this)
		} else {
			GoogleTask.allIncomplete.push(this)
		}

		console.log(this)
	}

	convertToHabiticaPayload(): HabiticaPayload {
		// TODO: Checklists for subitems

		return {
			text: this.taskListName + ': ' + this.text,
			type: 'todo',
			alias: this.taskId,
			notes: this.notes,
			date: this.dueDate
		}
	}
}

/**
 * @returns the "optionalArgs" object that is supplied when retrieving the Task Lists
 */
function getOptionalArgs(): {maxResults: number, showHidden: boolean} {
	const maxResultsProperty = PropertiesService.getScriptProperties().getProperty('gtasks_maxresults')

	if (maxResultsProperty != null) {
		const maxResults = Number(maxResultsProperty)

		if (!isNaN(maxResults)) {
			return {
				maxResults,
				showHidden: DEFAULT_GOOGLE_SHOW_HIDDEN_TASKS
			}
		}
	}

	return {
		maxResults: DEFAULT_GOOGLE_TASKS_LIST_LIMIT,
		showHidden: DEFAULT_GOOGLE_SHOW_HIDDEN_TASKS
	}
}

/**
 * getGoogleTaskLists - Gets the ID/Name of the task lists on GTasks.
 * The name of the task list will be used as a tag on Habitica, the ID will be used to get the tasks in that list
 * @returns A list of all names and associated ids of all existing Google Task lists
 */
function getGoogleTaskLists(): TaskList[] {
	console.log(Tasks)
	console.log(Tasks.Tasklists || 'no task lists')
	const taskLists = Tasks.Tasklists?.list(getOptionalArgs()).items

	if (!taskLists) {
		return []
	}

	return taskLists.map((taskList): TaskList => ({
		id: taskList.id,
		name: taskList.title
	}))
}

/**
 * getGTasksPerList Get all the tasks associated with a task list
 * @param id - Google supplied ID of the task list
 * @param name - Google supplied title of the task list
 */
function getGTasksPerList(id: string, name?: string): void {
	const listID = id
	const listName = name || ''

	const tasks = Tasks.Tasks?.list(listID, getOptionalArgs())

	if (tasks?.items) {
		tasks.items.forEach((t) => {
			if (t.title === undefined || t.id === undefined) return

			new GoogleTask(t.title, t.id, t.parent, listID, listName, Boolean(t.completed), t.due, t.notes)
		})
	}
}

/**
 * Calls functions required to initialise the retrieve all google tasks
 */
function getGTasks() {
	// Just get all of it.
	const taskLists = getGoogleTaskLists()

	taskLists.forEach((list) => {
		if (list.id === undefined) return

		getGTasksPerList(list.id, list.name)
	})
}

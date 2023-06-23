/*
let habiticaTodos = []
let habiticaTags = []

class HabiticaTodo {
	constructor(text, id, notes, isCompleted) {
		this.text = text // name of the task as shown to the user
		this.id = id
		this.notes = notes
		this.isCompleted = isCompleted
	}

	addDueDate(date) {
		this.dueDate = date
	}

	addTags(tags) {
		this.tags = tags
	}

	addAlias(alias) {
		this.alias = alias
	}
}

class HabiticaTag {
	constructor(tagName, tagId) {
		this.tagName = tagName
		this.tagId = tagId
	}
}

function buildRequest(method, url, payload) {
	if (payload === undefined) {
		var params = {
			'method': method,
			'headers': {
				'x-api-user': PropertiesService.getScriptProperties().getProperty('habitica_userid'),
				'x-api-key': PropertiesService.getScriptProperties().getProperty('habitica_apikey')
			},
			'muteHttpExceptions': true
		}
	} else {
		var params = {
			'method': method,
			'headers': {
				'x-api-user': PropertiesService.getScriptProperties().getProperty('habitica_userid'),
				'x-api-key': PropertiesService.getScriptProperties().getProperty('habitica_apikey')
			},
			'payload': payload,
			'muteHttpExceptions': true
		}
	}

	const response = UrlFetchApp.fetch(PropertiesService.getScriptProperties().getProperty('habitica_apiurl') + url, params)

	return response
}

function getTags() {
	const taglistResponse = buildRequest('get', 'tags')
	const data = JSON.parse(taglistResponse.getContentText())

	const tagList = []

	if (data.success) {
		for (const t of data.data) {
			tagList.push(new HabiticaTag(t.name, t.id))
		}
	} else {
		Logger.log('Error in taglistResponse request: %s', taglistResponse)
	}

	return tagList
}

function getTodosFromHabitica() {
	habiticaTags = getTags()

	const todolistResponse = buildRequest('get', 'tasks/user')
	const data = JSON.parse(todolistResponse.getContentText())

	const taskList = []

	if (data.success) {
		for (const i of data.data) {
			if (i.type === 'todo') {
				const todo = new HabiticaTodo(i.text, i.id, i.notes, false)

				if (i.tags.length) {
					const tags = []

					for (const t of i.tags) {
						tags.push(new HabiticaTag(getTagNameFromId(t), t))
					}

					todo.addTags(tags)
				}

				if (i.alias) {
					todo.addAlias(i.alias)
				}

				if (i.date) {
					todo.addDueDate(i.date)
				}

				taskList.push(todo)
			}
		}
	} else {
		Logger.log('Error in todolistResponse request: %s', todolistResponse)
	}

	// return taskList;
	habiticaTodos = taskList
}
*/

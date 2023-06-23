/*
function getTagNameFromId(tagId) {
	for (const t of habiticaTags) {
		if (t.tagId === tagId) {
			return t.tagName
		}
	}

	return ''
}

function getTagIdFromName(tagName) {
	for (const t of habiticaTags) {
		if (t.tagName === tagName) {
			return t.tagName
		}
	}

	return ''
}

function getHabiticaTodoAliases() {
	const aliasList = []

	for (const t of habiticaTodos) {
		if (t.alias === undefined) {
			// pass
		} else {
			aliasList.push(t.alias)
		}
	}

	return aliasList
}

function getHabiticaTodoFromAlias(alias) {
	for (const t of habiticaTodos) {
		if (t.alias === alias) {
			return t
		}
	}

	return ''
}

function addGTaskToHabitica(gtaskId) {
	const gtask = getGTaskFromId(gtaskId)

	buildRequest('post', 'tasks/user', gtask.convertToHabiticaPayload())
}

function markGTaskAsDone(gtaskId) {
	const habiticaTodo = getHabiticaTodoFromAlias(gtaskId)

	buildRequest('post', 'tasks/' + habiticaTodo.id + '/score/up', { 'up': 'True' })
}

function updateGTaskDueDate(gtask) {

}
*/

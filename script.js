const noteContainer = document.querySelector('#app');
const addBtn = document.querySelector('.add-note-btn');

const getNotes = function () {
	return JSON.parse(localStorage.getItem('stickyNote-notes') || '[]');
};

const saveNote = function (note) {
	localStorage.setItem('stickyNote-notes', JSON.stringify(note));
};

const createNoteElement = function (content, id) {
	const randomId = new Date().getTime();
	const element = `<textarea
    onchange="updateNote(this, ${id || randomId})"
	ondblclick="deleteNote(this, ${id || randomId})"
    class="note"
    placeholder="Write something new..."
    >${content}</textarea>`;
	return element;
};

const addNote = function () {};

const updateNote = function (e, id) {
	console.log(e.value);
	console.log(id);
};

const deleteNote = function (element, id) {
	const doDelete = confirm(
		'Are you sure you wish to delete this sticky note?'
	);
	const filterNote = getNotes().filter((item) => {
		return item.id != id;
	});

	console.log(filterNote);
	if (doDelete) {
	}
};

getNotes().forEach((note) => {
	const element = createNoteElement(note.content, note.id);
	noteContainer.insertAdjacentHTML('beforeend', element);
});

addBtn.addEventListener('click', () => {
	const element = createNoteElement('hello');
	noteContainer.insertAdjacentHTML('beforeend', element);
});

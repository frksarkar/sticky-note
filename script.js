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
    placeholder="Write something new...">${content || ''}</textarea>`;
	return element;
};

const addNote = function () {
	const notes = getNotes();
	const noteObject = {
		id: new Date().getTime(),
		content: '',
	};
	// Add the newly created object into our array of objects and then push it back onto localStorage
	notes.push(noteObject);
	saveNote(notes); // Save all changes made
	const element = createNoteElement();
	noteContainer.insertAdjacentHTML('beforeend', element);
};

const updateNote = function (element, id) {
	const newNotes = getNotes();
	const targetNote = newNotes.filter((note) => note.id == id)[0] || {};
	targetNote.id || (targetNote.id = new Date().getTime());
	targetNote.content = element.value;
	saveNote(newNotes);
};

const deleteNote = function (element, id) {
	const doDelete = confirm(
		'Are you sure you wish to delete this sticky note?'
	);
	const filterNote = getNotes().filter((item) => {
		return item.id != id;
	});

	console.log();
	if (doDelete) {
		saveNote(filterNote);
		element.remove();
	}
};

// add all store notes

getNotes().forEach((note) => {
	const element = createNoteElement(note.content, note.id);
	noteContainer.insertAdjacentHTML('beforeend', element);
});

addBtn.addEventListener('click', addNote);

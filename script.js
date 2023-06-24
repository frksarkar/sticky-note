const noteContainer = document.querySelector('#app');
const addBtn = document.querySelector('.add-note-btn');

const getNotes = function () {
	return JSON.parse(localStorage.getItem('stickyNote-notes') || '[]');
};

const saveNote = function (note) {
	localStorage.setItem('stickyNote-notes', JSON.stringify(note));
};

const createNoteElement = function (id, content) {
	const element = `<textarea
    onchange="addNote(this, ${id})"
    class="note"
    placeholder="Write something new..."
    >${content}</textarea>`;
	noteContainer.insertAdjacentHTML('beforeend', element);
	return element;
};

const addNote = function (e, id) {
	console.log(e.value);
	console.log(id);
};

const updateNote = function (id, element) {};

const deleteNote = function (id, element) {};

addBtn.addEventListener('click', () => {
	createNoteElement(56, 'hello');
});

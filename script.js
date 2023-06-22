const body = document.querySelector('#app');
const addBtn = document.querySelector('.add-note');

addBtn.addEventListener('click', () => {
	const element = `<textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        class="note"
                        placeholder="Write something new..."
                    ></textarea>`;

	body.insertAdjacentHTML('beforeend', element);
});

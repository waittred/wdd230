const input = document.getElementById('favchap');
const button = document.getElementById('addButton');
const list = document.getElementById('list');

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value.trim();
        deleteButton.textContent = '❌';

        deleteButton.classList.add('remove-button');
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(deleteButton);
        list.appendChild(li);
        input.value = '';
        input.focus();
    } 
});
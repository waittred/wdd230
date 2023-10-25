//To enhance a Book of Mormon (BOM) chapters application using the localStorage API in JavaScript. Received help from chat.openai.com//

//Steps 2-3: Initialize Variable and DOM References//
const input = document.querySelector('#favchap');
const button = document.querySelector('addButton');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

//Step 4: Populate the displayed list of chapters//
chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

//Step 5: Button Click Event Listener//
button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
      displayList(input.value);
      chaptersArray.push(input.value);
      setChapterList();
      input.value = '';
      input.focus();
    }
  });

  //Steps 6-7: Define the 'displayList' function//
  function displayList(item) {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteChapter(item);
      listItem.remove();
    });
  
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
  }

  //Step 8: Define the 'setChapterList' function//
  function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
  }

//Step 9: Define the 'getChapterList' function//
function getChapterList() {
    const chapters = localStorage.getItem('chapters');
    return chapters ? JSON.parse(chapters) : null;
  }

//Step 10: Define the 'deleteChapter' function//
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
  }
  

  
  
function addChapter() {
    var chapterInput = document.getElementById("chapter-input");
    var chapterName = chapterInput.value.trim();

    if (chapterName !== "") {
        var chaptersList = document.getElementById("chapters-list");
        var listItem = document.createElement("li");
        listItem.textContent = chapterName;
        chaptersList.appendChild(listItem);
        chapterInput.value = "";
    }
    var removeButton = document.createElement("button");
                removeButton.textContent = "Remove";
                removeButton.className = "remove-button"; 
                removeButton.onclick = function () {
                    listItem.remove();
                };

                listItem.appendChild(removeButton);
                chaptersList.appendChild(listItem);
                chapterInput.value = "";

    
}
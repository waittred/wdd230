//To get the last updated info//

document.getElementById("year").innerHTML = new Date().getFullYear();

let text = "Last Updated: " + document.lastModified;
    document.getElementById("date").innerHTML = text;
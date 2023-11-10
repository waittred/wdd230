const linksURL = 'https://waittred.github.io/wdd230/data/links.json';
const list = document.querySelector('#list');

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayLinks(data.lessons);
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

function displayLinks(lessons) {
    lessons.forEach((lesson) => {
        let lessonHeading = document.createElement('h4');
        lessonHeading.textContent = `Lesson ${lesson.lesson}`;
        list.appendChild(lessonHeading);

        lesson.links.forEach((link) => {
            let paragraph = document.createElement('p');
            let anchor = document.createElement('a');
            anchor.setAttribute('href', link.url);
            anchor.textContent = link.title;
            paragraph.appendChild(anchor);
            list.appendChild(paragraph);
        });
    });
}

getLinks();

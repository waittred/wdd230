const linksURL = 'https://waittred.github.io/wdd230/data/links.json';
const cards = document.querySelector('#list');

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

const displayLinks = (lessons) => {
    const list = document.querySelector('#list');

    lessons.forEach((lesson) => {
        let card = document.createElement('li');
        card.textContent = `Lesson ${lesson.lesson}: `;

        lesson.links.forEach((link) => {
            let linkElement = document.createElement('a');
            linkElement.setAttribute('href', link.url);
            linkElement.textContent = ` ${link.title} |`;

            card.appendChild(linkElement);
        });

        list.appendChild(card);
    });
};

getLinks();

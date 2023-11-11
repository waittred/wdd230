const membersUrl = 'https://waittred.github.io/wdd230/chamber/data/members.json';
const membersContainer = document.getElementById("members-container");

async function getMembersData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (!Array.isArray(data)) {
            console.error('Data is not an array:', data);
            return;
        }
        displayMembers(data);
    } catch (error) {
        console.error('Error fetching or processing data:', error);
    }
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let memberElement = document.createElement('div');
        memberElement.classList.add('member-card');

        let companyName = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let image = document.createElement('img');
        let membershipLevel = document.createElement('p');
        let additionalInfo = document.createElement('p');

        companyName.textContent = member.name;
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;
        website.textContent = `Website: ${member.website}`;
        website.setAttribute('href', member.website);
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `Logo of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '200');
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
        additionalInfo.textContent = member.additionalInfo;

        memberElement.appendChild(companyName);
        memberElement.appendChild(address);
        memberElement.appendChild(phone);
        memberElement.appendChild(website);
        memberElement.appendChild(image);
        memberElement.appendChild(membershipLevel);
        memberElement.appendChild(additionalInfo);

        membersContainer.appendChild(memberElement);
    });
}

getMembersData(membersUrl);

document.addEventListener('DOMContentLoaded', function () { // Hämta dokument och data från JSON filerna
    fetch('CV_Data.json')
        .then(response => response.json())
        .then(data => {
            const { education, work_experience, courses } = data; 

            const educationSection = document.getElementById('education'); // Rendera utbildningssektionen
            education.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.institution}: ${item.qualification}`;
                educationSection.appendChild(listItem);
            });

            const workExperienceSection = document.getElementById('work_experience'); // Rendera arbetslivserfarenhetssektionen
            work_experience.forEach(item => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <strong>${item.employer} (${item.duration}):</strong> ${item.position}<br>
                    ${item.responsibilities.map(responsibility => `<p>${responsibility}</p>`).join('')}
                `;
                workExperienceSection.appendChild(listItem);
            });

            const coursesSection = document.getElementById('courses'); // Rendera kurssektionen
            courses.forEach(course => {
                const listItem = document.createElement('li');
                listItem.textContent = course;
                coursesSection.appendChild(listItem);
            });

            const sections = document.querySelectorAll('section'); // Justera stilmall för att ta bort marginaler från listelement
            sections.forEach(section => {
                const ul = section.querySelector('ul');
                if (ul) {
                    ul.style.margin = '0';
                }
            });
        })
        .catch(error => console.error('Error fetching CV data:', error));
});

// Easter Egg Nr1
// Lyssna på klicket och aktivera nya bakgrunden
document.addEventListener('DOMContentLoaded', function () {
    const portraitImage = document.getElementById('self-portrait');
    portraitImage.addEventListener('click', changeBackgroundColor);
});

// Funktion för att byta bakgrundsfärg när "selfportrait" klickas på
function changeBackgroundColor() {
    document.body.style.backgroundColor = 'grey'; 
    document.getElementById('message').style.display = 'block'; // Visar meddelandet

    // Fixa en "close button"
    const closeButton = document.querySelector('#message .close-message');

    // Lyssna på close button och göm meddelandet
    closeButton.addEventListener('click', function() {
        document.getElementById('message').style.display = 'none';
    });
}



// Easter Egg Nr2
// Variabel för att hålla koll på användarens inmatning
let userInput = '';

// Lyssna på tangentbordsinmatning
document.addEventListener('keydown', function(event) {
    const code = '1337'; // Koden för det andra påskägget

    const key = event.key;

    userInput += key;

    // Kontrollera om användaren har skrivit in hela kombinationen
    if (userInput === code) {
        // Visa modal-popupen
        const modal = document.getElementById('myModal');
        modal.style.display = 'block';

        // Återställ den inskrivna sekvensen
        userInput = '';
    } else if (!code.startsWith(userInput)) {
        // Återställ den inskrivna sekvensen om användaren skriver in en felaktig sekvens
        userInput = '';
    }
});

// Hämta knappen för att stänga modalen
const closeButton = document.getElementsByClassName('close')[0];

// Lägg till händelsehanterare för att stänga modalen när användaren klickar på stängningsknappen
closeButton.addEventListener('click', function() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
});

// Lägg till händelsehanterare för att stänga modalen när användaren klickar utanför modalen
window.addEventListener('click', function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});





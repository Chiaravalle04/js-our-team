// array
const members = [

    // membro 1 - indice 0 
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },

    // membro 2 - indice 1
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },

    // membro 3 - indice 2
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },

    // membro 4 - indice 3
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },

    // membro 5 - indice 4
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },

    // membro 6 - indice 5
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    }

];

const myContainer = document.getElementById('container');

for (let i = 0; i < members.length; i++) {

    let myCards = document.createElement('div');

    myContainer.append(myCards);

    myCards.classList.add('card');

    let myImg = document.createElement('img');
    
    myCards.append(myImg);

    myImg.src = 'img/' + members[i].img;

    let myPName = document.createElement('p');

    myCards.append(myPName);

    myPName.innerHTML = members[i].name;

    let myPRole = document.createElement('p');

    myCards.append(myPRole);

    myPRole.innerHTML = members[i].role;

};
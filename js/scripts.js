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

let myUl = document.createElement('ul');

myContainer.append(myUl);

for (let i = 0; i < members.length; i++) {

    // stampa in console
    console.log('Nome:' + " " + members[i].name);
    console.log('Ruolo:' + " " + members[i].role);
    console.log('Immagine:' + " " + members[i].img);

    console.log('-------------');

    // stampa nel DOM
    let myLi = document.createElement('li');

    myUl.append(myLi);

    let myPName = document.createElement('p');

    myLi.append(myPName);

    myPName.innerHTML = 'Nome:' + " " + '[ ' + members[i].name + ' ]'; // stampa nel DOM il nome

    let myPRole = document.createElement('p');

    myLi.append(myPRole);

    myPRole.innerHTML = 'Ruolo:' + " " + '[ ' + members[i].role + ' ]'; // stampa nel DOM il ruolo

    let myPImg = document.createElement('p');

    myLi.append(myPImg);

    myPImg.innerHTML = 'Img:' + " " + '[ ' + members[i].img + ' ]'; // stampa nel DOM l'immagine

    let myHr = document.createElement('hr');

    myLi.append(myHr);

};
// array
const members = [

    // memebro 1 - indice 0 
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },

    // memebro 2 - indice 1
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },

    // memebro 3 - indice 2
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },

    // memebro 4 - indice 3
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },

    // memebro 5 - indice 4
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },

    // memebro 6 - indice 5
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    }

];

for (let i = 0; i < members.length; i++) {

    console.log('Nome:' + " " + members[i].name);
    console.log('Ruolo:' + " " + members[i].role);
    console.log('Immagine:' + " " + members[i].img);

    console.log('-------------')

}

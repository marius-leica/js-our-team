/*
Per la pagina ‘Chi siamo’ del nostro sito aziendale, dobbiamo sviluppare la sezione “Il nostro team”.
Definiamo un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Milestone 1:
stampare in console l’elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.
Milestone 2:
stampare i dati all’interno di un contenitore nella pagina html in modo dinamico, creando per ciascun membro del team un elemento html che conterrà i suoi dati.
BONUS:
stilizziamo la sezione realizzando le card di ciascun membro del team, come nel mockup allegato.
*/

//Definiamo un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

const team = [
  {
    name: "Angela Carol",
    role: "Chief Editor",
    photo: "img/angela-caroll-chief-editor.jpg",
  },
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    photo: "img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Barbara Ramoz",
    role: "Graphic Designer",
    photo: "img/barbara-ramos-graphic-designer.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    photo: "img/scott-estrada-developer.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    photo: "img/new-team-member-01.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    photo: "img/walter-gordon-office-manager.jpg",
  },
];
console.table(team);

/*
Milestone 1:
stampare in console l’elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.
*/
console.log("-------------------Milestone 1-------------------");
for (let i = 0; i < team.length; i++) {
  const teamMember = team[i];
  console.log(teamMember.name + " - " + teamMember.role);
}

/*
Milestone 2:
stampare i dati all’interno di un contenitore nella pagina html in modo dinamico, creando per ciascun membro del team un elemento html che conterrà i suoi dati.
*/
console.log("-------------------Milestone 2-------------------");

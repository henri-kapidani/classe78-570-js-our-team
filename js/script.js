/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede

Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!

Questi sono i dati delle persone:
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/

const dataPeople = [
	{
		name: 'Wayne Barnett',
		role: 'Founder & CEO',
		img: 'wayne-barnett-founder-ceo.jpg',
	},
	{
		name: 'Angela Caroll',
		role: 'Chief Editor',
		img: 'angela-caroll-chief-editor.jpg',
	},
	{
		name: 'Walter Gordon',
		role: 'Office Manager',
		img: 'walter-gordon-office-manager.jpg',
	},
	{
		name: 'Angela Lopez',
		role: 'Social Media Manager',
		img: 'angela-lopez-social-media-manager.jpg',
	},
	{
		name: 'Scott Estrada',
		role: 'Developer',
		img: 'scott-estrada-developer.jpg',
	},
	{
		name: 'Barbara Ramos',
		role: 'Graphic Designer',
		img: 'barbara-ramos-graphic-designer.jpg',
	},
]

const eleCards = document.querySelector('.cards');
renderInterface(eleCards);


// FUNCTIONS

function renderInterface(eleCards) {
	// for (let i = 0; i < dataPeople.length; i++) {
	// 	const objPerson = dataPeople[i];
	// 	// console.log(objPerson)
	// 	// console.log(`La persona si chiama ${objPerson.name}, il suo ruolo e\' ${objPerson.role}. Nome immagine: ${objPerson.img}`);
	// 	eleCards.innerHTML += geneateCard(objPerson);
	// }

	// dataPeople.forEach(function (objPerson) { eleCards.innerHTML += geneateCard(objPerson) });

	dataPeople.forEach(objPerson => eleCards.innerHTML += geneateCard(objPerson));
}

function geneateCard(obj) {
	return `
		<div class="card">
			<div class="content">
				<img src="img/${obj.img}" alt="${obj.name}">
				<h2>${obj.name}</h2>
				<h3>${obj.role}</h3>
			</div>
		</div>
		`;
}

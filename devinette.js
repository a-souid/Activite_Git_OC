/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

let count =0;
		
	function find(){

		let nbreSaisi = document.getElementById("nbre").value;
		document.getElementById("nbre").value ="";
		//console.log(nbreSaisi);
		
				
					if (nbreSaisi > solution) {
						document.getElementById("demo").innerHTML = `Le nombre saisi : ${nbreSaisi} est plus grand vasy essaye encore ! `;
						console.log(`Le nombre saisi : ${nbreSaisi} est plus grand vasy essaye encore ! `);
						
					} else if (nbreSaisi < solution) {
						document.getElementById("demo").innerHTML = `Le nombre saisi : ${nbreSaisi} est  plus petit vasy essaye encore ! `;
						console.log(`Le nombre saisi : ${nbreSaisi} est  plus petit vasy essaye encore ! `);
						
							} else {
								document.getElementById("demo").innerHTML = `C'est le jackpot !! Vous avez trouvez la solution `;
								console.log("Bravo ! La solution était : "+solution);
								}
					count++;
					//console.log("le count est : "+count);
					if (count ===6){
						document.getElementById("btn").style.display='none';
						document.getElementById("demo").innerHTML = `Game Over !!! `;
						console.log("Perdu... La solution était : "+solution);
					}
				
	}

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
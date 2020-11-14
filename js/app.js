// DECLARATION :
const calcul = new Promise((resolve, reject) => {
    // ...
    const result = 200 * 120;

    if(result) {
        resolve(result);
    } else {
        reject();
    }
})



// UTILISATION :
calcul.then((result) => {
    console.log('Resultat: ' + result);
}).catch(() => {
    console.log('Oups, une erreur !')
})
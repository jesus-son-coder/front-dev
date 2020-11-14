// DECLARATION :
const calcul = (num1, num2) => {
    return new Promise((resolve, reject) => {
        // ...
        const result = num1 * num2;

        if(result > 100000) {
            resolve(result);
        } else {
            reject("Résultat trop petit");
        }
    })
}


// UTILISATION :
calcul(300, 1000).then((result) => {
    console.log('Resultat: ' + result);
}).catch((err) => {
    console.log('Error : ' + err);
})
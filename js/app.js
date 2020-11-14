// DECLARATION :
const demarre = new Promise((resolve, reject) => {
    // ...
    const isRunning = true;
    // const isRunning = false;

    if(isRunning === true) {
        resolve();
    } else {
        reject();
    }
})



// UTILISATION :
demarre.then(() => {
    console.log('good !');
}).catch(() => {
    console.log('Oups, une erreur !')
})
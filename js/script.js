//esercizio 1: Email

const email = [   
'Giovanni74@mail.com',
'Silvia98@mail.com',
'Fabio89@mail.com',
'Carlo96@mail.com',
'Luca90@mail.com'
]

let verifyEmail = `Email non trovata`

let userEmail = prompt(`Inserisci l'email di verifica`)

for(let i=0; i<email.length; i++){
    
    if(email[i] === userEmail){

       verifyEmail = `Email trovata`
    }

}

console.log(verifyEmail)



//esercizio 2: Dadi

let numeroUtente = Math.floor(Math.random() * 6) + 1;
let numeroPc = Math.floor(Math.random() * 6) + 1;

console.log(numeroUtente)
console.log(numeroPc)
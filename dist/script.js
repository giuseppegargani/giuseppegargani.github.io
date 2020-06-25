//SI DEVONO MIGLIORARE LE PROMISES E FARE FUNZIONI PURE
//SI CREA OGGETTO O ARRAY E SI FA' PROGRAMMAZIONE FUNZIONALE
//ONCE per avere una immagine statica
//VEDIAMO ANCHE COME METTERE UN EVENTO CHE CAMBIA ARRAY
//si può mettere con un array oppure come evento
//ONCE è quindi una promise
//  firebase.database().ref("/giocatori/").once('value').then(function(snapshot) {
//LAVORARE CON OGGETTI: https://www.telerik.com/blogs/functional-programming-with-javascript-object-arrays
//let drinkMenu = jsonData.map(x => ({name: x.name, price: x.price}));
//let chiavi = Object.keys(oggett[0]);    CREA UN ARRAY CON LE CHIAVI DA UN UN QUALSIASI FIGLIO DI UN OGGETTO!!!!
//let valori = chiavi.map(el=>({Uid:el, Forza:oggett[0][el]["Statistiche"]["Forza"] }))
//SI VA A CREARE UN ARRAY ITERABILE CON I VALORI CHE SI VOGLIONO
//LE CHIAVI FANNO COMODO PER LANCIARE UNA MAPPA IN PROGRAMMAZIONE FUNZIONALE!!!!
//https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//E SI PUO' ORDINARE UN ARRAY SULLA BASE DI UN VALORE
//valori.sort(function (a, b) {return b["Like"] - a["Like"];});
//E SI POSSONO FILTRARE PER FLAG O NUMERO O NOME ETC..
//let filtrati = valori.filter((el)=>  el["Share"]=="No")[0]; e stampa solamente il primo
//OPPURE SI USA SLICE!!!!!   array.slice(0, n);
//POI SI VA A COMPIERE OPERAZIONI SUI SINGOLI ELEMENTI DI UN ARRAY con FOREACH normale
//filtrati.forEach(function(el) {
//oppure in funzione Arrow  arr.forEach(element => { console.log(element)}
//ASYNC E AWAIT SONO MOLTO IMPORTANTI!!!!! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
//E CON FOREACH!!!!!!!! https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404
//si può decidere di usare PROMISE.ALL E MAP (molto buono)    un primo modo
//ma in certi casi è meglio usare async e await!!!!!!    un secondo modo
//BISOGNA ANDARE A RAGIONARE COSA è MEGLIO FARE: prima carica gli elementi con foto placeholder e poi carica le foto!!!!!
//in questo caso è meglio
//oppure un secondo metodo è quello di caricare un elemento quando è pronta la foto
//questo elemento è molto interessante perchè permette di vedere come funziona asincrono!!!!!!! await e async
//oppure si può aspettare di caricare tutte le foto e poi pubblicare ma chiaramente questo non è un approccio viabile con tante foto
//aspettare che tutte le promise siano relizzate è un approccio talvolta lungo e talvole non effettuabile
//PROMISE.ALL: https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-43.php
//
//SI USA UN CICLO "for el in elementi" con "async" sul genitore e "await" sul figlio!!!!!
//https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
//Lettura in serie e lettura in parallelo!!!!!!!!!!!!!
//la funzione async può essere la stessa funzione dentro la then di promise   .then(async function() {} e await nel figlio!!!
//await Promise.all(files.map(async (file) => {}    per fare le promises in parallelo!!!!
//
//e in JQuery si può creare una schedina nel DOM che fà con una bella grafica in Bootstrap e Material Design!!!! e animazioni!!!!
//oppure si può mettere un evento con un timeout ogni minuto fino a seconda pressione che elemina l'evento!!!!!
//
//SI PUO' LANCIARE UNA FUNZIONE (EVENT DRIVEN) OGNI VOLTA CHE IL VALORE DI UN FIGLIO CAMBIA?
//
//E COME EVITARE CHE VENGA LANCIATA DUE VOLTE LA FUNZIONE CLASSIFICA? (promises)
//
//E LA FOTO NON DOVREBBE ESSERE CARICATA PIU' DI UNA VOLTA A TESTA E MAGARI ALL'INIZIO QUANDO CARICA IL DOCUMENTO
//così da essere già pronta e mettere solamente!!!
//
//
//BOOTSTRAP: GRID!!! container e colonne e righe
//https://www.w3schools.com/bootstrap/bootstrap_grid_system.asp
//GRADIENTI INTERESSANTI: https://webgradients.com/
//
//1 - classifica statica (creare oggetto, lavorare con oggetto, ordinare lista)
//(per esempio array degli ultimi tre e si inverte e vengono restituiti)
//console.log(oggett[0]["ReKZQzI9G5QeITXPMALCr65DpCz1"]["Statistiche"]["Costituzione"]);
//Questo per fare delle schede con un riepilogo della classifica dei like di chi vuole essere condiviso come ruolo con il meme corrispondente e praticamente una specie di classifica dei like dei meme e si può procedere creando un array (meglio) o un oggetto e poi fare programmazione funzionale E SI APPENDE I DUE DATI DINAMICAMENTE e QUANDO I DATI SONO TANTI GENERALMENTE MEGLIO UNA CLASSIFICA STATICA (altrimenti forse è meglio lavorare con un database relazione magari su front-end) CLASSIFICA CHE SI AGGIORNA CON LA PRESSIONE DI UN TASTO
//2 - classifica dinamica
//3 - con Bootstrap e animazioni
//Container: le sigle di container che si riferiscono comunque generalmente alle webapp hanno delle dimensioni MINIME
//4 - React Native
//5 - con storia
//6 - con SVG

//1 - è una classifica come le altre con uno snapshot in promise statico e i vari dati
//che potrebbero caricare con barra ma comunque nonè event driven!!!
//3 - BOOTSTRAP CON ANIMAZIONI (MATERIAL DESIGN)
//https://codepen.io/mdbootstrap/pen/LRNZBz
//z-depth è per creare elementi con ombra
//BOTTONI CON GRADIENTI (A COMUNICARE FACILMENTE CONCETTI IN LAYOUT VELOCE)
//https://mdbootstrap.com/docs/jquery/css/gradients/
//BOTTONI CON GRADIENTI https://codepen.io/cwestify/pen/dJObPq
//bottoni su gradienti: https://freefrontend.com/css-gradient-buttons/
//
//SI PUò METTERE UN ELEMENTO (COME UN TEMPLATE E POI CAMBIARE ATTRIBUTO HIDDEN E CLASSE ANIMAZIONE)
//SI PUO' RIPETERE UN ELEMENTO CON ATTRIBUTO HIDDEN?
//si può mettere clone e si cambia l'attributo hidden!!!!!!
//https://api.jquery.com/clone/
//JQUERY DISCENDENTI (NON FIGLI) CON SPAZIO:    $('#schedina'+conto+' #nomeSchedina').text("ecco"+conto);
//
//QUANDO SI CARICA IL PROFILO BASTA METTERE ONCE (E SNAPSHOT ONE TIME)
//quando invece si vuole che aggiorni continuamente certi valori si mette un evento che si può togliere!!!
//altri gradienti applicati a bootstrap: https://higuma.github.io/bootstrap-4-css-customization/en/gradient+shadow.html
//
//ogni volta che cambia IL SOLITO VALORE (likes) ad OGNUNO DEGLI UTENTI
//lancia la funzione classifica :-)
//
//ALTRI GRADIENTI BOTTONI: https://freefrontend.com/css-gradient-buttons/
//SI METTE UN EVENTO SUL VALORE DI OGNI UTENTE DENTRO CLASSIFICA MAGARI
//e premendo due volte si elimina
//
//LA CLASSIFICA ATTUALE SI MODIFICA OGNI VOLTA CHE CAMBIA UN VALORE DI UNA QUALSIASI STATISTICA DI UN QUALSIASI GIOCATORE!!!!!

//il problema è quello di non attivare diverse volte un evento oppure di toglierlo su un elemento
//meglio è quello di mettere un time out che prende i valori ad intervalli di tempo regolare
//specialmente se ci sono tanti cambiamenti allo stesso tempo è meglio
//se c'è un cambiamento 

//MOLTO INTERESSANTE: https://stackoverflow.com/questions/40328932/javascript-es6-promise-for-loop/40329190

var firebaseConfig = { 
    apiKey: "AIzaSyAjto1JQVEhTqWpfKPlXwQ_CrWasu5s2wE",
    authDomain: "prova-2d899.firebaseapp.com",
    databaseURL: "https://prova-2d899.firebaseio.com",
    projectId: "prova-2d899",
    storageBucket: "prova-2d899.appspot.com",
    messagingSenderId: "661316414075",
    appId: "1:661316414075:web:2773a59005552541dc90de",
    measurementId: "G-KRMXR5KC4M"
  };
firebase.initializeApp(firebaseConfig); //qui inizializza il DB
var utenteID; //variabile globale

firebase.auth().onAuthStateChanged(function(user) {
    if (user) { let utente = user.uid;
               utenteID=utente;
               document.getElementById("dati").innerHTML = utente; //stampa il nome utente
               let indirizzo = "immagineSchedina";
               fotoSchedina(utente, indirizzo); //carica la foto
               aggiorna(); //avvia ALL'INIZIO UN EVENTO DI MODIFICA LIKES
              } 
    else { console.log("verificato che non sei dentro");
         document.getElementById("immagineSchedina").src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Placeholder_couple_superhero.png";
         }
  }) //funzione pura che si attiva a eventi authentication
 
function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {console.log(error.message)
});}

function logout(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase.auth().signOut().then(function() {document.getElementById("dati").innerHTML = "Sei appena uscito";}, function(error) {
    console.log("c'è stato un errore con la richiesta di logout");
});
};

function fotoSchedina(utente, indirizzo){
  let storage = firebase.storage();
  let storageRef = storage.ref();
storageRef.child(utente+'/immagini/'+'profilo.jpg').getDownloadURL().then(function(url) {
  let img = document.getElementById(indirizzo);
  img.src = url;
}).catch(function(error) {
  console.log("hai avuto problemi con la richiesta della foto")
});
} //funzione pura di caricamento foto da ID utente

function creaClassifica(){
  let oggett=[];
  let forze=[];
  let filtrati, urlFoto, valori;
  let storage = firebase.storage();
  let storageRef = storage.ref();
  let conto=1;
  let aggiornaClass;
  
  firebase.database().ref("/giocatori/")
    .once('value')
    .then(function(snapshot) {
    oggett.push(snapshot.val());   //qui carica l'oggetto in un array
    let chiavi = Object.keys(oggett[0]);
    
    //inizializza un array valori
    valori = chiavi.map(el=>({Uid:el, Nome:oggett[0][el]["Statistiche"]["Nome"], Meme:oggett[0][el]["Statistiche"]["Meme"], Like:oggett[0][el]["Statistiche"]["Like"], Share:oggett[0][el]["Statistiche"]["Share"] }));
    
    //RIORDINA E FILTRA I VALORI
    valori.sort(function (a, b) {return b["Like"] - a["Like"];}); //ordina sulla base di un valore
    filtrati = valori.filter((el)=>  el["Share"]=="Sì").slice(0,3);  //SLICE SE SI VUOLE FARE  UNA CLASSIFICA LIMITATA AI PRIMI N ELEMENTI CHE ABBIANO ACCETTATO LA CONDIVISIONE
   })
    .then(async function() {
    console.log(valori);
    for (const el of filtrati) {
      await storageRef.child(el["Uid"]+'/immagini/'+'profilo.jpg').getDownloadURL().then( function(url) {
        graficaSchedine(url,el, conto)
        conto++;
      }).catch(function(error) {
      console.log("hai avuto problemi con la richiesta della foto")
      });
    }
  })
}

function classifica(){
  let prima;
  creaClassifica(); //STATICA
  
  //ogni volta che succede una cosa elimina tutto e rifai una immagine statica
  //NOTA BENE: IN CASO DI TANTISSIMI CAMBIAMENTI LANCIA COMUNQUE LA CLASSIFICA STATICA E SOSPENDE QUELLA DINAMICA ALLA FINE
  //SE SI CARICA COMPARE COMUNQUE ALL'AVVIO!!!
  let aggRef = firebase.database().ref();
  aggRef.on("child_changed", function(snaphot){  //DINAMICA    quando attiva disattiva ed aspetta 
    //funzione che si autoinvoca SELFINVOKING FUNCTION
    clearTimeout(prima); //ANNULLA EVENTUALI ALTRE RICHIESTE!!!
    (async function aggiornamento() {
        await new Promise(resolve => prima=setTimeout(resolve, /*Math.random() * */1500)); //interessante anche con il random casuale!!!!!
  {console.log("cambiato"); $( ".aggiorn" ).remove(); creaClassifica();}
})();
  })
}; //fà una classifica filtrata a quelli che condividono e sulla base dei likes

function graficaSchedine(url, el, conto){
  $("#schedina").clone().appendTo("#giocatori").attr("id",'schedina'+conto);
  $('#schedina'+conto).attr("hidden",false);
  $( '#schedina'+conto ).addClass( "aggiorn" );
  $('#schedina'+conto+' #nomeSchedina').text(el["Nome"]);  //discendenti con un certo ID!!!!!!
  $('#schedina'+conto+' #testoQuote').text(el["Meme"]);
  $('#schedina'+conto+' #numLikes').text(el["Like"]);
  $('#schedina'+conto+' img').attr('src',url);
} //in bootstrap e Jquery fà delle belle schedine

function aggiorna(){
  let statistiche = firebase.database().ref("giocatori/"+utenteID+"/Statistiche/");
statistiche.on("value", function(data) {
  let stats = data.val();
  console.log(stats);
  document.getElementById("likes").innerHTML = " "+stats.Like;
});
}

function AumentaLikes(){
  let statistiche = firebase.database().ref("giocatori/"+utenteID+"/Statistiche/");
  var cost = statistiche.child("Like");
  cost.transaction(function(like) {
   return like + 1;
});
}
function DiminuisciLikes(){
  let statistiche = firebase.database().ref("giocatori/"+utenteID+"/Statistiche/");
  let cost = statistiche.child("Like");
  cost.transaction(function(like) {
   return like - 1;
});
}
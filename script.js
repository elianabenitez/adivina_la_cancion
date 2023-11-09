//Arreglo que contiene las palabras para jugar
let arrayPalabras = ["CRUEL SUMMER", "THE MAN", "LOVE STORY", "CHAMPAGNE PROBLEMS", "ENCHANTED", "TWENTY TWO",
    "WE ARE NEVER EVER GETTING BACK TOGETHER", "CARDIGAN", "DAYLIGHT", "LOOK WHAT YOU MADE ME DO", "YOU BELONG WITH ME",
    "MR. PERFECTLY FINE", "I KNEW YOU WERE TROUBLE", "ALL TOO WELL", "THE ONE", "GETAWAY", "AUGUST", "THE GREAT WAR",
    "ILLICIT AFFAIRS", "WILDEST DREAMS", "MIDNIGHT RAIN", "NOW THAT WE DO NOT TALK", "PAPER RINGS", "NEW ROMANTICS",
    "ANTI HERO", "ALL OF THE GIRLS YOU LOVED BEFORE"];
//Arreglo que contiene las ayudas de cada palabra
let ayudas = [
    "Estoy ebria en la parte trasera del auto y lloré como un bebé volviendo a casa desde el bar",
    "Porque si yo fuera un hombre... entonces yo sería EL HOMBRE",
    "Romeo, sálvame, me he sentido tan sola... Sigo esperando por ti, pero nunca llegas",
    "Uno por la money, dos por el show",
    "Por favor, no te enamores de otra persona",
    "Todo estará bien si seguimos bailando como si tuviéramos ventidos",
    "Recuerdo cuando rompimos la primera vez... Diciendo: Esto es todo, ya tuve suficiente",
    "Cancelé planes en caso de que llamaras",
    "Pensaba que el amor era blanco y negro pero era DORADO",
    "Tengo una lista de nombres, y el tuyo está subrayado en rojo",
    "Ella es capitana de porristas, yo estoy en la orquesta",
    "Cómo está tu corazón después de romper el mío... escuché que estás con una chica nueva",
    "Sabía que serías un problema",
    "Me hablaste de tu futuro pensando que yo era tu futuro",
    "Pero hubiera sido divertido si hubieras sido el indicado",
    "Porque los traidores nunca ganan",
    ".... se convirtió en un momento en el tiempo porque nunca fue mío",
    "En algún lugar de la niebla, tuve la sensación de que fui traicionada",
    "No me digas niña, no me digas bebé",
    "Di que me recordarás de pie con un bonito vestido",
    "Rompí su corazón porque él era agradable... porque él era un rayo de sol...",
    "No puedo ser tu amiga, así que pago el precio de lo que perdí",
    "Me encantan las cosas brillantes pero contigo me casaría con ....",
    "Porque bebé, podría construir un castillo con todos los ladrillos que ellos me arrojaron",
    "El problema soy yo",
    "Ellas te convirtieron en la persona de la que me he enamorado"
]
//variable que guarda la cantidad de palabras ya jugadas
let cantPalabrasJugadas = 0;

//Variable que guarda la cantidad de intentos restantes
let intentosRestantes = 6;

//variable que guarda el indice de la Palabra actual
let posActual;

//arreglo que contiene la palabra actual con la que estoy judando
let arrayPalabraActual = [];

//Cantidad de de letras acertadas por cada jugada
let cantidadAcertadas = 0;

//Arreglo que guarda cada letra en divs
let divsPalabraActual = [];

//Cantidad de palabras que debe acertar en cada jugada.
let totalQueDebeAcertar;

//Funcion que carga la  palabra nueva para jugar
function cargarNuevaPalabra() {
    //Aumento en uno cantidad de palabras jugadas y controlo si llego a su limite
    cantPalabrasJugadas++;
    if (cantPalabrasJugadas > 26) {
        //volvemos a cargar el arreglo
        arrayPalabras = ["CRUEL SUMMER", "THE MAN", "LOVE STORY", "CHAMPAGNE PROBLEMS", "ENCHANTED", "TWENTY TWO",
            "WE ARE NEVER EVER GETTING BACK TOGETHER", "CARDIGAN", "DAYLIGHT", "LOOK WHAT YOU MADE ME DO", "YOU BELONG WITH ME",
            "MR. PERFECTLY FINE", "I KNEW YOU WERE TROUBLE", "ALL TOO WELL", "THE ONE", "GETAWAY", "AUGUST", "THE GREAT WAR",
            "ILLICIT AFFAIRS", "WILDEST DREAMS", "MIDNIGHT RAIN", "NOW THAT WE DO NOT TALK", "PAPER RING", "NEW ROMANTICS",
            "ANTI HERO", "ALL OF THE GIRLS YOU LOVED BEFORE"];
        ayudas = [
            "Estoy ebria en la parte trasera del auto y lloré como un bebé volviendo a casa desde el bar",
            "Porque si yo fuera un hombre... entonces yo sería EL HOMBRE",
            "Romeo, sálvame, me he sentido tan sola... Sigo esperando por ti, pero nunca llegas",
            "Uno por la money, dos por el show",
            "Por favor, no te enamores de otra persona",
            "Todo estará bien si seguimos bailando como si tuviéramos ventidos",
            "Recuerdo cuando rompimos la primera vez... Diciendo: Esto es todo, ya tuve suficiente",
            "Cancelé planes en caso de que llamaras",
            "Pensaba que el amor era blanco y negro pero era DORADO",
            "Tengo una lista de nombres, y el tuyo está subrayado en rojo",
            "Ella es capitana de porristas, yo estoy en la orquesta",
            "Cómo está tu corazón después de romper el mío... escuché que estás con una chica nueva",
            "Sabía que serías un problema",
            "Me hablaste de tu futuro pensando que yo era tu futuro",
            "Pero hubiera sido divertido si hubieras sido el indicado",
            "Porque los traidores nunca ganan",
            ".... se convirtió en un momento en el tiempo porque nunca fue mío",
            "En algún lugar de la niebla, tuve la sensación de que fui traicionada",
            "No me digas niña, no me digas bebé",
            "Di que me recordarás de pie con un bonito vestido",
            "Rompí su corazón porque él era agradable... porque él era un rayo de sol...",
            "No puedo ser tu amiga, así que pago el precio de lo que perdí",
            "Me encantan las cosas brillantes pero contigo me casaría con ....",
            "Porque bebé, podría construir un castillo con todos los ladrillos que ellos me arrojaron",
            "El problema soy yo",
            "Ellas te convirtieron en la persona de la que me he enamorado"
        ]
    }

    //Selecciono una posicion random
    posActual = Math.floor(Math.random() * arrayPalabras.length);

    //Tomamos la palabra nueva
    let palabra = arrayPalabras[posActual];
    //cantidad de letras que tiene esa palabra
    totalQueDebeAcertar = palabra.length;
    //coloco en 0 la cantidad acertadas hata el momento
    cantidadAcertadas = 0;

    //Guardamos la palabra que esta en formato string en un arreglo
    arrayPalabraActual = palabra.split('');

    //limpiamos los contenedores que quedaron cargadas con la palabra anterior
    document.getElementById("palabra").innerHTML = "";
    document.getElementById("letrasIngresadas").innerHTML = "";

    //Cargamos la cantidad de divs (letras) que tiene la palabra
    for (i = 0; i < palabra.length; i++) {
        var divLetra = document.createElement("div");
        divLetra.className = "letra";
        document.getElementById("palabra").appendChild(divLetra);
    }

    //Selecciono todos los divs de la palabra
    divsPalabraActual = document.getElementsByClassName("letra");

    //setemos los intentos
    intentosRestantes = 5;
    document.getElementById("intentos").innerHTML = intentosRestantes;

    //Cargamos la ayuda de la pregunta
    document.getElementById("ayuda").innerHTML = ayudas[posActual];

    //elimino el elemento ya seleccionado del arreglo.
    //splice(posActual,1): A partir de la posicon posActual elimino 1 elemento
    arrayPalabras.splice(posActual, 1);
    ayudas.splice(posActual, 1);

}

//Llamada para cargar la primera palabra del juego
cargarNuevaPalabra();

//Detecto la tecla que el usuario presion
document.addEventListener("keydown", event => {
    //Controlo si la tecla presionada es una letra
    if (isLetter(event.key)) {
        //Tomo las letras ya ingresadas hasta el momento
        let letrasIngresadas = document.getElementById("letrasIngresadas").innerHTML;
        //arma un a arreglo con las letras ingresadas
        letrasIngresadas = letrasIngresadas.split('');

        //controlo si la letra presionada ya ha sido ingresada
        if (letrasIngresadas.lastIndexOf(event.key.toUpperCase()) === -1) {
            //variable bandera para saber si la letra ingresada esta en la palabra a descrubir
            let acerto = false;

            //Recorro el arreglo que ocntiene la palabra para verificar si la palabra ingresada esta
            for (i = 0; i < arrayPalabraActual.length; i++) {
                if (arrayPalabraActual[i] == event.key.toUpperCase()) {//acertó
                    divsPalabraActual[i].innerHTML = event.key.toUpperCase();
                    acerto = true;
                    //Aumento en uno la cantidad de letras acertadas 
                    cantidadAcertadas = cantidadAcertadas + 1;
                }
            }

            //Controlo si acerto al menos una letra
            if (acerto == true) {
                //controlamos si ya acerto todas
                if (totalQueDebeAcertar == cantidadAcertadas) {
                    //asigno a cada div de la palabra la clase pintar para ponerlo en verde cada div
                    for (i = 0; i < arrayPalabraActual.length; i++) {
                        divsPalabraActual[i].className = "letra pintar";
                    }
                }
            } else {
                //No acerto, decremento los intentos restantes
                intentosRestantes = intentosRestantes - 1;
                document.getElementById("intentos").innerHTML = intentosRestantes;

                //controlamos si ya acabo todas la oportunidades
                if (intentosRestantes <= 0) {
                    for (i = 0; i < arrayPalabraActual.length; i++) {
                        divsPalabraActual[i].className = "letra pintarError";
                    }
                }
            }

            //agrega la letra ingresada a las letras ya ingresadas que se visualizan
            document.getElementById("letrasIngresadas").innerHTML += event.key.toLocaleUpperCase() + " - ";
        }
    }
});

//Funcion que me determina si un caracter es una letra
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}
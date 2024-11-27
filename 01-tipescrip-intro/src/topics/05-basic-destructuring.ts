/* 
Desestruccturacion de opjetos 
Esta caracteristica se puede aplicar e varias aspectos como lo son los opjetos
en las importaciones y exportaciones de los modulos
en los  argumentos de las funciones
arrglos y etc
este consiste consiste en tomar ciertas ps que estan 
 */
interface AudioPlayer{

        audioVolume: number;
        SongDuration: number;
        song: string;
        datails: Details;
    }

    interface Details{
        author:string;
        year: number;
    }

    const audioPlayer: AudioPlayer = {
        audioVolume: 90,
        SongDuration: 36,
        song: "Mess",
        datails: {
            author: "Ed sheeran",
            year: 2015,
        }
    }
   

/* El propocito de la desestructuracion es poder traer 
caracteristicas especificicas de cualquier elmento o funcion y llevarla a donde la necesito o requiero */
//Desestructuracion para traer cualquier de una interfaz
const song= 'new song';
const{
    song:anotherSong,
    SongDuration:Duracion,
    audioVolume:Volumen,datails
   /*  datails:{author:autor}  forma un tato con tendencia a perderce de en el bloque*/
    }=audioPlayer;
    const {author} = datails;
const{} = audioPlayer;
console.log('Song',song);

console.log('Song',anotherSong,'Duracion',Duracion,'audioVolume',Volumen,'autor',author);

//forma convencional para traer las caracteristicas de cada interface 
/* console.log('Song',audioPlayer.song);
console.log('Duration',audioPlayer.SongDuration);
console.log('Author',audioPlayer.datails.author); */


//Desestructuración de Arreglos
//Esto es sin la Desestructuración de arreglos
const dbz0 :string [] = ['Goku','Vegetas','Trunk'];
const trunks0 = dbz0[3]||'No hay perosonaje';
//con la desestructuracion de objetos 
//Forma de imprimer errores directo en la consola
//console.error('Personaje 3:',dbz[3] || 'Personaje no encontrado');
console.error('Personaje 3:',trunks0);

//
//Desestructuración de Arreglos
//Esto es con la Desestructuración de arreglos
//Es importante que aunque no nesecitemos todas las partes de los argumento agamos la reefecia a las pociones con comas
const [, , trunks='Not found'] :string [] = ['Goku','Vegetas','Trunk'];

//con la desestructuracion de objetos 
//Forma de imprimer errores directo en la consola
//console.error('Personaje 3:',dbz[3] || 'Personaje no encontrado');
console.error('Personaje 3:',trunks);

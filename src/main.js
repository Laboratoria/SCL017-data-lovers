import { filterTypePokemon, sortData , calculator , filterIdPokemon} from './data.js';

// import data from './data/lol/lol.js';
import dataPokemon from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

let savelist = dataPokemon.pokemon;

const start =  document.getElementById('start');

const togo = () => {
    document.getElementById('home').className = " hide container " 
    document.getElementById('second-window').className = "second-window "
    document.getElementById('logo').className = "hide"
}

start.addEventListener("click", togo, false);

let pokemonList = document.getElementById('pokemonList');
let thirdWindow = document.getElementById('third-window');
let contentThirdWindow =  document.getElementById('content-third-window');

let buttonReturn = document.getElementById('buttonReturn');

const hideWindow = () =>{
    document.getElementById('third-window').classList.add('hide');
    document.getElementById('second-window').classList.remove('hide');
}
buttonReturn.addEventListener('click', hideWindow, false );



const eventClick = function(event) {
    
    document.getElementById('third-window').classList.remove('hide');
    document.getElementById('second-window').classList.add('hide');
    contentThirdWindow.innerHTML="";

  

 
    console.log(event.srcElement);
    let saveId = event.srcElement.parentNode.firstChild.innerText;
    console.log(saveId)
    let pokemonDetail = filterIdPokemon(saveId);
    console.log(pokemonDetail);

    let  evolution = [];

    if(pokemonDetail[0].evolution["next-evolution"])

    pokemonDetail[0].evolution["next-evolution"].forEach((element) => {
     evolution.push(element.name);
     element["next-evolution"].forEach((subElement) => {
         evolution.push(subElement.name)
     })
    });

    let attackS = [];

    pokemonDetail[0]['special-attack'].forEach((attack) => {
        attackS.push(attack.name);

    });
    console.log(attackS)


    let newDivClick = document.createElement('div');
    let newIdPokemon = document.createElement('section');
    let newImgPokemon = document.createElement('img');
    let newNamePokemon = document.createElement('section');
    let newWeight = document.createElement('p');
    let newHeight = document.createElement('p');
    let nextEvolution = document.createElement('p');
    let resistant = document.createElement('p');
    let weaknesses = document.createElement('p');
    let specialAttack = document.createElement('p');
   
    newDivClick.classList = ('pokemonListClick');
    newIdPokemon.innerText = pokemonDetail[0].num;
    newIdPokemon.classList = ('pokemon-identifier-click');
    newImgPokemon.src = pokemonDetail[0].img;
    newImgPokemon.classList = ('new-img-pokemon');
    newNamePokemon.innerText = pokemonDetail[0].name;
    newNamePokemon.classList = ('new-name-pokemon');
    newWeight.innerText = ("Peso: ") + pokemonDetail[0].size.weight;
    newWeight.classList = ('weight-pokemon');
    newHeight.innerText = ("Altura: ") + pokemonDetail[0].size.height;
    newHeight.classList = ('height-pokemon');
    nextEvolution.innerText = ("Proxima evolucion: ") + evolution.join(" <==> ");
    nextEvolution.classList = ('next-evolution');
    resistant.innerText = ("Fortalezas: ");
    resistant.classList = ('resistant-pokemon');
    weaknesses.innerText =  ("Debilidades: ") +  pokemonDetail[0].weaknesses;
    weaknesses.classList = ('weaknesses-pokemon');
    specialAttack.innerText =  ("Ataques Especiales: ") + pokemonDetail[0]["special-attack"];
    specialAttack.classList = ('special-attack-pokemon');
    
    newDivClick.appendChild(newIdPokemon);
    newDivClick.appendChild(newImgPokemon);
    newDivClick.appendChild(newNamePokemon);
    newDivClick.appendChild(newWeight);
    newDivClick.appendChild(newHeight);
    newDivClick.appendChild(nextEvolution);
    newDivClick.appendChild(resistant);
    newDivClick.appendChild(weaknesses);
    newDivClick.appendChild(specialAttack);
    contentThirdWindow.appendChild(newDivClick);
   
    
 
    
   

}


let createPokemonDiv = function(pokemonDetail){
    let newDiv = document.createElement('div');
    let newBtnId = document.createElement('section');
    let newImg = document.createElement('img');
    let newDivType = document.createElement('div');
    let newBtnType = document.createElement('div');
    let newGeneration = document.createElement('div');
    let newName = document.createElement('button');
    newDiv.classList = ('section-pokemon');
    newName.addEventListener('click',eventClick, false);
    newBtnId.innerText = pokemonDetail.num;
    newBtnId.classList = ('pokemon-identifier');
    newImg.src = pokemonDetail.img;
    newImg.classList = ('img-pokemon');
    newDivType.classList = ('div-type');
    newBtnType.innerText = pokemonDetail.type;
    newBtnType.classList = ('type-pokemon')
    newGeneration.innerText = pokemonDetail.generation.name;
    newGeneration.classList = ('generation')
    newName.innerText = pokemonDetail.name;
    newName.classList = ('namePokemon');
    newDiv.appendChild(newBtnId);
    newDiv.appendChild(newImg);
    newDivType.appendChild(newBtnType);
    newDivType.appendChild(newGeneration);
    newDiv.appendChild(newDivType);
    newDiv.appendChild(newName);
    pokemonList.appendChild(newDiv);
    


}
const clearDiv = () => {
    const selector = document.querySelectorAll('.section-pokemon');
    selector.forEach(element => {
        element.remove()
      });
    
}


const selectElementPlants = document.querySelector('.select-dues');

// se crea esta función para mostrar los pokemos show es "mostrar" , y decimos que :
// showPokemons , recibe un parametro (pokemonsList) que ese parametro se esta mandando a recorrer con el forEach.
const showPokemons = (pokemonList) => { 
    //clearDiv es para limpiar la lista completa de los pokemons , y por eso se le agregar el createPokemonDiv para que los vaya creando uno a uno.
    clearDiv() 
    // a pokemonList, se le hace el recorrido con un forEach donde se crea un nuevo div de cada pokemon.
    pokemonList.forEach(
        (pokemon) => {
             createPokemonDiv(pokemon)
        }
     );
     
}

selectElementPlants.addEventListener('change', (event) => { 
    
const pokemons = filterTypePokemon(event.target.value);

savelist = pokemons
  //returnElements(event.target.value);
  console.log(pokemons);
  
  showPokemons(pokemons) 

  // agrgandoporcentage
 const percentage = calculator(pokemons.length);
 console.log(percentage);

 document.getElementById("percentage").innerHTML = 'Este tipo corresponde a <b>' + percentage + ' % </b>  los Pokemons'
}


);
// aqui llamamos la función y le decimos que nos muestre los pokemon de la dataPokemon.Pokemon 
showPokemons(dataPokemon.pokemon) 
 
//Creamos esta función para ordenar los elementos , que estamos llamando del html de id order
 const orderingElements = document.getElementById('order') 

// permite mostrar los pokemon ordenados en la pantalla, y le pasamos el parametro del event que es el cambio 'change' que el usuario quiere ver.
const showPokemonSorted = (event) => {
const orderPokemons = event.target.value; 
const listPokemonSort = sortData(orderPokemons, savelist)

showPokemons(listPokemonSort) 







// en esta función le decimos a sortData que nos ordene, en este caso el event es cuando cada vez que hago click  me cambie a lo que quiero ordenar
// el target es el objetivo que quiero que me traiga desde el html con su value que es el orden que quiere ver el usuario . ejemplo "ordenarAZ"

}




 
orderingElements.addEventListener('change' , showPokemonSorted , false)

let pokemonListClick = document.getElementsByClassName('section-pokemon');


 
//  pokemonListClick.forEach(element => {
//      element.addEventListener('click', eventClick, false);
//  });




 


// alert(`${document.body.offsetWidth} ${document.body.offsetHeight}`)
import * as components from './components/indexPadre.js';
import { dataExplore} from './dataExplore.js/Explore';

class AppContainer extends HTMLElement {  //esto permite utilizar cosillas de html en javascript, se heredan los elementos
cards = [];

    constructor(){
    super(); //el super es para inicializar el HTMLElement
    this.attachShadow({mode: "open"}) //aqui se encapsula y de envia al DOM. Lo de open es para que lo encuentre.
}

dataExplore .forEach((element => {
    const card = this.ownerDocument.createElement(game-card) // crear elemento dinamico en javascript en este documento que estoy

    //le indicamos que vlores va a guardar sobre atributos especificos
    if(element.title){}
    card.setAttribute('title', 'element.title')
    card.setAttribute('thumbnail', 'element.thumbnail')
    card.setAttribute('icons', 'element.icons')

    this.cards.push(card) //push en el array
}); 
}

attributeChangelCallback(propName, oldValue, newValue)
if(oldValue!==newValue){
    this[propName] = newValue;
    this.render()
}
}

connectedCallback(){ //cuando el Dom lo encuentra, esta vaina ejecuta el codigo
this.render();
}

render() { //aqui van los componentes
    //this.ShadowRoot.innerHTML = '';

    //this.dataExplore.forEach((gameCard) => {
        //this.ShadowRoot.appenchild(gameCard);
    //}

    this.shadowRoot.innerHTML += ´
    <game-card
    title="{$element.title}"
    thumbnail="{element.thumbnail}"
    icon="{element.icons}"
    </game-card>´;};

customElements.define('app-container', AppContainer);
import { dataExplore } from './data/dataExplore.js';
import * as components from './components/indexPadre.js';


class AppContainer extends HTMLElement {  //esto permite utilizar cosillas de html en javascript, se heredan los elementos
cards = [];

    constructor(){
    super(); //el super es para inicializar el HTMLElement
    this.attachShadow({mode: "open"}) //aqui se encapsula y de envia al DOM. Lo de open es para que lo encuentre.
}

connectedCallback(){ //cuando el Dom lo encuentra, esta vaina ejecuta el codigo
this.render();
}

render() {
  dataExplore.forEach((element) => {

    const gameCard = document.createElement('game-card');
    gameCard.setAttribute('title', element.title);
    gameCard.setAttribute('thumbnail', element.thumbnail);
    gameCard.icons = element.icons;
    this.shadowRoot.appendChild(gameCard);
  });
}
}

customElements.define('app-container', AppContainer);
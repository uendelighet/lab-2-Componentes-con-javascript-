import { dataExplore } from '../Explore/dataExplore.js';
import * as components from './components/indexPadre.js';


class AppContainer extends HTMLElement {  //esto permite utilizar cosillas de html en javascript, se heredan los elementos
cards = [];

    constructor(){
    super(); //el super es para inicializar el HTMLElement
    this.attachShadow({mode: "open"}) //aqui se encapsula y de envia al DOM. Lo de open es para que lo encuentre.
}

  
// crt k c
// attributeChangedCallback(propName, oldValue, newValue){
// if(oldValue!==newValue){
//     this[propName] = newValue;
//     this.render()
// }
// }

connectedCallback(){ //cuando el Dom lo encuentra, esta vaina ejecuta el codigo
this.render();
}

render() { //aqui van los componentes
    //this.ShadowRoot.innerHTML = '';

    //this.dataExplore.forEach((gameCard) => {
        //this.ShadowRoot.appenchild(gameCard);
    //}

    dataExplore.forEach((element) => {
        this.shadowRoot.innerHTML += `
      <game-card
    title="${element.title}"
    thumbnail="${element.thumbnail}"
    icon="${element.icons}">
      </game-card>
        `;
    });
}


}
customElements.define('app-container', AppContainer);
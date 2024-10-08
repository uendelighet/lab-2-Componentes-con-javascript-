import { dataExplore } from './data/dataExplore.js'
import * as components from './components/indexPadre.js';

class AppContainer extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
   
    const containerCard = document.createElement('section');
    containerCard.className = 'container-card'; //nombre de caja, css en index.css

    dataExplore.forEach((element) => {

      const gameCard = document.createElement('game-card');
      gameCard.setAttribute('title', element.title);
      gameCard.setAttribute('thumbnail', element.thumbnail);
      gameCard.icons = element.icons;
      containerCard.appendChild(gameCard)
      ;
    });
    this.shadowRoot.appendChild(containerCard);
  }
}

customElements.define('app-container', AppContainer);
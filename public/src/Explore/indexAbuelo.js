import { dataExplore } from './Explore/dataExplore.js'
import * as components from '../components/indexPadre.js';

class AppContainer extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
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
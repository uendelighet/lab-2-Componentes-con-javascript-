class Card extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['title', 'thumbnail'];
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		if (oldValue !== newValue) {
			this[propName] = newValue;
			this.render();
		}
	}

	render() {
		this.shadowRoot.innerHTML = `
			<link rel="stylesheet" href="./src/components/myComponent/explore.css">
			<div class="cardExplore">
				<img class="portadas" src="${this.thumbnail}" alt="">
				<h1>${this.title}</h1>
				<div class="icons-container"></div>
			</div>
		`;

		const iconsContainer = this.shadowRoot.querySelector('.icons-container');

			this?.icons.forEach((elemento) => {
				const iconElement = this.ownerDocument.createElement('img');
				iconElement.src = elemento;
                iconElement.className = "icon"
				iconsContainer.appendChild(iconElement);
			});
		
	}
}

customElements.define('game-card', Card);
export default Card;
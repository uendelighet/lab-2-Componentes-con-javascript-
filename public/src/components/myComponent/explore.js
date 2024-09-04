class Card extends HTMLElement {

constructor(){
    super();
    this.attachShadow({mode: 'open' }); //abierto para el innerhtml de sombra en render
    }

static get observedAttributes(){ //aqui se crea el dinamismo jsjs
    return ['title', 'thumbnail']
    }

connectedCallback(){ //permite saber cuando el render ya esta en el dom
this.render();
};

attributeChangedCallback(propName, oldValue, newValue){ 
if (oldValue !== newValue) {//valor anterior es diferente al valor nuevo
    this[propName] = newValue;
    this.render();
}
};

render(){ //aqui se crea el html
this.shadowRoot.innerHTML = `
<link rel="stylesheet" href="./src/components/myComponent/explore.css">
<div class="cardExplore">
<img class=portadas" src=${this.thumbnail} alt="">
<h1>${this.title}</h1>
<div class="icons-container"> </div> 
</div>
`;

const containerIcons = this.shadowRoot.querySelector(".icons-container");

this.icons.forEach(elemento => {
    const iconElement = this.ownerDocument.createElement('img');
    iconElement.src = elemento;
    containerIcons.appenchild(iconElement);
});

}
}

customElements.define('game-card', Card);
export default Card;

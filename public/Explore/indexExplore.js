import data from './data/dataExplore.js'; //traer data
import { renderExplore } from './utils/renderExplore.js';

const container = document.querySelector('.app');

data.forEach((game) => {
    const gameFigure = renderExplore(game);

    container.appendChild(gameFigure);
});
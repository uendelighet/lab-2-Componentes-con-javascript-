export const renderExplore = ({ title, thumbnail, icons }) => {

    //se crea la caja grande de maletas
   const container = document.createElement('figure');
   container.className = 'game-card' // otra forma de decir lo de className es: container.classList.add('game-card');

   //este es el html de javascript, son como 
   //maletas vacias con destino, ejemplo: 
   // maleta para la universidad
   const img = document.createElement('img');
   const h2 = document.createElement('h2');
   const p = document.createElement('p');
   const ulGames = document.createElement('ul');
   const h3Games = document.createElement('ul');

    //aqui se le pone una lista de lo 
    //debe ir en cada malet: que si 
    //para la universidad, el cuaderno,
    //portatil y asi. Ejemplo: universidad.carpeta = cuaderno

   img.src = thumbnail;
   h2.textContent = title;

   //los titulos que van antes de las categorias se ponen asi:
   h3Games.textContent = 'EXPLORE MORE GAMES';

    //aqui se juntan todas las maletas
    // en una sola (ul y li) lista, todas las que hay
    ulGames.forEach((games) => {
        const li = document.createElement('li');
        li.textContent = games;
        ulGames.appendChild(li);
    })

    //todas las maletas se guarda n en 
    //una caja de maletas, llamada contenedor
    container.appendChild(img);
    container.appendChild(h2);
    container.appendChild(p);
    container.appendChild(ulGames);

    return container
}
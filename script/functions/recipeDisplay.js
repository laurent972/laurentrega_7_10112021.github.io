export function recipesDisplay(name, ingredients, description, time){
  const article = document.createElement('article');
  const card = document.createElement('div');
  card.classList.add('card','mb-3');
  article.classList.add('col-md-4');
  card.innerHTML += `
  <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
  <title>Placeholder</title>
  <rect width="100%" height="100%" fill="#C7BEBE"></rect>
  </svg>
  <div class="d-flex px-3 pt-3 justify-content-between">
  <h5 class="card-title "> 
   ${name}  
   </h5>
  <p class="time">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
    </svg>
    ${time} mn
  </p>
  </div>
  <div class="card-body d-flex justify-content-between mb-5 flex-wrap">
    <div class="list col-md-5">
    <ul class="list-group list-group--card">
    `
    ingredients.forEach(ingredient => { 
        card.innerHTML +=   `
        <li class="list-group-item"> <b>${ingredient.ingredient} :</b> ${ingredient.quantity} ${ingredient.unit}<li> 
      `
    });
    card.innerHTML += `
    </ul>
    </div>  
    <div class="card-text col-md-6">
    ${description}
    </div>
  </div>
  </div>
  `
  article.appendChild(card);
  articles.appendChild(article);

}

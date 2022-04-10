const app = document.getElementById('root');
const logo = document.createElement('img');
const container = document.createElement("div");




// Open a new connection, using the GET request on the URL endpoint
(async function getData(){
    let response = await fetch('https://ghibliapi.herokuapp.com/films')
    .then((res)=> res.json())
    .then(res=>{
      container.setAttribute('class', 'container');
      logo.src = "./logo.png";
      app.appendChild(logo);
      app.appendChild(container);
      return res
    })
    .then(data=>{data.forEach(movie=>{
        const card = document.createElement("div");
        card.setAttribute('class', 'card');

        const h1 = document.createElement("h1");
        h1.textContent = movie.title;

        const desc = document.createElement("p");
        movie.description = movie.description.substring(0, 300);
        desc.textContent = movie.description;

        container.appendChild(card);

        card.appendChild(h1);
        card.appendChild(desc);
    })})
    .catch(error=>{
      console.log(`Erro: ${error}.`)
    })
})();
/* var request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement("div");
      card.setAttribute('class', 'card');

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      container.appendChild(card);

      card.appendChild(h1);
    })
  } else {
    console.log('error')
  }
}

request.send() */
const apiBirds = "https://aves.ninjas.cl/api/birds"

const aves = (async() => {
    try{
        let carrusel = document.getElementById('carrusel')
        const data = await fetch(apiBirds)
        const birds = await data.json()
        for(i=0 ;i<birds.length;i++){
            let name = birds[i].name
            let img = birds[i].images
            carrusel.innerHTML += `
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${img.full}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="text-dark">${name.spanish}</h5>
                </div>
              </div>`
        }
    }
    catch(err) {
        console.log(err)
    }
})()

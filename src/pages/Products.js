import getData from '../utils/getData.js'


const randomNumber = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(2);
}

const Products = async () => {
  const plants = await getData();
  const view = `
  <main class="product">    
    <section class="product__card">
    ${plants.photos.map((plant) => `
    <a href="#/:id/${plant.id}" >
        <img src="${plant.src.original}" alt="${plant.photographer}" />
      <span class="product__content">
        <h3>${plant.photographer}</h3>
        <h3>$${randomNumber(10, 35)}</h3>
          <button>Detalles</button>
        </span>
      </span>
    </a>
    `)
      .join("")}
    </section>
    </main>`;
  return view;
}



export default Products;
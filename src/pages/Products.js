import cacheData from '../utils/cacheData'
import getData from '../utils/getData'

const randomNumber = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(2);
}

const Products = async () => {
  let plants = await cacheData()
  const view = `
  <main class="product">
    <section class="product__card">
    ${plants.photos.map((plant) => `
    <a href="#/:id/${plant.id}" >
        <img src="${plant.src.large}" alt="${plant.photographer}" />
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
    return view
}




export default Products;

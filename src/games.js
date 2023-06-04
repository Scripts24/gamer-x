let productos = [];

fetch("../data.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargar_productos(productos);
    })

const contenedor_productos = document.querySelector("#category-games");
const botones_categorias = document.querySelectorAll('.boton-categoria');
const titulo_principal = document.querySelector('#titulo-principal');



/*---Función para inyectar productos en el HTML--- */
/*---Parámetro para que carguen solo los productos de la categoría elegida--- */
function cargar_productos(productos) {

    contenedor_productos.innerHTML = "";/*---Vaciar el contenedor_productos antes de realizar el forEach del array--- */

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("category-item");
        
        div.innerHTML = `
        <img src="${producto.image}">
        <div class="category-item-info">
            <div
                class="bg-pink-700  text-white py-[2px] px-[6px] inline-block text-xs tracking-widest mb-[6px]">
                ${producto.category}</div>
            <h3 class="font-medium text-[18px] tracking-[.03em] uppercase text-white mb-2">${producto.title}</h3>
            <ul class="flex mb-[14px]">
                <li class="me-3"><img src="./assets/icons/dev-icon-1.svg"/></li>
                <li class="me-3"><img src="./assets/icons/dev-icon-2.svg" /></li>
                <li class="me-3"><img src="./assets/icons/dev-icon-3.svg" /></li>
                <li class="me-3"><img src="./assets/icons/dev-icon-4.svg" /></li>
                <li class="me-3"><img src="./assets/icons/dev-icon-5.svg" /></li>
            </ul>
        </div>
            `;

        contenedor_productos.append(div);

    })

}

/*---Llamado a la función--- */
cargar_productos(productos);/*---Parámetro para que al cargar por primera vez la página se cargue el array completo--- */





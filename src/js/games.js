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
                ${producto.categoria.nombre}</div>
            <h3 class="font-medium text-[18px] tracking-[.03em] uppercase text-white mb-2">${producto.title}</h3>
            <ul class="flex mb-[14px]">
                <li class="me-3 w-[20px]"><img src="./assets/icons/dev-icon-1.svg"/></li>
                <li class="me-3 w-[20px]"><img src="./assets/icons/dev-icon-2.svg" /></li>
                <li class="me-3 w-[16px] "><img src="./assets/icons/dev-icon-3.svg" /></li>
                <li class="me-3 w-[16px]"><img src="./assets/icons/dev-icon-4.svg" /></li>
                <li class="me-3 w-[22px]"><img src="./assets/icons/dev-icon-5.svg" /></li>
            </ul>
        </div>
            `;

        contenedor_productos.append(div);

    })

}

/*---Llamado a la función--- */
cargar_productos(productos);/*---Parámetro para que al cargar por primera vez la página se cargue el array completo--- */


/*---Evento click para activar el botón seleccionado--- */
botones_categorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botones_categorias.forEach(boton => boton.classList.remove("active"));/*---Le saca la clase active al botón que la tiene por defecto--- */
        e.currentTarget.classList.add("active"); /*---Le agrega la clase active al botón clickeado--- */

        /*---Condicional para que cuando hagamos click en Todos los productos, vuelvan a aparecer--- */
        /*---Entonces el filtro se ejecuta cuando se selecciona una categoría diferente a "Todos los productos"--- */
        if (e.currentTarget.id != "todos") {

            const producto_categoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            titulo_principal.innerText = producto_categoria.categoria.nombre;/*---Para que cambie el Título y aparezca el nombre correspondiente a la categoría seleccionada--- */

            const productos_boton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)/*---Hacemos un filtro en el array para que solo carguen los productos de la categoría clickeada--- */
            cargar_productos(productos_boton);/*---Parámetro para que carguen solo los productos de la categoría seleccionada--- */
        } else {
            titulo_principal.innerText = "Categorías";
            cargar_productos(productos);
        }
    })
});






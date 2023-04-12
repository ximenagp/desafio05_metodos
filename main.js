// input
const contenedor = document.querySelector('#tarea'); 
const btnAgregar = document.querySelector('#agregar');

let total = 1;

// agrega elementos
 
btnAgregar.addEventListener('click', agrega => {
    let div = document.createElement('div');
    div.innerHTML = `<label>${total++}</label> - <input type="text" name="nombre[]" placeholder="Nombre" required><button onclick="eliminar(this)">Eliminar</button>`;
    contenedor.appendChild(div);
})
divagrega.value = '';
    agrega();
    updateCounters();

const eliminar = (agrega) => {
    const divagrega = agrega.parentNode;
    contenedor.removeChild(divagrega);
    actualizarContador();
};

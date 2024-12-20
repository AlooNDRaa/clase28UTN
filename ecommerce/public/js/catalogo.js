const productos = [
  { id: 1, nombre: "Reloj Elegante", precio: 199, imagen: "reloj1.jpg" },
  { id: 2, nombre: "Reloj Deportivo", precio: 120, imagen: "reloj2.jpg" },
  { id: 3, nombre: "Reloj Clásico", precio: 150, imagen: "reloj3.jpg" },
];

function cargarProductos() {
  const contenedorProductos = document.getElementById("productos-container");
  contenedorProductos.innerHTML = ""; 

  productos.forEach((producto) => {
    const productoHTML = document.createElement("div");
    productoHTML.classList.add("producto");
    productoHTML.innerHTML = `
        <img src="images/${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
      `;
    contenedorProductos.appendChild(productoHTML);
  });
}

function agregarAlCarrito(id) {
  const producto = productos.find((p) => p.id === id);

  if (producto) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const productoExistente = carrito.find((item) => item.id === id);
    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
  }
}

function mostrarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const carritoContainer = document.getElementById("carrito-container");
  carritoContainer.innerHTML = "";
  
  
  if (carrito.length === 0) {
    carritoContainer.innerHTML = "<p>El carrito está vacío.</p>";
  } else {
    carrito.forEach((item) => {
      const carritoItem = document.createElement("div");
      carritoItem.classList.add("carrito-item");

      const precioTotal = item.precio * item.cantidad;
      carritoItem.innerHTML = `
          <img src="images/${item.imagen}" alt="${item.nombre}">
          <h3>${item.nombre}</h3>
          <p>Precio: $${precioTotal}</p>
          <p>Cantidad: <span id="cantidad-${item.id}">${item.cantidad}</span></p>
          <button onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
          <button onclick="editarCantidad(${item.id}, 'sumar')">+</button>
          <button onclick="editarCantidad(${item.id}, 'restar')">-</button>
        `;
      carritoContainer.appendChild(carritoItem);
    });
  }
}

function eliminarDelCarrito(id) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito = carrito.filter((item) => item.id !== id);

  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function editarCantidad(id, operacion) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const producto = carrito.find((item) => item.id === id);

  if (producto) {
    if (operacion === "sumar") {
      producto.cantidad += 1;
    } else if (operacion === "restar" && producto.cantidad > 1) {
      producto.cantidad -= 1;
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
  }
}

function pagar() {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  if (carrito.length > 0) {
    carrito = []; 
    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("¡Gracias por tu compra! El carrito se ha vaciado.");
    mostrarCarrito();
  } else {
    alert("Tu carrito está vacío.");
  }
}

function cerrarSesion() {
  localStorage.removeItem("usuario"); 
  window.location.href = "../index.html"; 
}

document.addEventListener("DOMContentLoaded", () => {
  cargarProductos();
  mostrarCarrito();
});

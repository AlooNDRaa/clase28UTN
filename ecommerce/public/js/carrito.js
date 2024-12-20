function agregarAlCarrito(id) {
  fetch("/relojes")
    .then((response) => response.json())
    .then((relojes) => {
      const reloj = relojes.find((r) => r.id === id);

      if (reloj) {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        const productoExistente = carrito.find((item) => item.id === id);

        if (productoExistente) {
          productoExistente.cantidad += 1;
        } else {
          carrito.push({ ...reloj, cantidad: 1 });
        }

        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert("Producto agregado al carrito");
        mostrarCarrito();
      }
    })
    .catch((error) => console.error("Error al agregar al carrito", error));
}

function mostrarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const carritoContainer = document.getElementById("carrito-body");
  carritoContainer.innerHTML = "";

  let total = 0;

  if (carrito.length === 0) {
    carritoContainer.innerHTML =
      "<tr><td colspan='5'>El carrito está vacío.</td></tr>";
  } else {
    carrito.forEach((item) => {
      total += item.precio * item.cantidad;

      const carritoItem = document.createElement("tr");
      carritoItem.innerHTML = `
          <td><img src="images/${item.imagen}" alt="${item.nombre}" style="width: 50px;"></td>
          <td>${item.nombre}</td>
          <td>$${item.precio}</td>
          <td>
            <span id="cantidad-${item.id}">${item.cantidad}</span>
          </td>
          <td>
            <button onclick="editarCantidad(${item.id}, 'sumar')">+</button>
            <button onclick="editarCantidad(${item.id}, 'restar')">-</button>
            <button onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
          </td>
        `;
      carritoContainer.appendChild(carritoItem);
    });
  }

  document.getElementById("total-price").textContent = total.toFixed(2);
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

function agregarBotonesFooter() {
  const footerContainer = document.getElementById("carrito-footer");

  const botonesDiv = document.createElement("div");
  botonesDiv.id = "carrito-footer-buttons";

  const pagarButton = document.createElement("button");
  pagarButton.textContent = "Pagar";
  pagarButton.onclick = function () {
    pagar();
  };

  const cerrarSesionButton = document.createElement("button");
  cerrarSesionButton.textContent = "Cerrar sesión";
  cerrarSesionButton.onclick = function () {
    cerrarSesion();
  };

  botonesDiv.appendChild(pagarButton);
  botonesDiv.appendChild(cerrarSesionButton);

  footerContainer.appendChild(botonesDiv);
}

document.addEventListener("DOMContentLoaded", function () {
  mostrarCarrito();
  agregarBotonesFooter();
});

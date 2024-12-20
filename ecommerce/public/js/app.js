document.addEventListener("DOMContentLoaded", () => {
  renderLogin();

  function renderLogin() {
    document.getElementById("auth-container").innerHTML = `
      <div id="login-section">
        <h1>Iniciar Sesión</h1>
        <form id="loginForm">
          <label for="email-login">Email:</label>
          <input type="email" id="email-login" required />
          <label for="password-login">Contraseña:</label>
          <input type="password" id="password-login" required />
          <button class="button" type="submit">Ingresar</button>
        </form>
        <p>¿No tienes cuenta? <span id="show-register">Registrate aquí</span></p>
      </div>
    `;

    document.querySelector("#loginForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.querySelector("#email-login").value;
      const password = document.querySelector("#password-login").value;

      if (email === "alonngadea@gmail.com" && password === "hola123") {
        localStorage.setItem("loggedIn", true);
        window.location.href = "catalogo.html"; 
      } else {
        alert("Credenciales incorrectas");
      }
    });

    document.querySelector("#show-register").addEventListener("click", () => {
      renderRegister();
    });
  }

  function renderRegister() {
    document.getElementById("auth-container").innerHTML = `
      <div id="register-section">
        <h1>Registrarse</h1>
        <form id="registerForm">
          <label for="email-register">Email:</label>
          <input type="email" id="email-register" required />
          <label for="password-register">Contraseña:</label>
          <input type="password" id="password-register" required />
          <button class="button" type="submit">Registrarse</button>
        </form>
        <p>¿Ya tienes cuenta? <span id="show-login">Inicia sesión aquí</span></p>
      </div>
    `;

    document.querySelector("#registerForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.querySelector("#email-register").value;
      const password = document.querySelector("#password-register").value;

      localStorage.setItem("usuario", JSON.stringify({ email, password }));
      alert("Usuario registrado con éxito");
      renderLogin(); 
    });

    document.querySelector("#show-login").addEventListener("click", () => {
      renderLogin();
    });
  }
});

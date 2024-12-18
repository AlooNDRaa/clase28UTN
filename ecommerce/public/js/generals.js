document.getElementById("header").innerHTML =  `
    <header class="py-3 mb-3 border-bottom">
    <div class="container-fluid d-grid gap-3 align-items-center" style="grid-template-columns: 1fr 2fr;">
      <div class="dropdown">
        <a href="#" class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
         <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
          <svg  width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 7L7 7M20 7L11 7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M20 17H17M4 17L13 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M4 12H7L20 12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </a>
        <ul class="dropdown-menu text-small shadow">
          <li><a class="dropdown-item active" href="#" aria-current="page">Overview</a></li>
          <li><a class="dropdown-item" href="#">Inventory</a></li>
          <li><a class="dropdown-item" href="#">Customers</a></li>
          <li><a class="dropdown-item" href="#">Products</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Reports</a></li>
          <li><a class="dropdown-item" href="#">Analytics</a></li>
        </ul>
      </div>

      <div class="d-flex align-items-center">
        <form class="w-100 me-3" role="search">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
        </form>

        <div class="flex-shrink-0 dropdown">
          <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small shadow">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="../index.html">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
`


document.getElementById("footer").innerHTML = `
<div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-a">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-a">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-a">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-a">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-a">About</a></li>
    </ul>
    <p class="text-center text-body-primary">&copy; 2024 Company, Inc</p>
  </footer>
</div>
`
<script>
	import { onMount } from 'svelte';
	import jwt_decode from "jwt-decode";
  
  const token =  window.localStorage.getItem('x-access-token');
  var decoded = jwt_decode(token);

  async function logout(){

window.localStorage.clear();
location.href = '/login'
}

</script>


<nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
  <div class="container">
    <a href="/dashboard" class="navbar-brand">
      <img src="../../dist/img/logoo.png" alt="AdminLTE Logo" class="brand-image" >
      
    </a>

    <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse order-3" id="navbarCollapse">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="/dashboard" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="/cform" class="nav-link">Form</a>
        </li>
        <li class="nav-item dropdown">
          <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">Dropdown</a>
          <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow">
            <li><a href="#" class="dropdown-item">Some action </a></li>
            <li><a href="#" class="dropdown-item">Some other action</a></li>

            <li class="dropdown-divider"></li>

            <!-- Level two dropdown-->
            <li class="dropdown-submenu dropdown-hover">
              <a id="dropdownSubMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">Hover for action</a>
              <ul aria-labelledby="dropdownSubMenu2" class="dropdown-menu border-0 shadow">
                <li>
                  <a tabindex="-1" href="#" class="dropdown-item">level 2</a>
                </li>

                <!-- Level three dropdown-->
                <li class="dropdown-submenu">
                  <a id="dropdownSubMenu3" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">level 2</a>
                  <ul aria-labelledby="dropdownSubMenu3" class="dropdown-menu border-0 shadow">
                    <li><a href="#" class="dropdown-item">3rd level</a></li>
                    <li><a href="#" class="dropdown-item">3rd level</a></li>
                  </ul>
                </li>
                <!-- End Level three -->

                <li><a href="#" class="dropdown-item">level 2</a></li>
                <li><a href="#" class="dropdown-item">level 2</a></li>
              </ul>
            </li>
            <!-- End Level two -->
          </ul>
        </li>
      </ul>

      <!-- SEARCH FORM -->
   <!-- Right navbar links -->

   <ul class="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
 
    <li><a class="nav-link" style="color: grey">{decoded.username}</a></li>
  <li> <button style="color: grey" class="btn btn-link" on:click={() => logout()}>deconnexion</button></li>

  </ul>

    </div>
  </div>
</nav>



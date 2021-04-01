<script>
    export let Other

    let token =  window.localStorage.getItem('x-access-token');

    async function logout(){
      location.href = '/Login'
      window.localStorage.clear();
	}

  import jwt_decode from "jwt-decode";

  var decoded = jwt_decode(token);
  console.log(decoded);
</script>


 <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->

      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="nav-link" data-widget="pushmenu" role="button"><i class="fas fa-bars" style="color: black"></i></a>
       <!-- svelte-ignore a11y-missing-attribute -->
       <a class="nav-link" style="color: grey">{decoded.username}</a>
    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Navbar Search -->


      <!-- Messages Dropdown Menu -->
    
            <!-- Message End -->
        
            <li class="nav-item d-none d-sm-inline-block">
              <!-- svelte-ignore a11y-missing-attribute -->
              <button  on:click={logout()} class="nav-link"> <i class="fas fa-sign-out-alt"></i> Logout</button>
            </li>
      
    </ul>
  </nav>
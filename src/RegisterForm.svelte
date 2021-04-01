
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet">

<link rel="stylesheet" href="fonts/icomoon/style.css">

<link rel="stylesheet" href="css/owl.carousel.min.css">

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="css/bootstrap.min.css">

<!-- Style -->
<link rel="stylesheet" href="css/style.css">

<div class="content">
    <div class="container">
      <div class="row justify-content-center">
        <!-- <div class="col-md-6 order-md-2">
          <img src="images/undraw_file_sync_ot38.svg" alt="Image" class="img-fluid">
        </div> -->
        <div class="col-md-6 contents">
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="form-block">
                <div class="row justify-content-center">
                  <img src="dist/img/logoo.png">
  
                  </div>
                  <br>
                  <br>
                  <div class="mb-4">
                  <h3>Sign Up to <strong>Smart Study</strong></h3>
                </div>
                <form on:submit|preventDefault={submit}>
                  <div class="form-group first">
                    <input bind:value={username} type="text" class="form-control" placeholder="username" id="username">
                  </div>

                  <div class="form-group first">
                    <input bind:value={email} type="email" class="form-control" placeholder="email" id="email">
                  </div>

                  <div class="form-group first">
                    <input bind:value={adresse} type="text" class="form-control" placeholder="adresse" id="adresse">
                  </div>
                  <div class="form-group first">
              
                    <input bind:value={password} type="password" class="form-control" placeholder="password" id="password">
                    
                  </div>
                  <div class="form-group first">
                    <input bind:value={passwordconfirm} type="password" class="form-control" placeholder="confirm password" id="password">
                  </div>
                <br>
                  <input type="submit" class="btn btn-pill text-white btn-block btn-primary">
                  <div class="form-group">
                    <a style="color: grey"> already have an account ? <a href="/login" style="color: blue">login</a></a>
                    </div>      
                </form>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>

<script>
import Snackbar, {Actions, Label} from '@smui/snackbar';
import Button from '@smui/button';

let leadingSnackbar;
  
 
  function handleClosedLeading(e) {
    leadingReason = e.detail.reason;
  }

    let username='',password='', email='', adresse='', passwordconfirm=''
	let APIURL ="http://localhost:3000/api/auth/signup";

	import { writable } from 'svelte/store';
	
	async function submit() {
let obj1 = {passwordconfirm}
		let obj = {username,email,adresse,password};
    console.log(password)
    console.log(passwordconfirm)
    if(password==passwordconfirm){
      const res = await fetch(APIURL, {
			 method: 'POST',
			 body: JSON.stringify(obj),
			 headers:{
                'Content-Type': 'application/json'
               }
			});
      const test = await res.json();
console.log(res.status)
      if(res.status == 200) {
  location.href = '/login'
}
else
{
  alert(test.message);
}
    }
else{ alert("verify password");}
 
	       







  
  }
</script>
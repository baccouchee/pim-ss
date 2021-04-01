
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
                  <h3>Sign In to <strong>Smart Study</strong></h3>
                </div>
                <form on:submit|preventDefault={submit}>
                  <div class="form-group first">
                  
                    <input bind:value={username} type="text" class="form-control" placeholder="username" id="username">

                  </div>
                  <div class="form-group last mb-4">
              
                    <input bind:value={password} type="password" class="form-control" placeholder="password" id="password">
                    
                  </div>
                  
                  <div class="d-flex mb-5 align-items-center">
                    <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
                      <input type="checkbox" checked="checked"/>
                      <div class="control__indicator"></div>
                    </label>
                    <span class="ml-auto"><a href="#" class="forgot-pass">Forgot Password</a></span> 
                  </div>

                  <input type="submit" class="btn btn-pill text-white btn-block btn-primary">
                  <div class="form-group">
                    <a style="color: grey"> Create an account ? <a href="/register" style="color: blue">Sign Up</a></a>
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
var test;
 
  function handleClosedLeading(e) {
    leadingReason = e.detail.reason;
  }

    let username='',password=''
	let APIURL ="http://localhost:3000/api/auth/signin";

	import { writable } from 'svelte/store';
	
  async function getUsers(){
		const res = await fetch('http://localhost:3000/api/test/admin',{
		headers:{
                'x-access-token': test.accessToken
               }
			});

		if(res.status == 200)
		{
      window.localStorage.setItem('x-access-token', test.accessToken);
  location.href = '/dashboard'
  console.log(test.accessToken);
		}
		else
		{
		alert("Unauthorized!");
		}
	}

	async function submit() {
		let obj = {username, password};
    
		const res = await fetch(APIURL, {
			 method: 'POST',
			 body: JSON.stringify(obj),
			 headers:{
                'Content-Type': 'application/json'
               }
			});
	       
    
		 test = await res.json();
      
if(res.status == 200) {
  getUsers()
}
else
{
  alert(test.message);
}



  
  }
</script>
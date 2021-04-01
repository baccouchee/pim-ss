<script>

	import { onMount } from 'svelte';
	import Navbar from './components/Navbar.svelte'
	import jwt_decode from "jwt-decode";


	let APIURL1 ="http://localhost:3000/form";
	const token =  window.localStorage.getItem('x-access-token');
    const id = window.localStorage.getItem('_id');
	let nom, prenom, adresse, mdp = '';
	  var decoded = jwt_decode(token);

    let listForms = [];

	 

	onMount(() => {
		console.log(token)
		if (token=="")
		{
			location.href = '/login'
		}
	     getUsers()
	});

    
        async function logout(){

      window.localStorage.clear();
	  location.href = '/login'
	}

	async function getForms(){
		const res = await fetch(APIURL1);
		const forms = await res.json();
		console.log(forms)

		listForms = forms;
	}

	async function getOneForm(){
    console.log(id)
		const res = await fetch(APIURL1+`/${id}`);
    const forms = await res.json();
        if(res.status == 200)
		{
            console.log("hhhh")
		}
		else
		{
			console.log("nnnn")
		}

        listForms = forms;
        console.log(forms)
       
	}

    async function getUsers(){
		const res = await fetch('http://localhost:3000/api/test/admin',{
		headers:{
                'x-access-token': token
               }
			});
			console.log(res.status)
		if(res.status == 200)
		{
			window.localStorage.setItem('x-access-token', token);
			getOneForm()
		}
		else
		{
			location.href = '/login'
		}
	}

	



  </script>



    <!-- Left navbar links -->
      <!-- svelte-ignore a11y-missing-attribute -->



<main>
	<div class="wrapper">

		<!-- Navbar -->
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
					  <button style="color:red" class="btn btn-danger" on:click={() => logout()}><a style="color: white" >Logout</a></button>
				
					</li>
			  
			</ul>
		  </nav>

		<!-- /.navbar -->
	  
		<!-- Main Sidebar Container -->

	  <Navbar></Navbar>

      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0">Dashboard</h1>
              </div><!-- /.col -->
    
            </div><!-- /.row -->
          </div><!-- /.container-fluid -->
        </div>

        <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Mes formulaires</h3>
                  </div>
                  <!-- /.card-header -->
    
                  <!-- /.card-body -->
                </div>
           
                <div class="col-md-6">
                    <!-- general form elements -->
                    <div class="card card-primary">
                      <div class="card-header">
                        <h3 class="card-title">{listForms.nom}</h3>
                      </div>
                      <!-- /.card-header -->
                      <!-- form start -->
                      
                      <form>
                        <div class="card-body">
                          <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                          </div>
                          <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                          </div>
                          <div class="form-group">
                            <label for="exampleInputFile">File input</label>
                            <div class="input-group">
                              <div class="custom-file">
                                <input type="file" class="custom-file-input" id="exampleInputFile">
                                <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                              </div>
                              <div class="input-group-append">
                                <span class="input-group-text">Upload</span>
                              </div>
                            </div>
                          </div>
                          <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                          </div>
                        </div>
                        <!-- /.card-body -->
        
                        <div class="card-footer">
                          <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                      </form>
                
                    </div>
          
                    <!-- /.card -->

        
                  </div>
       

                </div>
                </div>
                </div>


        </div>

		<!-- Content Wrapper. Contains page content -->


		<!-- Main content -->
	
		<!-- /.content -->

</main>


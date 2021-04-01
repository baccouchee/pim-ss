<script>

	import { onMount } from 'svelte';
	import Navbar from './components/Navbar.svelte'
	import jwt_decode from "jwt-decode";


    let APIURL ="http://localhost:3000/book";
	let APIURL1 ="http://localhost:3000/form";
	const token =  window.localStorage.getItem('x-access-token');

	
	let listBooks = [];
	let listForms = [];
	let listUsers = [];
	let nom, prenom, adresse, mdp = '';
	  var decoded = jwt_decode(token);



	 

	onMount(() => {
		console.log(token)
		if (token=="")
		{
			location.href = '/login'
		}
	     getUsers()
	});

	async function gotoMyForm(id) {
    window.localStorage.setItem('_id', id);
    location.href = '/myForm'
  }


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


	async function getBooks(){
		const res = await fetch(APIURL);
		const books = await res.json();
		listBooks = books;
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
			getForms()
		}
		else
		{
			location.href = '/login'
		}
	}
	async function addBook() {
		let obj = { nom, prenom, adresse, mdp };
		const res = await fetch(APIURL, {
			 method: 'POST',
			 body: JSON.stringify(obj),
			 headers:{
                'Content-Type': 'application/json'
               }
			});
		   console.log(await res.json());
		   getBooks()
		   clearInput() 
	}

	function clearInput(){
		nom = '';
	   prenom = '';
	   adresse = '';
	   mdp = '';
	}

	async function deleteBook(id){
		const res = await fetch(APIURL1+`/${id}`, { method: 'DELETE'});
	    console.log(await res.json());  
	    getForms()         
	}
	
  import Snackbar, {Actions, Label} from '@smui/snackbar';

  import Button from '@smui/button';

  let leadingSnackbar;
  
 
  function handleClosedLeading(e) {
    leadingReason = e.detail.reason;
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
					  <button  class="btn btn-danger" on:click={() => logout()}><i class="fas fa-sign-out-alt"></i></button>
				
					</li>
			  
			</ul>
		  </nav>

		<!-- /.navbar -->
	  
		<!-- Main Sidebar Container -->

	  <Navbar></Navbar>
		<!-- Content Wrapper. Contains page content -->
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
				  <section class="content">
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
					<!-- /.card -->
		
					<div class="card">
		
					  <!-- /.card-header -->
					  <div class="card-body">
						<table id="example1" class="table table-bordered table-striped">
						  <thead>
						  <tr>
							<th>Nom</th>
							<th>Description</th>
							<th>Action</th>
						  </tr>
						  </thead>
						  <tbody>
		
			  
						 
							{#each listForms as form}
							<tr>
							  <td>{form.nom}</td>
							  <td>{form.description}</td>
						
							  <td>  <div>
								<Snackbar variant="stacked" bind:this={leadingSnackbar} on:MDCSnackbar:closed={handleClosedLeading}>
									<Label>Voulez vous vraiment supprimer cette personne de façon permanente ?</Label>
									<Actions>
									  <Button style="color:red" on:click={deleteBook(form._id)}>Oui</Button>
									</Actions>
								  </Snackbar>
					
									<div class="btn-group btn-group-sm">
									  <a on:click={() => gotoMyForm(form._id)} class="btn btn-primary"><i class="fas fa-eye"></i></a>
									  <a on:click={() => leadingSnackbar.open()} class="btn btn-danger"><i class="fas fa-trash"></i></a>
									</div>
						
							  </div>

							
							</td>
		
						  
							</tr>
							{:else}
			<!-- this block renders when listBooks.length === 0 -->
			<p>loading...</p>
							{/each}

						  </tbody>
						  <tfoot>
					
						  <tr>
							<th>Nom</th>
							<th>Description</th>
			
							<th>Action</th>
					
						  </tr>
						  </tfoot>
						</table>
					  </div>
					  <!-- /.card-body -->
					</div>
					<!-- /.card -->
				  </div>
				  <!-- /.col -->
				</div>
				<!-- /.row -->
			  </div>
			  <!-- /.container-fluid -->
			</section>
			<section class="content">
				<div class="container-fluid">
				  <div class="row">
					<div class="col-md-6">
		  
							<div class="card card-danger">
						<div class="card-header">
						  <h3 class="card-title">Pie Chart</h3>
		  
						  <div class="card-tools">
							<button type="button" class="btn btn-tool" data-card-widget="collapse">
							  <i class="fas fa-minus"></i>
							</button>
							<button type="button" class="btn btn-tool" data-card-widget="remove">
							  <i class="fas fa-times"></i>
							</button>
						  </div>
						</div>
						<div class="card-body">
						  <canvas id="pieChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
						</div>

						</div>
						<!-- /.card-body -->
						<div class="card card-success">
							<div class="card-header">
							  <h3 class="card-title">Stacked Bar Chart</h3>
			  
							  <div class="card-tools">
								<button type="button" class="btn btn-tool" data-card-widget="collapse">
								  <i class="fas fa-minus"></i>
								</button>
								<button type="button" class="btn btn-tool" data-card-widget="remove">
								  <i class="fas fa-times"></i>
								</button>
							  </div>
							</div>
							<div class="card-body">
							  <div class="chart">
								<canvas id="stackedBarChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
							  </div>
							</div>
							<!-- /.card-body -->
						  </div>

					  </div>
					  </div>
					  </div>
					  </section>
			<!-- /.content-header -->
		</div>
		<!-- /.content-wrapper -->

		<!-- Control Sidebar -->
		<aside class="control-sidebar control-sidebar-dark">
		  <!-- Control sidebar content goes here -->
		  <div class="p-3">
			<h5>Title</h5>
			<p>Sidebar content</p>
		  </div>
		</aside>
		<!-- /.control-sidebar -->
	  
		<!-- Main Footer -->
	  </div>

		<!-- Main content -->
	
		<!-- /.content -->

</main>


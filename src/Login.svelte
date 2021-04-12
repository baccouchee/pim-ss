<script>

	import { onMount } from 'svelte';
	import Navbar from './components/Navbar.svelte'
	import jwt_decode from "jwt-decode";


    let APIURL ="http://localhost:3000/book";
	let APIURL1 ="http://localhost:3000/form";
	let APIURL2 ="http://localhost:3000/fom";
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
		console.log("hello:"+decoded.id)
		const res = await fetch(APIURL2+`/${decoded.id}`);
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

	
	  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
	  <!-- Font Awesome -->
	  <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css">
	  <!-- Theme style -->
	  <link rel="stylesheet" href="../../dist/css/adminlte.min.css">


	<body class="hold-transition layout-top-nav">
		<div class="wrapper">
			<!-- Left navbar links -->
		
			  <!-- svelte-ignore a11y-missing-attribute -->


		<!-- /.navbar -->
	  
		<!-- Main Sidebar Container -->

	  <Navbar></Navbar>
		<!-- Content Wrapper. Contains page content -->
		<div class="content-wrapper">
			<!-- Content Header (Page header) -->
    <div class="content-header">

    </div>
				  <section class="content">
					<div class="container">
				<div class="row">
				  <div class="col-12">
			
					<!-- /.card -->
		
					<div class="card card-success card-outline">
						<div class="card-header">
							<h5 class="card-title m-0">Mes formulaires</h5>
						  </div>
					  <!-- /.card-header -->
					  <div class="card-body">
						
						<table id="example1" class="table table-bordered table-striped">
						  <thead>
						  <tr>
							<th>Nom</th>
							<th>Description</th>
							<th>Nbr réponse</th>
							<th>Action</th>
						  </tr>
						  </thead>
						  <tbody>
		
			  
						 
							{#each listForms as form}
							<tr>
							  <td>{form.nom}</td>
							  <td>{form.description}</td>
							  <td>12</td>
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
							<th>Nbr réponse</th>
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
				<div class="container">
				  <div class="row">
					<div class="col-md-6">
            <!-- DONUT CHART -->
            <div class="card card-danger">
				<div class="card-header">
				  <h3 class="card-title">Donut Chart</h3>
  
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
				  <canvas id="donutChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
				</div>
				<!-- /.card-body -->
			  </div>
			</div>
			  <div class="col-md-6">
			  <div class="card card-success">
				<div class="card-header">
				  <h3 class="card-title">Bar Chart</h3>
  
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
					<canvas id="barChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
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
		<!-- /.control-sidebar -->
	  
		<!-- Main Footer -->
	 </div>

		<!-- Main content -->

	<!-- /.content -->
	<script src="../plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="../dist/js/adminlte.min.js"></script>
<!-- AdminLTE for demo purposes -->
<script src="../dist/js/demo.js"></script>
</body>


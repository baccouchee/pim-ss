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
    let listQuest  = [];

	 

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

	async function submit(){
		const res = await fetch(APIURL1+`/${id}`, { method: 'DELETE'});
	    console.log(await res.json());  
	    location.href = '/dashboard' 
	}

	async function getOneForm(){
    console.log(id)
		const res = await fetch(APIURL1+`/${id}`);
    const forms = await res.json();

        listForms = forms;
        listQuest = forms.quest;
        console.log(forms.quest)
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
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">

          <!-- /.card-header -->

          <!-- /.card-body -->
        </div>
   
        <section class="content">
					<div class="container">
				<div class="row">
          
				  <div class="col-12">
            <!-- general form elements -->
            <div class="card card-info">
              
              <div class="card-header">
                <h3 class="card-title">{listForms.nom}</h3>
              </div>

       
            
      
                  <div class="card-body clearfix">
                    <blockquote class="quote-secondary">
                      <p>{listForms.description}</p>
                    </blockquote>
                  </div>
              <!-- /.card-header -->
              <!-- form start -->

     
              <form on:submit|preventDefault={submit}>
                <div class="card-body">
                  {#each listQuest as quest}
                  <div class="form-group">
                    <label for="exampleInputEmail1">{quest.question}</label>
                    <input type="{quest.type}" class="form-control" id="exampleInputEmail1" placeholder="">
                  </div>
                  {/each}
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                  <button type="submit" class="btn btn-danger">Delete</button>
                </div>
              </form>
        
            </div>
  
            <!-- /.card -->


          </div>


        </div>
        </div>
        </div>


</div>
   
    <!-- /.content-header -->
  </div>
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
  <!-- /.control-sidebar -->
  
  <!-- Main Footer -->


  <!-- Main content -->


<!-- /.content -->

</body>


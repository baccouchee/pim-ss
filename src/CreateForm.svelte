<script>	import Navbar from './components/Navbar.svelte'
	let APIURL1 ="http://localhost:3000/cform";
  let nom='', quest = []
	async function submit() {
		let obj = { nom, quest};
		const res = await fetch(APIURL1, {
			 method: 'POST',
			 body: JSON.stringify(obj),
			 headers:{
                'Content-Type': 'application/json'
               }
			});
		   console.log(await res.json());
       if(res.status == 200) {
        console.log('ouii');
}
else
{
  console.log('nooon');
}
	}

let nbchamps = 1;
  function handleClick() {
    nbchamps += 1;
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
                  <h3 class="card-title">Création formulaire</h3>
                </div>
  
         
              
        
                 
                <!-- /.card-header -->
                <!-- form start -->
     
       
                  <div class="card-body">
           
                    <div class="form-group">
                      <label  for="exampleInputEmail1" >Nom du Formulaire</label>
                      <input   bind:value={nom} type="text" class="form-control" id="exampleInputEmail1" placeholder="">
                     
                      {#each Array(nbchamps) as _, i}
                   
                      <label for="exampleInputEmail1" >Question numero</label>
                   <div>
                      <input 
                 
                        class="form-control"
                        bind:value={quest[i]}
                        placeholder="Question"
                      /> <br/>
                    </div>
                
                      {/each}
                    </div>
                  
                  </div>
                  <!-- /.card-body -->
                  <div class="card-footer">
                    <button type="submit" on:click="{() => submit()}" class="btn btn-success">Add</button>
                  </div>
              
              
                <div class="card-footer">
                <button class="btn btn-success" on:click={handleClick}>
                  Clicked {nbchamps}
                  {nbchamps === 1 ? "time" : "times"}
                </button>
              </div>
                  
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
  
  
<script>
  import router from "page"
  import Login from './Login.svelte'
  import RegisterForm from "./RegisterForm.svelte";
  import LoginForm from './LoginForm.svelte' 
  import OneForm from './OneForm.svelte' 
  import CreateForm from "./CreateForm.svelte"
  let page

  router('/dashboard', () => page = Login)
router('/login', () => page = LoginForm)
router('/register', () => page = RegisterForm)
router('/myform', () => page = OneForm)
router('/cform', ()=> page =CreateForm)
router.start()
</script> 

<svelte:component this="{page}"/>



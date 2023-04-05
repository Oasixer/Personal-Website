<script>
  import { createEventDispatcher } from 'svelte';
  
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
  let trashIcon = faTimesCircle;
  export let mobile;
  
  const dispatch = createEventDispatcher();
  const click = () => dispatch('click');

</script>

<style>
  /* Invisible button that wraps around the X symbol for deleting stuff */
  button{
    background-color: transparent;
    border: none;
    color: red;
    padding: 0px;
    width: fit-content;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 25px;
    cursor: pointer;
    border-radius: 50%;
  }
  button.mobile{
    top: 15px;
    right: 15px;
    font-size: 18px;
  }
  button:active{
    outline: none;
  }

</style>

<button on:click class:mobile>
  <Fa icon={trashIcon}/>
</button>

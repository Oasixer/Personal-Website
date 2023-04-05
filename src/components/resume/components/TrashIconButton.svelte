<script>
  import { createEventDispatcher } from 'svelte';
  
  // import Icon from 'fa-svelte';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
  let trashIcon = faTimesCircle;
  
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
    position: relative;
    margin-left: auto;
    top: 0px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 50%;
  }

</style>

<button on:click>
  <Fa icon={trashIcon}/>
</button>

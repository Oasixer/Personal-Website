<script>
  import { createEventDispatcher } from 'svelte';
  export let prev;
  

  import Fa from 'svelte-fa/src/fa.svelte';
  import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
  import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
  let nextIcon = faChevronCircleRight;
  let prevIcon = faChevronCircleLeft;
  
  const dispatch = createEventDispatcher();
  const click = () => dispatch('click');

</script>

<style>
  /* Invisible button that wraps around the X symbol for deleting stuff */
  button{
    z-index: 1000;
    background-color: transparent;
    border: none;
    color: #0078b4;
    font-weight: 500;
    padding: 0px;
    width: fit-content;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    position: absolute;
    font-size: 45px;
    margin-top: -22px;
    top:50%;
    cursor: pointer;
    border-radius: 50%;
  }
  button.prev{
    left: -70px;
  }
  button.next{
    right: -70px;
  }
  button:active{
    outline: none;
  }
  button:focus{
    outline: none;
  }

</style>

<div style="margin: 0; padding: 0;" on:click>
  <button class:next={!prev} class:prev>
    <Fa icon={prev?prevIcon:nextIcon} />
  </button>
</div>

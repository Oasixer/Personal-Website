<script>
  export let items;
  export let single=false;
  export let title=undefined;
  import TrashIconButton from './TrashIconButton.svelte';
  import { onMount } from 'svelte'; 
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  const dispatchClose = () => {
    dispatch('close');
    // console.log('close');
    refresh();
  };

  function refresh(){
    items = [...items];
  }

  onMount(async => {
  });



</script>

<style>
  div.row{
    display: flex;
    flex-flow: row nowrap;
  }

  div.individual{
    background-color: #999999;
  }

  /* The container */
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #2196F3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 6px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  input[type="number"]{
    width: 54px;
    text-align: center;
    font-size: 16px;
    height: 25px;
    margin-right: 8px;
  }
  input[type="text"]{
    width: 100%;
    font-size: 12px;
    height: 25px;
    margin-right: 8px;
  }

  div.list-controls-outer{
    background-color: #cccccc;
  }

  h4{
    margin: 0;
  }

</style>

<div class="list-controls-outer">
  {#if single != true || title != undefined}
    <div class="row">
      <h4>{title ? title : 'List Controls'}</h4>
      <TrashIconButton on:click={dispatchClose}/>
    </div>
  {/if}
  {#each items as item}
    <div class="individual">
      {#if single != true}
        <h4><b>title:</b> {item.title}</h4>
      {/if}
      <div class="row">
        <button on:click={()=>{item.title_alt=(item.title_alt?undefined:item.title)}}>
          {item.title_alt===undefined ? "Create alt title" : "Remove alt title"}
        </button>
        {#if single && (title == undefined)}
          <TrashIconButton on:click={dispatchClose}/>
        {/if}
      </div>
      {#if item.title_alt !== undefined}
        <div class="row">
          <span><b>title_alt: </b></span>
          <input type="text" bind:value={item.title_alt}>
        </div>
      {/if}
      <div class="row">
        <input type="number" bind:value={item.order}>
        <label>Order</label>
      </div>
      <label class="container">Force Hide
        <input type="checkbox" bind:checked={item.force_hide}>
        <span class="checkmark"></span>
      </label>
    </div>
{/each}
</div>

<script>
  import Header from '../resume/components/Header.svelte';
  
  export let bg_color;
  export let height=undefined;
  export let mobile;
  
  let contactElement;
  // import { onMount } from 'svelte';
  // onMount(async => {
  //   const bar = () => {
  //     height = contactElement.offsetHeight;
  //   }
  //   setTimeout(bar, 10);
  // });
</script>

<style>
  div#contact{
    width: 100%;
    background-color: #161a28;
    padding: 70px;
    padding-bottom: 75px;
    padding-top: 90px;
    display: flex;
    flex-flow: column nowrap;
  }

  div#contact.mobile{
    padding: 80px 20px 80px 20px;
  }

  h1{
    /* font-size: 70px; */
    text-transform: uppercase;
    color: #f3f5f4;
    /* font-weight: 100; */
    /* font-family: "DIN Condensed Web", "Open Sans", "Helvetica", sans-serif; */
    margin-bottom: 25px;
  }

  h1.mobile{
    /* font-size:24px; */
    /* font-weight: 500; */
    max-width:100%;
    overflow-wrap: normal;
  }

  h2{
    /* color: #a1a2a3; */
    color: #f3f5f4;
    /* text-transform: uppercase; */
    /* font-family: "DIN Condensed Web", "Open Sans", sans-serif; */
    text-align: center;
    margin-bottom: 50px;
  }

  hr{
    color: #f3f5f4;
  }
</style>

<div id='contact'
  bind:this={contactElement}
  style="background-color: {bg_color}"
  class:mobile
  bind:offsetHeight={height}>
  <h1 class:mobile>contact</h1>
  {#if !mobile}
    <h2>Kaelan Moffett-Steinke</h2>
  {/if}
  <Header standalone={true}/>
  <hr>
</div>

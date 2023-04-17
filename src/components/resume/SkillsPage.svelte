<script>
  export let bg_color;
  export let height=undefined;
  export let mobile;
  import Skills from './sections/Skills.svelte';
  
  let skillsElement;
  import { onMount, createEventDispatcher } from 'svelte';
  onMount(async => {
    const bar = () => {
      height = skillsElement.offsetHeight;
    }
    setTimeout(bar, 10);
  });
  
</script>

<style>
  div#skills{
    width: 100%;
    padding: 70px;
    display: flex;
    flex-flow: column nowrap;
  }

  div#skills.mobile{
    padding: 60px 20px 60px 20px;
  }

  h1{
    /* font-size: 70px; */
    /* text-transform: uppercase; */
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
    margin-bottom: 10px;
  }
</style>

<div id='skills'
  style="background-color: {bg_color}"
  class:mobile
  bind:this={skillsElement}
  bind:offsetHeight={height}>
  <!-- <h1 class:mobile>Skills</h1> -->
  <h1 class="font-headerBold text-7xl text-white uppercase">
    Skills</h1>
  <Skills {mobile} embedded={true}/>
</div>

<script>
  export let height=undefined;
  import WorkExperience from './sections/WorkExperience.svelte';
  export let mobile;
  import { onMount, createEventDispatcher } from 'svelte';
  export let bg_color;
  let width;
  let wide;
  $: wide = width?width>1000:false;
  
  let workElement;
  onMount(async => {
    const bar = () => {
      height = workElement.offsetHeight;
    }
    setTimeout(bar, 10);
  });
</script>

<style>
  div#workexperience{
    width: 100%;
    padding: 70px;
    display: flex;
    flex-flow: column nowrap;
  }
  
  div#workexperience.mobile{
    padding: 60px 20px 60px 20px;
  }

  h1{
    font-size: 70px;
    text-transform: uppercase;
    color: #f3f5f4;
    font-weight: 100;
    font-family: "DIN Condensed Web", "Open Sans", "Helvetica", sans-serif;
    margin-bottom: 25px;
  }
  h1.mobile{
    font-size:24px;
    font-weight: 500;
    max-width:100%;
    overflow-wrap: normal;
    margin-bottom: 7px;
  }
	div#workExperienceWrap{
		margin: 0;
		padding: 0;
		width: 100vw;
		max-width: 930px;
		margin: 0 auto 0 40px;
	}
</style>

<svelte:window bind:outerWidth={width}/>

<div id='workexperience'
  class:mobile
  style="background-color: {bg_color}"
  bind:this={workElement}
  bind:clientHeight={height}>
  <h1 class:mobile>Work Experience</h1>
	<div id='workExperienceWrap'>
		<WorkExperience embedded={true} {mobile}/>
	</div>
</div>

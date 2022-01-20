<script>
  export let height=undefined;
  export let bg_color; // unused bc we use a seperate color for home
  export let mobile;

  import { onMount, createEventDispatcher } from 'svelte';

  let src_climb = './images/climb.jpg';
  let src_frc = './images/frc.jpg';
  let src_windsurf = './images/windsurf.jpg';
  let src_icesurf = './images/icesurf.jpg';
  let src_kayak = './images/kayak.jpg';
  let src_new = './images/new.jpg';
  let src_helmet = './images/helmet.jpg';
  
  let homeElement;
  let mounted = false;
  onMount(async => {
    const bar = () => {
      height = homeElement.offsetHeight;
    }
    setTimeout(bar, 10);
    mounted = true;
  });
</script>

<style>
  img{
    border-radius: 7px;
  }
  div#home{
    width: 100%;
    /* height: 100vh; */
    background-color: #400857;
    display: flex;
    flex-flow: column nowrap;
    padding: 40px 15px 40px 15px;
  }
  div#home.mobile{
    padding: 15px;
  }

  h1#title{
    margin:0;
    letter-spacing: 4px;
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 50px;
    color: #ffe32e;
    /* position: absolute; */
    /* z-index: 2; */
    /* top: 40px; */
    /* left: 5%; */
    margin: 0;
    padding: 0;
  }

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}

/* Create four equal columns that sits next to each other */
.column {
  /* flex: 0 1 1; */
  flex: 33.3%;
  max-width: 33.3%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>

<div id='home' class:mobile bind:offsetHeight={height} bind:this={homeElement}>
  {#if mobile === false && mounted}
    <h1 id='title'>Kaelan Moffett</h1>
  {/if}
  <div class="row">
    <div class="column">
      <img id='helmet-pic' src={src_helmet}/>
      <img id='climb-pic' src={src_climb}/>
    </div>
    <div class="column">
      <img id='new-pic' src={src_new}/>
      <img id='kayak-pic' src={src_kayak}/>
    </div>
    <div class="column">
      <img id='frc-pic' src={src_frc}/>
      <img id='wind-pic' src={src_windsurf}/>
    </div>
  </div>
</div>

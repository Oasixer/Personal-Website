<script>
  export let height=undefined;
  export let bg_color; // unused bc we use a seperate color for home
  export let mobile;

  import { onMount, createEventDispatcher } from 'svelte';
  import { clsMerge } from '../util';

  let on = false;

  // let src_climb = './images/climb.jpg';
  // let src_tobermory = './images/tobermory_climb.jpg';
  // let src_seattle = './images/seattle.jpg';
  // let src_frc = './images/frc.jpg';
  // let src_windsurf = './images/windsurf.jpg';
  // let src_icesurf = './images/icesurf.jpg';
  // let src_kayak = './images/kayak.jpg';
  // let src_new = './images/new.jpg';
  // let src_new_cropped = './images/new_cropped.jpg';
  // let src_helmet = './images/helmet.jpg';
  // let src_symposium = './images/symposium.jpg';
  // // let src_underwater = './images/underwater.jpg';
  // let src_underwater = './images/cheque.jpg';

  // let images = [src_tobermory, src_new_cropped, src_helmet,
  //   src_seattle, src_underwater, src_symposium];
 
  let images = ["yosemite.jpg", "new_cropped.jpg", "helmet.jpg",
                "icesurf.jpg", "deeptrekker.gif", "seattle.jpg",
                "tobermory_climb.jpg", "underwater.jpg", "climb.jpg"]
  let imagesBase = "./images/home/";
  
  
  let homeElement;
  let mounted = false;
  // onMount(async => {
  //   const bar = () => {
  //     height = homeElement.offsetHeight;
  //   }
  //   setTimeout(bar, 10);
  //   mounted = true;
  // });
</script>

<style lang="postcss">
  *{
      box-sizing: border-box;
  }
  /*
  img{
    border-radius: 7px;
  }
  div#home{
    width: 100%;
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
  }
  */
    /* position: absolute;/*
    /* z-index: 2; */
    /* top: 40px; */
    /* left: 5%; */
    /*
    margin: 0;
    padding: 0;
  }
  /*

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


<div id='home' class:mobile bind:offsetHeight={height} bind:this={homeElement}
 class="w-full bg-blue-bgOuter my-0 flex flex-col">
  <!-- {#if mobile === false && mounted} -->
    <h1 id='title' class="font-thicc8 text-sz5xl mx-auto text-grey-00 mt-8 mb-4" style="max-width: fit-content;">Kaelan Moffett</h1>
    <ul class="max-w-xl mx-auto">
    <li class="text-body font-body text-white">
    I'm a Mechatronics Engineering graduate specializing in software.
    </li>
    <li class="text-body font-body text-white mt-4">
    I have completed 6 software engineering internships, most recently at Nvidia, and I am looking for fulltime opportunities in the US.
    </li>
    </ul>
  <!-- {/if} -->
  <!-- {#if mobile} -->
  <!--   {#each images as image} -->
  <!--     <div style="display: flex; flex-flow: column nowrap; gap: 10px;"> -->
  <!--       <div class="w-full rounded-xl overflow-hidden"> -->
  <!--         <img src={imagesBase+image} alt=""/> -->
  <!--       </div> -->
  <!--     </div> -->
  <!--   {/each} -->
  <!-- {:else} -->
    <div class="container grid grid-cols-3 gap-3 mx-auto max-w-xl mx-auto mb-3">
      {#each images as image}
        <div class="w-full rounded-xl overflow-hidden">
          <img src={imagesBase+image} alt=""/>
        </div>
      {/each}
    </div>
  <!-- {/if} -->
  <div class="h-[1px] bg-grey-600 mt-14"></div>
</div>

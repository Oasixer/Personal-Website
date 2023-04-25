<script>
  export let height=undefined;
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
</style>


<div id='home' bind:offsetHeight={height} bind:this={homeElement}
     class="w-full bg-blue-bgOuter my-0 flex flex-col p-2 pb-0"><!--  note: if you have bottom padding it will frick up the element height for lining up section below -->
  <!-- {#if mobile === false && mounted} -->
    <!-- <h1 id='title' class="font-thicc8 text-sz5xl mx-auto text-grey-00 mt-8 mb-4" style="max-width: fit-content;">Kaelan Moffett</h1> -->
    <div class="flex flex-row items-center justify-center gap-3 w-full uppercase text-sz4xl md:text-sz6xl mt-5 mb-3">
      <h1 class="text-white font-thicc3"
          >
          Kaelan</h1>
      <h1 class="text-white font-thicc8"
          >
          Moffett</h1>
    </div>
    <ul class="max-w-xl mx-auto">
    <li class="text-body font-body text-white">
    I'm a Mechatronics Engineering graduate specializing in software, especially backend, cloud, and distributed systems.
    </li>
    <li class="text-body font-body text-white mt-4 mb-3">
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

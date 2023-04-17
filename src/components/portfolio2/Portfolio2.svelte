<script lang="ts">
  import type { ProjMeta, PortfolioState, FilterFn, LanguageInfo } from './project';
  import { projects } from './portfolio_content';
  import { LANGUAGES } from './project';
  import ProjImgConst from './project';
  import ProjectThumb from './ProjectThumb.svelte';
  import ProjectCard from './ProjectCard.svelte';
  import ProjectImageScroller from './ProjectImageScroller.svelte';
  import ProjectLanguagesIconStack from './ProjectLanguagesIconStack.svelte';
  import { vp } from '../viewport';
  import type { VP } from '../viewport';
  import Toggle from '../components/Toggle.svelte';

  let portfolioElement: HTMLElement;

  export let height: number=0;

  export let pstate: PortfolioState = {
    active: false,
    proj_idx: 1,
    expand_all: false,
    filter_fn: (langs: string[], lang: string) => { return true },
    n_projects: projects.length
  };

  // $: console.log(projects);

  let topProj: ProjMeta = projects[0];
  let middleProj: ProjMeta = projects[1];
  let bottomProj: ProjMeta = projects[2];

  function advance_proj(down: boolean, keyboard: boolean){
    projects[pstate.proj_idx].selected_img = 0;
    if (!keyboard){
      if (down){
        bottomProj.thumb_hovered = false; // current middle proj is the one that was hovered before, but is no longer since
        projects[pstate.proj_idx + 2].thumb_hovered = true;
      }
      else{
        topProj.thumb_hovered = false;
        projects[pstate.proj_idx - 2].thumb_hovered = true;
      }
    }
    if (down === true){
      pstate.proj_idx += 1;
      // pstate = {...pstate};
    }
    else if (down === false){
      pstate.proj_idx -= 1;
    }
    else{
      while(true){
        console.log("uh oh"); // todo remove, temp
      }
    }
    topProj = projects[pstate.proj_idx - 1];
    middleProj = projects[pstate.proj_idx];
    bottomProj = projects[pstate.proj_idx + 1];
  }

  function click_thumb_advance_proj(event: any){
    console.log("click_thumb_advance_proj rec");
    let down: boolean = event.detail.down;
    advance_proj(down, false);
  }

  // let maxProjectCardHeightUnexpanded = maxCardHeight(200);
  function maxOuterCardHeightUnexpanded(vpHeight: number): number{
    // console.log("maxCardHgt");
    console.log("vpHeight: ", vpHeight);
    return vpHeight - 100;
  }

  // function chooseVisibleProjects(pstate: PortfolioState, projects: ProjMeta[]): ProjMeta[]{
  //    if (pstate.proj_idx == 1){
  //
  //      // return projects.slice(0, 3);
  //    }
  //    return projects.slice(pstate.proj_idx-1, pstate.proj_idx+2);
  //    
  // }

  import { onMount } from 'svelte';
  onMount(async () => {
    const setHeight = () => {
      height = portfolioElement.offsetHeight;
    }
    setTimeout(setHeight, 10);
  });

  function toggle_on_callback(){
    pstate.expand_all = true;
    // todo trigger whoever needs to know abt this?
  }
  function toggle_off_callback(){
    pstate.expand_all = false;
    // todo trigger whoever needs to know abt this?
  }
</script>

<div id='portfolio2'
  class="bg-blue-bgOuter w-full my-0 flex flex-col items-center"
  style="height: 1200px;"
  bind:this={portfolioElement}
  bind:offsetHeight={height}>
  <!-- <div class="h-[48px] bg-white"> <!-- may contain menubar -->
  <!-- </div> -->
  <div id="portfolio-gradient-card"
       class="rounded-xl gap-5 flex flex-col px-12 pb-12 border-2 border-grey-0 bg-blue-bgOuter h-full"
       style="max-height: {maxOuterCardHeightUnexpanded($vp.height)}px;"
  > <!-- update height to something smart like calculate vw - 48px in the js later -->

    <!-- row containing header -->
    <div class="w-full flex flex-row flex-nowrap items-center gap-4 mb-[-10px]">
      <!-- <h1 class="font-thicc8 uppercase text-sz5xl text-grey-00 mr-auto"> -->
      <h1 class="font-thicc8 uppercase text-sz5xl text-grey-00 mr-auto">
        Portfolio
      </h1>
      <Toggle on:toggle_on_callback={toggle_on_callback} on:toggle_off_callback={toggle_off_callback} title={"Expand All"}/>
      <div class="flex flex-col">
        <p class="font-rubik5 text-grey-00">
          use j/k to scroll projects
        </p>
        <p class="font-rubik5 text-grey-00">
          use h/l to scroll images
        </p>
      </div>
    </div> <!-- end of header row -->
    <!-- next element of card col, if not expand_all -->
    {#if pstate.expand_all}
      {#each projects.slice(1,-1) as proj}
        <div class="flex flex-col w-fit content-center gap-4">
          <ProjectCard pstate={pstate} {proj}/>
        </div>
      {/each}
    {:else}
      <!-- = normal row layout, thumbnails on the left -->
      <div class="w-full h-full flex flex-row flex-nowrap content-align gap-12">
        {#if !pstate.expand_all}
          <div class="flex flex-col w-fit content-center gap-4">
            <!-- {#each visibleProjects as proj} -->
              <ProjectThumb proj={topProj} pstate={pstate} on:click_thumb_advance_proj={click_thumb_advance_proj}/>
              <ProjectThumb proj={middleProj} pstate={pstate} on:click_thumb_advance_proj={click_thumb_advance_proj}/>
              <ProjectThumb proj={bottomProj} pstate={pstate} on:click_thumb_advance_proj={click_thumb_advance_proj}/>
            <!-- {/each} -->
              <Toggle on:toggle_on_callback={toggle_on_callback} on:toggle_off_callback={toggle_off_callback} title={"Expand All"}/>
          </div>
        {:else}
        {/if}

        <!-- expanded project card -->
        <!-- may need to change to bind: \/ -->
        <ProjectCard pstate={pstate} proj={projects[pstate.proj_idx]}/>
      </div> <!-- end of normal row layout, thumbnails on the left -->
    {/if}
  </div> <!-- end of main portfolio gradient card -->
</div>
<style>
  #portfolio-gradient-card{
    /* background: radial-gradient(25.79% 32.06% at 63.37% 57.26%, rgba(102, 107, 159, 0.97) 0%, rgba(76, 81, 125, 0.97) 44.96%, rgba(23, 27, 57, 0.97) 100%); */
    /* border: 1px solid #FFFFFF; */
    /* border-radius: 16px; */
  }
</style>

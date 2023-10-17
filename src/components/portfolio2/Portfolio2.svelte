<script lang="ts">
  import type { ProjMeta, PortfolioState, FilterFn, LanguageInfo } from './project';
  import { projects } from './portfolio_content';
  import { show_pinguins_modal, LANGUAGES, highlight_hjkl } from './project';
  import ProjImgConst from './project';
  import ProjectThumb from './ProjectThumb.svelte';
  import ProjectCard from './ProjectCard.svelte';
  import PortfolioControls from './PortfolioControls.svelte';
  import TrashIconButton from '@components/TrashIconButton.svelte';
  import ProjectImageScroller from './ProjectImageScroller.svelte';
  import ProjectLanguagesIconStack from './ProjectLanguagesIconStack.svelte';
  import { goToPortfolio } from '@viewport';
  // import type { VP } from '../viewport';
  import Toggle from '../components/Toggle.svelte';
  import Dashboard from '@pinguins/Dashboard.svelte';

  let portfolioElement: HTMLElement;

  export let height: number=0;
  let pinguinsModal: any = undefined;

  export let pstate: PortfolioState = {
    active: false,
    proj_idx: 1,
    expand_all: false,
    force_expand_all: false,
    filter_fn: (langs: string[], lang: string) => { return true },
    n_projects: projects.length,
    shouldColorKeywords: true,
  };

  let loaded = {};
  for (const proj in projects){
    loaded[get_src(proj)] = false;
  }

  function preload(src: string) {
    if (loaded[src]) return;
    loaded[src] = true;
    return new Promise(function(resolve) {
      let img = new Image()
      img.onload = resolve
      img.src = src
    })
  }

  // $: console.log(projects);
  function get_src(proj: ProjMeta){
    return ProjImgConst.IMAGES_BASE_DIR+proj.dir+'/thumb.png';
  }

  let topProj: ProjMeta = projects[0];
  let middleProj: ProjMeta = projects[1];
  let bottomProj: ProjMeta = projects[2];
  // let preload1: string = get_src(projects[3]);
  // let preload2: string = get_src(projects[4]);

  let beginMoving = false;
  // let beginbeginMoving = false;

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
      highlight_hjkl.set({'h':false,'j':true,'k':false,'l':false});
      setTimeout(()=>{highlight_hjkl.set({'h':false,'j':false,'k':false,'l':false})}, 500);
    }
    else if (down === false){
      pstate.proj_idx -= 1;
      highlight_hjkl.set({'h':false,'j':false,'k':true,'l':false});
      setTimeout(()=>{highlight_hjkl.set({'h':false,'j':false,'k':false,'l':false})}, 500);
    }
    else{
    }
    topProj = projects[pstate.proj_idx - 1];
    middleProj = projects[pstate.proj_idx];
    bottomProj = projects[pstate.proj_idx + 1];

    // let preload1: string;
    // let preload2: string;
    // if (pstate.proj_idx + 2 < pstate.n_projects - 1){
    //   preload1 = get_src(projects[pstate.proj_idx+2]);
    //   preload(preload1);
    // }
    // if (pstate.proj_idx + 3 < pstate.n_projects - 1){
    //   preload2 = get_src(projects[pstate.proj_idx+3]);
    //   preload(preload2);
    // }

  }

  function click_thumb_advance_proj(event: any){
    console.log("click_thumb_advance_proj rec");
    let down: boolean = event.detail.down;
    advance_proj(down, false);
  }

    import { quintOut } from 'svelte/easing';
    import { crossfade } from 'svelte/transition';

    const [send, receive] = crossfade({
      duration: d => Math.sqrt(d * 200),

      fallback(node, params) {
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;

        return {
          duration: 600,
          easing: quintOut,
            // transform: ${transform} scale(${t});
          css: t => `
            opacity: ${t}
          `
        };
      }
    });

  import { onMount } from 'svelte';
  onMount(async () => {
    const setHeight = () => {
      height = portfolioElement.offsetHeight;
    }
    setTimeout(setHeight, 10);
  });

  function toggle_expand(){
    // beginbeginMoving = true;
    // pstate.expand_all = true;
      pstate.expand_all = true;
      pstate = {...pstate};
    // setTimeout(
    // ()=>{
    //   beginMoving=true;
    //   // pstate.expand_all = true;
    // }, 1000);
  }

  $: console.log("pstate from Portfolio: ", pstate);

	const handle_keydown = e => {
    console.log("key!", e.key);
		if (e.key === 'j') {
      // -2 to account for dummy project icon
      if (pstate.proj_idx >= pstate.n_projects - 2){
          return;
      }
      advance_proj(true, true);
      $goToPortfolio();
			return;
		}
		if (e.key === 'k') {
      if (pstate.proj_idx <= 1){
          return;
      }
      advance_proj(false, true);
      $goToPortfolio();
			return;
		}
		if (e.key === 'l') {
      if (middleProj.selected_img >= middleProj.images.length - 1){
        return; 
      }
      let newMid = {...middleProj};
      middleProj.selected_img += 1;
      middleProj = {...bottomProj};
      middleProj = {...newMid};
      // middleProj.selected_img += 1;
      // middleProj = {...middleProj}; // for reactivity
      // middleProj = []; // for reactivity
			return;
		}
		if (e.key === 'h') {
      if (middleProj.selected_img <= 0){
        return; 
      }
      middleProj.selected_img -= 1;
      middleProj = {...middleProj}; // for reactivity
			return;
		}
		// if (e.key === 'Tab') {
			// trap focus
		// 	const nodes = modal.querySelectorAll('*');
		// 	const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);
		//
		// 	let index = tabbable.indexOf(document.activeElement);
		// 	if (index === -1 && e.shiftKey) index = 0;
		//
		// 	index += tabbable.length + (e.shiftKey ? -1 : 1);
		// 	index %= tabbable.length;
		//
		// 	tabbable[index].focus();
		// 	e.preventDefault();
		// }
	};
</script>

<svelte:window on:keydown={handle_keydown}/>

  <!-- style="height: {(pstate.expand_all || pstate.force_expand_all)?'fit-content;': '1200px;'}" -->
<div id='portfolio2'
  class="bg-blue-bgOuter w-full my-0 flex flex-col items-center gap-5 flex-nowrap md:px-12 pb-12 pt-4 relative"
  style="height: {()=>{return (pstate.expand_all || pstate.force_expand_all)?'fit-content;': '1200px;'}}"
  bind:this={portfolioElement}
  bind:offsetHeight={height}>
  <!-- <div class="h-[48px] bg-white"> <!-- may contain menubar -->
  <!-- </div> -->
  <!-- <div id="portfolio-gradient-card" -->
  <!--      class="rounded-xl gap-5 flex flex-row flex-nowrap px-12 pb-12 pt-3 border-0 border-grey-0 bg-blue-bgOuter h-full" -->
  <!--      style="max-height: {maxOuterCardHeightUnexpanded($vp.height)}px;" -->
  <!-- >  -->
  <!-- update height to something smart like calculate vw - 48px in the js later -->

    <!-- row containing header -->
    <!-- <div class="w-full flex flex-row flex-nowrap items-center gap-4 mb-[-10px]"> -->
    <!--   <h1 class="font-thicc8 uppercase text-sz5xl text-grey-00 mr-auto"> -->
    <!--     Portfolio -->
    <!--   </h1> -->
    <!--   <Toggle on:toggle_on_callback={toggle_on_callback} on:toggle_off_callback={toggle_off_callback} title={"Expand All"}/> -->
    <!--   <div class="flex flex-col"> -->
    <!--     <p class="font-rubik5 text-grey-00"> -->
    <!--       use j/k to scroll projects -->
    <!--     </p> -->
    <!--     <p class="font-rubik5 text-grey-00"> -->
    <!--       use h/l to scroll images -->
    <!--     </p> -->
    <!--   </div> -->
    <!-- </div> <!-- end of header row -->
    <!-- next element of card col, if not expand_all -->
      <!-- = normal row layout, thumbnails on the left -->

  {#if (pstate.expand_all || pstate.force_expand_all)}
    <div class="flex flex-col w-fit items-center gap-4">
      <div class="flex flex-row flex-nowrap h-fit items-center w-full">
        <h1 class="font-thicc8 uppercase text-sz5xl text-white w-fit mr-auto"
            class:mt-auto={pstate.expand_all || pstate.force_expand_all}>
          Portfolio
        </h1>
        <!-- <PortfolioControls bind:pstate/> -->

        <!-- <div> -->
          <!-- in:receive="{{key: 1}}" -->
          <!-- out:send="{{key: 1}}"> -->
            <!-- {#if beginMoving} -->
            <!-- {/if} -->
        <!-- </div> -->
      </div>
      <!-- {#if beginMoving} -->
        {#each projects.slice(1,-1) as proj}
            <ProjectCard bind:pstate={pstate} {proj}/>
        {/each}
      <!-- {/if} -->
    </div>
  {:else}
    <div class="w-fit h-full flex flex-nowrap content-align gap-4">
      <div class="flex flex-col gap-4 w-[325px] min-w-[325px] max-w-[325px]">
        <!-- moving header shit here -->
        <h1 class="font-thicc8 uppercase text-sz5xl text-white mr-7 mb-[-12px] ml-auto">
          Portfolio
        </h1>
        <!-- {#each visibleProjects as proj} -->
        <ProjectThumb proj={topProj} pstate={pstate} on:click_thumb_advance_proj={click_thumb_advance_proj}/>
        <ProjectThumb proj={middleProj} pstate={pstate} on:click_thumb_advance_proj={click_thumb_advance_proj}/>
        <ProjectThumb proj={bottomProj} pstate={pstate} on:click_thumb_advance_proj={click_thumb_advance_proj}/>
        
      <!-- $: thumb_src = ProjImgConst.IMAGES_BASE_DIR+proj.dir+'/thumb.png'; -->
        <!-- <img src={preload1} preload/> -->
        <!-- <img src={preload2} preload/> -->

        <!-- <div> -->
          <!-- in:receive="{{key: 1}}" -->
          <!-- out:send="{{key: 1}}"> -->
              <PortfolioControls bind:pstate on:toggle_expand={toggle_expand}/>
            <!-- {/if} -->
        <!-- </div> -->
      </div>
      <!-- {#if !beginbeginMoving} -->
        <ProjectCard bind:pstate={pstate} proj={projects[pstate.proj_idx]}/>
      <!-- {/if} -->
    </div>
  {/if}
  {#if $show_pinguins_modal}
  <div class="absolute flex flex-col"
       style="height: {height}px; margin-top: 0px; z-index:100;">
    <div class="flex flex-row flex-nowrap">
      <div class="bg-red-800">
        This feature only 50% implemented, missing some icons, style, explanation. TODO
        If you are reading this now, before it's ready, this is basically a video of us demoing the robot.
        Then, since the dashboard UI wasn't ready during that demo footage, the data from the video is replayed
        through the dashboard in realtime, sync'd with the video.

        But it's still broken at the moment.
      </div>
      <TrashIconButton on:click={()=>{show_pinguins_modal.set(false)}}/>
    </div>
    <Dashboard/>
  </div>
  {/if}
  <div class="h-[1px] w-[100%] bg-grey-600 mt-14"></div>
</div>
<!-- </div> -->

  <!-- <PinguinsModal on:close={() => show_pinguins_modal.set(false)} bind:this={pinguinsModal}> -->
	<!-- </PinguinsModal> -->

<!-- {/if} -->
<style lang="postcss">
</style>

<script lang="ts">
  import type { ProjMeta, PortfolioState, FilterFn, LanguageInfo } from './project';
  import ProjectImageScroller from './ProjectImageScroller.svelte';
  import ProjectLanguagesIconStack from './ProjectLanguagesIconStack.svelte';
  import TextCol from './TextCol.svelte';
  import ProjImgConst from './project';
  import { get } from 'svelte/store';

  import { sz, SZ_MED, SZ_XS, sz_xs_scale_to_vp } from './project';
  import type { Sizes } from './project';

  import { vp, LAYOUT } from '../viewport';
  import type { VP } from '../viewport';

  export let pstate: PortfolioState;
  export let proj: ProjMeta;
  // export let

  // dont really need reactivity from pstate updates,
  // provided that we run this when expand_all is triggered
  function updateWidths(_vp: VP, _pstate: PortfolioState){
    console.log("updateWidths _vp: ", _vp);
    if (_vp.width === 0){ // not really loaded yet, stick with medium
      // _pstate.force_expand_all = false;
      // sz.set(
      //   SZ_XS
      // );
    }
    // else if (_vp.layout < LAYOUT['lg']){
    else if (_vp.layout < LAYOUT['md']){
      _pstate.force_expand_all = true;
      // _pstate = {...}
      pstate = {..._pstate};
      console.log("Mobile?? ", _vp.layout, "(cur layout)< med: ", LAYOUT['md']);
      console.log("Mobile?? ", _vp.width);
      // todo set whatever
      sz.set(
        sz_xs_scale_to_vp(_vp)
        // pcard_width: 
        // full_width: _vp.width 
      );
    }
    else{
      _pstate.force_expand_all = false;
      sz.set(
        SZ_MED
      );
    }
  }

  vp.subscribe((_vp) => {
    console.log('vp subscriber: ', _vp);
    updateWidths(_vp, pstate);
  });
  // $: updateWidths(vp, pstate);
  
  import { onMount, createEventDispatcher } from 'svelte';
  onMount(() => {
    console.log("onMount updateWidths:");
    updateWidths($vp, pstate);
    // const bar = () => {
        // balanceHeights(proj);
        // console.log("vp.width:", $vp.width);
      // height = skillsElement.clientHeight;
      // newWidth = 50;
    // setTimeout(bar, 20);
  });

  // let portfolio_card_available_width = ProjImgConst.FULL_WIDTH + ProjImgConst.ICON_STACK_WIDTH + ProjImgConst.SEP+1;
</script>


<!--project_card"-->
<div 
     class="flex items-start md:items-center h-fit mb-auto bg-blue-bgOuter rounded-xl border-2 border-grey-2"
     style="{$vp.layout < LAYOUT['md']?'max-width: '+$vp.width+'px; padding: 10px;':'padding: '+ProjImgConst.CARD_PAD+'px;'}">
     <!-- min-width: {$sz.pcard_width}px;"> -->
     <!-- max-width: {$vp.pcard_width}px"> -->

  <!-- project title in expanded card -->
  <h1 class="font-thicc5 text-szBase md:text-sz3xl text-white mb-3" style="max-width: {$sz.pcard_content_width}px;">
    {proj.name}
  </h1>

  <!-- row w/ image scroller | ProjectLanguagesIconStack -->
  <div class="flex w-full gap-0"
       style='{$vp.layout<LAYOUT["md"]?"flex-flow: column nowrap; ":"flex-flow: row nowrap"}'>
    <ProjectImageScroller proj={proj}/>

    <!-- vertical line seperator -->
    {#if $vp.layout >= LAYOUT['md']}
      <div class="h-[full] w-[1px] min-w-[1px] bg-grey-700" style="margin: 0 {ProjImgConst.SEP/2}px;"></div>
      <!-- stack of language names w/ devicons -->
        <ProjectLanguagesIconStack proj={proj} row={false}/>
    {:else}
      <div class="w-[full] h-[1px] min-h-[1px] bg-grey-700" style="margin: {ProjImgConst.SEP/2}px 0;"></div>
      <ProjectLanguagesIconStack proj={proj} row={true}/>
    {/if}

  </div>
  <!-- horizontal line seperator -->
  <div class="h-[1px] flex-none bg-grey-700" style="margin: {ProjImgConst.SEP/2}px 0; min-height: 1px; min-width: 100%;"></div>
  <div class="flex flex-col md:flex-row flex-nowrap"
       style="width: {$sz.pcard_content_width}px; max-width: {$sz.pcard_content_width}px;">
    <TextCol title="Project Overview"
             leftColWidthFactor={proj.leftColWidthFactor}
             isSingle={proj.contributions.length === 0}
             isLeft={true} lines={proj.project_desc}
             shouldColorKeywords={pstate.shouldColorKeywords}/>
    <!-- vertical line separator -->
    {#if proj.contributions.length > 0}
      {#if $vp.layout >= LAYOUT['md']}
        <div class="w-[1px] flex-none bg-grey-700" style="min-width: 1px; min-height: 100%; margin: 0 {ProjImgConst.SEP/2+5}px 0 {ProjImgConst.SEP/2-4}px"></div>
      {/if}
      <TextCol title="My Contributions"
               isLeft={false}
               leftColWidthFactor={proj.leftColWidthFactor}
               isSingle={false}
               lines={proj.contributions}
               shouldColorKeywords={pstate.shouldColorKeywords}/>
    {/if}
  </div>
</div>
<style>
</style>

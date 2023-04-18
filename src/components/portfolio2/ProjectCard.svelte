<script lang="ts">
  import type { ProjMeta, PortfolioState, FilterFn, LanguageInfo } from './project';
  import ProjectImageScroller from './ProjectImageScroller.svelte';
  import ProjectLanguagesIconStack from './ProjectLanguagesIconStack.svelte';
  import ProjImgConst from './project';
  import { get } from 'svelte/store';

  import { sz } from './project';
  import type { Sizes } from './project';

  import { vp } from '../viewport';
  import type { VP } from '../viewport';

  import { getStoreValue } from '../resume/utils/misc'
  

  export let pstate: PortfolioState;
  export let proj: ProjMeta;
  // export let

  let leftColHeight: number;
  let rightColHeight: number;
  let leftColWidth: number;
  let rightColWidth: number;
  let newLeftColWidth: number = 0;
  let newRightColWidth: number = 0;
  
  function getIndicesOf(searchStr: string, str: string): number[] {
    let searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
  }


  // dont really need reactivity from pstate updates,
  // provided that we run this when expand_all is triggered
  function updateWidths(_vp: VP, _pstate: PortfolioState){
    if (_vp.width == 0){
        return;
      }
    if (_vp.width < 500){
      _pstate.expand_all = true;
      console.log("Mobile?? ", _vp.width);
      // todo set whatever
      sz.set({
        pcard_width: ProjImgConst.CARD_WIDTH_MOBILE
      } as Sizes);
    }
    else{
      sz.set(
        {
          full_width: ProjImgConst.CARD_WIDTH_MED - ProjImgConst.ICON_STACK_WIDTH - ProjImgConst.SEP - 1 - ProjImgConst.CARD_PAD * 2,
          full_height: (ProjImgConst.CARD_WIDTH_MED - ProjImgConst.ICON_STACK_WIDTH - ProjImgConst.SEP - 1 - ProjImgConst.CARD_PAD * 2)/ProjImgConst.THUMB_ASPECT_RATIO,
          pcard_width: ProjImgConst.CARD_WIDTH_MED,
          pcard_content_width: ProjImgConst.CARD_CONTENT_WIDTH_MED,
          text_col_width: (ProjImgConst.CARD_CONTENT_WIDTH_MED - ProjImgConst.SEP - 1) / 2,
        } as Sizes
      );
    }
  }

  vp.subscribe((_vp) => {
    updateWidths(_vp, pstate);
  });
  // $: updateWidths(vp, pstate);
  
  function split(line: string){
    const open = "<";
    const close = ">";
		let item_text = line;
		let bold_start_tag_indices = getIndicesOf(open, item_text);
		let bold_end_tag_indices = getIndicesOf(close, item_text);
		let i = 0;
		let split_item = [];
		let next;
		let next_end = 0;
		let nTEMP = 0;
		while (bold_start_tag_indices.length){
			next = bold_start_tag_indices.shift() as number;
			next_end = bold_end_tag_indices.shift() as number;
			// console.log(bold_start_tag_indices);
			if (next > i){
				split_item.push(['p',item_text.slice(i,next)]);
				split_item.push(['b',item_text.slice(next+open.length,next_end)]);
			}
			else{
				split_item.push(['b', item_text.slice(next+open.length,next_end)]);
			}
			i = next_end+close.length;
			if (nTEMP > 7){
				break;
			}
			// console.log(`it: ${nTEMP}`);
			// console.log(split_item);
			// console.log(i);
			nTEMP += 1;
		}
		// console.log(`i: ${i}`);
		// console.log(`item_text.length: ${item_text.length}`);
		if (i < item_text.length){
			split_item.push(['p',item_text.slice(i)]);
		}
		// console.log('DONE SINGLE ITEM');
		// console.log(split_item);
		return split_item;
  }

  // let rebalanceHeightsTrigger
  // $: balanceHeights(pstate); // pass in pstate just to get this to trigger when we move to next proj
  $: setTimeout(()=>{balanceHeights(proj)}, 10);
  // ugh except i can't 
  function balanceHeights(_proj: ProjMeta){
    console.log("leftColHeight: ", leftColHeight);
    console.log("rightColHeight: ", rightColHeight);
    console.log("leftColWidth: ", leftColWidth);
    console.log("rightColWidth: ", rightColWidth);
    // fucking stupid bindings are just wrong, even though all docs and examples
    // seem to indicate that these should be updating. I even put it on like 1000+ms delay from when they get re-rendered,
    // and it still shows innacurate heights, ie. will read 180px height on an element that is actually 20px tall.

    // so, fuck it, if i want the columns balanced, ill just hardcode values here for each project.

    console.log("get(sz): ", get(sz));
    newLeftColWidth = get(sz).text_col_width * _proj.leftColWidthFactor;
    // newRightColWidth = get(sz).text_col_width / _proj.leftColWidthFactor ;
    // leftColHeight = 25;
    // let fact;
    // if (leftColHeight > rightColHeight){
    //   let amount = (leftColHeight - rightColHeight)*factor;
    // newLeftColWidth = leftColWidth*_proj.leftColWidthFactor;
    // newRightColWidth = rightColWidth/_proj.leftColWidthFactor-50;
    //   newRightColWidth = rightColWidth - amount;
    // }
    // if (rightColHeight > leftColHeight){
    //   let amount = (rightColHeight - leftColHeight)*factor;
    //   newLeftColWidth = leftColWidth - amount;
    //   newRightColWidth = rightColWidth + amount;
    // }
    console.log("newLeftColWidth: ", newLeftColWidth);
    console.log("newRightColWidth: ", newRightColWidth);
  }
  import { onMount, createEventDispatcher } from 'svelte';
  onMount(() => {
    const bar = () => {
        balanceHeights(proj);
      }
      // height = skillsElement.clientHeight;
      // newWidth = 50;
    setTimeout(bar, 20);
  });

  let portfolio_card_available_width = ProjImgConst.FULL_WIDTH + ProjImgConst.ICON_STACK_WIDTH + ProjImgConst.SEP+1;
  function should_indent(line: string): boolean{
    return line.startsWith('`');
  }
</script>

<div class="flex flex-col items-center h-fit mb-auto bg-blue-bgOuter rounded-xl border-2 border-grey-2"
     style="padding: {ProjImgConst.CARD_PAD}px; min-width: {$sz.pcard_width}px; max-width: {$sz.pcard_width}px">

  <!-- project title in expanded card -->
  <h1 class="font-thicc5 text-sz3xl text-white mb-3">
    {proj.name}
  </h1>

  <!-- row w/ image scroller | ProjectLanguagesIconStack -->
  <div class="flex flex-row flex-nowrap w-full gap-3">
    <ProjectImageScroller proj={proj}/>
  <div class="h-[full] w-[1px] min-w-[1px] bg-grey-700 mx-1"></div>
    <!-- stack of language names w/ devicons -->
    <!-- <div class="flex flex-col h-full"> -->
    <ProjectLanguagesIconStack proj={proj}/>
      <!-- <div class=""></div> -->
    <!-- </div> -->
  </div>
  <!-- horizontal line seperator -->
  <div class="h-[1px] flex-none bg-grey-700 my-5" style="min-height: 1px; min-width: 100%;"></div>
  <div class="flex flex-row flex-nowrap" style="width: {$sz.pcard_content_width}px; max-width: {$sz.pcard_content_width}px;">
    <div class="flex flex-col grow h-fit w-2" style="{newLeftColWidth > 0?('max-width: '+newLeftColWidth.toString()+'px; min-width: '+newLeftColWidth.toString()+'px;'):''}" id="overview-column">

      <!-- w-fit ml-[-6px]"> -->
      <h1 class="font-rubik5 text-szLg text-grey-00">
        Project Overview
      </h1>
      <ul class="list-disc">
        {#each proj.project_desc as line}
          <li class="font-sans font-wgt400 text-szBase text-grey-0 mb-1 {should_indent(line)?'indent':''}"
              style="{should_indent(line)?'margin-left: 34px;':'margin-left: 17px;'}">
            {#each split(should_indent(line)?line.slice(1):line) as portion}
              {#if portion[0] == 'p'}
                <em class="font-sans font-wgt400 not-italic text-szBase text-grey-0">{portion[1]}</em>
              {:else}
                <em class="font-sans font-wgt600 not-italic text-szBase text-grey-00">{portion[1]}</em>
              {/if}
            {/each}
          </li>
        {/each}
      </ul>
    </div>
    <!-- vertical line separator -->
    <div class="w-[1px] flex-none bg-grey-700" style="min-width: 1px; min-height: 100%; margin: 0 {ProjImgConst.SEP/2+10}px 0 {ProjImgConst.SEP/2}px"></div>
    <div bind:clientHeight={rightColHeight} bind:clientWidth={rightColWidth} class="flex flex-col grow h-fit w-2" style="{newRightColWidth > 0?('max-width: '+newRightColWidth.toString()+'px; min-width: '+newRightColWidth.toString()+'px;'):''}" id="contributions-column">
      <h1 class="font-rubik5 text-szLg text-grey-00 w-fit ml-[-6px]">
        My Contributions
      </h1>
      <ul class="list-disc">
        {#each proj.contributions as line}
          <li class="font-sans font-wgt400 text-szBase text-grey-0 mb-1 {should_indent(line)?'indent':''}"
              style="{should_indent(line)?'margin-left: 27px;':'margin-left: 10px;'}">
            {#each split(should_indent(line)?line.slice(1):line) as portion}
              {#if portion[0] == 'p'}
                <em class="font-sans font-wgt400 not-italic text-szBase text-grey-0">{portion[1]}</em>
              {:else}
                <em class="font-sans font-wgt600 not-italic text-szBase text-grey-00">{portion[1]}</em>
              {/if}
            {/each}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
<style>
ul li.indent::marker {
  /* font-family: 'Rubik'; */
  /* font-weight: 900; */
  /* font-size: 35px; */
  color: #7dd3fc;
  /* font-style = @theme ('font-thicc8'); */
  /* font-size = @theme ('text-sz3xl'); */
}
ul li::marker {
  /* font-family: 'Rubik'; */
  /* font-weight: 500; */
  /* font-size: 25px; */
  color: #cbd3da;
  /* font-style = @theme ('font-thicc8'); */
  /* font-size = @theme ('text-sz3xl'); */
}
</style>

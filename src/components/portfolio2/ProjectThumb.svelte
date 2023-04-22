<script lang="ts">
import type { ProjMeta, PortfolioState, FilterFn } from './project';
import ProjImgConst from './project';
import DevIcon from './DevIcon.svelte';
import Fa from 'svelte-fa/src/fa.svelte';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
const dispatch_advance_proj = (down: boolean) => {
  dispatch('click_thumb_advance_proj', {down});
  console.log("dispatching frfr click_thumb_advance_proj");
};

// let portfolioElement: HTMLElement;
export let proj: ProjMeta; 
export let pstate: PortfolioState;


let border_class = 'border_grey1';
$: thumb_src = ProjImgConst.IMAGES_BASE_DIR+proj.dir+'/thumb.png';

$: dummy = proj.name === 'dummy';

// con
let clickable_and_tinted_and_arrow_visible = false;
let arrowDown = false;

function update_tinted(pstate: PortfolioState, project: ProjMeta) {
  // console.log("idx:", project.idx);
  if (project.idx == 0 || project.idx == pstate.n_projects-1){
    clickable_and_tinted_and_arrow_visible = false;
    border_class = 'border_grey1';
    return;
  }
  if (project.idx - pstate.proj_idx == 1){
    clickable_and_tinted_and_arrow_visible = true;
    arrowDown = true;
    if (project.thumb_hovered){
      border_class = 'border_blue_light';
    }
    else{
      border_class = 'border_grey1';
    }
    return;
  }
  if (pstate.proj_idx - project.idx == 1){
    arrowDown = false
    clickable_and_tinted_and_arrow_visible = true;
    if (project.thumb_hovered){
      border_class = 'border_blue_light';
    }
    else{
      border_class = 'border_grey1';
    }
    return;
  }
  if (pstate.proj_idx == project.idx){
    border_class = 'border_blue_light_transparent';
  }
  clickable_and_tinted_and_arrow_visible = false;
  // console.log("bye", project.idx);

  // border_class = calculate_border_class(clickable_and_tinted_and_arrow_visible, proj, dummy);
}

if (proj == undefined){
  console.log('wtf');
}
else{
  console.log('proj seems fine');
  update_tinted(pstate, proj);
}

// function calculate_border_class(_clickable_and_tinted_and_arrow_visible: boolean, _proj: ProjMeta, _dummy: boolean){
// // clickable_and_tinted_and_arrow_visible?'border: 1px solid #cbd3da;':'border: 1px solid #cbd3da;
//   if (_dummy) {
//     return 'border_grey2';
//   }
//   if (_clickable_and_tinted_and_arrow_visible){
//     if (_proj.thumb_hovered){
//       return 'border_blue_light';
//     }
//     return 'border_grey1';
//   }
//   return 'border_blue_light_transparent'; // middle element
// }
// let border_class =  = calculate_border_class(clickable_and_tinted_and_arrow_visible, proj, dummy);

const try_dispatch_thumbnail_click = () => {
  if (!clickable_and_tinted_and_arrow_visible){ // do nothing if button not clickable
    return;
  }
  console.log("dispatching click_thumb_advance_proj");
  dispatch_advance_proj(arrowDown);
}
// const dispatch_next_proj = () => dispatch('click_thumbnail_advance_proj', {next: arrowDown}); // sets the on:click_thumbnail property so it runs whatever callback the parent attaches to that prop when creating this component


const handleMouseOver = () => {
  // console.log("started hovering me :)");
  proj.thumb_hovered = true;
}

const handleMouseOut = () => {
  // console.log("stopped hovering me :)");
  proj.thumb_hovered = false;
}

const label_title_width = Math.floor(ProjImgConst.THUMB_WIDTH * 0.6); // epsilon added in case of floating point nonsense;

$: update_tinted(pstate, proj);


const MAX_LENGTH = 20;

function splitString(str: string): string[] {
  if (str.length <= MAX_LENGTH) {
    return [str];
  }
  const midpoint = Math.floor(str.length / 2);
  let left = "";
  let right = "";
  let i = 0;
  while (midpoint - i >= 0 || midpoint + i < str.length) {
    if (midpoint - i >= 0 && str[midpoint - i] === " ") {
      left = str.slice(0, midpoint - i);
      right = str.slice(midpoint - i + 1);
      break;
    }
    if (midpoint + i < str.length && str[midpoint + i] === " ") {
      left = str.slice(0, midpoint + i);
      right = str.slice(midpoint + i + 1);
      break;
    }
    i++;
  }
  return [left, right];
}
</script>

<!--when tinted, and hovered also highlight the downarrow or uparrow. which is only drawn when tinted. -->

<!-- make container relative in order to clip label in front. relative means relative to normal document flow, 
and doesn't actually do anything by itself except for -->
<div class="thumbCard w-full rounded-xl overflow-hidden relative {border_class}" style="width: {ProjImgConst.THUMB_WIDTH}px; height: {ProjImgConst.THUMB_HEIGHT}px; min-height: {ProjImgConst.THUMB_HEIGHT}px">
  {#if dummy}
    <div class="rounded-xl z-10" style="width: {ProjImgConst.THUMB_WIDTH}px; height: {ProjImgConst.THUMB_HEIGHT}px"></div>
  {:else}
    <img class="z-10" style="width: {ProjImgConst.THUMB_WIDTH}px; height: {ProjImgConst.THUMB_HEIGHT}px" src={thumb_src} alt=""/> <!-- thumbnail -->

    <!-- label bar -->
    <div class="absolute bg-blue-bgOuter/90  z-20 w-full flex flex-row items-center"
         style="margin-top: -{ProjImgConst.THUMB_LABEL_HEIGHT.toString()}px; height: {ProjImgConst.THUMB_LABEL_HEIGHT.toString()}px">

      <!-- project name label -->
      <div class="flex flex-col justify-center items-center" style="width: {label_title_width}px;">
        {#each splitString(proj.name) as line}
        <p class="font-rubik5 text-szXs w-fit mx-auto whitespace-nowrap"
           style="color: white">
          {line}
        </p>
        {/each}
      </div>

      <!-- lang icons bar -->
      <div class="flex flex-row flex-nowrap ml-auto gap-1 pr-2">
        {#each proj.languages.slice(0,4) as lang}
          <DevIcon width={26} {lang} label={false}/>
        {/each}
      </div>
    </div>
    <div class="thumbOverlay {border_class} absolute rounded-xl flex flex-row items-center justify-center z-30"
         style="min-width: {ProjImgConst.THUMB_WIDTH}px; max-width: {ProjImgConst.THUMB_WIDTH}px; height: {ProjImgConst.THUMB_HEIGHT}px;
                margin-top: {-ProjImgConst.THUMB_HEIGHT}px; background-color: {clickable_and_tinted_and_arrow_visible?'#000000aa':'#ffffff00'};
                cursor: pointer;"
         on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} on:click={try_dispatch_thumbnail_click}> <!-- for searchability: handleMouseOver and handleMouseOut are for hover start and hover end -->
      {#if clickable_and_tinted_and_arrow_visible}
        <div class="w-fit h-fit mx-auto my-auto">
          <Fa size="{proj.thumb_hovered?'6x':'5x'}" rotate="{arrowDown?'90':'270'}" icon={faAngleRight} color="{proj.thumb_hovered?'#7dd3fc':'white'}"/>
        </div>
      {/if}
      <!-- transparent element same size as img listening for hovers and tinting the img or whatever  -->
    </div>
  {/if}
  <!-- TODO: update bar ^^^ and add an element clipping into the entire thing to detect hover etc w/o having to check both the img and the label -->
</div>

<style>
  .border_grey_00{
    border: 2px solid #cbd3da; 
  }
  .border_grey1{
    border: 2px solid #94a3b880;
  }
  .border_grey2{
    border: 2px solid green;
  }
  .border_white{
    border: 2px solid white;
  }
  .border_blue_light{
    border: 2px solid #7dd3fc;
  }
  .border_blue_light_transparent.thumbOverlay{
    border: 2px solid #7dd3fc50;
    /* transform: scale(1.07); */
  }
  .border_blue_light_transparent.thumbCard{
    transform: scale(1.07);
  }
</style>

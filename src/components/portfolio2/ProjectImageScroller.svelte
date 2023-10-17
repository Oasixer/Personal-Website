<script lang="ts">

import Youtube from 'svelte-youtube-embed';
import { get } from 'svelte/store';
import DevIcon from './DevIcon.svelte';
import YTButton from './YTButton.svelte';
import type { ProjMeta, PortfolioState, FilterFn } from './project';
import type { MediaSource } from './project';
import type { Sizes } from './project';
import { sz, highlight_hjkl } from './project';
import { parse_media_source } from './project';
import ProjImgConst from './project';

export let proj: ProjMeta; 

import Fa from 'svelte-fa/src/fa.svelte';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
let arrow_right_tint_width = 50;

let click: any;

$: proj_images_base = "./images/portfolio/" + proj.dir + "/";

$: image_src = proj_images_base + proj.images[proj.selected_img] + "/full.jpg";
// $: image_str = proj.images[proj.selected_img];
$: media_src = parse_media_source(proj.images[proj.selected_img], proj_images_base);

let right_icon_colour = "white";
const ICON_DEFAULT_SCALE = 3;
const ICON_LG_SCALE = 4;
let right_icon_sz = ICON_DEFAULT_SCALE;
let left_icon_sz = ICON_DEFAULT_SCALE;
let left_icon_colour = "white";


function click_right(){
  proj.selected_img += 1;
}
function click_left(){
  proj.selected_img -= 1;
}
	
const handle_keydown = e => {
  // console.log("key!", e.key);
  if (e.key === 'l') {
    highlight_hjkl.set({'h':false,'j':false,'k':false,'l':true});
    setTimeout(()=>{highlight_hjkl.set({'h':false,'j':false,'k':false,'l':false})}, 500);
    if (proj.selected_img >= proj.images.length - 1){
      return; 
    }
    proj.selected_img += 1;
  }
  if (e.key === 'h') {
    highlight_hjkl.set({'h':true,'j':false,'k':false,'l':false});
    setTimeout(()=>{highlight_hjkl.set({'h':false,'j':false,'k':false,'l':false})}, 500);
    if (proj.selected_img <= 0){
      return; 
    }
    proj.selected_img -= 1;
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
function handleMouseOverLeft(){
  left_icon_colour = "#7dd3fc";
  left_icon_sz = ICON_LG_SCALE;
  right_icon_colour = "white";
  right_icon_sz = ICON_DEFAULT_SCALE;
}
function handleMouseOutLeft(){
  left_icon_colour = "white";
  left_icon_sz = ICON_DEFAULT_SCALE;
}
function handleMouseOverRight(){
  left_icon_colour = "white";
  left_icon_sz = ICON_DEFAULT_SCALE;
  right_icon_colour = "#7dd3fc";
  right_icon_sz = ICON_LG_SCALE;
}

function handleMouseOutRight(){
  right_icon_colour = "white";
  right_icon_sz = ICON_DEFAULT_SCALE;
}


$: console.log("sz[from ProjImgScroller]: ", get(sz));
let element: HTMLElement;
</script>

<svelte:window on:keydown={handle_keydown}/>

<div class="w-full rounded-xl overflow-hidden relative"
 style="width: {$sz.full_width}px; min-width: {$sz.full_width}px">

  {#if media_src.is_video}
    <!-- <div>temp hehe</div> -->
   <Youtube id="lz8Mtgeo4dk">
    <YTButton bind:click/>
   </Youtube>
  {:else}
       <!-- display image  -->
    <img class="rounded-xl z-10"
         style="width: {$sz.full_width}px;"
         src={media_src.filename} alt=""/> 
  {/if}

  <!-- element clipped into img for icons n shit -->
  <div class="absolute flex flex-row"
       style="width: {$sz.full_width}px; margin-top: {-$sz.full_height}px;"
       on:click={()=>{if (typeof click == 'function')click()}}>

    {#if proj.selected_img > 0}
      <!-- left arrow full height tint box -->
      {#if media_src.is_video === false}
        <div class="mr-auto bg-black/70 flex flex-col justify-center items-center cursor-pointer z-50"
           style="width: {ProjImgConst.FULL_IMG_NEXTARROW_TINT_WIDTH}px; height: {$sz.full_height}px;"
           on:mouseover={handleMouseOverLeft} on:mouseout={handleMouseOutLeft} on:click={click_left}>
          <!-- left arrow -->
          <div class="w-fit h-fit ml-1">
            <Fa size="{left_icon_sz}x" rotate="180" icon={faAngleRight} color="{left_icon_colour}"/>
          </div>
        </div>
      {/if}
    {/if}

    {#if proj.selected_img < proj.images.length - 1}
      <!-- right arrow full height tint box -->
      <div class="ml-auto bg-black/70 flex flex-col justify-center items-center cursor-pointer z-50"
         style="width: {ProjImgConst.FULL_IMG_NEXTARROW_TINT_WIDTH}px; height: {$sz.full_height}px;"
         on:mouseover={handleMouseOverRight} on:mouseout={handleMouseOutRight} on:click={click_right}>
        <!-- right arrow -->
        <div class="w-fit h-fit mr-1">
          <Fa size="{right_icon_sz}x" icon={faAngleRight} color="{right_icon_colour}"/>
        </div>
      </div>
    {/if}
  </div>
</div>

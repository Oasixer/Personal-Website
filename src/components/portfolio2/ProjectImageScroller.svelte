<script lang="ts">
import DevIcon from './DevIcon.svelte';
import type { ProjMeta, PortfolioState, FilterFn } from './project';
import type { Sizes } from './project';
import { sz } from './project';
import ProjImgConst from './project';

export let proj: ProjMeta; 

import Fa from 'svelte-fa/src/fa.svelte';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
let arrow_right_tint_width = 50;

$: proj_images_base = "./images/portfolio/" + proj.dir + "/";
$: image_src = proj_images_base + proj.images[proj.selected_img] + "/full.png";

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
</script>


<div class="w-full rounded-xl overflow-hidden relative"
 style="width: {$sz.full_width}px; min-width: {$sz.full_width}px">

  <!-- large/full img -->
  <img class="rounded-xl z-10"
       style="width: {$sz.full_width}px;"
       src={image_src} alt=""/> 

  <!-- element clipped into img for icons n shit -->
  <div class="absolute flex flex-row"
       style="width: {$sz.full_width}px; margin-top: {-$sz.full_height}px;">

    {#if proj.selected_img > 0}
      <!-- left arrow full height tint box -->
      <div class="mr-auto bg-black/70 flex flex-col justify-center items-center cursor-pointer"
         style="width: {ProjImgConst.FULL_IMG_NEXTARROW_TINT_WIDTH}px; height: {$sz.full_height}px; margin-top: {-$sz.full_height}px;"
         on:mouseover={handleMouseOverLeft} on:mouseout={handleMouseOutLeft} on:click={click_left}>
        <!-- left arrow -->
        <div class="w-fit h-fit ml-1">
          <Fa size="{left_icon_sz}x" rotate="180" icon={faAngleRight} color="{left_icon_colour}"/>
        </div>
      </div>
    {/if}

    {#if proj.selected_img < proj.images.length - 1}
    <!-- right arrow full height tint box -->
    <div class="ml-auto bg-black/70 flex flex-col justify-center items-center cursor-pointer"
       style="width: {ProjImgConst.FULL_IMG_NEXTARROW_TINT_WIDTH}px; height: {$sz.full_height}px; margin-top: {-$sz.full_height}px;"
       on:mouseover={handleMouseOverRight} on:mouseout={handleMouseOutRight} on:click={click_right}>
      <!-- right arrow -->
      <div class="w-fit h-fit mr-1">
        <Fa size="{right_icon_sz}x" icon={faAngleRight} color="{right_icon_colour}"/>
      </div>
    </div>
    {/if}

  </div>
</div>

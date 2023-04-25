<script lang="ts">
export let key: string;
// export let size_012: string;
export let sz = 30;
let innerSz = sz - 8;

import { highlight_hjkl } from '@portfolio/project';

let highlight: bool = false;

function handleMouseOver(){
  highlight = true;
}
function handleMouseOut(){
  highlight = false;
}
$: console.log("highlight[j]:", $highlight_hjkl.j, $highlight_hjkl[key.toLowerCase()]);
$: shouldHighlight = $highlight_hjkl[key.toLowerCase()] || highlight;
</script>

<div class="bg-grey-600 rounded-lg select-none"
     style="width: {sz}px; min-width: {sz}px; max-width: {sz}px; height: {sz}px; min-height: {sz}px; max-height: {sz}px; "
     on:mouseover={handleMouseOver}
     on:mouseout={handleMouseOut}
     >
  <div class="rounded-md bg-white mt-0.5 mx-auto select:none"
     style="width: {innerSz}px; min-width: {innerSz}px; max-width: {innerSz}px; height: {innerSz}px; min-height: {innerSz}px; max-height: {innerSz}px; "
     >
    <p class="h-fit w-fit text-slate-600 font-sans font-wgt800 font-szXs mx-auto"
         class:!text-sky-600={shouldHighlight}
         style="line-height: {innerSz-5}px;">
      {key} 
    </p>
  </div>
</div>

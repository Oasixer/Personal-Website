<script lang="ts">
import { get } from 'svelte/store';
import ProjImgConst from './project';
import type { Sizes } from './project';
import { sz, LANGUAGES } from './project';
import type { VP } from '../viewport';
import { vp, LAYOUT } from '../viewport';
// export let width: number;
export let title: string;
export let leftColWidthFactor: number;
export let isLeft: boolean;
export let isSingle: boolean;
export let lines: string[];
export let shouldColorKeywords: boolean;

// $: console.log("shouldColorKeywords: ", shouldColorKeywords);
// $: console.log("leftColW: ", leftColWidthFactor);
  
// I used to just bold keywords. But now that I have the languages for each project iconified, it would be kinda sweet
// to colour the relevant keywords, if a little cheesy...
function keywordColor(keyword: string, shouldColorKeywords: boolean){
  if (!(keyword.startsWith('`') && shouldColorKeywords)){
    // text-grey-0
    return '#cbd3da'; // indicate no keyword colour found
  }
  else{
    return LANGUAGES[keyword.slice(1, keyword.indexOf('!'))].color;
  }
}

function should_indent(line: string): boolean{
  return line.startsWith('`');
}

function getWidth(_sz: Sizes, _leftColWidthFactor: number, _vp: VP){
  // console.log("vp: ", _vp);
  // console.log("get(vp): ", get(vp));
  if (_vp.layout < LAYOUT['md']){
    console.log("smol width");
    return 'auto';
  }
  if (isSingle){
    return _sz.pcard_content_width.toString() + 'px';
  }
  if (isLeft){
    return (_sz.text_col_width * _leftColWidthFactor).toString() + 'px';
  }
  return (_sz.text_col_width / _leftColWidthFactor - 10).toString() + 'px';
}
  
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

// vp.subscribe((_vp) => {
//   console.log('vp subscriber: ', _vp);
//   updateWidths(_vp, pstate);
// });
</script>

<style lang="postcss">
ul li.indent::marker {
  /* font-family: 'Rubik'; */
  /* font-weight: 900; */
  /* font-size: 35px; */
  color: theme(colors.sky.300);
  /* @apply */
  /* font-style = @theme ('font-thicc8'); */
  /* font-size = @theme ('text-sz3xl'); */
}
ul li::marker {
  /* font-family: 'Rubik'; */
  /* font-weight: 500; */
  /* font-size: 25px; */
  /* color: theme#cbd3da; */
  @apply text-grey-00;
  /* font-style = @theme ('font-thicc8'); */
  /* font-size = @theme ('text-sz3xl'); */
}
</style>
<!-- {newLeftColWidth > 0?('max-width: '+newLeftColWidth.toString()+'px; min-width: '+newLeftColWidth.toString()+'px;'):''}" id="overview-column"> -->
<div class="flex flex-col grow h-fit"
     style="width: {getWidth($sz, leftColWidthFactor, $vp)};">
  {#if !isSingle}
    <h1 class="font-rubik5 text-szLg text-sky-300">
      {title}
    </h1>
  {/if}
  <ul class="list-disc">
    {#each lines as line}
      <li class="font-sans font-wgt400 text-szBase text-grey-0 mb-1 {should_indent(line)?'indent':''}"
          style="{should_indent(line)?'margin-left: 34px;':'margin-left: 17px;'}">
        {#each split(should_indent(line)?line.slice(1):line) as portion}
          {#if portion[0] == 'p'}
            <em class="font-sans font-wgt400 not-italic text-szBase text-grey-0">{portion[1]}</em>
          {:else}
            <em class="font-sans font-wgt600 not-italic text-szBase"
                style="color: {keywordColor(portion[1], shouldColorKeywords)};">
            {portion[1].startsWith('`')?portion[1].slice(portion[1].indexOf('!')+1):portion[1]}</em>
          {/if}
        {/each}
      </li>
    {/each}
  </ul>
</div>

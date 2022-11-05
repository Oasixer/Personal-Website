<script>
  export let items;
  import { experience_content_font_size } from '../utils/settings.js';

  export let mobile;
  export let show_controls = false;
  export let embedded = false;
  
  /* $: split_items = generate_split_items(items); */
  /* $: console.log(`split_items: ${split_items}`); */
  
  function getIndicesOf(searchStr, str) {
    var searchStrLen = searchStr.length;
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

  function split(item){
    const open = "<";
    const close = ">";
		let item_text = item.title_alt || item.title;
		let bold_start_tag_indices = getIndicesOf(open, item_text);
		let bold_end_tag_indices = getIndicesOf(close, item_text);
		let i = 0;
		let split_item = [];
		let next;
		let next_end;
		let nTEMP = 0;
		console.log(`START ITEM: ${item_text}`);
		console.log(`bold_start_tag_indices: ${bold_start_tag_indices}`);
		console.log(bold_start_tag_indices);
		while (bold_start_tag_indices.length){
			next = bold_start_tag_indices.shift();
			next_end = bold_end_tag_indices.shift();
			console.log(bold_start_tag_indices);
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
			console.log(`it: ${nTEMP}`);
			console.log(split_item);
			console.log(i);
			nTEMP += 1;
		}
		console.log(`i: ${i}`);
		console.log(`item_text.length: ${item_text.length}`);
		if (i < item_text.length){
			split_item.push(['p',item_text.slice(i)]);
		}
		console.log('DONE SINGLE ITEM');
		console.log(split_item);
		return split_item;
  }

  function toggle_controls(){
     show_controls = !show_controls;
  }

</script>

<style>
  ul{
    margin: 0 0;
    padding: 0 0 0 18px;
  }

  ul.darktheme.mobile{
    margin-top: 12px;
  }

  li{
    margin: 0px 0px;
  }
  
  li.darktheme{
    color: #c0c0c0;
    font-size: 16px;
		margin-left: 25px;
  }
  
  li:not(.darktheme){
    line-height: 1.15;
  }


</style>

<ul class:darktheme={embedded} class:mobile on:click={toggle_controls}>
  {#each items.filter(i=>!i.force_hide).concat().sort((a,b)=>a.order - b.order).map(i=>split(i)) as i}
    <li class:darktheme={embedded} class:mobile style="{(!embedded)?('font-size: '+$experience_content_font_size+'px'):''}">
      {#each i as portion}
        {#if portion[0] == 'p'}
          {portion[1]}
        {:else}
          <b>{portion[1]}</b>
        {/if}
      {/each}
    </li>
  {/each}
</ul>

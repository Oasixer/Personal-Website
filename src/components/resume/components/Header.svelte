<script lang="ts">
    import LinkRow from '@resume/components/LinkRow/LinkRow.svelte';
    import {createEventDispatcher} from 'svelte';

  import {
    top_name_font_size,
    top_name_top_margin,
    top_name_bottom_margin,
    top_header_bottom_margin
  } from '../utils/settings.js';

  export let standalone: boolean;
  
  const dispatch = createEventDispatcher();
	export const click = () => dispatch('click');
  
</script>

<style>
  h1{
    padding: 0;
		text-transform: uppercase;
		/* font-size: 3em; */ /* loads from store - not hardcoded */
    /* font-weight: 100; */
    text-align: center;
  }

  div{
    padding: 0;
  }

</style>
<div on:click style="margin-bottom: {$top_header_bottom_margin}px">
  <!-- {#if standalone} -->
    <div class="flex flex-row items-center justify-center gap-3 w-full text-black dark:text-white ">
      <h1 class="font-thicc3"
          style="font-size: {$top_name_font_size}em; margin: {$top_name_top_margin}px 0 {$top_name_bottom_margin}px 0"
          >
          Kaelan</h1>
      <h1 class="font-thicc8" 
          style="font-size: {$top_name_font_size}em;  margin: {$top_name_top_margin}px 0 {$top_name_bottom_margin}px 0;"
          on:click>
          Moffett</h1>
    </div>
  <!-- {/if} -->
  <!--  style="font-size: {$top_name_font_size}em; margin: {$top_name_top_margin}px 0 {$top_name_bottom_margin}px 0">  -->
  <LinkRow {standalone}/>
</div>

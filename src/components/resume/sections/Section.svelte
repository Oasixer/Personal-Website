<script>
  export let header;
  export let show_section_controls = false;
  export let show_list_controls = false;
  export let force_hide;
  export let standalone=false;
  import { section_headings_font_size, section_content_top_margin, show_section_header_line, section_bottom_margin } from '../utils/settings.js';
  import { purpleMode } from '@viewport';

  function enable_controls(){
    show_section_controls=true;
    show_list_controls=true;
  }

  // $: console.log("standalone from section: ", standalone);
</script>

<style>
  div.row{
    display: flex;
    flex-flow: row nowrap;
  }

    /* color: purple; */
    /* font-size: 24px; */ /* set by store not hardcoded */
    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif; */
    /* font-weight: bold; */
  div.section-content{
    margin: 10px 0 0px 0;
  }

  hr{
    height: 1px;
    background: black;
    margin: 0;
    flex: 1 1; /* grow shrink basis */
  }
</style>

{#if !force_hide}
  <div class='section-main' style="margin-bottom: {$section_bottom_margin}px">
<!-- style="font-size: {$section_headings_font_size}px;" -->
    <h1 class="text-sky-600 dark:text-grey-100 font-thicc7 text-sz2xl w-fit"
        class:!text-purple-900={$purpleMode}
        on:click={enable_controls}>{header}</h1>
    {#if $show_section_header_line}
      <hr>
    {/if}
  <div class='mt-3 ml-2' style="margin-top: {$section_content_top_margin}px">
    <slot></slot>
  </div>
</div>
{/if}

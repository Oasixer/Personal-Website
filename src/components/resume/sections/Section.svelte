<script>
  export let header;
  export let show_section_controls = false;
  export let show_list_controls = false;
  export let force_hide;
  export let embedded=false;
  import { section_headings_font_size, section_content_top_margin, show_section_header_line, section_bottom_margin } from '../utils/settings.js';

  function enable_controls(){
    show_section_controls=true;
    show_list_controls=true;
  }
</script>

<style>
  div.row{
    display: flex;
    flex-flow: row nowrap;
  }

  div.section-main{
    margin: 0;
  }
  
  div.section-content{
    margin: 10px 0 0px 0;
  }

  h1{
    width: fit-content;
    padding: 0;
    margin: 0;
    color: purple;
    /* font-size: 24px; */ /* set by store not hardcoded */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-weight: bold;
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
  {#if !embedded}
    <h1 style="font-size: {$section_headings_font_size}px;"
        on:click={enable_controls}>{header}</h1>
    {#if $show_section_header_line}
      <hr>
    {/if}
  {/if}
  <div class='section-content' style="margin-top: {$section_content_top_margin}px">
    <slot></slot>
  </div>
</div>
{/if}

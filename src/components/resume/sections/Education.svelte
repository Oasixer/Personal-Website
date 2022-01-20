<script>
  import Section from './Section.svelte';
  import { education_awards_interests_font_size } from '../utils/settings.js';
  import SectionControls from '../components/SectionControls.svelte';

  let header = 'Education';
  let lines = ['BASc in Mechatronics Engineering', 'University of Waterloo', 'Expected Graduation April 2023'];

  export const contentSettings = () => {};
  export const setContentSettings = (itemSettings) => {
    // Do nothing
  };

  let force_hide = false;
  let show_section_controls = false;
</script>

<style>
  p{
    margin: 2px 0;
    /* font-size: 14px; */ /* set with store instead of hardcoded */

  }
  div.line-container{
    margin-bottom: -2px;
  }
  div.two_col{
    display: flex;
    flex-flow: row nowrap;
  }
  p.date_right_italics{
    margin-left: auto;
    font-size: 15px;
    font-weight: 400;
    color: grey;
    font-style: italic;
  }
</style>

<Section {header} {force_hide} bind:show_section_controls>
  {#if show_section_controls}
    <SectionControls bind:force_hide on:close={()=>{show_section_controls=false}}/>
  {/if}
  <div class='line-container'>
    <div class="two_col">
      <p style="font-size: {$education_awards_interests_font_size}px; line-height: 1;">BASc in Mechatronics Engineering</p>
      <p class="date_right_italics" style="font-size: {$education_awards_interests_font_size}px; line-height: 1;">Expected Graduation April 2023</p>
    </div>
    <p style="font-size: {$education_awards_interests_font_size}px; line-height: 1;">University of Waterloo</p>
  </div>
</Section>

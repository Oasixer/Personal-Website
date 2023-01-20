<script>
  import Section from './Section.svelte';
  import ExperienceItem2 from '../components/ExperienceItem2.svelte';
  import { disable_highlighted_side_project_section } from '../utils/settings.js';
  import SectionControls from '../components/SectionControls.svelte';


  let show_list_controls = false;
  let force_hide = false;
  export let show_section_controls = false;

  let item = {
      title: 'Network Visualizer',
      points: ['Network visualizera', 'Network <Visualizer>a', 'Network <Visual>izer']
    }
  
  let header = 'Highlighted Side Project'; // section title
  header = header +': '+ item.title;
 
</script>

<style>
</style>

<Section {header} {force_hide} bind:show_section_controls>
  {#if show_section_controls}
    <SectionControls bind:force_hide on:close={()=>{show_section_controls=false}}/>
  {/if}
  <!-- <ExperienceItem bind:item {mobile} work={true}/> -->
  <ExperienceItem2 show_title={false}
                   bind:item/>
</Section>

<svelte:options accessors={true}/>
<script>
  export const contentSettings = () => {
    return items;
  };
  
  /* title: 'Tracked down long standing difficult to solve bugs in python and cpp (maybe mention LLVM (memory leaks in python GCC system ca))', */

  export let mobile;
  /* $: console.log(`items: ${items}`); */

  import ExperienceItem from '../components/ExperienceItem.svelte';
  import Section from './Section.svelte';
  import ExperienceList from '../components/ExperienceList.svelte';
  import ListControls from '../components/ListControls.svelte';
  import SectionControls from '../components/SectionControls.svelte';
  import { TagNames } from '../utils/settings.js';

  export let standalone=false;

  let show_section_controls = false;
  let show_list_controls = false;

const points = [
  'Created positioning system for underwater robots using acoustic nodes in a mesh, outperforming commercial solutions in terms of tolerance to reflections and obstructions, achieving 85 meter range w/ max 2% error.',
  'Awarded <Best Overall Project> out of 52 teams presenting at 2023 U of Waterloo Mechatronics Engineering symposium.',
  'Responsible for the <Rust> Server which commands & handles high bandwidth data from each Node, delivers web UI.',
  'Architected Node firmware (<C++>, targeting ARM M7), incl. live positioning, networking, msg protocols, autocalibration.',
  'Optimized realtime freq. analysis, via Sliding Window implementation of Fast Fourier Transform performed at 500KHz.',
  'Responsible for the UI dashboard (<SvelteJS> webapp) including live positioning visualizer w/ recording & playback.',
];

let objects = [];

for (let i = 0; i < points.length; i++) {
  objects.push({
    title: points[i],
    force_hide: false,
    order: i
  });
}

let item ={
  title: 'Distributed Underwater Positioning System',
  position: '',
  date: 'Oct-Apr 2023',
  points: objects,
};
</script>

<div style="margin-top: -1px;"></div>
<Section header={"Final Year Design Project"} {standalone} force_hide={false} bind:show_section_controls bind:show_list_controls>
  <div style="margin-top: -21px;"></div>
  <!-- {#if show_section_controls && standalone} -->
  <!--   <SectionControls bind:force_hide on:close={()=>{show_section_controls=false}}/> -->
  <!-- {/if} -->
  <!-- {#if show_list_controls && standalone} -->
  <!--   <ListControls bind:items on:close={()=>{show_list_controls=false;}}/> -->
  <!-- {/if} -->
  <div class="ml-2">
    <ExperienceItem bind:item on:refresh={()=>{item = {...item}}} work={false} {mobile} {standalone}/>
  </div>
  <div class="mb-[-12px]"></div>
</Section>

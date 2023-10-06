<svelte:options accessors={true}/>
<script>
  export const contentSettings = () => {
    return items;
  };
  
  /* title: 'Tracked down long standing difficult to solve bugs in python and cpp (maybe mention LLVM (memory leaks in python GCC system ca))', */

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
  'Awarded <Best Overall Project> out of 52 teams presenting at 2023 U of Waterloo Mechatronics Eng. symposium.',
  'Created positioning system for underwater robots using acoustics, outperforming commercial solutions in tolerance to reflections and obstructions, achieving 85 meter range with 98% accuracy.',
  'Responsible for a <Rust> Server exchanging high bandwidth data with each node and delivering the UI (app).',
  'Architected firmware (<C++> on ARM M7), implementing positioning, autocalibration, and fault-tolerant networking',
  'Enabled realtime freq. analysis, via <sliding window Fast Fourier Transform> at 2μs intervals, processing 20MB/s of acoustic samples.',
  // 'Designed positioning strategy in which each node listens and replies to acoustic pings underwater, the distances are calculated using Time of Flight, then absolute positions of each node are resolved using multilateration.'
  // 'FFT updated every 2 microseconds via an ISR that adds to a ringbuffer and updates the calculation.',
  // 'Iwhere 2μs an ISR adds a sample to a ringbuffer which represents the '
  // 'Optimized realtime freq. analysis, via <sliding window> implementation of <Fast Fourier Transform> (FFT)',// running every 2μs.',
  // 'Implemented '
  // 'Responsible for the UI dashboard (<SvelteJS> webapp) including live positioning visualizer w/ recording & playback.',
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
  date: 'Sep 2022 - Apr 2023',
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
    <ExperienceItem bind:item on:refresh={()=>{item = {...item}}} work={false} {standalone}/>
  </div>
  <div class="mb-[-12px]"></div>
</Section>

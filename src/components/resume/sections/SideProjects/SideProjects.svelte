<svelte:options accessors={true}/>
<script lang="ts">
  import type { Item } from './side_projects_content';
  import { getItems } from './side_projects_content';
  import Section from '../Section.svelte';
  import ExperienceList from '@resume/components/ExperienceList.svelte';
  import ListControls from '@resume/components/ListControls.svelte';
  import SectionControls from '@resume/components/SectionControls.svelte';
  import { TagNames } from '@resume_utils/settings.js';
  
  export const contentSettings = (): Item[] => {
    return items;
  };
  
  let header: string = 'Projects';
  export let standalone: boolean = false;
  
  let force_hide: boolean = false;
  let show_section_controls: boolean = false;
  let show_list_controls: boolean = false;

  let items: Item[] = getItems();
</script>

<Section {header} {standalone} {force_hide} bind:show_section_controls bind:show_list_controls>
  <div class="h-[3px]"></div>
  {#if show_section_controls && standalone}
    <SectionControls bind:force_hide on:close={()=>{show_section_controls=false}}/>
  {/if}
  {#if show_list_controls && standalone}
    <ListControls bind:items on:close={()=>{show_list_controls=false;}}/>
  {/if}
  <ExperienceList bind:items {standalone} work={true}/>
  <div class="h-1"></div>
</Section>

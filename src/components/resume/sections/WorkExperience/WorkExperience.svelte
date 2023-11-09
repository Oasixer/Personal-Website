<svelte:options accessors={true}/>
<script lang="ts">

  import type {
    Item, ProtoItem
  } from '@resume/sections/SideProjects/side_projects_content.js';
  import { get_items } from './work_experience_content';
  import {
    generateStringy,
    enumerateProtoItemsToItemInstances,
  } from '@resume/sections/SideProjects/side_projects_content.js';
  import { onMount } from "svelte";
  import { page } from '$app/stores';
  let print_experience: string = $page.url.searchParams.get('print') || "false";
  export const contentSettings = () => {
    return items;
  };
  
  onMount(() => {
  });
  /* title: 'Tracked down long standing difficult to solve bugs in python and cpp (maybe mention LLVM (memory leaks in python GCC system ca))', */

  /* $: console.log(`items: ${items}`); */

  import Section from '@resume/sections/Section.svelte';
  import ExperienceList from '@resume/components/ExperienceList.svelte';
  import ListControls from '@resume/components/ListControls.svelte';
  import SectionControls from '@resume/components/SectionControls.svelte';
  import { TagNames } from '@resume_utils/settings.js';
  let header = 'Work Experience';
  export let standalone=false;

  let force_hide = false;
  let show_section_controls = false;
  let show_list_controls = false;

  // $: printItems(items);

  // function printItems(items){
    // items.forEach(i => {
      // console.log(i.title);
      // i.points.forEach(j =>{
        // console.log(j.title.replace('<','').replace('>',''));
      // });
    // });
  // }

  // export const setContentSettings = (itemSettings) => {
  //   items.forEach(function (item) {
  //     let s = itemSettings.find(i => {
  //       if (i.title === item.title){
  //         return true;
  //       } 
  //     });
  //     if (s){ // if settings were found for this item
  //       item.title_alt = s.title_alt;
  //       item.order = s.order;
  //       item.force_hide = s.force_hide;
  //       item.points.forEach(function (j) {
  //         let p = s.points.find(x => x.title === j.title);
  //         if (p){
  //           j.title_alt = p.title_alt;
  //           j.order = p.order;
  //           j.force_hide = p.force_hide;
  //         }
  //       });
  //     }
  //   });
  //   items = [...items];
  // };


  let items = get_items(print_experience === 'true');
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

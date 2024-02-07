<script lang="ts">
  import type {
    Item
  } from '@resume/sections/SideProjects/side_projects_content.js';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { onMount } from 'svelte';
  export let item: Item;
  export let work: boolean;
  export let standalone: boolean;
  export let select: string;
  let mounted: boolean = false;
	onMount(async () => {
    mounted = true;
  });

  $: selected = item.title.startsWith(select);
  // ((select: string, item: Item) => {
  //   return 
  // })(select, item)
  
  import {
    experience_position_bottom_margin
  } from '../utils/settings.js';

  import ListControls from './ListControls.svelte';
  import ExpItemPointList from './ExpItemPointList.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  const dispatchRefresh = () => {dispatch('refresh')};
  
  let enable_section_controls = false;

  import { 
    show_project_locations,
    show_project_positions,
    show_project_dates,
    // show_tags_under_experience,
    // disable_categorical_tags,
    experience_content_font_size,
    compact_exp_info,
    // TagCategoryNames
    show_font_info
  } from '../utils/settings.js';

  let enable_tag_controls = false;
  let enable_exp_item_point_list_controls = false;

  let itemContainer = [item]; // for 2way binding in single subsection controls

  /* $: console.log(`: ${item.points}`); */
  function refreshCloseSectionControls(){
    enable_section_controls = false;
    dispatchRefresh();
  }

  function refreshClosePointList(){
    enable_exp_item_point_list_controls = false;
    dispatchRefresh();
  }

  function refreshCloseTags(){
    enable_tag_controls = false;
    dispatchRefresh();
  }

  function toggle_tag_controls(){
    if (!standalone){
      return;
    }
    enable_tag_controls = !enable_tag_controls;
  }

  function display_color(selected, mounted){
    let white = '#AAAADDFF';
    let trans = '#AAAADD00';
    if (!selected){
      return trans;
    }
    if (mounted){
      return trans;
    }
    return white;
  }

  // $: tags_text = item.tags.concat().sort((a,b)=>a.order - b.order).filter(i=>{
  //   let disabled_because_cat = (TagCategoryNames.includes(i.title) && $disable_categorical_tags);
  //   let test = !(disabled_because_cat || i.force_hide);
  //   return test;
  //   }).map(i=>i.title).join(', ');

</script>

<style>
  .experience-item-main{
    margin: 0 0 0 0; /* bottom margin (2nd last) will be overridden by setting. */
  }

  /* .experience-item-main.darktheme.mobile{ */
  /*   margin-top: 17px; */
  /* } */

  li:not(.darktheme){
    line-height: 1;
  }

  p.experience-tags{
    font: 300 13px roboto, sans-serif;
    font-style: italic;
    text-align: end;
    margin: 5px 0;
  }

  p.experience-tags.darktheme{
    color: #808080;
    font-size: 17px;
  }

  /* p.experience-tags.darktheme.mobile{ */
  /*   font-size: 15px; */
  /* } */

  div.row{
    display: flex;
    flex-flow: row-nowrap;
    justify-content: flex-start;
  }

  .title{
    margin: 0;
    /* font-size: 15px; */
    /* font-style: bold; */
    font: 900 15px roboto, sans-serif;
  }
  

  .title.darktheme{
    color: #0078b4;
    font-size: 32px;
  }

  /* .title.darktheme.mobile{ */
  /*   color: #0078b4; */
  /*   font-size: 18px; */
  /* } */

  .location{
    margin: 0;
    margin-left: auto;
    /* color: purple; */
    font-size: 15px;
    font-weight: 400;
    font-style: italic;
  }

  .location.darktheme{
    font-size: 18px;
    color: #0078b4;
    font-weight: 500;
  }
  
  /* .location.darktheme.mobile{ */
  /*   font-size: 17px; */
  /*   color: #0078b4; */
  /*   font-weight: 500; */
  /* } */

  .position{
    margin: 0;
    /* color: #606060; */
    font-size: 12px;
    font-family: "roboto", "helvetica", sans-serif;
    text-transform: uppercase;
    /* font-variant: small-caps; */
  }

  .position.darktheme{
    font-size: 17px;
  }

  .position:not(.darktheme){
    transform: translateY(2px);
  }
  /* .position.darktheme.mobile{ */
  /*   font-size: 13px; */
  /* } */

  .date{
    /* margin: 0; */
    /* margin-left: auto; */
    /* font-size: 15px; */
    /* font-weight: 400; */
    /* color: grey; */
    /* font-style: italic; */
  }
  
  /* .date:not(.darktheme){ */
  /*   transform: translateY(-2px); */
  /* } */
  /**/
  /* .date.darktheme{ */
  /*   font-size: 17px; */
  /*   color: grey; */
  /*   font-weight: 500; */
  /* } */
  /**/
  /* .date.darktheme.mobile{ */
  /*   font-size: 14px; */
  /*   font-weight: 500; */
  /* } */

  ul{
    margin: 0 0;
  }

  li{
    margin: 0px 0px;
  }
  
  li.darktheme{
    color: #c0c0c0;
    font-size: 18px;
  }
 .fade-background {
  transition: background-color 3s ease-in;
  background-color: transparent; /* This will be the end state of the transition */
}

</style>

{#if !item.force_hide}
  <div class="experience-item-main fade-background"
  style="margin-bottom: {$experience_position_bottom_margin}px; background-color:{display_color(selected, mounted)};">
    <!-- header row -->
    <div class="row mb-1">
      <!-- {#if work} -->
      <h1 class='onelineTitle font-rubik6 text-slate-700 dark:text-blue-subdued/80 hover:text-pink-accent text-szLg' on:click={() => {enable_section_controls = true}}>{`${item.position}`}</h1>
      <div class="mb-[4px] mt-[1px] w-[1px] bg-grey-600 dark:bg-grey-700 mx-4"></div>
      {#if item.repo !== undefined}
        <a href={item.repo}
        class='onelineTitle font-rubik6 mb-[2px] text-sky-600 dark:text-sky-300 text-szLg hover:text-pink-accent flex flex-row'
        style="text-decoration: {item.website_link?'underline':'underline'};">
        <p>{`${item.title}`}</p>
        <!-- {#if item.website_link !== true} -->
        <p class="text-sky-600 dark:text-sky-300 ml-1"><Fa icon={faGithub} size="0.95x"/></p>
         <!-- {/if} -->
        </a>
      {:else}
        <h1 class='onelineTitle font-rubik6 text-sky-800 dark:text-sky-300 text-szLg hover:text-pink-accent'
            on:click={() => {enable_section_controls = true}}>{`${item.title}`}</h1>
      {/if}
      <!-- <h1 class="date" class:mobile class:darktheme={embedded}>{item.date}</h1> -->
      {#if item.location !== ''}
        <div class="mb-[4px] mt-[1px] w-[1px] bg-grey-600 dark:bg-grey-700 mx-4"></div>
      {/if}
      <h1 class='onelineTitle font-rubik4 text-slate-800 dark:text-grey-500 text-szLg hover:text-pink-accent mr-auto' on:click={() => {enable_section_controls = true}}>{`${item.location}`}</h1>
      <h1 class="date font-sans font-wgt500 text-szLg italic text-sky-800 mr-0 dark:text-pink-accent">{item.date}</h1>
    </div>

    {#if enable_section_controls && standalone}
      <ListControls on:close={refreshCloseSectionControls} single={true} bind:items={itemContainer}/>
    {/if}

    {#if enable_exp_item_point_list_controls && standalone}
      <ListControls bind:items={item.points} on:close={refreshClosePointList} title='ExpItem Point List Controls'/>
    {/if}

    <ExpItemPointList bind:items={item.points} bind:show_controls={enable_exp_item_point_list_controls} />
  </div>
{/if}

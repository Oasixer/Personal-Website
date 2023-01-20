<script>
  export let item;
  export let show_title = true;
  /* export let work; */
  /* export let embedded=false; */
  /* export let mobile; */
  
  /* import { */
    /* experience_position_bottom_margin */
  /* } from '../utils/settings.js'; */

  import ListControls from './ListControls.svelte';
  import ExpItemPointList2 from './ExpItemPointList2.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  const dispatchRefresh = () => {dispatch('refresh')};
  
  let enable_section_controls = false;

  import { 
    show_project_locations,
    show_project_positions,
    show_project_dates,
    show_tags_under_experience,
    disable_categorical_tags,
    experience_content_font_size,
    compact_exp_info,
    TagCategoryNames
  } from '../utils/settings.js';

  let enable_exp_item_point_list_controls = false;

  let itemContainer = [item]; // for 2way binding in single subsection controls

  /* $: console.log(`: ${item.points}`); */
  /* function refreshCloseSectionControls(){ */
    /* enable_section_controls = false; */
    /* dispatchRefresh(); */
  /* } */

  /* function refreshClosePointList(){ */
    /* enable_exp_item_point_list_controls = false; */
    /* dispatchRefresh(); */
  /* } */

  /* function refreshCloseTags(){ */
    /* enable_tag_controls = false; */
    /* dispatchRefresh(); */
  /* } */

  /* function toggle_tag_controls(){ */
    /* if (embedded){ */
      /* return; */
    /* } */
    /* enable_tag_controls = !enable_tag_controls; */
  /* } */

  /* $: tags_text = item.tags.concat().sort((a,b)=>a.order - b.order).filter(i=>{ */
    /* let disabled_because_cat = (TagCategoryNames.includes(i.title) && $disable_categorical_tags); */
    /* let test = !(disabled_because_cat || i.force_hide); */
    /* return test; */
    /* }).map(i=>i.title).join(', '); */

</script>

<style>
  .experience-item-main{
    margin: 0 0 0 0; /* bottom margin (2nd last) will be overridden by setting. */
  }

	li{
    line-height: 1;
  }

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
  
  .onelineTitle{
    margin: 0;
    /* font-size: 15px; */
    /* font-style: bold; */
    font: 900 15px roboto, sans-serif;
  }

  .title.darktheme{
    color: #0078b4;
    font-size: 32px;
  }

  .title.darktheme.mobile{
    color: #0078b4;
    font-size: 18px;
  }

  .position{
    margin: 0;
    color: #606060;
    font-size: 12px;
    font-family: "roboto", "helvetica", sans-serif;
    text-transform: uppercase;
  /* .position:not(.darktheme){ */
    transform: translateY(2px);
  /* } */
  }

  ul{
    margin: 0 0;
  }

  li{
    margin: 0px 0px;
  }
  
</style>

<!-- >{#if !item.force_hide} -->
	<!-- <div class:darktheme={embedded} class:mobile class="experience-item-main" style="margin-bottom: {$experience_position_bottom_margin}px;"> -->
  <div class="experience-item-main">
    {#if show_title}
      <div class="row">
        <h1 class='title' on:click={() => {enable_section_controls = true}}>{item.title}</h1>
      </div>
      {/if}
    <ExpItemPointList2 bind:items={item.points} bind:show_controls={enable_exp_item_point_list_controls} />
</div>
<!-- >{/if} -->

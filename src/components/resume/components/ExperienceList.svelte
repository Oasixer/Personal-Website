<script lang="ts">
  import ExperienceItem from '../components/ExperienceItem.svelte';
  import type {
    Item
  } from '@resume/sections/SideProjects/side_projects_content.js';
  import { arrayIntersect } from '../utils/misc.js';
  import { tags, force_use_all_employment } from '../utils/settings.js';
  export let items;
  export let work;
  export let standalone;

  const refresh = () => {
    items = [...items];
    console.log('refreshing expList');
  }

</script>

<style>
  div.experience-list-container{
    margin: 0 0 -15px 10px;
    padding: 0;
  }

</style>

<div class="experience-list-container">
  {#each items.concat().sort((a,b)=>a.order - b.order) as item}
    {#if (!item.force_hide)}
      <ExperienceItem bind:item on:refresh={refresh} {standalone} {work}/>
    {/if}
  {/each}
</div>

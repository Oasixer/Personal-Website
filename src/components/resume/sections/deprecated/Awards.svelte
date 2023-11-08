<script>
  import Section from './Section.svelte';
  import AwardsInterestsPointList from '../components/AwardsInterestsPointList.svelte';
  import ListControls from '../components/ListControls.svelte';
  import SectionControls from '../components/SectionControls.svelte';

  let header = 'Awards / Achievements';
  let items = [
    {title: 'Waterloo Engineering Competition 2019 - 2nd place', order: 0, force_hide: false},
    {title: 'CIBC Employee Above & Beyond Award', order: 2, force_hide: false},
    {title: 'UTRAHacks 2018 - 2nd place', order: 4, force_hide: false},
    {title: 'University Bouldering Series 2018 - 2nd place', order: 6, force_hide: false},
    {title: '2017 Youth Climbing Nationals - 7th place', order: 8, force_hide: false}
  ];
  
  export const contentSettings = () => {
    return items;
  };

  export const setContentSettings = (itemSettings) => {
    items = [...itemSettings];
  };

  let show_section_controls = false;
  let show_list_controls = false;
  let force_hide = false;

  
</script>

<style>
  p{
    margin: 6px 0;
  }
</style>

<Section {header} {force_hide} bind:show_section_controls bind:show_list_controls>
  {#if show_section_controls}
    <SectionControls bind:force_hide on:close={()=>{show_section_controls=false}}/>
  {/if}
  {#if show_list_controls}
    <ListControls bind:items on:close={()=>{show_list_controls=false;}}/>
  {/if}
  <AwardsInterestsPointList bind:items bind:show_list_controls/>
</Section>

<script>
  import Section from './Section.svelte';
  import { education_awards_interests_font_size, skills_headings_font_size } from '../utils/settings.js';
  import SectionControls from '../components/SectionControls.svelte';

  let header = 'Education';
  /* let lines = ['BASc in Mechatronics Engineering, Software Option', 'University of Waterloo', 'Expected Graduation April 2023']; */

  export const contentSettings = () => {};
  export const setContentSettings = (itemSettings) => {
    // Do nothing
  };

  let force_hide = false;
  let show_section_controls = false;
</script>

<style>
  /* p{ */
    /* margin: 2px 0; */
    /* font-size: 14px; */ /* set with store instead of hardcoded */

  /* } */
  /* div.line-container{ */
    /* margin-bottom: -2px; */
  /* } */
  /* h1.skills-section-title{ */
  /*   margin: 0 15px 0 0; */
    /* font-family: roboto, sans-serif; /* 15px font size, set by store instead of hardcoded */
    /* font-weight: 900; /* 15px font size, set by store instead of hardcoded */
  /* } */
  /* h1.skills-section-title-right{ */
    /* margin: 0 0 0 auto; */
    /* font-family: roboto, sans-serif; /* 15px font size, set by store instead of hardcoded */
    /* font-weight: 900; /* 15px font size, set by store instead of hardcoded */
  /* } */
  /* div.row{ */
  /*   display: flex; */
  /*   flex-flow: row nowrap; */
  /* } */
  /* div.col{ */
  /*   margin: 0; */
  /*   display:flex; */
  /*   flex-flow: column nowrap; */
  /*   justify-content: flex-start; */
  /* } */
  /* p.align-right{ */
    /* font-size: 15px; */
    /* font-weight: 400; */
    /* margin-left: auto; */
  /* } */
  /* p.date_right_italics{ */
  /*   margin-left: auto; */
    /* font-size: 15px; */
    /* font-weight: 400; */
    /* color: grey; */
    /* font-style: italic; */
  /* } */
</style>

<Section {header} {force_hide} bind:show_section_controls>
  {#if show_section_controls}
    <SectionControls bind:force_hide on:close={()=>{show_section_controls=false}}/>
  {/if}
  <div>
    <div class="flex flex-col ml-3">
      <!-- <div class="row"> -->
      <!-- <h1 class='skills-section-title' style="{'font-size: '+$skills_headings_font_size+'px;'}">University of Waterloo</h1> -->
      <!-- <h1 class='skills-section-title-right' style="{'font-size: '+$skills_headings_font_size+'px;'}">Waterloo, ON</h1> -->
      <!-- </div> -->
      <div class='flex flex-row w-full items-center'>
        <p class="dark:text-blue-subdued text-szBase font-rubik6">
        <!-- <p class="dark:text-blue-light" style="font-size: {$education_awards_interests_font_size}px; line-height: 1;"> -->
          University of Waterloo
        </p>
        <!-- <div class="dark:bg-grey-800" style="width: 2px;"></div> -->
        <div class="h-4 mt-[1px] w-[1px] bg-grey-700 mx-4"></div>
        <p class="dark:text-blue-light font-rubik6"> Mechatronics Engineering BASc</p>
        <div class="h-4 mt-[1px] w-[1px] bg-grey-700 mx-4"></div>
        <p class="dark:text-blue-light font-rubik6">Software Option</p>
				<!-- <p class="align-right" style="font-size: {$education_awards_interests_font_size}px; line-height: 1;">2018 - Apr 2023</p> -->
				<p class="font-sans font-wgt500 text-szBase italic text-pink-accent ml-auto">2018-Apr 2023</p>
      </div>
			<div class='flex flex-row flex-nowra;w
      items-center font-sans font-wgt500 gap-2'>
				<p class=''>Coursework</p>
				<p class='text-blue-light'>⯈</p>
				<!-- <h1 class='skills-section-title' style="{'font-size: '+$skills_headings_font_size+'px; margin-right: 5px;'}">Coursework: </h1> -->
				<p class='font-sans font-wgt300 text-grey-00'> Programming for Performance, Search Engines, Adaptive Algos, Datastructures and Algos, Microprocessors</p>
				<!-- <p style="font-size: {$education_awards_interests_font_size}px; line-height: 1;">Programming for Performance, Search Engines, Adaptive Algos, Datastructures and Algos, Microprocessors</p> -->
			</div>
    </div>
  </div>
</Section>

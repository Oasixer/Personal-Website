<script>
  export const contentSettings = () => {
    // console.log(items[0].force_hide);
    return items;
  };
  import { skills_content_bottom_margin } from '../utils/settings.js';
  import { purpleMode } from '@viewport';

  export const setContentSettings = (itemSettings) => {
    items.forEach(function (item) {
      let s = itemSettings.find(i => i.title == item.title);
      if (s){
        for (const property in s) {
          // console.log(`${property}: ${s[property]}`);
          if (property === 'tags'){
						return;
            s.tags.forEach(function (tag) {
              let tagSettings = s.tags.find(i => i.title == tag.title);
              if (tagSettings){
                for (const property in tagSettings) {
                  /* console.log(`${property}: ${tagSettings[property]}`); */
                  item.tags[property] = tagSettings[property];
                };
              }
            });
          }
          else{
            item[property] = s[property];
          }
        };
      }
    });
    // console.log(`item0.force_hide: ${items[0].force_hide}`);
    items = [...items];
    // console.log(`item0.force_hide: ${items[0].force_hide}`);
  };

  // $: console.log(`item[0].force_hide: ${items[0].force_hide}`);

  import Section from './Section.svelte';
  import ListControls from '../components/ListControls.svelte';
  import SectionControls from '../components/SectionControls.svelte';
  import { TagNames, tags, alternate_skills_display_mode,
    skills_headings_font_size, skills_content_font_size,
    force_display_skills_ignore_tags
  } from '../utils/settings.js';
  import { arrayIntersect } from '../utils/misc.js';
  import {onMount} from 'svelte';
  import {sleep} from '../utils/misc.js';
  
  export let standalone=false;
  let header = 'Skills';
  let show_section_controls = false;
  let show_list_controls = false;
  let force_hide = false;

  let items = [
    {
      title: 'Languages',
      tags: [
        [
          {title: TagNames.PYTHON},
          {title: TagNames.TS},
          // {title: TagNames.JS},
          {title: TagNames.C},
          {title: TagNames.GO},
          {title: TagNames.LUA},
          {title: TagNames.CPP},
          // {title: TagNames.SQL},
          // {title: TagNames.REGEX},
          // {title: TagNames.HTML},
        ],
        [
          // {title: TagNames.C},
          {title: TagNames.RUST},
          {title: TagNames.BASH},
          {title: TagNames.KOTLIN},
          {title: TagNames.JAVA},
          // {title: TagNames.ASSEMBLY},
          // {title: TagNames.MATLAB},
          // {title: TagNames.LATEX}
          // {title: TagNames.CSS},
        ]
      ],
      show_controls: false,
      show_tag_controls: false,
      force_hide: false,
      order: 2
    },
    {
      title: 'Technologies',
      tags: [
        {title: TagNames.TCPIP},
        {title: TagNames.KUBERNETES},
        {title: TagNames.BLUETOOTH},
        // {title: TagNames.O},
        {title: TagNames.GRAPHQL},
        {title: TagNames.NGINX},
        {title: TagNames.REACT},
        {title: TagNames.SVELTE},
        // {title: TagNames.TERRAFORM},
        // {title: TagNames.REST},
        {title: TagNames.LINUX},
        {title: TagNames.REDIS},
        // {title: TagNames.OPENCV},
        // {title: TagNames.PROTOBUF},
        // {title: TagNames.DOCKER},
        // {title: TagNames.JWT},
        // {title: TagNames.QT},
      ],
      show_controls: false,
      show_tag_controls: false,
      force_hide: false,
      order: 3
    },
    // {
    //   title: 'Frameworks',
    //   tags: [
    //     {title: TagNames.FLASK},
    //     {title: TagNames.EXPRESSJS},
    //     {title: TagNames.SPRING},
    //     {title: TagNames.SVELTE},
    //     // {title: TagNames.REACT},
    //   ],
    // },
  ].map((i, idx)=>{return {...i, show_controls: false, show_tag_controls: false, force_hide: i.hasOwnProperty('force_hide')?i.force_hide:false, order: idx, tags: Array.isArray(i.tags[0])?[i.tags[0].map((j, j_idx)=>{return {...j, force_hide: j.hasOwnProperty('force_hide')?j.force_hide:false, order: j_idx*2}}), i.tags[1].map((j, j_idx)=>{return {...j, force_hide: j.hasOwnProperty('force_hide')?j.force_hide:false, order: j_idx*2}})]:i.tags.map((j, j_idx)=>{return {...j, force_hide: j.hasOwnProperty('force_hide')?j.force_hide:false, order: j_idx*2}})}});

  function toggle_tags_controls(i){
    if (!standalone){
      return;
    }
    i.show_tag_controls = !i.show_tag_controls;
    refresh_tags();
    // console.log("i tags:", i.tags);
  }
  
  function toggle_force_hide(i){
    i.force_hide = !i.force_hide;
  }

  $: refresh_tags({$tags});

  function refresh_tags(){
    items = [...items];
    /* console.log('refreshing skills items'); */
  }

  function should_display_pointlist(pointList){
		return true;
    // Returns boolean depending on whether this point list should be displayed.
    // which depends on if the tags are relevant to the loaded tags, and any other overriding settings like
    // disable_coursework_skills

    /* console.log('pointList'); */
    /* console.log(pointList); */
    
    if (embedded){
      return true;
    }

    if (pointList.force_hide){
      return false;
    }

    // function get_indexed_tags(i){
    //   return i.filter(j => j.use_index).map(j => j.title);
    // }

    // if (arrayIntersect($tags, get_indexed_tags(pointList.tags)).length > 0){
    //   return true;
    // }

    // if (pointList.title == 'Coursework'){
    //   return true;
    // }
    //
    // return false;
  } 

  // function tag_sort(a, b){
  //   if ($tags.includes(a.title)){
  //     return $tags.includes(b.title) ? 0 : -1;
  //   }
  //   return $tags.includes(b.title) ? 1 : 0;
  // }

  function order_sort(a, b){
    return a.order - b.order;
  }

  
</script>

<style>
  div.row{
    display: flex;
    flex-flow: row nowrap;
  }

  /* The container */
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */ .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #2196F3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 6px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  input[type="number"]{
    width: 54px;
    text-align: center;
    font-size: 16px;
    height: 25px;
    margin-right: 8px;
  }
  div.col{
    margin: 0;
    display:flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }
  
  div.row{
    margin: 0;
    display:flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  h1.skills-section-title{
    margin: 0 15px 0 0;
    /* font-family: roboto, sans-serif; /* 15px font size, set by store instead of hardcoded */
    /* font-weight: 900; /* 15px font size, set by store instead of hardcoded */
  }

  /* h1.skills-section-title.darktheme{ */
  /*   color: #0078b4; */
  /*   font-size: 20px; */
  /* } */

  /* h1.skills-section-title.mobile{ */
  /*   font-size: 16px; */
  /*   font-weight: 600; */
  /* } */

  /* p{ */
    /* margin: 0 0 0 10px; */
    /* font-weight: 300; */
    /* color: #222222; */
    /*font-size: 15px;*/ /* 15px set by store instead of hardcoded */
  /* } */
  /* p.darktheme{ */
  /*   color: #a3a4a5; */
  /*   font-size: 18px; */
  /* } */
</style>

<Section {header} {standalone} {force_hide} bind:show_section_controls bind:show_list_controls>
  {#if show_section_controls && standalone}
    <SectionControls bind:force_hide on:close={()=>{show_section_controls=false}}/>
  {/if}
  {#if show_list_controls && standalone}
    <ListControls bind:items on:close={()=>{show_list_controls=false;}}/>
  {/if}
  <!-- <div style="{embedded?'':'margin: 0 0 0 10px'}"> -->
  <div style="{!standalone?'':'margin: 0 0 0 10px'}" class="flex flex-col gap-1">
  {#each items.concat().sort((a, b) => a.order - b.order) as item, n}
    {#if should_display_pointlist(item, $tags)}
      <div>
        <!-- style="{(standalone)?('font-size: '+$skills_headings_font_size+'px;'):''}" -->
        <!-- class:!text-purple-500={$purpleMode} -->
        <h1 class="font-rubik6 text-szBase text-slate-700 dark:text-sky-300" 
           on:click={()=>{item.show_controls = !item.show_controls}}>
            {item.title_alt?item.title_alt:item.title}
        </h1>
    <!-- <div -->
    <!--   class:mobile class="font-headerBold text-7xl text-white uppercase" -->
    <!--   bind:this={aboutElement} -->
    <!--   bind:offsetHeight={height}> -->
        {#if item.show_controls && standalone}
          <ListControls single={true} items={[item]} on:close={()=>{item.show_controls = false}}/>
        {/if}
          <div
          on:click={()=>{toggle_tags_controls(item)}}
          class="flex flex-row items-center ml-4">
          <!-- font-sans font-wgt400 text-szBase dark:text-grey-200"> -->
          <!-- style="{'margin-bottom: '+((n == items.length -1) ? '0' : $skills_content_bottom_margin+'px;')}"> -->
             <!-- ((standalone)?('font-size: '+$skills_content_font_size+'px;'):'')} line-height: 1; font-weight: 400;"> -->
            {#if Array.isArray(item.tags[0])}
              <i class="font-sans font-wgt600 text-szLg text-sky-900 dark:text-blue-subdued mr-2">Proficient</i>
              <p class="font-sans font-wgt400 text-szLg text-slate-900 dark:text-grey-00">{item.tags[0].filter(i => !i.force_hide).sort(order_sort).map(i => i.title_alt?i.title_alt:i.title).join(', ')}</p>
              <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Familiar: </i> -->
              <i class="font-sans font-wgt600 text-szLg text-sky-900 dark:text-blue-subdued mr-2 ml-auto">Familiar</i>
              <p class="font-sans font-wgt400 text-szLg text-slate-900 dark:text-grey-00 mr-0">{item.tags[1].filter(i => !i.force_hide).sort(order_sort).map(i => i.title_alt?i.title_alt:i.title).join(', ')}</p>
            {:else}
              <p class="font-sans font-wgt400 text-szLg text-slate-900 dark:text-grey-00">{item.tags.filter(i => !i.force_hide).sort(order_sort).map(i => i.title_alt?i.title_alt:i.title).join(', ')}</p>
            {/if}
          </div>
          <!-- </p> -->
          <!--{item.tags.filter(i => !i.force_hide).sort(tag_sort).sort(order_sort).map(i => i.title_alt?i.title_alt:i.title).join(', ')}
          </p>-->
        {#if item.show_tag_controls && standalone}
          <ListControls title='Tag Controls' bind:items={item.tags} on:close={()=>{item.show_tag_controls=false}}/>
        {/if}
      </div>
    {/if}
  {/each}
  </div>
</Section>

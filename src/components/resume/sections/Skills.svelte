<script>
  export const contentSettings = () => {
    console.log(items[0].force_hide);
    return items;
  };
  export let mobile;
  import { skills_content_bottom_margin } from '../utils/settings.js';

  export const setContentSettings = (itemSettings) => {
    items.forEach(function (item) {
      let s = itemSettings.find(i => i.title == item.title);
      if (s){
        for (const property in s) {
          console.log(`${property}: ${s[property]}`);
          if (property === 'tags'){
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
    console.log(`item0.force_hide: ${items[0].force_hide}`);
    items = [...items];
    console.log(`item0.force_hide: ${items[0].force_hide}`);
  };

  $: console.log(`item[0].force_hide: ${items[0].force_hide}`);

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
  
  export let embedded=false;
  let header = 'Skills';
  let show_section_controls = false;
  let show_list_controls = false;
  let force_hide = false;

  let items = [
    {
      title: 'Languages',
      tags: [{title: TagNames.PYTHON, order: 2, force_hide: false, use_index: true},
        {title: TagNames.JS, order: 4, force_hide: false, use_index: true},
        {title: TagNames.KOTLIN, order: 6, force_hide: false, use_index: true},
        {title: TagNames.JAVA, order: 8, force_hide: false, use_index: true},
        {title: TagNames.GOLANG, order: 10, force_hide: false, use_index: true},
        {title: TagNames.CPP, order: 12, force_hide: false, use_index: true},
        {title: TagNames.C, order: 14, force_hide: false, use_index: true},
        {title: TagNames.HTML, order: 15, force_hide: false, use_index: true},
        {title: TagNames.CSS, order: 16, force_hide: false, use_index: true},
        {title: TagNames.BASH, order: 18, force_hide: false, use_index: true},
        {title: TagNames.ASSEMBLY, order: 20, force_hide: false, use_index: true},
        {title: TagNames.VIMSCRIPT, order: 20, force_hide: true, use_index: true},
        {title: TagNames.AWK, order: 22, force_hide: true, use_index: true},
        {title: TagNames.MATLAB, order: 24, force_hide: false, use_index: true},
      ],
      show_controls: false,
      show_tag_controls: false,
      force_hide: false,
      order: 2
    },
    {
      title: 'Tools & Frameworks',
      tags: [
        {title: TagNames.FLASK, order: 0, force_hide: false, use_index: true},
        {title: TagNames.NODEJS, order: 2, force_hide: false, use_index: true},
        {title: TagNames.SPRING, order: 4, force_hide: false, use_index: true},
        {title: TagNames.KUBERNETES, order: 5, force_hide: false, use_index: true},
        {title: TagNames.AWS, order: 7, force_hide: false, use_index: true},
        {title: TagNames.GCLOUD, order: 10, force_hide: false, use_index: true},
        {title: TagNames.GRAPHQL, order: 12, force_hide: false, use_index: true},
        {title: TagNames.POSTGRESQL, order: 14, force_hide: false, use_index: true},
        {title: TagNames.MYSQL, order: 20, force_hide: false, use_index: true},
        {title: TagNames.DOCKER, order: 12, force_hide: false, use_index: true},
        {title: TagNames.ROS, order: 22, force_hide: false, use_index: true},
        {title: TagNames.SVELTE, order: 23, force_hide: false, use_index: true},
      ],
      show_controls: false,
      show_tag_controls: false,
      force_hide: false,
      order: 2
    },
{
      title: 'Backend / Database',
      tags: [{title: TagNames.FLASK, order: 0, force_hide: false, use_index: true},
        {title: TagNames.GOLANG, order: 1, force_hide: false, use_index: true},
        {title: TagNames.NODEJS, order: 2, force_hide: false, use_index: true},
        {title: TagNames.KUBERNETES, order: 5, force_hide: false, use_index: true},
        {title: TagNames.POSTGRESQL, order: 6, force_hide: false, use_index: true},
        {title: TagNames.GRAPHQL, order: 7, force_hide: false, use_index: true},
        {title: TagNames.SQLALCHEMY, order: 8, force_hide: false, use_index: true},
        {title: TagNames.SEQUELIZE, order: 8, force_hide: false, use_index: true},
        {title: TagNames.ORACLEDB, order: 12, force_hide: false, use_index: true},
        {title: TagNames.MONGODB, order: 11, force_hide: false, use_index: true},
        {title: TagNames.DOCKER, order: 14, force_hide: true, use_index: true},
        {title: TagNames.DYNAMODB, order: 16, force_hide: false, use_index: true},
        {title: TagNames.GCLOUD, order: 19, force_hide: false, use_index: true},
        {title: TagNames.AWS, order: 4, force_hide: false, use_index: true},
        {title: TagNames.CLOUD_SQL, order: 20, force_hide: false, use_index: true},
        {title: TagNames.COMPUTE_ENGINE, order: 21, force_hide: false, use_index: true}
      ],
      show_controls: false,
      show_tag_controls: false,
      force_hide: true,
      order: 0
    },
    {
      title: 'Frontend Webdev / UI',
      tags: [{title: TagNames.SVELTE, order: 2, force_hide: false, use_index: true},
        {title: TagNames.REACT,  order: 4, force_hide: false, use_index: true},
        {title: TagNames.HTML, order: 6, force_hide: false, use_index: true},
        {title: TagNames.SCSS, order: 8, force_hide: false, use_index: true},
        {title: TagNames.CSS, order: 10, force_hide: false, use_index: true},
        {title: TagNames.JQUERY,  order: 12, force_hide: false, use_index: true},
        {title: TagNames.QT, order: 14, force_hide: false, use_index: true},
        {title: TagNames.PYQT, order: 16, force_hide: false, use_index: true},
        {title: TagNames.SELENIUM, order: 18, force_hide: false, use_index: true},
        {title: TagNames.APPENGINE, order: 19, force_hide: false, use_index: true},
      ],
      show_controls: false,
      show_tag_controls: false,
      force_hide: true,
      order: 2
    },
    {
      title: 'Languages',
      tags: [{title: TagNames.PYTHON, order: 2, force_hide: false, use_index: true},
        {title: TagNames.GOLANG, order: 4, force_hide: false, use_index: true},
        {title: TagNames.JS, order: 6, force_hide: false, use_index: true},
        {title: TagNames.TYPESCRIPT, order: 8, force_hide: false, use_index: true},
        {title: TagNames.CPP, order: 10, force_hide: false, use_index: true},
        {title: TagNames.C, order: 12, force_hide: false, use_index: true},
        {title: TagNames.JAVA, order: 13, force_hide: false, use_index: true},
        {title: TagNames.ARDUINO, order: 17, force_hide: false, use_index: true},
        {title: TagNames.BASH, order: 16, force_hide: false, use_index: true},
        {title: TagNames.ASSEMBLY, order: 18, force_hide: false, use_index: true},
        {title: TagNames.VIMSCRIPT, order: 20, force_hide: false, use_index: true},
        {title: TagNames.AWK, order: 22, force_hide: false, use_index: true},
        {title: TagNames.MATLAB, order: 24, force_hide: false, use_index: true},
      ],
      show_controls: false,
      show_tag_controls: false,
      force_hide: true,
      order: 4
    },
    /* { */
      /* title: 'Control Systems', */
      /* tags: [{title: TagNames.ROS, order: 2, force_hide: false, use_index: true}, */
        /* {title: "Rasperry Pi (Embedded)", order: 4, force_hide: false, use_index: true}, */
        /* {title: "Autonomous Pathfinding", order: 6, force_hide: false, use_index: true}, */
        /* {title: "Image Processing/Object Detection in OpenCV", order: 8, force_hide: false, use_index: true} */
      /* ], */
      /* show_controls: false, */
      /* show_tag_controls: false, */
      /* force_hide: true, */
      /* order: 5 */
    /* }, */
    /* [> { <] */
      /* title: 'Linux', */
      /* tags: [ */
        /* {title: TagNames.ARCH, order: 6, force_hide: false, use_index: true}, */
        /* {title: TagNames.UBUNTU, order: 8, force_hide: false, use_index: true}, */
        /* {title: TagNames.DEBIAN, order: 10, force_hide: false, use_index: true}, */
        /* {title: TagNames.WSL, order: 12, force_hide: false, use_index: true}, */
        /* {title: "Rasperry Pi", order: 14, force_hide: false, use_index: true} */
      /* ], */
      /* show_controls: false, */
      /* show_tag_controls: false, */
      /* force_hide: true, */
      /* order: 6 */
    /* }, */
    {
      title: 'Environment/Tools',
      tags: [
        {title: "Linux (Arch, Debian, Ubuntu)", order: 2, force_hide: false, use_index: true},
        {title: "vim", order: 4, force_hide: false, use_index: true},
        {title: "regex", order: 3, force_hide: false, use_index: true},
        {title: TagNames.DOCKER, order: 6, force_hide: false, use_index: true},
        {title: "GNU Make", order: 7, force_hide: false, use_index: true},
        {title: "CMake", order: 8, force_hide: false, use_index: true},
        {title: TagNames.WSL, order: 10, force_hide: false, use_index: true}
      ],
      show_controls: false,
      show_tag_controls: false,
      force_hide: true,
      order: 7
    },
    {
      title: 'Data Analysis / Visualization',
      tags: [{title: TagNames.SPACY, order: 2, force_hide: false, use_index: true},
        {title: TagNames.NLTK, order: 4, force_hide: false, use_index: true},
        {title: TagNames.D3, order: 6, force_hide: false, use_index: true},
        {title: TagNames.PLOTLY, order: 8, force_hide: false, use_index: true},
        {title: TagNames.MATPLOTLIB, order: 10, force_hide: false, use_index: true},
        {title: TagNames.PANDAS, order: 12, force_hide: false, use_index: true},
        {title: TagNames.DATA_ANALYSIS, order: 14, force_hide: true, use_index: true},
        {title: TagNames.DATA_VISUALIZATION, order: 16, force_hide: true, use_index: true},
        {title: TagNames.NLP, order: 18, force_hide: true, use_index: true},
        {title: TagNames.MATLAB, order: 15, force_hide: false, use_index: true}
      ],
      show_controls: false,
      show_tag_controls: false,
      force_hide: true,
      order: 8
    },
    {
      title: 'Electrical',
      tags: [{title: TagNames.PCB, order: 2, force_hide: false, use_index: true},
        {title: TagNames.PLC, order: 4, force_hide: false, use_index: true},
        {title: TagNames.SOLDERING, order: 6, force_hide: false, use_index: true},
        {title: TagNames.WIRING, order: 8, force_hide: false, use_index: true},
        {title: TagNames.CIRCUITS, order: 10, force_hide: false, use_index: true}
      ],
      show_controls: false,
      show_tag_controls: false,
      force_hide: true,
      order: 10
    },
    {
      title: 'Coursework',
      tags: [{title: 'Data Structures and Algorithms', order: 4, force_hide: false, use_index: false},
        { title: 'Real Time Operating Systems', order: 0, force_hide: false, use_index: false},
        { title: 'Microprocessors', order: 4, force_hide: false, use_index: false},
        { title: 'Digital Computation', order: 3, force_hide: false, use_index: false}],
      show_controls: false,
      show_tag_controls: false,
      force_hide: true,
      order: 12
    }
  ];

  function toggle_tags_controls(i){
    if (embedded){
      return;
    }
    i.show_tag_controls = !i.show_tag_controls;
    refresh_tags();
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

    function get_indexed_tags(i){
      return i.filter(j => j.use_index).map(j => j.title);
    }

    if (arrayIntersect($tags, get_indexed_tags(pointList.tags)).length > 0){
      return true;
    }

    if (pointList.title == 'Coursework'){
      return true;
    }

    return false;
  } 

  function tag_sort(a, b){
    if ($tags.includes(a.title)){
      return $tags.includes(b.title) ? 0 : -1;
    }
    return $tags.includes(b.title) ? 1 : 0;
  }

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
    font-family: roboto, sans-serif; /* 15px font size, set by store instead of hardcoded */
    font-weight: 900; /* 15px font size, set by store instead of hardcoded */
  }

  h1.skills-section-title.darktheme{
    color: #0078b4;
    font-size: 20px;
  }

  h1.skills-section-title.mobile{
    font-size: 16px;
    font-weight: 600;
  }

  p{
    margin: 0 0 0 10px;
    font-weight: 300;
    color: #222222;
    /*font-size: 15px;*/ /* 15px set by store instead of hardcoded */
  }
  p.darktheme{
    color: #a3a4a5;
    font-size: 18px;
  }
</style>

<Section {header} {embedded} {force_hide} bind:show_section_controls bind:show_list_controls>
  {#if show_section_controls && !embedded}
    <SectionControls bind:force_hide on:close={()=>{show_section_controls=false}}/>
  {/if}
  {#if show_list_controls && !embedded}
    <ListControls bind:items on:close={()=>{show_list_controls=false;}}/>
  {/if}
  <div style="{embedded?'':'margin: 0 0 0 10px'}">
  {#each items.concat().sort((a, b) => a.order - b.order) as item, n}
    {#if should_display_pointlist(item, $tags)}
      <h1 class="skills-section-title" class:darktheme={embedded} class:mobile
      style="{(!embedded)?('font-size: '+$skills_headings_font_size+'px;'):''}"
         on:click={()=>{item.show_controls = !item.show_controls}}>
          {item.title_alt?item.title_alt:item.title}
      </h1>
      {#if item.show_controls && !embedded}
        <ListControls single={true} items={[item]} on:close={()=>{item.show_controls = false}}/>
      {/if}
        <p 
        on:click={()=>{toggle_tags_controls(item)}}
        class:darktheme={embedded}
        style=
        "{'margin-bottom: '+((n == items.length -1) ? '0' : $skills_content_bottom_margin+"px")+';'+
          ((!embedded)?('font-size: '+$skills_content_font_size+'px;'):'')} line-height: 1;">
        {item.tags.filter(i => !i.force_hide).sort(tag_sort).sort(order_sort).map(i => i.title_alt?i.title_alt:i.title).join(', ')}
      </p>
      {#if item.show_tag_controls && !embedded}
        <ListControls title='Tag Controls' bind:items={item.tags} on:close={()=>{item.show_tag_controls=false}}/>
      {/if}
    {/if}
  {/each}
  </div>
</Section>

<script>
  import {
    disable_interests_section,
    show_project_locations,
    show_project_positions,
    show_project_dates,
    force_use_all_employment,
    swap_columns,
    single_column,
    compact_exp_info,
    tags,
    orders,
    display_mode,
    disable_settings_button,
    show_tags_under_experience,
    disable_categorical_tags,
    top_align_sections,
    education_awards_interests_font_size,
    section_content_top_margin,
    show_section_header_line,
    experience_content_font_size,
    skills_content_bottom_margin,
    skills_headings_font_size,
    skills_content_font_size,
    section_headings_font_size,
    top_name_top_margin,
    top_name_bottom_margin,
    top_header_bottom_margin,
    section_bottom_margin,
    top_name_font_size,
    force_display_skills_ignore_tags,
    TagNames,
    limit_resume_height,
    show_11in_line
  } from '../utils/settings.js';

  import { createEventDispatcher } from 'svelte';
  import { sleep, getStoreValue } from '../utils/misc.js';

  /* const dispatch = createEventDispatcher(); */
  /* const dispatchGetContentSettings = () => {dispatch('getContentSettings');} */
  export let getContentSettings;
  export let setContentSettings;

  export let modal;

  /* $: console.log({$tags}); */


  $: bools = [
    {
      name: 'Oneline experience/position info',
      store: compact_exp_info
    },
    {
      name: 'Show project locations',
      store: show_project_locations
    },
    {
      name: 'Show project dates',
      store: show_project_dates
    },
    {
      name: 'Show project positions',
      store: show_project_positions
    },
    {
      name: 'Show tags under experience',
      store: show_tags_under_experience
    },
    {
      name: 'Disable categorical tags',
      store: disable_categorical_tags
    },
    {
      name: 'Swap columns',
      store: swap_columns
    },
    {
      name: 'Single column',
      store: single_column
    },
    {
      name: 'Top align sections',
      store: top_align_sections
    },
    {
      name: 'Force displaying every employment position regardless of tags',
      store: force_use_all_employment
    },
    {
      name: 'Force displaying every skills category regardless of tags',
      store: force_display_skills_ignore_tags
    },
    {
      name: 'Disable interests section',
      store: disable_interests_section
    },
    {
      name: 'Limit resume height to 11in',
      store: limit_resume_height
    },
    {
      name: 'Show line at 11in (bottom of page height limit)',
      store: show_11in_line
    },
    {
      name: 'Show section heading line',
      store: show_section_header_line
    },
  ].sort((a,b)=>a.name<b.name?-1:1);

  $: ints = [
    {
      name: 'Education, awards, interests font size',
      store: education_awards_interests_font_size
    },
    {
      name: 'Experience content font size',
      store: experience_content_font_size
    },
    {
      name: 'Skills headings font size',
      store: skills_headings_font_size
    },
    {
      name: 'Skills content font size',
      store: skills_content_font_size
    },
    {
      name: 'Section headings font size',
      store: section_headings_font_size
    },
    {
      name: 'Section content top margin',
      store: section_content_top_margin
    },
    {
      name: 'Section bottom margin',
      store: section_bottom_margin
    },
    {
      name: 'Skills content bottom margin',
      store: skills_content_bottom_margin
    },
    {
      name: 'Top header bottom margin',
      store: top_header_bottom_margin
    },
    {
      name: 'Top name font size (in em)',
      store: top_name_font_size
    },
    {
      name: 'Top name top margin',
      store: top_name_top_margin
    },
    {
      name: 'Top name bottom margin',
      store: top_name_bottom_margin
    }
  ].sort((a,b)=>a.name<b.name?-1:1);

  let presets = [];

  function updateStoreValue(i){
    /* console.log(i); */
    i.store.set(i.inst.value);
  }

  function toggleBool(i){
    i.store.update((cur) =>{return !cur});
  }


  function toggleTag(tag){
    tags.update(i => {
      let index = i.indexOf(tag);
      if (index !== -1){
        i.splice(index, 1);
      }
      else{
        i.push(tag);
      }
      return i;
    });
  }

  function toggleAllTags(tag){
    let any_missing = false;
    tags.update((cur_tags)=>{
      Object.values(TagNames).forEach((i)=>{
        if (!(cur_tags.includes(i))){
          any_missing = true;
        }
      });
      /* console.log(any_missing); */
      if (any_missing){
        Object.values(TagNames).forEach((i)=>{
          if (!(cur_tags.includes(i))){
              cur_tags.push(i);
          }
        });
      }
      else{
        Object.values(TagNames).forEach((i)=>{
          if (cur_tags.includes(i)){
            toggleTag(i);
          }
        });
      }
      return cur_tags;
    });
  }

  function tagIsEnabled(tag){
    return {$tags}.includes(tag);
  }

  
  let fileInput;

  /* $: console.log(`files4real: ${files}`); */

  const attachFile = () => {
    fileInput.click();
  }
  
  async function import_settings(){
    console.log(`fileList len: ${fileInput.files.length}`);
    const text = await fileInput.files[fileInput.files.length - 1].text();
    console.log(`text: ${text}`);
    let settings = JSON.parse(text);
    console.log(`settings: ${settings}`);
    presets.push(settings);
    loadPreset(settings);
  }

  async function export_print(){
    disable_settings_button.set(true);
    limit_resume_height.set(true);
    show_11in_line.set(false);
    modal.close();
    await sleep(500);
    window.print();
    disable_settings_button.set(false);
  }
  
  function downloadFile(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  
  
  async function export_settings(){
    console.log(fileInput.files)
    let json = new Object();
    json.settings = new Object();
    json.settings.bools = new Object();
    json.settings.ints = new Object();
    bools.forEach(function(i) {
      json.settings.bools[i.name] = getStoreValue(i)
    });
    ints.forEach(function(i) {
      json.settings.ints[i.name] = getStoreValue(i)
    });
    
    /* let test = await dispatchGetContentSettings(); */
    let contentSettings = getContentSettings();
    console.log(contentSettings);
    json.contentSettings = contentSettings;

    downloadFile('settings.json', JSON.stringify(json, null, 2));
  }
  
  function loadPreset(preset){
    for (const i in preset.settings.ints) {
        /* console.log(`${i}: ${preset.settings.ints[i]}`); */
        ints.find(j => j.name == i).store.set(preset.settings.ints[i]);
    };
    for (const i in preset.settings.bools) {
        /* console.log(`${i}: ${preset.settings.ints[i]}`); */
        bools.find(j => j.name == i).store.set(preset.settings.bools[i]);
    };
    setContentSettings(preset.contentSettings);
  }
  
</script>

<style>
  div.row{
    display: flex;
    flex-flow: row nowrap;
  }
  
  div.column-wrap{
    display: flex;
    flex-flow: column wrap;
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

/* Hide the browser's default checkbox */
.container input {
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
</style>

<div>
  <div class="row">
    <div class="column-wrap">
      <h3>Settings</h3>
      {#each bools as bool}
        <label class="container">{bool.name}
          <input type="checkbox" checked={getStoreValue(bool)} on:click={()=>{toggleBool(bool);}}>
          <span class="checkmark"></span>
        </label>
      {/each}
      {#each ints as int}
        <div class="row">
          <input type="number" value={getStoreValue(int)} bind:this={int.inst} on:change={()=>{updateStoreValue(int)}}>
          <label>{int.name}</label>
        </div>
      {/each}
    </div>
    <div class="column-wrap">
      <h3>Tags</h3>
      {#each Object.values(TagNames).sort() as tag}
          <label class="container">{tag}
            <input type="checkbox" checked={$tags.includes(tag)} on:click={()=>{toggleTag(tag)}}>
            <span class="checkmark"></span>
          </label>
      {/each}
      <button on:click={()=>{toggleAllTags()}}>Check/Uncheck All</button> 
    </div>
  </div>
</div>
<button on:click={export_print}>Export to PDF by printing (select PDF)</button>
<button on:click={export_settings}>Export preset file</button>
<button on:click={attachFile}>Import preset file</button>

<input
  type="file"
  size="chars"
  style="display:block; display:none; visibility:hidden; width:0; height:0;"
  multiple
  on:change={import_settings}
  bind:this={fileInput}>

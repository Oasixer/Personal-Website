<script>
  import WorkExperience from './sections/WorkExperience.svelte';
  import Skills from './sections/Skills.svelte';
  import Education from './sections/Education.svelte';
  import SideProjects from './sections/SideProjects.svelte';
  import Awards from './sections/Awards.svelte';
  import Interests from './sections/Interests.svelte';
  import Header from './components/Header.svelte';
  import Modal from './components/SettingsModal.svelte';
  import Settings from './components/Settings.svelte';
  
  export let embedded=false;
  let showModal = false;
  let modal; // will be bound to modal instance

  import { orders, single_column, swap_columns, display_mode, disable_interests_section, disable_settings_button,
  top_align_sections, limit_resume_height, show_11in_line} from './utils/settings.js';

  let allSections = [
  {
    name: 'Skills',
    component: Skills,
    order: {$orders}.SKILLS,
    group: 'other',
  },
  {
    name: 'WorkExperience',
    component: WorkExperience,
    order: {$orders}.WORKEXPERIENCE,
    group: 'main',
  },
  /* { */
    /* name: 'SideProjects', */
    /* component: SideProjects, */
    /* order: {$orders}.SIDEPROJECTS, */
    /* group: 'main', */
  /* }, */
  {
    name: 'Education',
    component: Education,
    order: {$orders}.EDUCATION,
    group: 'other',
  },
  /* { */
    /* name: 'Awards', */
    /* component: Awards, */
    /* order: {$orders}.AWARDS, */
    /* group: 'other', */
  /* }, */
  /* { */
    /* name: 'Interests', */
    /* component: Interests, */
    /* order: {$orders}.INTERESTS, */
    /* group: 'other', */
  /* } */
  ];

  $: singleCol = allSections.sort((a, b) => {
    return a.order - b.order;
  }).filter(i => !($disable_interests_section && i.name=='Interests'));

  $: mainCol = allSections.filter(i => i.group=='main').sort((a, b) => {
    return a.order - b.order;
  });

  $: otherCol = allSections.filter(i => {
    if (i.group != 'other'){
      return false;
    } 
    if (i.name=='Interests'){
      return !$disable_interests_section;
    }
    return true;
    }).sort((a, b) => {
    return a.order - b.order;
    });

  const getContentSettings = () => {
    let settings = new Object();
    allSections.forEach(i => {
      settings[i.name] = i.contentSettings();
    });
    return settings;
  }
  
  const setContentSettings = (contentSettings) => {
    console.log('setContentSettings');
    allSections.forEach(i => {
      /* if (i.name == 'Awards'){ */
      i.inst.setContentSettings(contentSettings[i.name]);
      /* } */
    });
  }

</script>


<style>
  main {
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    width: 8.5in;
    max-width: 8.5in;
    height: 11in;
    max-height: 11in;
  }

  div.main-container{
    /* width: 8.5in; */
    /* max-width: 8.5in; */
    display: flex;
    flex-flow: row nowrap;
    margin: 0;
    padding: 0;
  }

  div.column {
    margin: 0 13px;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }

  div.col-main{
    flex: 2 0; /* grow shrink basis */
  }
  
  div.col-other{
    flex: 1 0; /* grow shrink basis */
  }

  button#modal-button{
    position: fixed;
    top:0;
    left:0;
    z-index: 15;
  }
</style>

<main style="{$limit_resume_height?'overflow: hidden;':'overflow: visible;'+$show_11in_line?'border-bottom: 2px solid red;': 'border: none;'}">
  {#if !$disable_settings_button}
  <button id="modal-button" on:click="{() => showModal = true}">
    Show Settings
  </button>
  {/if}
  <Header on:click="{() => showModal=!embedded}"/>
  <div class="main-container">
    {#if $single_column}
      <div style={$top_align_sections?"justify-content: flex-start":""} class="column col-main">
        {#each singleCol as i}
          <svelte:component this={i.component} bind:this={i.inst} bind:contentSettings={i.contentSettings}/>
        {/each}
      </div>
    {:else}
      {#if $swap_columns}
        <div style={$top_align_sections?"justify-content: flex-start":""} class="column col-other">
          {#each otherCol as i}
            <svelte:component this={i.component} bind:this={i.inst} bind:contentSettings={i.contentSettings}/>
          {/each}
        </div>
        <div style={$top_align_sections?"justify-content: flex-start":""} class="column col-main">
          {#each mainCol as i}
            <svelte:component this={i.component} bind:this={i.inst} bind:contentSettings={i.contentSettings}/>
          {/each}
        </div>
      {:else}
        <div style={$top_align_sections?"justify-content: flex-start":""} class="column col-main">
          {#each mainCol as i}
            <svelte:component this={i.component} bind:this={i.inst} bind:contentSettings={i.contentSettings}/>
          {/each}
        </div>
        <div style={$top_align_sections?"justify-content: flex-start":""} class="column col-other">
          {#each otherCol as i}
            <svelte:component this={i.component} bind:this={i.inst} bind:contentSettings={i.contentSettings}/>
          {/each}
        </div>
      {/if}
    {/if}
  </div>

{#if showModal}
  <Modal on:close="{() => showModal = false}" bind:this={modal}>
    <Settings {modal} {setContentSettings} {getContentSettings}/>
	</Modal>
{/if}
</main>

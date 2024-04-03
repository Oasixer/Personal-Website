<script>
  export let height=undefined;
  /* import Icon from 'fa-svelte/src/Icon.svelte';//'fa-svelte'; */
  import Fa from 'svelte-fa';
  import { faFileDownload } from '@fortawesome/free-solid-svg-icons/faFileDownload';
  import { vp, LAYOUT, purpleMode } from '../viewport';
  import Resume from './Resume.svelte';
  
  import Toggle from '../components/Toggle.svelte'

  /* let src_uw = './images/uw.png'; */
  let dark = true;
  let purpleModeBool = false;

  $: purpleMode.set(purpleModeBool);
</script>

<style>
</style>

<!-- <div class="bg-yellow-600"> -->
<!--   a -->
<!-- </div> -->
<!-- outer page, just bg and containing inner page -->
<div id="outer_resume_page"
     class="flex flex-col w-full bg-blue-bgOuter items-center"
     class:dark
     class:px-3={$vp.layout < LAYOUT['md']}
     bind:offsetHeight={height}>
  <!-- inner page w/ title & resume, width should be set by the resume, no border -->
  <div id="inner_resume_page"
       class="flex flex-col flex-nowrap w-fit">
    <div class="flex flex-row flex-nowrap items-center gap-6 w-[100%]">
      <div class="font-thicc8 text-white text-sz6xl flex-initial flex w-fit mr-auto uppercase"
           class:!text-sz3xl={$vp.layout < LAYOUT['md']}>
      Resume
      </div>
      <!-- <Toggle bind:on={purpleModeBool} title={'TogglePurple(temp)'} /> -->
      {#if $vp.width > 975}
      <Toggle bind:on={dark} title={'Toggle Darktheme'} />
      {/if}
      <a class='flex flex-row flex-nowrap items-center text-sky-300 md:text-sz2xl md:mr-7' href='./kaelan_moffettsteinke_resume2024v2.pdf' download>
        <p class="mr-4"><Fa icon={faFileDownload}/></p>
        <p class="font-rubik5">PDF</p>
      </a>
    </div>
    {#if $vp.width > 975}
      <!-- <div class="h-5"></div> -->
      <Resume standalone={false}/>
    {:else}
      <div>
        <h1 class="text-white">Embedded Resume not currently supported on mobile / narrow viewport.</h1>
        <h1 class="text-white">Pls download as PDF (button above) instead.</h1>
      </div>
    {/if}

    <!-- {/if} -->
  </div>
  <div class="h-[1px] w-[100%] bg-grey-600 mt-14"></div>
</div>

<script>
  export let bg_color;
  export let height=undefined;
  export let mobile;
  /* import Icon from 'fa-svelte/src/Icon.svelte';//'fa-svelte'; */
  import Fa from 'svelte-fa';
  import { faFileDownload } from '@fortawesome/free-solid-svg-icons/faFileDownload';
  import { vp, LAYOUT } from '../viewport';
  import Resume from './Resume.svelte';
  
  import Toggle from '../components/Toggle.svelte'
  /* let src_uw = './images/uw.png'; */
  let dark = true;
</script>

<style>
</style>

<!-- <div class="bg-yellow-600"> -->
<!--   a -->
<!-- </div> -->
<!-- outer page, just bg and containing inner page -->
<div id="outer_resume_page"
     class="flex flex-col w-full bg-blue-bgOuter items-center" class:dark>
  <!-- inner page w/ title & resume, width should be set by the resume, no border -->
  <div id="inner_resume_page"
       class="flex flex-col flex-nowrap w-fit">
    <div class="flex flex-row flex-nowrap items-center gap-6 w-[100%]">
      <div class="font-thicc8 text-white text-sz6xl flex-initial flex w-fit mr-auto uppercase" class:mobile>
      Resume
      </div>
      <a class='flex flex-row flex-nowrap items-center text-blue-light md:text-sz2xl md:mr-7' href='./Kaelan_Resume_2020.pdf' download>
        <p class="mr-4"><Fa icon={faFileDownload}/></p>
        <p class="font-rubik5">PDF</p>
      </a>
      <Toggle bind:on={dark} title={'Toggle Darktheme'} />
    </div>
    {#if $vp.width > 975}
      <!-- <div class="h-5"></div> -->
      <Resume standalone={false}/>
    {:else}
      <div>
      <h1>Resume not currently supported on mobile/viewport narrower than 975 :(</h1>
      </div>
    {/if}

    <!-- {/if} -->
  </div>
</div>

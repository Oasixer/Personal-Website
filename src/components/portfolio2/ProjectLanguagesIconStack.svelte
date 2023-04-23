<script lang="ts">
  // import { getGithubLink } from './project';
  import Fa from 'svelte-fa/src/fa.svelte';
  import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';
  import ProjImgConst from './project';
  import { show_pinguins_modal } from './project';
  import { vp, LAYOUT } from '../viewport';

  import type { ProjMeta, PortfolioState, FilterFn } from './project';
  export let proj: ProjMeta;
  export let row: bool = false;
  // let githubLink = '';
  // if (getGithubLink(proj) !== undefined){
  //   githubLink = getGithubLink(proj) as string;
  // }

  import DevIcon from './DevIcon.svelte';

  const getColumn = (_proj: ProjMeta, side: string) => {
    let halfway = Math.floor((proj.languages.length+1) / 2);
    if (side === 'left'){
      return proj.languages.slice(0,halfway);
    }
    return proj.languages.slice(halfway);
  }
  $: left = getColumn(proj, 'left');
  $: right = getColumn(proj, 'right');
  // }
  // $: console.log(left);
</script>

{#if row}
  <div class="flex flex-row">
    <div class="flex flex-col">
    <!-- {#if $vp.layout <} -->
      <h1 class="font-rubik5 text-szBase text-grey-0 mb-1">Technologies</h1>
      <div class="flex flex-row gap-4">
        <div class="flex flex-col gap-2 self-stretch ml-0 sm:ml-4">
          {#each left as lang}
            <div class="flex flex-row items-center gap-2">
              <DevIcon width={24} {lang} label={true}/>
            </div>
          {/each}
        </div>
        <div class="flex flex-col gap-2 self-stretch">
          {#each right as lang}
            <div class="flex flex-row items-center gap-2">
              <DevIcon width={24} {lang} label={true}/>
            </div>
          {/each}

        </div>
      </div>
    </div>
    <div class="flex flex-col mr-auto ml-3 sm:ml-8">
      <h1 class="font-rubik5 text-szBase text-grey-0 mb-1">Links</h1>
      <!-- {#if githubLink != ''} -->
      {#each proj.links as link}
        {#if link.target.startsWith('https://github')}
          <a class="flex flex-row items-center gap-2" href="{link.target}" target="_blank" rel="noreferrer">
            <Fa size="1.4x" icon={faGithubSquare} color="white"/>
            <p class="font-rubik5 text-szSm underline"
               style="color: white">{link.display}</p>
          </a>
        {/if}
        <!-- {:else if ....} -->
      {/each}
      <!-- {/if} -->
    </div>
  </div>
{:else}
  <div class="flex flex-col gap-2 self-stretch"
      style="min-width: {ProjImgConst.ICON_STACK_WIDTH}px; max-width: {ProjImgConst.ICON_STACK_WIDTH}px; width: {ProjImgConst.ICON_STACK_WIDTH}px; ">
    <h1 class="font-rubik5 text-szBase text-grey-0">Technologies</h1>
    {#each proj.languages as lang}
      <div class="flex flex-row items-center gap-2">
        <DevIcon width={24} {lang} label={true}/>
      </div>
    {/each}

    <!-- <div class="flex flex-col ml-auto mr-0 sm:mr-5"> -->
    <h1 class="font-rubik5 text-szBase text-grey-0 mt-auto">Links</h1>
    <!-- {#if githubLink != ''} -->
      {#each proj.links as link}
        {#if link.target.startsWith('https://github')}
          <a class="flex flex-row items-center gap-2" href="{link.target}" target="_blank" rel="noreferrer">
            <Fa size="1.4x" icon={faGithubSquare} color="white"/>
            <p class="font-rubik5 text-szSm underline"
               style="color: white">{link.display}</p>
          </a>
        {:else if link.target === 'pinguins_demo'}
          <button class="text-sky-300 bg-sky-900"
                  on:click={()=>show_pinguins_modal.set(true)}>
            {link.display}
          </button>
        {/if}
      {/each}
    <!-- {/if} -->
  </div>
{/if}

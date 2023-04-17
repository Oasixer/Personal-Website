<script lang="ts">
  import { getGithubLink } from './project';
  import Fa from 'svelte-fa/src/fa.svelte';
  import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';
  import ProjImgConst from './project';

import type { ProjMeta, PortfolioState, FilterFn } from './project';
  export let proj: ProjMeta;
  let githubLink = '';
  if (getGithubLink(proj) !== undefined){
    githubLink = getGithubLink(proj) as string;
  }

  import DevIcon from './DevIcon.svelte';

</script>

<div class="flex flex-col gap-2 self-stretch" style="min-width: {ProjImgConst.ICON_STACK_WIDTH}px; max-width: {ProjImgConst.ICON_STACK_WIDTH}px; width: {ProjImgConst.ICON_STACK_WIDTH}px; ">
  <h1 class="font-rubik5 text-szBase text-grey-0">Technologies</h1>
  {#each proj.languages as lang}
    <div class="flex flex-row items-center gap-2">
      <DevIcon width={24} {lang} label={true}/>
    </div>
  {/each}

  {#if githubLink != ''}
    <a class="flex flex-row items-center gap-2 mt-auto" href="{githubLink}" target="_blank" rel="noreferrer">
      <Fa size="1.4x" icon={faGithubSquare} color="white"/>
      <p class="font-rubik5 text-szSm underline"
         style="color: white">Project github</p>
     </a>
  {/if}
</div>

<script lang="ts">
import Fa from 'svelte-fa/src/fa.svelte';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

export let standalone: boolean;

</script>

<style>
  div#link-row{
    display: flex;
    padding: 0 -10px; /*top+bot left+right*/
    /* width: 100%; */
  }

  div.v-line{
    width: 1px;
  }
  
  a, a > *{
    font-size: 18px;
  }

  a{
    text-decoration: none;
    display: flex;
  }

  a.darktheme{
  }

  p{
    margin: 0;
  }
  p.iconContainerP{
    margin-right: 4px;
    margin-top: 5px;
  }
</style>

<div id="link-row" class="text-slate-700 dark:text-sky-300 flex flex-row flex-nowrap items-center w-fit mx-auto">
  {#if standalone}
    <a class="" href='https://kaelan.xyz'>
    <!--   <p class="underline underline-offset-2">kaelan.xyz</p> -->
      <p class="iconContainerP"><Fa icon={faSquareArrowUpRight}/></p>
      <p>kaelan.xyz/pf</p>
    </a>
    <div class="h-4 w-[1px] bg-grey-600 dark:bg-grey-700 mx-4"></div>
  {/if}
  <a class="" href="https://github.com/oasixer">
    <p class="iconContainerP"><Fa icon={faGithub}/></p>
    <p>github.com/oasixer</p>
  </a>
  <div class="h-4 w-[1px] bg-grey-600 dark:bg-grey-700 mx-4"></div>
  <a class="">
    <p class="iconContainerP"><Fa icon={faPhone}/></p>
    <!-- <p>647-997-6783</p> -->
    <p>669-245-1735</p>
  </a>
  <div class="h-4 w-[1px] bg-grey-600 dark:bg-grey-700 mx-4"></div>
  <a class=" "href="mailto:kaelan.ms@gmail.com">
    <p class="iconContainerP"><Fa icon={faEnvelopeSquare}/></p>
    <p>kaelan.ms@gmail.com</p>
  </a>
  <div class="h-4 w-[1px] bg-grey-600 dark:bg-grey-700 mx-4"></div>
  <a class="" href="https://www.linkedin.com/in/kaelanms/">
    <p class="iconContainerP"><Fa icon={faLinkedin}/></p>
    <p>linkedin</p>
  </a>
</div>

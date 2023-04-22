<script lang="ts">
  // import Fa from 'svelte-fa';
  import Fa from 'svelte-fa/src/fa.svelte';
  // import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
  // import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
  // import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
  // import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons/faEnvelopeSquare';

// for typescript:
// declare module '@fortawesome/pro-solid-svg-icons/index.es' {
//   export * from '@fortawesome/pro-solid-svg-icons';
// }
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

export let standalone: boolean;

</script>

<style>
  div#link-row{
    display: flex;
    flex-flow: row wrap;
    padding: 0 -10px; /*top+bot left+right*/
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  /* div#link-row.darktheme{ */
  /*   flex-flow: column nowrap; */
  /*   align-items: center; */
  /* }  */

  * {
    /* margin: 0 5px; */
  }

  div.v-line{
    width: 1px;
    /* background-color: black; */
  }
  
  a, a > *{
    font-size: 18px;
  }
  /* a.darktheme, a.darktheme > *{ */
  /*   font-size: 17px; */
  /*   margin-bottom: 15px; */
  /* } */

  a{
    text-decoration: none;
    display: flex;
    /* color: #303030; */
  }

  a.darktheme{
    /* color: #f3f5f4; */
  }

  p{
    margin: 0;
  }
  p.iconContainerP{
    margin-right: 4px;
    margin-top: 5px;
  }
  /* p.iconContainerP.darktheme{ */
  /*   margin-right: 15px; */
  /*   margin-top: 5px; */
  /* } */
</style>

<div id="link-row">
  {#if standalone}
    <a class="text-blue-light" href='https://kaelan.xyz'>
      <p class="underline underline-offset-2">kaelan.xyz</p>
    </a>
    <div class="h-4 w-[1px] bg-grey-700 mx-4"></div>
  {/if}
  <a class="text-blue-light" href="https://www.linkedin.com/in/kaelanms/">
    <p class="iconContainerP"><Fa icon={faGithub}/></p>
    <p>github.com/oasixer</p>
  </a>
  <!-- <div class="v-line dark:bg-grey-800"></div> -->
  <div class="h-4 w-[1px] bg-grey-700 mx-4"></div>
  <a class="text-blue-light">
    <p class="iconContainerP"><Fa icon={faPhone}/></p>
    <p>647-997-6783</p>
  </a>
  <!-- <div class="v-line dark:bg-grey-800"></div> -->
  <div class="h-4 w-[1px] bg-grey-700 mx-4"></div>
  <a class="text-blue-light "href="mailto:ksmoffet@uwaterloo.ca">
    <p class="iconContainerP"><Fa icon={faEnvelopeSquare}/></p>
    <p>ksmoffet@uwaterloo.ca</p>
  </a>
  <!-- <div class="v-line dark:bg-grey-800"></div> -->
  <div class="h-4 w-[1px] bg-grey-700 mx-4"></div>
  <a class="text-blue-light" href="https://www.linkedin.com/in/kaelanms/">
    <p class="iconContainerP"><Fa icon={faLinkedin}/></p>
    <p>linkedin.com/kaelanms</p>
  </a>
  <!-- <a class:darktheme={embedded} class:dark={embedded} href='http://github.com/oasixer'> -->
  <!--   <p class="iconContainerP" class:darktheme={embedded}><Fa icon={faGithub}/></p> -->
  <!--   <p>github.com/oasixer</p> -->
  <!-- </a> -->
  <!-- <div class="v-line"></div> -->
  <!-- <a class:darktheme={embedded} > -->
  <!--   <p class="iconContainerP" class:darktheme={embedded}><Fa icon={faPhone}/></p> -->
  <!--   <p>647-997-6783</p> -->
  <!-- </a> -->
  <!-- <div class="v-line"></div> -->
  <!-- <a class:darktheme={embedded} href="mailto:ksmoffet@uwaterloo.ca"> -->
  <!--   <p class="iconContainerP" class:darktheme={embedded}><Fa icon={faEnvelopeSquare}/></p> -->
  <!--   <p>ksmoffet@uwaterloo.ca</p> -->
  <!-- </a> -->
  <!-- <div class="v-line"></div> -->
  <!-- <a class:darktheme={embedded} href="https://www.linkedin.com/in/kaelanms/"> -->
  <!--   <p class="iconContainerP" class:darktheme={embedded}><Fa icon={faLinkedin}/></p> -->
  <!--   <p>linkedin.com/kaelanms/</p> -->
  <!-- </a> -->
</div>

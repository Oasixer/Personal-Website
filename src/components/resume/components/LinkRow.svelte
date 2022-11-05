<script>;
  import Fa from 'svelte-fa';
  import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
  import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
  import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
  import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons/faEnvelopeSquare';

  export let embedded;
  
</script>

<style>
  div#link-row{
    display: flex;
    flex-flow: row wrap;
    padding: 0 -10px; /*top+bot left+right*/
    width: 100%;
    justify-content: center;
  }
  div#link-row.darktheme{
    flex-flow: column nowrap;
    align-items: center;
  } 

  * {
    margin: 0 5px;
  }

  div.v-line{
    width: 1px;
    background-color: black;
  }
  
  a, a > *{
    font-size: 13px;
  }
  a.darktheme, a.darktheme > *{
    font-size: 17px;
    margin-bottom: 15px;
  }

  a{
    text-decoration: none;
    display: flex;
    color: #303030;
  }

  a.darktheme{
    color: #f3f5f4;
  }

  p{
    margin: 0;
  }
  p.iconContainerP{
    margin-right: 4px;
  }
  p.iconContainerP.darktheme{
    margin-right: 15px;
  }
</style>

<div id="link-row" class:darktheme={embedded}>
  {#if !embedded}
    <!--<a class:darktheme={embedded} href='https://kaelan.xyz'>
    <p>www.kaelan.xyz</p>
    </a>
    <div class="v-line"></div>-->
  {/if}
  <a class:darktheme={embedded} href='http://github.com/oasixer'>
    <p class="iconContainerP" class:darktheme={embedded}><Fa icon={faGithub}/></p>
    <p>github.com/oasixer</p>
  </a>
  <div class="v-line"></div>
  <a class:darktheme={embedded} >
    <p class="iconContainerP" class:darktheme={embedded}><Fa icon={faPhone}/></p>
    <p>647-997-6743</p>
  </a>
  <div class="v-line"></div>
  <a class:darktheme={embedded} href="mailto:ksmoffet@edu.uwaterloo.ca">
    <p class="iconContainerP" class:darktheme={embedded}><Fa icon={faEnvelopeSquare}/></p>
    <p>ksmoffet@uwaterloo.ca</p>
  </a>
  <div class="v-line"></div>
  <a class:darktheme={embedded} href="https://www.linkedin.com/in/kaelanms/">
    <p class="iconContainerP" class:darktheme={embedded}><Fa icon={faLinkedin}/></p>
    <p>linkedin.com/kaelanms/</p>
  </a>
</div>

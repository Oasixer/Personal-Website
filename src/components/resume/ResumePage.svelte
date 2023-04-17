<script>
  export let bg_color;
  export let height=undefined;
  export let mobile;
  /* import Icon from 'fa-svelte/src/Icon.svelte';//'fa-svelte'; */
  import Fa from 'svelte-fa';
  import { faFileDownload } from '@fortawesome/free-solid-svg-icons/faFileDownload';
  import Resume from './Resume.svelte';
  
  import Toggle from '../components/Toggle.svelte'
  /* let src_uw = './images/uw.png'; */
  let darktheme = true;
</script>

<style>
  div#resumepage{
    width: 100%;
    /* padding: 70px 70px 140px 70px; */
    /* display: flex; */
    /* flex-flow: column nowrap; */
  }
  div#resumepage.mobile{
    padding: 50px 20px 60px 20px;
  }

  h1{
    /* font-size: 70px; */
    text-transform: uppercase;
    /* color: #f3f5f4; */
    /* font-weight: 100; */
    /* font-family: "DIN Condensed Web", "Open Sans", "Helvetica", sans-serif; */
    /* margin-bottom: 25px; */
  }

  h1.mobile{
    font-size:24px;
    font-weight: 500;
    max-width:100%;
    overflow-wrap: normal;
  }

  button{
    background-color: transparent;
    border: none;
    color: #d3d5d4;
    cursor: pointer;
    /* background-color: darkgrey; */
    border: 1px solid #d3d5d4;
    border-radius: 5px;
    padding: 20px;
    font-size: 20px;
  }
  button.mobile{
    font-size: 15px;
  }

  button:hover, button:active{
    background-color: transparent;
    color: #f3f5f4;
    padding: 20px;
  }

  div.row{
    display: flex;
    flex-flow: row nowrap;
  }

  a{
    display: flex;
    flex-flow: row nowrap;
    font-size: 30px;
    color: #0078b4;
    text-decoration: none;
  }

  /* p.downloadtext{ */
  /**/
  /* } */
  /* p.downloadtext.mobile{ */
  /*   font-size: 20px; */
  /* } */

  p.iconContainer{
    margin-right: 15px;
    /* font-size: 30px; */
  }
  p.iconContainer.mobile{
    font-size: 20px;
  }

  a:hover{
    text-decoration: none;
  }

</style>

  <!-- style="background-color: {bg_color}" -->
<!-- <div id='resumepage' class:mobile class="bg-blue-bgOuter" -->
<div class="h-[1px] bg-grey-600"></div>
<div id='resumepage' class:mobile
     bind:offsetHeight={height} class="bg-blue-bgOuter flex-col items-center flex-initial p-10 overflow-hidden">
  <div class="w-fit mx-auto">
    <div class="flex flex-row flex-nowrap items-center gap-6 w-[100%]">
      <div class="font-thicc8 text-white text-sz6xl flex-initial flex w-fit mr-auto uppercase" class:mobile>
      Resume
      </div>
      <a class='flex flex-row flex-nowrap items-center' href='./Kaelan_Resume_2020.pdf' download>
        <p class:mobile class="mr-4"><Fa icon={faFileDownload}/></p>
        <p class:mobile class="font-rubik5">PDF</p>
      </a>
      <Toggle bind:on={darktheme} title={'Toggle Darktheme'} />
    </div>
    <div class="dark p-5 border-2 m-6 rounded-xl border-grey-0 overflow-hidden w-fit mx-auto my-10">
      <Resume embedded={true}/>
    </div>
  </div>
  <!-- <div class='flex flex-row flex-nowrap items-center'> -->
  <!-- <a class='flex flex-row flex-nowrap items-center' href='./Kaelan_Resume_2020.pdf' download> -->
  <!--   <p class:mobile class="iconContainer"><Fa icon={faFileDownload}/></p> -->
  <!--   <p class:mobile class="downloadtext">Download</p> -->
  <!-- </a> -->
  <!-- </div> -->
</div>

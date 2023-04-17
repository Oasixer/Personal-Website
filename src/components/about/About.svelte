<script>
  export let height=undefined;
  
  let src_uw = './images/uw.png';
  export let bg_color;
  export let mobile;

  let aboutElement;
  /* let text=`I'm a fourth year Mechatronics Engineering student at the University of Waterloo. I'm currently looking for full time opportunities, now that I've finished my 6 internships. I love to design algorithms that solve difficult tasks, and I live for the satisfaction of closing a hundred chrome tabs when the test cases finally pass. I was a competitive climber from age 10-18, and I love all kinds of rock climbing, especially outdoor bouldering.` */

  /* - i like to keep up with the latest tech, languages, etc */
  /* - I like to automate anything that can be automated (and some things that probably shouldn't be automated) so I can focus */
  /* - 3d printing? */
  let text=`I am Kaelan, a fourth year Mechatronics Engineering (Mechanical + Software + Electrical) student at the University of Waterloo, Canada. I've loved my 6 SWE internships and am currently looking for fulltime opportunities for 2023.`
  
  import { onMount } from 'svelte';
  onMount(async => {
    const bar = () => {
      height = aboutElement.offsetHeight;
    }
    setTimeout(bar, 10);
  });
</script>

<style>
  div.row{
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
  }

  img#uw-pic{
    margin-top: -30px;
  }
  div#about{
    width: 100%;
    padding: 70px;
    display: flex;
    flex-flow: column nowrap;
  }
  div#about.mobile{
    padding: 50px 20px 60px 20px;
  }

  /* h1{ */
  /*   font-size: 70px; */
  /*   text-transform: uppercase; */
  /*   color: #f3f5f4; */
  /*   font-weight: 100; */
  /*   font-family: "DIN Condensed Web", "Open Sans", "Helvetica", sans-serif; */
  /*   margin-bottom: 25px; */
  /* } */

  h1.mobile{
    font-size:24px;
    font-weight: 500;
    max-width:100%;
    overflow-wrap: normal;
  }

  p{
    color: #c3c4c5;
    width: 70%;
    /* font-family: "Source Sans Pro", "Helvetica", sans-serif; */
    /* font-weight: 300; */
    /* line-height: 1.65; */
    /* font-size: 20px; */
  }
  p.mobile{
    text-align: justify;
    width: 100%;
    /* font-weight: 400; */
    /* font-family: "Helvetica", serif; */
    /* font-size:18px; */
  }

  img{
    width: 30%;
  }
  img.mobile{
    width: 100%;
  }

</style>
<div id='about'
  class="bg-blue-bgOuter"
  class:mobile class="derBold text-headerBold"
  bind:this={aboutElement}
  bind:offsetHeight={height}>
  <!-- style="background-color: {bg_color}" -->
  <h1 class:mobile>About Kaelan</h1>
    {#if !mobile}
      <div class='row'>
        <p class:mobile>{text}</p>
        <img alt='uw logo' id='uw-pic' src={src_uw}/>
      </div>
    {:else}
      <p class:mobile>{text}</p>
    {/if}
</div>

<script>
  import { onMount } from 'svelte';
  import ClickOutside from 'svelte-click-outside';
  import TrashIconButton from './TrashIconButton.svelte';
  import NextButton from './NextButton.svelte';

  let portElement;
  export let mobile;

  /* $: console.log(displayedItem); */

  export let bg_color;
  export let height=undefined;

  let base = './images/portfolio/';
  let clickingPrev=false;

  let items=[
    /* { */
      /* title: 'GibJob (side project)', */
      /* img: 'gibjob.png', */
      /* text: 'Visualisation dashboard for UW Rocketry to display live sensor data. Developed data transfer protocol for realtime transmission of rocket sensor data. Improved analysis capabilities by creating data visualizations with D3.js graphs encapsulated as Python Plotly Dash components', */
      /* link: { */
        /* text: 'View on github', */
        /* address: 'https://github.com/waterloo-rocketry/rlcs-daq-plotting' */
      /* } */
    /* }, */
    {
      title: 'Live Rocket Data Visualiser',
      img: 'plotly.png',
      text: 'Visualisation dashboard for UW Rocketry to display live sensor data. Developed data transfer protocol for realtime transmission of rocket sensor data. Improved analysis capabilities by creating data visualizations with D3.js graphs encapsulated as Python Plotly Dash components',
      link: {
        text: 'View on github',
        address: 'https://github.com/waterloo-rocketry/rlcs-daq-plotting'
      }
    },
    {
      title: 'Backr Inc. Webapp and Analytics',
      img: 'backr.png',
      text: 'Developed NodeJS backend, and some components for the React+Redux webapp. Led the design and development of Flask server that handles data ingestion and analytics for customers. Designed main postgres db and schema which was implemented with SQLAlchemy in Python',
      link: {
        text: 'Go to website',
        address: 'https://backr.space/'
      }
    },
    {
      title: 'i3 Window Manager Emulator',
      img: 'i3wm.jpg',
      text: 'Windows native emulator of popular Linux window manager i3. Developed using MSVC in C++ for UI manipulation',
      link: {
        text: 'View on github',
        address: 'https://github.com/Oasixer/i3_emu'
      }
    },
    {
      title: 'Smart Headlamp',
      img: 'smartheadlamp_cropped.jpg',
      text: 'Gesture controlled headlamp with deep learning facial recognition via Haar Cascades in OpenCV. Implemented Leap Motion Control using C++. Set up onboard Rasperry Pi and Arduino to control motors, sensors, and lights. Achieved second place, and received Leap Motion award.',
      link: {
        text: 'View on github',
        address: 'https://github.com/ParthSareen/SmartLamp'
      }
    },
    {
      title: 'Rocket Microcontroller Firmware',
      img: 'vent.png',
      text: 'Handles valves which control the flow of fuel and oxidizer on board a rocket flying to 30,000 feet. Firmware for PIC microcontroller, written in C. Communicates via CAN bus with the rest of the rocket, and the remote launch control system.',
      link: {
        text: 'View on github',
        address: 'https://github.com/waterloo-rocketry/cansw_vent/tree/v2-dev'
      }
    },
    {
      title: 'ROS Robot Driver Station',
      img: 'driverstation.png',
      text: 'Lead the design and development of a QT application which provides a human interface to the robot simulator. Implemented driver station in Python handling joystick input, high-level state control, and diagnostic info. Implemented Robot Operating System (ROS) message publishing/subscribing to relay critical information to and from the robot',
      link: {
        text: 'View on github',
        address: 'https://github.com/uwreact/frc_control'
      }
    },
    {
      title: '3D Printer Firmware',
      img: 'printer.jpg',
      text: 'Made a 3D printer powered by lego motors, programmed all of the firmware in RobotC',
      link: {
        text: 'View on github',
        address: 'https://github.com/Oasixer/Lego-3D-Printer'
      }
    },
    {
      title: 'Ri3D 2020',
      img: 'ri3d2020.jpg',
      text: 'Built FRC robot in three days as a design challenge meeting the specifications of the 2020 FRC season.',
      link: {
        text: 'View design overview on youtube',
        address: 'https://www.youtube.com/watch?v=DPRAkP-DxO4'
      }
    },
    {
      title: 'Ri3D 2019',
      img: 'ri3d2019.jpg',
      text: 'Built FRC robot in three days as a design challenge meeting the specifications of the 2019 FRC season.',
      link: {
        text: 'View reveal video on youtube',
        address: 'https://www.youtube.com/watch?v=pCWp0QOOZ8k'
      }
    },
    {
      title: 'First Robotics 2018',
      img: 'frc2018.jpg',
      text: 'Alliance captain and division winner at 2018 World Championships. Implemented autonomous pathfinding in Java. Used SolidWorks to design robot components. Machined mechanical components out of aluminum.',
      link: {
        text: 'View match footage on youtube',
        address: 'https://youtu.be/LTzrw8Kwz3Y?t=77'
      }
    },
    {
      title: 'First Robotics 2017',
      img: 'frc2017.jpg',
      text: 'Programmed robot controls in Java, Used SolidWorks to design robot components. Machined mechanical components out of aluminum.'
    }
  ];
  
  async function updateDisplayedItem(n){
    if (displayedItem == -1){
      await sleep(50);
      displayedItem = n;
    }
    console.log('hi');
  }

  function closeDisplay(){
    if (clickingPrev){
      // super jank fix for some particular bullshit where when clicking prev
      // on the 1th element of the list, bc the prev button dissapears at that point
      // which makes the clickOutside recognize it as being outside...
      clickingPrev = false;
      return;
    }
    displayedItem = -1;
    console.log('close');
  }

  let cols=[];
  let numCols = mobile?2:3;
  let mounted=false;
  $: flowColumnsAssignHeight(mobile);

  function flowColumnsAssignHeight(){
    console.log(`flowColumns - mobile: ${mobile}`);
    if (!mounted){
      return;
    }
    const setupCols = () =>{
      cols = [];
      numCols = mobile?1:3;
      console.log(`mobile: ${mobile}`);
      console.log(`numCols: ${numCols}`);
      for (let i=0; i<numCols; i++){
        cols.push([]);
      }
      let curCol=0;
      let numFromTotal=0;
      for (let i=0; i<items.length; i++){
        items[i].numFromTotal = numFromTotal++;
        cols[curCol].push(items[i]);
        curCol = curCol == numCols-1 ? 0 : curCol+1;
      }
      cols = [...cols];

      cols.forEach(function (i) {
        console.log(`len: ${i.length}`);
      });
    }
    setTimeout(setupCols, 5);

    setTimeout(updateWidths, 7);
    
    const bar = () => {
      height = portElement.offsetHeight;
    }
    setTimeout(bar, 10);
    console.log('cols');
  }
  
  onMount(async () => {
    mounted=true;
    flowColumnsAssignHeight();
  });

  async function updateWidths(){
    let elements = document.getElementsByClassName('thumb');
    for (let i=0; i<elements.length; i++){
      elements[i].height = elements[i].width;
    }
  }

  function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
  }

  let displayedItem = -1;

</script>

<style>
  div#portfolio{
    width: 100%;
    padding: 4%;
    display: flex;
    flex-flow: column nowrap;
  }
  div#portfolio.mobile{
    padding: 50px 20px 60px 20px;
  }
  
  div#portfolio-inner{
    display: flex;
    flex-flow: row wrap;
    margin: 0 -25px 0 0;
    padding: 0;
  }

  h1{
    font-size: 70px;
    text-transform: uppercase;
    color: #f3f5f4;
    font-weight: 100;
    font-family: "DIN Condensed Web", "Open Sans", sans-serif;
    margin-bottom: 25px;
  }

  h1.mobile{
    font-size: 24px;
    font-weight: 500;
    max-width:100%;
    overflow-wrap: normal;
    margin-bottom: 0px;
  }

  div.col{
    margin-right: 25px;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
  }

  div.card{
    display: flex;
    flex-flow: column nowrap;
    margin: 15px 10px;
    cursor: pointer;
    overflow: hidden;
  }
  .card:hover{
    transform: scale(1.1);
  }

  img.thumb{
    width: 100%;
    object-fit: cover;
    /* contain: The image keeps its original aspect ratio, but resized so that the longest of either the height or width can fit in the given dimensions.
cover: The image keeps its original aspect ratio and the image area is completely covered.
fill: The initial value. The image will fill its given area, even if it means losing its aspect ratio.
none: The image is not resized at all, and the original image size fills the given area.
scale-down: The smaller of either contain or none. */
  }

  img{
    /* object-position: L/R, T/B */
    object-position: 50% 50%;
  }
  img#smartheadlamp_cropped{
    object-position: 50% 0;
    /* transform: scale(2); */
    /* overflow: hidden; */
  }
  img#backr{
    object-position: 30% 0;
  }

  h2{
    color: #f3f5f4;
    /* font-family: "Futura PT Web Light"; */
    /* font-family: "Futura Std Medium"; */
    font-family: "Futura Std Medium", "Open Sans", sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-weight: 300;
    letter-spacing: 0.84px;
    font-size: 15px;
    margin-top: 12px;
  }

  h2.mobile{
    font-size:15px;
    height:3em;
    font-weight:500;
  }

  img.full{
    object-fit: cover;
    /* width: 500px; */
    max-height: 500px;
    max-width: 100%;
  }

  #full-frc2018{
    max-height: 320px;
    object-position: 50% 40%;
  }

  div.displayItem{
    background-color: white;
    z-index: 1000;
    display: flex;
    flex-flow: column nowrap;
    /* align-items: center; */
    padding: 0px 15px 20px 15px;
  }

  div.displayItem.mobile{
    padding: 0px 5px 10px 5px;
  }

  div.displayMain{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 680px;
    max-width: 90%;
    max-height: 96vh;
  }
  
  /* div.displaySide{ */
    /* display: fixed; */
    /* width: 80px; */
  /* } */
  
  /* div.displayRight{ */
    /* right: 0; */
  /* } */
  
  /* div.displayLeft{ */
    /* left: 0; */
  /* } */

  .displayText{
    width: 500px;
    margin: 20px 0px 0px 0px;
  }
  .displayText.mobile{
    width: 100%;
  }

  div.displayItem a{
    margin: 10px 0px 0px 0px;
    color: blue;
  }
  div.displayItem a:link{
    color: blue;
  }
  div.displayItem a:visited{
    color: darkblue;
  }
  div.displayItem a:hover{
    color: cyan;
  }
  div.displayItem a.mobile{

  }
  
  /* mobile */
  @media all and (max-width: 850px){
    div.displayMain{
      width: 660px;
    }
  }

  .displayHeader{
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    margin: 30px 0px;
    margin-right: auto;
    font-size: 25px;
  }
</style>

<div id='portfolio'
    bind:this={portElement}
    style="background-color: {bg_color}"
    bind:offsetHeight={height}
    class:mobile
    on:resize={()=>{console.log('test')}}>
  <h1 class:mobile>Portfolio</h1>
  <div id='portfolio-inner'>
    {#each cols as col}
      <div class='col'>
        {#each col as i}
          <div class='card'>
            <img
              alt='{i.img}'
              class='thumb'
              id={i.img.slice(0,i.img.length-4)}
              src={base + i.img}
              on:click={()=>{updateDisplayedItem(i.numFromTotal)}}/>
            <h2 class:mobile>{i.title}</h2>
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>

{#if displayedItem != -1}
    <ClickOutside on:clickoutside={closeDisplay} exclude={[]}>
      <div class='displayItem displayMain' class:mobile>
        {#if displayedItem>0 && !mobile}
          <NextButton prev={true} on:click={()=>{clickingPrev=displayedItem==1?true:false; displayedItem-=1;}}/>
        {/if}
        <TrashIconButton on:click={closeDisplay} {mobile}/>
        <h3 class='displayHeader' class:mobile>{items[displayedItem].title}</h3>
        <!--  <div class='full-img-container'>  -->
          <img
            class='full'
            class:mobile
            alt='{items[displayedItem].img}'
            id={'full-'+items[displayedItem].img.slice(0,items[displayedItem].img.length-4)}
            src={base + items[displayedItem].img}
            on:click={()=>{updateDisplayedItem(items[displayedItem].numFromTotal)}}/>
            <!--  </div>  -->
          <p class='displayText' class:mobile>{items[displayedItem].text}</p>
          {#if items[displayedItem].link}
            <a href="{items[displayedItem].link.address}" class:mobile
            target="_blank">
              {items[displayedItem].link.text}
            </a>
          {/if}
        {#if displayedItem<items.length-1 && !mobile}
          <NextButton prev={false} on:click={()=>{displayedItem+=1}}/>
        {/if}
      </div>
    </ClickOutside>

    <!-- >{#if displayedItem<items.length-1} -->
    <!-- <NextButton prev={true} on:click={()=>{displayedItem-=1}}/> -->
      <!-- >{#if !mobile} -->
      <!-- <div class='displayItem displaySide displayRight'> -->
      <!-- </div> -->
      <!-- >{/if} -->
      <!-- >{/if} -->
{/if}

<svelte:window on:resize={updateWidths}/>

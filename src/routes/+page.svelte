<script>
  import Home from '../components/home/Home.svelte';
  // import About from '../components/about/About.svelte';
  // import Portfolio from '../components/portfolio/Portfolio.svelte';
  import Contact from '../components/contact/Contact.svelte';
  import Menubar from '../components/components/Menubar.svelte';
  // import WorkExperiencePage from '../components/resume/WorkExperiencePage.svelte';
  import ResumePage from '../components/resume/ResumePage.svelte';
  import PortfolioPage2 from '../components/portfolio2/Portfolio2.svelte';
  import BackToTop from '../components/components/BackToTop.svelte';
  // import Hamburger from '../components/components/Hamburger.svelte';
  // import HamburgerModal from '../components/components/HamburgerModal.svelte';
  // import MobileMenubarModal from '../components/components/MobileMenubarModal.svelte';

  // import type { VP } from '../components/viewport';
  import { vp, LAYOUT, MENUBAR_HEIGHT } from '../components/viewport';

  import { onMount } from 'svelte';

  function setLayout(){
    console.log('viewport Size changed to: ',viewport.Width+'x'+viewport.Height)
      // console.log('window.width: ', width);
    let layout = LAYOUT['xs'];
    // if (viewport.Width > 1280){
    //   layout = LAYOUT['xl'];
    // }
    if (viewport.Width > 1400){
      layout = LAYOUT['lg'];
    }
    else if (viewport.Width > 1175){
      layout = LAYOUT['md'];
    }
    // else if (viewport.Width > 1175){
    //   layout = LAYOUT['lg'];
    // }
    // else if (viewport.Width > 768){
    //   layout = LAYOUT['md'];
    // }
    // else if (viewport.Width > 640){
    //   layout = LAYOUT['sm'];
    // }
    else if (viewport.Width > 475){
      layout = LAYOUT['sm'];
    }
    vp.set({width: viewport.Width, height: viewport.Height, layout});
  }
  // onMount(async() => {
    // console.log('detailled Screen Orientation:',Viewport.detailledOrientation)
  // })

  /**
	 * @type {number}
	 */
  let y;
  /**
	 * @type {number}
	 */
  let width;
  /**
	 * @type {number}
	 */
  let height;
  let curSection = 0;
  let mounted = false;
  let maxMobileWidth = 1174;
  let hamburgerOpen = false;
  let hamburgerModal;
  let mobileSidebarOpen = false;
  let mobileSidebarModal;

  $: curSection = getCurrentSection(y);

  let viewport;

	onMount(async () => {
    mounted = true;
    const Viewport = (await import('svelte-viewport-info')).default;
    console.log('Viewport Width x Height:     ',Viewport.Width+'x'+Viewport.Height)
    // console.log('standard Screen Orientation: ',Viewport.Orientation)
    viewport = Viewport;
    setLayout();
	});

  let sections = [
    {component: Home, name:'Home', excludeFromMenubar: false},
    // {component: About, name:'About', excludeFromMenubar: false},
    // {component: WorkExperiencePage, name:'Work Experience', excludeFromMenubar: false},
    // {component: SkillsPage, name:'Skills', excludeFromMenubar: false},
    // {component: Portfolio, name:'Portfolio', excludeFromMenubar: false},
    {component: PortfolioPage2, name:'Portfolio', excludeFromMenubar: false},
    {component: ResumePage, name:'Resume', excludeFromMenubar: false},
    // {component: Contact, name:'Contact', excludeFromMenubar: false},
    // {component: BackToTop, excludeFromMenubar: true}
  ];
  
  function move_to_section_n(n){
    let y_temp=0;
    for(let i=0; i<n; i++){
      y_temp += sections[i].height;
    }
    // y=100;
    // console.log("move2");
    y = y_temp;
  }

  function move(event){
    let n=event.detail.args.n;
    move_to_section_n(n);
  }
  
  $: scrolledFarEnoughToDisplayHamburger = y>250;
  // $: scrolledFarEnoughToDisplayFloaty = y>250;

  const FRACTION_OF_VIEWPORT_IN_VIEW_TO_BE_IN_SECTION = 0.45;

  const getCurrentSection = (y) => {
    let y_temp = y;
    // console.log("y_temp=y @ top of func: ", y);
    for (let n=0;n<sections.length; n++){
      let i=sections[n];
      if (y_temp < i.height - MENUBAR_HEIGHT - $vp.height * FRACTION_OF_VIEWPORT_IN_VIEW_TO_BE_IN_SECTION){
        // console.log("returning section=", n);
        return n;
      }
      else{
        // console.log("i.height: ", i.height);
        y_temp -= i.height;
      }
    } 
    // console.log("not returning a section i guess. y: ", y, "y_temp: ", y_temp, "sections[-1].height: ", sections[2].height);
  }
  // $: console.log("currentSection: ", getCurrentSection(y));
  

  // let entered_portfolio_zone = new Date();
  // let last_y = 0;
  let tryMoveInProgress = false;
  // function 
  
  function scrollChanged(){
    const epsilon_lower = 300; // for moving down
    const epsilon_higher = 300; // for moving up
    if (mounted && !tryMoveInProgress && y != sections[0].height){
      // console.log("y: ", y, "sections[0].height: ", sections[0].heigh);
      if ((y > sections[0].height - epsilon_lower) && y < sections[0].height + epsilon_higher){
        // move_to_section_n(2);
        let last_y = y;
        tryMoveInProgress = true;
        // console.log("try move in a sec");
        setTimeout(()=>{
          // console.log("try move. y: ",y,"last_y: ", last_y, "hgt: ", sections[0].height);
          // move UP to section if already moving up
          if ((y > sections[0].height) && y < sections[0].height + epsilon_higher && y < last_y){
            move_to_section_n(1)
          }
          // move DOWN to section regardless
          else if ((y > sections[0].height - epsilon_lower) && y < sections[0].height){
            move_to_section_n(1)
          }
          tryMoveInProgress = false;
        },1000);
      }
    }
  }
  $: y, scrollChanged();

  const getColor = (section, n) =>{
    /* console.log('hi'); */
    return n % 2 ? '#202020' : '#161a28';
  }
</script>

<style>
  /* :global(body){ */
  /*   margin: 0; */
  /*   padding: 0; */
  /*   box-sizing: border-box; */
  /* } */
  /* :global(*){ */
  /*   margin: 0; */
  /*   padding: 0; */
  /*   box-sizing: border-box; */
  /* } */
  :global(html){
    scroll-behavior: smooth;
  }

  /* :global(main){ */
    /* display: flex; */
    /* flex-flow: column nowrap; */
    /* background-color: #FFFFFF; */
    /* margin: 0px; */
    /* padding: 0px; */
  /* } */
</style>
<!--  <svelte:head>
<link href="//db.onlinewebfonts.com/c/69dbc1186412d7831b88d8a78a360360?family=DIN+Condensed+Web" rel="stylesheet" type="text/css"/>
<link href="//db.onlinewebfonts.com/c/84d8d4c49f66a6a5abe1e0608ba764a2?family=Source+Sans+Pro" rel="stylesheet" type="text/css"/>
<link href="//db.onlinewebfonts.com/c/36c361ac34f216ed98000d61fa8ac996?family=Futura+PT+Web+Light" rel="stylesheet" type="text/css"/>
<link href="//db.onlinewebfonts.com/c/6e390d15863032277a741e08a6b18ce2?family=Futura+Std+Medium" rel="stylesheet" type="text/css"/>
</svelte:head>  -->
<title>Kaelan Moffett</title>

<svelte:window bind:scrollY={y} bind:outerWidth={width} bind:outerHeight={height}/>
<svelte:body
  on:viewportchanged={setLayout}
  on:orientationchangeend={() => { 
    // if (mounted){
      console.log(
      'Screen Orientation changed to: ', viewport.Orientation + (
        viewport.detailledOrientation == null
        ? '' : '(' + viewport.detailledOrientation + ')'
      ));
    // }
  }} />


{#if scrolledFarEnoughToDisplayHamburger}
  <Menubar floaty={true} {sections} {curSection} on:move={move}/>
{/if}
<div id="outer_container"
     class="bg-green-500 absolute top-0 right-0 bottom-0 left-0 flex flex-col w-full min-w-full">
<Menubar floaty={false} {sections} {curSection} on:move={move}/>
  {#each sections as section, n}
    <svelte:component this={section.component} bind:height={section.height} bg_color={getColor(section, n)} on:move={move} />
  {/each}
</div>
<!-- <script> -->
<!--   import Dashboard from '../components/Dashboard.svelte'; -->
<!---->
<!-- </script> -->
<!-- <style> -->
<!--   :global(body){ -->
<!--     margin: 0; -->
<!--     padding: 0; -->
<!--     box-sizing: border-box; -->
<!--     min-width: 450px; -->
<!--   } -->
<!--   :global(*){ -->
<!--     margin: 0; -->
<!--     padding: 0; -->
<!--     box-sizing: border-box; -->
<!--   } -->
<!--   :global(html){ -->
<!--     scroll-behavior: smooth; -->
<!--   } -->
<!-- </style> -->
<!-- <title>Pinguins</title> -->
<!-- <Dashboard/> -->
<!---->

<script>
  export let floaty;
  export let sections;
  export let curSection;
  export let mobile=false;
  export let mobileSidebarOpen=false;
  export let y;

  let width;

  import Hamburger from './Hamburger.svelte';
  import { onMount, createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
  
  const dispatch = createEventDispatcher();
  const dispatcher = (args) => dispatch('move', {args:args});

  const displayHamburgerHeight = 250;

  let menubarOuterDiv;

  $: sectionsAll = sections.filter(i=>!i.excludeFromMenubar);
  $: sectionsLeft = sections.slice(0,2).filter(i=>!i.excludeFromMenubar);
  $: sectionsRight = sections.slice(2).filter(i=>!i.excludeFromMenubar);
  $: floaty = mobile ? y > 250 : floaty;
  /* $: widthLT = Math.ceil(width / 50)*50 */

  function runMoveDispatcher(n){
    dispatcher({n:n});
    if (mobileSidebarOpen){
      mobileSidebarOpen = false;
    }
    /* console.log('move-base'); */
  }

  onMount(() => {
    /* console.log('floaty: '+floaty); */
  });
  
</script>

<style>
  div.menubar{
    width: 100%;
    /* background-color: #081012; */
    height: 80px;
    min-height: 80px;
    display: flex;
    margin: 0;
    align-items: center;
    max-width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #353f4f;
  }

  div#singleButton{
    position:fixed;
    left:13px;
    top:26px;
    z-index: 999;
    width: auto;
    height: auto;
    /* background-color: #081012; */
    padding: 2px 10px;
    opacity: 1;
    animation: fadeIn ease 0.2s;
    -webkit-animation: fadeIn ease 0.2s;
    -moz-animation: fadeIn ease 0.2s;
    -o-animation: fadeIn ease 0.2s;
    -ms-animation: fadeIn ease 0.2s;
  }
  
  div#vertical{
    position:fixed;
    left:0px;
    top:0px;
    z-index: 999;
    height: 100%;
    flex-flow: column nowrap;
  }

  div#mobileMenubar{
    flex-flow: column nowrap;
    /* align-content: center; */
    align-items: center;
    justify-content: space-between;
  }
  
  div.menubar.floaty{
    position: fixed;
    top: 0;
    z-index: 5;
  }

  div.menubar.smaller button{
    font-size: 2.3vw;
  }
  
  /* div.group{ */

  div.group{
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row nowrap;
  }

  div.left{
    margin-left: 30px;
    margin-right: auto;
  }

  div.menubar.smaller div.left{
    margin-left: 13px;
  }

  div.left.floaty{
    margin-left: auto;
    margin-right: 0;
  }
  
  div.menubar.smaller.floaty div.left{
    margin-left: auto;
    margin-right: 0;
  }

  
  div.right{
    margin-left: auto;
    margin-right: 30px;
  }

  div.right.floaty{
    margin-right: auto;
    margin-left: 0;
  }


  button{
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    /* color: #50555d; */
    /* text-transform: uppercase; */
    /* font-weight: 400; */
    /* font-size: 22px; */
    /* font-family: "Open Sans", sans-serif; */
    margin: 0;
    padding: 9px;
  }

  div.menubar.smaller button{
    padding: 9px 5px;
  }
  
  div.menubar.floaty.smaller button{
    padding: 9px;
  }

  button:active{
    background: none;
    outline: none;
  }
  
  button:hover{
    /* color: #f3f5f4; */
  }

  button.selected{
    /* color: #f3f5f4; */
    outline: none;
  }
  button.selected:focus{
    outline: none;
  }

  div.row{
    width: 100%;
    display: flex;
  }

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
</style>
<svelte:window bind:outerWidth={width}/>
<div class:floaty
     class:smaller={width<950 && !mobile}
     class="menubar {floaty?'bg-blue-bgOuter/90':'bg-blue-bgOuter/100'}"
     id={mobile?mobileSidebarOpen?'vertical':y>displayHamburgerHeight?'singleButton':'mobileMenubar':'desktopMenubar'}
     transition:fly="{floaty?{y:-100, duration: 200}:''}">
  {#if mobile}
    <div style="{(mobileSidebarOpen || !floaty)?'position: absolute; left: 20px; top: 26px;':''}">
      <Hamburger bind:open={mobileSidebarOpen}/>
    </div>
    <!-- {#if y<displayHamburgerHeight || mobileSidebarOpen} -->
    <!--   <button class='selected' style='font-size: 20px; font-weight: bold; margin-left: 0; padding-top: 27px;' on:click={()=>runMoveDispatcher(0)}> -->
    <!--   Kaelan Moffett -->
    <!--   </button> -->
    <!-- {/if} -->
    {#if mobileSidebarOpen}
      {#each [...sectionsLeft, ...sectionsRight] as section, n}
        <button
          class:selected={curSection==n}
          style="{n===0?'margin-top:25px;':n===sectionsLeft.length+sectionsRight.length-1?'padding-bottom: 27px':''}"
          on:click={()=>runMoveDispatcher(n)}>
          {section.name}
        </button>
      {/each}
    {/if}
  {:else}
    <!-- <div class='group left' class:floaty> -->
    <div class:floaty
         class="flex flex-auto items-center flex-row justify-center gap-3">
      {#each sectionsAll as section, n}
        <button
          class="font-rubik4 text-szXl {curSection==n?'text-blue-light':'text-white'} hover:text-blue-light hover:underline"
          class:selected={curSection==n}
          on:click={()=>runMoveDispatcher(n)}>
          {section.name}
        </button>
      {/each}
    </div>
    <!-- {#if !floaty} -->
    <!--   <button class='selected' on:click={()=>runMoveDispatcher(0)}> -->
    <!--   Kaelan Moffett -->
    <!--   </button> -->
    <!-- {/if} -->
    <!-- <div class='group right' class:floaty> -->
    <!-- <div class='group right floaty'> -->
    <!--   {#if !mobile} -->
    <!--     {#each sectionsRight as section, n} -->
    <!--       <button -->
    <!--         class:selected={curSection==n+sectionsLeft.length} -->
    <!--         on:click={()=>runMoveDispatcher(n+sectionsLeft.length)}> -->
    <!--         {section.name} -->
    <!--       </button> -->
    <!--     {/each} -->
    <!--   {/if} -->
    <!-- </div> -->
  {/if}
</div>

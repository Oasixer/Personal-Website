<script lang="ts">
    import { onMount } from "svelte";

    // export let nodeImg;
    import type { Node, NodeDataDisplay } from "./node_data";
    // import { pixels_per_meter, map_height_meters, map_width_meters, posToLeftRelPixels } from "./node_data";
    export let replay_pac: boolean = false;
    import { roundMap, replayMap } from "./node_data";
    $: map = replay_pac?replayMap:roundMap;
    // let map_div: HTMLElement;
    let last_updated: Date = new Date();

    export let node_data: NodeDataDisplay;
    export let counter: number;
    export let mouseX = 0;
    export let mouseY = 0;



    const PING_FLASH_MS = 1000;

    const map_outer_pad = 30;
    // export let i: number;
    let nodeInner: HTMLElement[]

    const height_width_icon = 32;

    function posToLeftRelPixels(pos: number, x: boolean) {
      if (replay_pac){
        return pos * map.pixels_per_meter;
      }
      else{
        return (pos * (x ? 1 : -1) + (x ? map.width_meters : map.height_meters) / 2) * map.pixels_per_meter;
      }
    }

    function get_node_img(node: Node) {
      console.log("get_node_img");
      if (node.idx == 0) {
        return "images/pinguins/node0_v2.png";
      } else {
        return "images/pinguins/node.png";
      }
    }

    let prev_replaying = false;

    function update_node(node_data: NodeDataDisplay, replay_: boolean){//(i: number) {
      if (replay_){
        if (!prev_replaying){
          replay_pac = true; // trigger update
          prev_replaying = true;
        }
      }
      else{
        if (prev_replaying){
          replay_pac = false;
          prev_replaying = false;
        }
      }
      console.log("updating nodes!!!!!");
      console.log(node_data);
      if (node_data.updated == last_updated) return;
      last_updated = node_data.updated;
      let nodes = node_data.nodes; 
      if (nodes == undefined) return;
      if (nodeInner == undefined) return;
      if (nodeInner.length < nodes.length) {
        console.log("return early!");
        return;
      }
      // nodes[1].is_connected = false;
      let cur_time: Date = new Date();
      for (let i = 0; i < nodes.length; i++) {
        let x = posToLeftRelPixels(nodes[i].coords.x, true) - height_width_icon/2;
        let y = posToLeftRelPixels(nodes[i].coords.y, false) - height_width_icon/2;
        console.log(i, nodes[i].idx, x, y)
        console.log("from resolved: ", nodes[i].coords.x, nodes[i].coords.y);
        nodeInner[i].style.left = `${x}px`;
        nodeInner[i].style.top = `${y}px`;
        nodeInner[i].style.opacity = `${nodes[i].is_connected ? 1 : 0.4}`;

        if (nodes[i].is_connected){
          if (cur_time.getTime() - nodes[i].last_ping.getTime() < PING_FLASH_MS){
            let timeElapsed = cur_time.getTime() - nodes[i].last_ping.getTime();
            let progress = timeElapsed / PING_FLASH_MS;
            const BEGIN_PING_SCALE = 1.5;
            let contractionAmount = BEGIN_PING_SCALE-1;
            let scale = BEGIN_PING_SCALE - (contractionAmount * progress);
            nodeInner[i].style.transform = `scale(${scale})`;// scale to 2x size
          }
          else{
            nodeInner[i].style.transform = "none";// no transform
          }
        }
        else{
          nodeInner[i].style.transform = "none";// no transform
        }
      }
    }

    $: update_node(node_data, replay_pac);
    $: counter, node_data = node_data;
    $: console.log(node_data.updated);

    let mounted = false;

    let mapDiv: HTMLElement;

function trackMouse() {
  mapDiv.addEventListener('mousemove', setMouse);
}
let mouse = {
  x: 0,
  y: 0
};

function setMouse(event: any) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
}

function updatePosition() {
  if (true){//isHover(mapDiv)) {
        const { top, left } = mapDiv.getBoundingClientRect();
        mouseX = mouse.x - (left+map.width_pixels/2);
        mouseY = mouse.y - (top+map.height_pixels/2); 
  }
}
function resetPosition() {
    mouseX = 0;
    mouseY = 0;
}
function isHover(e: any) {
  return e.parentElement.querySelector(':hover') === e;
}

  onMount(() => {
    nodeInner = [document.createElement('div'), document.createElement('div'), document.createElement('div'), document.createElement('div')];
    mounted = true;
  });

</script>


<!-- <div bind:this={map_div} class="node-div"> -->
<!-- style="margin-left: 80px; width: 500px; height: 500px; border: 2px solid black;"> -->
<div class='map-wrapper' style="width: fit-content; height: {map.height_pixels+map_outer_pad*3}px">
  <h1 id='map-header'>{replay_pac?'Position Data Playback': 'Live Positioning'}</h1>
  <div class='map-outer' style="width: {map.width_pixels+map_outer_pad*2}px;
    height: {map.height_pixels+map_outer_pad*2}px;
  padding-left: {map_outer_pad}px; padding-top: {map_outer_pad}px;
  border-radius: {replay_pac? '5px':'50%'};">
      <!-- style="width: {map_width_m*pixels_per_meter}px;"> -->
      <div bind:this={mapDiv} class='map-div'
      style="height: {map.height_pixels}px;
            width: {map.width_pixels}px;
            border-radius: {replay_pac?'5px':'50%'};"
      on:mouseenter={trackMouse}
      on:mousemove={updatePosition}
      >
      <!-- on:mouseleave={resetPosition} -->

      <!-- <div class='axis_arrow'>
      </div> -->
      {#if mounted}
          {#each node_data.nodes as node, i}
              <div bind:this={nodeInner[i]} class="node-inner" style="width: {height_width_icon}px; height: {height_width_icon}px;">
                  <!-- <img src="favicon.png" style="position: absolute; width: 32px; height: 32px; left: 100px; top: 4px;"/> -->
                {#if i == 0}
                  <img src="{get_node_img(node)}" style="width: {height_width_icon*2}px; height: {height_width_icon*2}px;" alt=""/>
                  <p class="label nodelabel" style="top: -{height_width_icon+25}px; left: {height_width_icon+5}px; font-weight: 700;">ROV</p>
                {:else}
                  <img src="{get_node_img(node)}" style="width: {height_width_icon}px; height: {height_width_icon}px;" alt=""/>
                  <p class="label nodelabel" style="top: -{height_width_icon/2+12}px; left: {height_width_icon/2-4}px;">{node.idx}</p>
                {/if}
              </div>
          {/each}
      {/if}
      </div>
      {#if replay_pac}
        <div class="rect_x-arrow-container" style="top: -{map.height_pixels+8}px;
        left: {2}px">
            <img class="x-arrow" src="images/pinguins/arrow3_white_240x20.png" alt=""/>
            <p class="xlabel label" style="">x</p>
        </div>
        <div class="rect_y-arrow-container" style="top: -{map.height_pixels-59}px;
        left: {-119}px">
            <img class="y-arrow" src="images/pinguins/arrow3_white_240x20.png" alt=""/>
            <p class="ylabel label" style="">y</p>
        </div>
      {:else}
        <div class="x-arrow-container" style="top: {-map.height_pixels/2}px;
        left: {map.width_pixels/2}px">
            <img class="x-arrow" src="images/pinguins/arrow3_white_240x20.png" alt=""/>
            <p class="xlabel label" style="">x</p>
        </div>
        <div class="y-arrow-container" style="top: {-map.height_pixels/2 -51-120}px;
        left: {map.width_pixels/2}px">
            <img class="y-arrow" src="images/pinguins/arrow3_white_240x20.png" alt=""/>
            <p class="ylabel label" style="">y</p>
        </div>
      {/if}
  </div>
</div>



<style lang="scss">
  h1#map-header{
    margin:0;
    letter-spacing: 4px;
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 30px;
    color: white;
    margin-bottom: 6px;
    padding: 0;
  }
    *{
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
    }
    p.nodelabel{
        color: black;
        font-size: 16px;
    }
    .label{
        position: relative;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-size: 24px;
        color: white;
    }
    div.rect_y-arrow-container{
        position: relative;
        p.ylabel{
            top: 58px;
            left: 130px;
        }
        img.y-arrow{
            // transform: rotate(270deg);
            transform: rotate(90deg); /* W3C */  

        }
    }
    div.rect_x-arrow-container{
        position: relative;
        img.x-arrow{

        }
        p.xlabel{
            top: -15px;
            left: 200px;
        }
    }
    div.y-arrow-container{
        position: relative;
        p.ylabel{
            top: -118px;
            left: 8px;
        }
        img.y-arrow{
            // transform: rotate(270deg);
            transform: translateX(-50%) rotate(-90deg); /* W3C */  

        }
    }
    div.x-arrow-container{
        position: relative;
        img.x-arrow{

        }
        p.xlabel{
            top: -45px;
            left: 200px;
        }
    }
    div.map-outer{
        // position: static; 
        // display: flex;
        // display: flex;
        width: fit-content;
        height: fit-content;
        // height: 700px;
        // height: 100%;
        background-color: #759ace;
        // border-radius: 5px;
        // padding: 30px;
        box-shadow: 0 16px 38px -12px rgb(0 0 0 / 56%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%);
        div.map-div{
            div.axis_arrow{
                position: absolute;
                width: 225px;
                left: 0;
                margin-right: auto;
                scale: 0.5;
                img{
                    // width: 500px;
                    // width: 100%;
                    height: 45px;
                    object-fit: cover;
                    // object-position: left 50%;
                }
            }
            border: 2px solid black;
            background-color: #96b8e6;
            position: relative;
        }
    }
    div.node-inner{
        position: absolute;
        img{

        }
        // width: fit-content;
    }
</style>

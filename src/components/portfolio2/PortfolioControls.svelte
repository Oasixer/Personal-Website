<script lang="ts">
  export let pstate;
  // export let omit: boolean;
  import ProjImgConst from './project';
  
  import Toggle from '../components/Toggle.svelte'
  import { createEventDispatcher } from 'svelte';
  import { vp, LAYOUT } from '../viewport';
  const dispatch = createEventDispatcher();
  const dispatchExpandAll = () => {
    dispatch('toggle_expand');
    // console.log('close');
  };

  function set_expand_all_true(){
    pstate.expand_all = true;
    // todo trigger whoever needs to know abt this?
  }
  function set_expand_all_false(){
    pstate.expand_all = false;
    // todo trigger whoever needs to know abt this?
  }
</script>

<div class="w-fit flex flex-row flex-nowrap items-stretch gap-0"
     style="{(pstate.expand_all || pstate.force_expand_all)?'margin: 0 0 0 auto;':'margin: -5px auto 0 auto;'}">
  <div class="flex flex-col gap-1">
    <Toggle bind:on={pstate.shouldColorKeywords}
            on:toggle_on_callback={()=>{pstate.shouldColorKeywords = true}}
            on:toggle_off_callback={() => {pstate.shouldColorKeywords = false}}
            title={"Colorize Terms"}
            smallerText={true}/>
    {#if !pstate.force_expand_all}
      <Toggle bind:on={pstate.expand_all}
              on:toggle_on_callback={dispatchExpandAll}
              on:toggle_off_callback={set_expand_all_false}
              title={"ExpandAll"}
              smallerText={true}/>
    {/if}
  </div>
  {#if $vp.layout >= LAYOUT['md']}
    <!-- vertical line seperator -->
    <div class="flex flex-col mr-5 gap-2 justify-start">
      <div class="h-[full] w-[1px] min-w-[1px] bg-grey-700" style="margin: 0 {ProjImgConst.SEP/2}px;"></div>
      <!-- style="{(!(pstate.expand_all || pstate.force_expand_all))?'margin-top: -4px;':''}"> -->
      <p class="font-rubik5 text-grey-00 text-szSm mt-[4px]">
        j/k ⬄ images
      </p>
      <p class="font-rubik5 text-grey-00 mt-[3px] mb-[0px] text-szSm">
        h/l ⇳ projects
      </p>
    </div>
  {/if}
</div>

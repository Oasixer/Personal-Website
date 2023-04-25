<script lang="ts">
  export let pstate;
  // export let omit: boolean;
  import ProjImgConst from './project';
  import KeycapIcon from './KeycapIcon.svelte';
  
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

<!-- <div class="w-fit flex flex-row flex-nowrap items-stretch gap-0" -->
<!--      style="{(pstate.expand_all || pstate.force_expand_all)?'margin: 0 0 0 auto;':'margin: -5px auto 0 auto;'}"> -->
<div class="w-fit flex flex-col gap-1">
  <div class="flex flex-row gap-3">
    {#if !(pstate.expand_all || pstate.force_expand_all)}
      <Toggle bind:on={pstate.shouldColorKeywords}
              on:toggle_on_callback={()=>{pstate.shouldColorKeywords = true}}
              on:toggle_off_callback={() => {pstate.shouldColorKeywords = false}}
              title={"ColorizeTerms"}
              smallerText={true}/>
    {/if}
    {#if $vp.layout >= LAYOUT.sm}
      <div class="flex flex-row gap-1 items-center ml-auto">
        <KeycapIcon key="H"/>
        <p class="text-szBase text-grey-200 mb-1"
           style="min-width: 72px;"
        >
          Prev Img
        </p>
      </div>
    {/if}
  </div>
  <div class="flex flex-row gap-3">
    {#if !(pstate.expand_all || pstate.force_expand_all)}
      <Toggle bind:on={pstate.expand_all}
              on:toggle_on_callback={dispatchExpandAll}
              on:toggle_off_callback={set_expand_all_false}
              title={"ExpandAll"}
              smallerText={true}/>
    {:else if (pstate.expand_all)}
      <div class="flex flex-col">
        <p class="text-szBase text-grey-200"
           style="min-width: 72px;"
        >
          Disable ExpandAll
        </p>
        <p class="text-szBase text-grey-200 mt-[-5px]"
           style="min-width: 72px;"
        >
        {'to use shortcuts ->'}
        </p>
      </div>
    {/if}
    {#if $vp.layout >= LAYOUT.sm}
      <div class="flex flex-row gap-1 items-center ml-auto">
        <KeycapIcon key="J"/>
        <p class="text-szBase text-grey-200 mb-1"
           style="min-width: 72px;"
        >
          Next Proj
        </p>
      </div>
    {/if}
  </div>
  {#if $vp.layout >= LAYOUT.sm}
    <div class="flex flex-row gap-3">
      {#if pstate.expand_all || pstate.force_expand_all}
        <Toggle bind:on={pstate.shouldColorKeywords}
                on:toggle_on_callback={()=>{pstate.shouldColorKeywords = true}}
                on:toggle_off_callback={() => {pstate.shouldColorKeywords = false}}
                title={"ColorizeTerms"}
                smallerText={true}/>
      {/if}
      <div class="flex flex-row gap-1 items-center ml-auto">
        <KeycapIcon key="K"/>
        <p class="text-szBase text-grey-200 mb-1"
           style="min-width: 72px;"
        >
          Prev Proj
        </p>
      </div>
    </div>
    <div class="flex flex-row gap-3">
      {#if pstate.expand_all || pstate.force_expand_all}
        <Toggle bind:on={pstate.expand_all}
                on:toggle_on_callback={dispatchExpandAll}
                on:toggle_off_callback={set_expand_all_false}
                title={"ExpandAll"}
                smallerText={true}/>
      {/if}
      <div class="flex flex-row gap-1 items-center ml-auto">
        <KeycapIcon key="L"/>
        <p class="text-szBase text-grey-200 mb-1"
           style="min-width: 72px;"
        >
          Next Img
        </p>
      </div>
    </div>
  {/if}
</div>

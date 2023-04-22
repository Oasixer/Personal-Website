<script lang="ts">
	export let on: boolean;
  export let title: string;
  export let smallerText: boolean = false;

  // export let allow_wrap: boolean = false;

  // $: can_wrap: boolean = (allow_wrap)

  import { createEventDispatcher } from 'svelte';

  let element: HTMLElement;

  // function updateChecked(on){
  //   if (element !== undefined){
  //     element.checke
  //   }
  // }

  // $: console.log("checkbox ", title, " = ", on);

  const dispatch = createEventDispatcher();
  const dispatch_on = () => {dispatch('toggle_on_callback');}
  const dispatch_off = () => {dispatch('toggle_off_callback');}
  const dispatch_state = () => {on?dispatch_on():dispatch_off()}
  const dispatch_toggle = () => {on=!on; on?dispatch_on():dispatch_off()}


</script>

<div class='flex flex-row flex-nowrap items-center gap-1'>
  <label class="switch">
    <input bind:this={element} type="checkbox" bind:checked={on} on:change={dispatch_state}>
    <span class="slider round"></span>
  </label>
  {#if smallerText}
    <div class='font-rubik4 text-szSm mr-[0px] cursor-pointer select-none'
         style="color:{on?'#7dd3fc':'#5d8fb6'};"
         on:click={dispatch_toggle}
    >
      {title}
    </div>
  {:else}
    <div class='font-rubik5 text-szBase mr-[0px] cursor-pointer select-none'
         style="color: {on?'#7dd3fc':'#5d8fb6'};"
         on:click={dispatch_toggle}
    >
      {title}
    </div>
  {/if}
</div>

<style>
.switch {
  position: relative;
  display: inline-block;
  width: 45px;
  height: 26px;
  margin: 0 0px 0 5px; /* left margin between toggle & label */
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: $grey; */
  background-color: #677787;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 2px;
  bottom: 2px;
  background-color: #FFFFFF;
  transition: .25s;
}

input:checked + .slider {
  background-color: #7dd3fcd4;
  /* background-color: $accent_primary; */
}

input:focus + .slider {
  /* box-shadow: 0 0 0 4px rgba(21, 156, 228, 0.7);*/
  outline: none;
}

input:checked + .slider:before {
  transform: translateX(19px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>

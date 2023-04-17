<script lang="ts">
	export let on: boolean;
  export let title: string;

  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  const dispatch_on = () => {dispatch('toggle_on_callback');}
  const dispatch_off = () => {dispatch('toggle_off_callback');}
  const dispatch_state = () => {on?dispatch_on():dispatch_off()}
</script>

<div class='flex flex-row flex-nowrap items-center'>
  <div class='font-rubik6' style="color: {on?'#7dd3fc':'#5d8fb6'};">{title}</div>
  <label class="switch">
    <input type="checkbox" bind:checked={on} on:change={dispatch_state}>
    <span class="slider round"></span>
  </label>
</div>

<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 0 15px;
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
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
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
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>

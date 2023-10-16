<script lang="ts">
  import type { LanguageInfo } from './project';
  export let width: number = 128;
  export let lang: LanguageInfo;
  export let label: bool;

  let base_dir = './images/portfolio/devicons_240x240/';
  function update_src(_lang: LanguageInfo){
    let _src = base_dir + _lang.id + '.png';
    // console.log("src: ", _src);
    return _src
  }
  $: src = update_src(lang);

  // let sizeMod = lang.sizeMod
  let finalWidth: number = width * lang.sizeMod;

</script>

<img class="z-10 my-auto" style="width: {finalWidth}px; height: {finalWidth}px" src={src} alt=""/> <!-- thumbnail -->
{#if label}
  <p class="font-rubik5 text-szSm"
     style="color: {lang.color}">{lang.name}</p>
{/if}

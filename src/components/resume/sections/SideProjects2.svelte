<svelte:options accessors={true}/>
<script>
  export const contentSettings = () => {
    return items;
  };
  
  /* title: 'Tracked down long standing difficult to solve bugs in python and cpp (maybe mention LLVM (memory leaks in python GCC system ca))', */

  /* $: console.log(`items: ${items}`); */

  import Section from './Section.svelte';
  import ExperienceList from '../components/ExperienceList.svelte';
  import ListControls from '../components/ListControls.svelte';
  import SectionControls from '../components/SectionControls.svelte';
  import { TagNames } from '../utils/settings.js';

  let header = 'Projects';
  export let standalone=false;

  let force_hide = false;
  let show_section_controls = false;
  let show_list_controls = false;

  // $: printItems(items);

  // function printItems(items){
    // items.forEach(i => {
      // console.log(i.title);
      // i.points.forEach(j =>{
        // console.log(j.title.replace('<','').replace('>',''));
      // });
    // });
  // }

  // export const setContentSettings = (itemSettings) => {
  //   items.forEach(function (item) {
  //     let s = itemSettings.find(i => {
  //       if (i.title === item.title){
  //         return true;
  //       } 
  //     });
  //     if (s){ // if settings were found for this item
  //       item.title_alt = s.title_alt;
  //       item.order = s.order;
  //       item.force_hide = s.force_hide;
  //       item.points.forEach(function (j) {
  //         let p = s.points.find(x => x.title === j.title);
  //         if (p){
  //           j.title_alt = p.title_alt;
  //           j.order = p.order;
  //           j.force_hide = p.force_hide;
  //         }
  //       });
  //     }
  //   });
  //   items = [...items];
  // };

  function get_items(){
    let __items = [
      {
        title: 'Distributed Underwater Positioning System',
        location: '',
        position: 'Final Year Design Project',
        date: 'Sep 2022 - Apr 2023',
        points: [
          'Awarded <Best Overall Project> out of 52 teams presenting at 2023 U of Waterloo Mechatronics Eng. symposium.',
          'Created positioning system for underwater robots using acoustics, outperforming commercial solutions in tolerance to reflections and obstructions, achieving 85 meter range with 98% accuracy.',
          'Responsible for a <Rust> Server exchanging high bandwidth data with each node and delivering the UI (app).',
          'Architected firmware (<C++> on ARM M7), implementing positioning, autocalibration, and fault-tolerant networking',
          'Enabled realtime freq. analysis, via <sliding window Fast Fourier Transform> at 2μs intervals, processing 20MB/s of acoustic samples.',
        ]
      },
      {
        title: 'Packet Panic',
        location: '',
        position: 'Side Project',
        date: 'Oct 2023',
        points: [
          'A high performance <Go> application that emulates bad network conditions in/out of your machine/application',
          'Uses the TUN interface to transparently intercept network packets at the transport layer',
          'Dispatches coroutines to handle requests concurrently, apply packet loss/corruption/delay',
          'Requests get forwarded to the original destination with a spoofed source address; replies are also intercepted'
        ]
      },
    ];
    let _items = [];

    let stringy = "";
    for (let i = 0; i < __items.length; i++) {
      let points = [];
      stringy += "Position: " + __items[i].position + "\n";
      stringy += "Company: " + __items[i].title + "\n";
      for (let j = 0; j < __items[i].points.length; j++) {
        points.push({ 'title': __items[i].points[j], order: j});
        stringy += "- " + __items[i].points[j].replaceAll('<','').replaceAll('>','') + "\n";
      }
      _items.push({
        force_hide: false,
        order: i,
        points,
        location: __items[i].location,
        position: __items[i].position,
        title: __items[i].title,
        date: __items[i].date,
      });
    };
    console.log(stringy);
    // console.log(_items);
    return _items;
  }

  let items = get_items();
</script>

<Section {header} {standalone} {force_hide} bind:show_section_controls bind:show_list_controls>
  <div class="h-[3px]"></div>
  {#if show_section_controls && standalone}
    <SectionControls bind:force_hide on:close={()=>{show_section_controls=false}}/>
  {/if}
  {#if show_list_controls && standalone}
    <ListControls bind:items on:close={()=>{show_list_controls=false;}}/>
  {/if}
  <ExperienceList bind:items {standalone} work={true}/>
  <div class="h-1"></div>
</Section>

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

  let header = 'Work Experience';
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
        title: 'NVIDIA',
        location: 'Remote',
        position: 'Software Engineer Intern',
        date: 'May-Aug 2022',
        points: [
          'Worked on Omnigraph (scalable compute engine) core, which supports <Python> and <C++> 1st and 3rd party extensions',
          'Forked Pybind (<Python> - <C++> bindings) to add custom behavior meeting the needs of Omnigraph, for garbage collection during shutdown and reload, & elimination of memory leaks',
          "Designed and implemented versioning system for Omnigraph extensions to prevent conflicts and safely allow multi-instancing multiple configurations of the Omnigraph client",
        ]
      },
      {
        title: 'Trexo Robotics',
        location: 'Toronto',
        position: 'Backend Engineer Intern',
        date: 'Sep-Dec 2021',
        points: [
          'Leveraged <Merkle Tree> data structure to create a <diff>-based sync process between local and remote databases, allowing seamless experience for customers using the exoskeleton robot offline',
          'Improved security, performance and maintainability by porting legacy <ExpressJS> server to <Spring>/<Kotlin>',
          "Wrote <C++> <ROS> (Robot Operating System) pubsub and meshed it with the <Spring> server using Java Native interface",
          "Designed websocket server that acts as a proxy between the local <ROS> pub/sub and the internet",
          'Wrote an integration testing framework in <Bash> to orchestrate a robust series of tests of the bidirectional sync process between the local (robot) server and an emulated remote server',
        ]
      },
      {
        title: 'Pronti Inc.',
        location: 'Waterloo',
        position: 'Backend/Infrastructure Engineer Intern',
        date: 'Jan-Apr 2021',
        points: [
          'Led the development of a new <Flask> app which processes and catalogs web content and provides a <GraphQL> interface',
          'Developed secure registration system with SMS-based 2FA, <JWT>s, and waitlist/referrals to control user inflow',
          'Reduced critical service runtime by over 80% by analyzing and optimizing naive, ORM-generated <SQL> queries',
          "Developed distributed microservice architecture to create scalable deployment on <Kubernetes>"
        ]
      },
      {
        title: 'Backr Inc.',
        location: 'Toronto',
        position: 'Backend Developer Intern',
        date: 'Jun-Sep 2020',
        points: [
          'Designed and led a team in implementing a <Flask> server to ingest high volume <websocket> stream, collecting it into custom graph datastructure for fast CRUD and scalability',
          'Reduced AWS costs by refactoring monolithic ML pipeline into microservices, enabling granular scaling and reducing latency',
          'Enhanced DevOps by Dockerizing and adding CI/CD pipelines to the company\'s main repos',
        ]
      },
      {
        title: 'CIBC',
        location: 'Toronto',
        position: 'Fullstack Developer Intern',
        date: 'Sep-Dec 2019',
        points: [
          'Led development of a <Flask> webapp still in use by CIBC nationwide, including <SvelteJS> frontend and SQL db',
          'Provided data visualiations by embedding Tableau dashboards in new <JS/SCSS/HTML> webapp, developed to help identify patterns that may indicate fraudulant transactions',
          'Streamlined fraud reporting ticket inflow process by creating a <classifier> using spaCy, NLTK in <Python>',
        ],
      },
      {
        title: 'North Inc. (Acquired by Google)',
        location: 'Waterloo',
        position: 'Computer Vision Software Intern',
        date: 'Jan-Apr 2019',
        points: [
          'Improved simulation raytracing accuracy by 36% by developing a performance critical <DLL> plugin',
          'Created enhanced optic artifact simulator, using <OpenCV> matrix calculations in <C++> and optimizing for specialized ASIC',
          'Improved effectiveness of material property lookup table by developing n-dimensional interpolation algorithm in <C++>',
          'Automated laser testing by developing a <Python> app and <Arduino> controller for operation and data collection',
        ]
      }
    ];
    let _items = [];

    for (let i = 0; i < __items.length; i++) {
      let points = [];
      for (let j = 0; j < __items[i].points.length; j++) {
        points.push({ 'title': __items[i].points[j], order: j});
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
    console.log(_items);
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

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
          // 'Developed features for Omnigraph (scalable compute engine), working with WARP convert Python',

          // "Worked on the Core team for OmniGraph, the scalable procedural graph engine that supports hundreds of Python and C++ extensions",
          // "Reduced latency for core <C++> and <Python> nodes in OmniGraph (scalable procedural graph engine) using memoization to cache repeated vector inputs.",
          "Reduced latency and improved performance in OmniGraph (scalable procedural <graph> engine) by porting n-dimensional vector math nodes from <Python> to <C++>",

          // "Accelerated rendering pipeline by 10% by porting Python extension to C++, and used Pybind ", // a flag in the config for action graph nodes, equivalent to @cache
          // "Collaborated with BMW to create an adapter between their physics simulation and the OmniGraph framework"
          // ""
          // "Identified memory leaks coming from hash grids in JIT-compiled <CUDA C++> kernels using <Heaptrack> and <GDB>.",

          "Overhauled versioning and installation system for OmniGraph <C++>/<Python> extensions to cache dependencies, reduce conflicts, and allow multi-instancing on developer machines.",
          "Identified memory leaks coming from <C++> extensions reloading at runtime and improved <hot-reload> performance with caching",

          // "Reduced hot-reload time up to 60% by leveraging Merkle Tree datastructure to diff each node ",
          // https://github.com/NVIDIA/warp/commit/bf7c252332a336573ec4990f06604e05349226c4
          // "Reduced hot-reload time up to 60% for runtime <C++>/<Python> extensions by leveraging Merkle Tree datastructure to recursively hash and compare dependent nodes, persisting the unchanged nodes",
          // 'Forked Pybind (<Python> - <C++> bindings) to allow it to hot-reload custom Omnigraph datastructures without leaking memory',
        ]
      },
      {
        title: 'Trexo Robotics',
        location: 'Toronto',
        position: 'Backend Engineer Intern',
        date: 'Sep-Dec 2021',
        points: [
          'Responsible for creating a <Kotlin> server on <AWS> to manage live data to and from 200 exoskeleton robots.',
          // 'Integrated registration, login, ',
          'Leveraged <Merkle Tree> data structure to bidirectionally sync onboard and cloud DBs, allowing seamless access for customers with spotty internet.',
          'Eliminated expensive manual testing by designing integration testing framework in <Bash> that emulates a remote server to verify behavior of the onboard server across a suite of use-cases.',
          'Improved security, performance and maintainability by porting legacy <ExpressJS> login server to <Spring>/<Kotlin>',
          // "Wrote <ROS> pubsub in <C++> to send live robot data to AWS, proxy\'d through the onboard server Java Native interfaceonboard <Spring> server using ",
          // 'Designed data exchange between '
          // ''
          // <ExpressJS> server to <Spring>/<Kotlin>',
          // 'Improved security, performance and maintainability by porting legacy <ExpressJS> server to <Spring>/<Kotlin>',
          // "Designed websocket server that acts as a proxy between the local <ROS> pub/sub and the internet",
        ]
      },
      {
        title: 'Pronti Inc.',
        location: 'Waterloo',
        position: 'Backend/Infrastructure Engineer Intern',
        date: 'Jan-Apr 2021',
        points: [
          'Created <Flask> server for registration/logins using SMS 2FA, <JWT>, and <GraphQL> to reduce API boilerplate.',
          // 'Created nightly job that scrapes clothing retailer websites and hydrates an ML pipeline where results are classified.',
          'Reduced runtime of recommender algorithm by 75% by batching SQL queries, and caching results in <Redis>.',
          "Migrated server container from <GCP> to <Kubernetes> to scale with an influx of users, and implemented waitlist/referral system to manage growth rate."
        ]
      },
      {
        title: 'Backr Inc.',
        location: 'Toronto',
        position: 'Backend Developer Intern',
        date: 'Jun-Sep 2020',
        points: [
          'Ported high-volume ingestion microservice to <Go>, resulting in 4x speedup over OG <Python> implementation.',
          'Reduced <AWS> costs by refactoring monolithic ML pipeline into microservices to enable granular scaling.',
          'Redesigned main DB schema to speed up CRUD with indexing and relationships, migrated <3M> rows using <Python> script, and used <GraphQL> to simplify the associated API endpoints.',
          // 'Enhanced Docker Compose and CI/CD pipelines to the company\'s main projects.',
          // 'Desigustom graph datastructure for fast CRUD and scalability',
        ]
      },
      {
        title: 'CIBC',
        location: 'Toronto',
        position: 'Fullstack Developer Intern',
        date: 'Sep-Dec 2019',
        points: [
          'Created full-stack webapp for managers to create and retrieve fraud reports, built in <Flask>, <SvelteJS>, Postgres.',
          'Streamlined ticket inflow process for fraud reports by creating a <classifier> using spaCy, NLTK in <Python>.',
          // 'Provided data visualiations by embedding Tableau dashboards in new <JS/SCSS/HTML> webapp, developed to help identify patterns that may indicate fraudulant transactions',
        ],
      },
      {
        title: 'North Inc. (Acquired by Google)',
        location: 'Waterloo',
        position: 'Computer Vision Software Intern',
        date: 'Jan-Apr 2019',
        points: [
          // 'Improved simulation raytracing accuracy by 36% by developing a performance critical <DLL> plugin',
          'Created optical raytracing engine using <OpenCV> matrices in <C++> and optimized for specialized ASIC.',
          'Worked with scientists to create a material property calculator with n-dimensional interpolation in <C++>.',
          'Automated high-powered laser test jig by developing a <Python> app and <Arduino> firmware with alerts and logging.',
        ]
      }
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

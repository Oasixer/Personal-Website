<svelte:options accessors={true}/>
<script>
  export const contentSettings = () => {
    return items;
  };
  
  /* title: 'Tracked down long standing difficult to solve bugs in python and cpp (maybe mention LLVM (memory leaks in python GCC system ca))', */

  export let mobile;
  /* $: console.log(`items: ${items}`); */

  import Section from './Section.svelte';
  import ExperienceList from '../components/ExperienceList.svelte';
  import ListControls from '../components/ListControls.svelte';
  import SectionControls from '../components/SectionControls.svelte';
  import { TagNames } from '../utils/settings.js';

  let header = 'Work Experience';
  export let embedded=false;

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

  export const setContentSettings = (itemSettings) => {
    items.forEach(function (item) {
      let s = itemSettings.find(i => {
        if (i.title === item.title){
          return true;
        } 
      });
      if (s){ // if settings were found for this item
        item.title_alt = s.title_alt;
        item.order = s.order;
        item.force_hide = s.force_hide;
        item.points.forEach(function (j) {
          let p = s.points.find(x => x.title === j.title);
          if (p){
            j.title_alt = p.title_alt;
            j.order = p.order;
            j.force_hide = p.force_hide;
          }
        });
      }
    });
    items = [...items];
  };

  let items = [
    {
			title: 'NVIDIA',
			location: 'Remote',
			position: 'Software Engineer Intern',
			date: 'May-Aug 2022',
				points: [{
          title: 'Worked on Omnigraph (scalable compute engine) core, which supports <Python> and <C++> 1st and 3rd party extensions',
					order: 1,
				},
				{
title: 'Forked Pybind (<Python> - <C++> bindings) to add custom behavior meeting the needs of Omnigraph, for garbage collection during shutdown and reload',
					order: 1,
				},
				{
					title: "Designed and implemented versioning system for Omnigraph extensions to prevent conflicts and safely allow multi-instancing multiple configurations of the Omnigraph client",
					order: 2,
				},
				{
title: 'Tracked down long standing, difficult to solve memory leaks in the <C++> and <Python> across Pybind',
					order: 4,
				}
			],
			order: 2
		},
    {
    title: 'Trexo Robotics',
    location: 'Toronto',
    position: 'Backend Engineer Intern',
    date: 'Sep-Dec 2021',
      points: [
      {
      title: 'Leveraged <Merkle Tree> data structure to create a <diff>-based sync process between local and remote databases, allowing seamless experience for customers using the exoskeleton robot offline',
        order: 0,
      },
      {
title: 'Improved security, performance and maintainability by porting legacy <ExpressJS> server to <Spring>/<Kotlin>',
        order: 1,
      },
			{
title: "Wrote <C++> <ROS> (Robot Operating System) pubsub and meshed it with the <Spring> server using Java Native interface",
        order: 2,
      },
      {
title: "Designed websocket server that acts as a proxy between the local <ROS> pub/sub and the internet",
        order: 4,
      },
      {
title: 'Wrote an integration testing framework in <Bash> to orchestrate a robust series of tests of the bidirectional sync process between the local (robot) server and an emulated remote server',
        order: 7,
      }
    ],
    order: 2
  },
	{
    title: 'Pronti Inc.',
    location: 'Waterloo',
    position: 'Backend/Infrastructure Engineer Intern',
    date: 'Jan-Apr 2021',
    points: [
      {
title: 'Led the development of a new <Flask> app which processes and catalogs web content and provides a <GraphQL> interface',
        order: 1,
      },
      {
title: 'Developed secure registration system with SMS-based 2FA, <JWT>s, and waitlist/referrals to control user inflow',
        order: 2,
      },
      {
title: 'Reduced critical service runtime by over 80% by analyzing and optimizing naive, ORM-generated <SQL> queries',
        order: 4,
      },
			{
title: "Developed distributed microservice architecture to create scalable deployment on <Kubernetes>",
        order: 3,
      }
    ],
    order: 2
  },
	{
    title: 'Backr Inc.',
    location: 'Toronto',
    position: 'Backend Developer Intern',
    date: 'Jun-Sep 2020',
    points: [{
title: 'Designed and led a team to implement <Flask> server to ingest high volume data via <websocket> stream, collecting it into custom graph datastructure for fast CRUD and scalability',
        order: 4,
      },
      {
title: 'Developed fullstack webapp using <ExpressJS> + <SvelteJS> stack deployed to <GCP> with CI/CD pipeline and discrete microservices for scalability of the heavy ML pipelines',
        order: 6,
      }
    ],
    order: 2
  },
  {
    title: 'CIBC',
    location: 'Toronto',
    position: 'Fullstack Developer Intern',
    date: 'Sep-Dec 2019',
    points: [{
      title: 'Led development of a <Flask> webapp still in use by CIBC nationwide, using <SvelteJS> and <PostgreSQL> database',
        order: 0,
      },
      {
title: 'Provided data visualiations by embedding Tableau dashboards in new <JS/SCSS/HTML> webapp, developed to help identify patterns that may indicate fraudulant transactions',
        order: 2,
      },
      {
        title: 'Streamlined fraud reporting ticket inflow process by creating a <classifier> using spaCy, NLTK in <Python>',
        order: 4,
      }
      /* { */
        /* title: 'Achieved "Above and Beyond" award for outstanding performance', */
        /* order: 6, */
      /* } */
    ],
    order: 4
  },
  {
    title: 'North Inc. (Acquired by Google)',
    location: 'Waterloo',
    position: 'Computer Vision Software Intern',
    date: 'Jan-Apr 2019',
    points: [{
title: 'Improved simulation raytracing accuracy by 36% by developing a performance critical <DLL> plugin',
        order: 0,
      },
      {
title: 'Created enhanced optic artifact simulator, using <OpenCV> matrix calculations in <C++> and optimizing for specialized ASIC',
        order: 2,
      },
      {
title: 'Improved effectiveness of material property lookup table by developing n-dimensional interpolation algorithm in <C++>',
        order: 4,
      },
			{
title: 'Automated laser testing by developing a <Python> app and <Arduino> controller for operation and data collection',
				order: 6,
			}
    ],
    order: 6
  }
];

</script>

<Section {header} {embedded} {force_hide} bind:show_section_controls bind:show_list_controls>
  <div class="h-[3px]"></div>
  {#if show_section_controls && !embedded}
    <SectionControls bind:force_hide on:close={()=>{show_section_controls=false}}/>
  {/if}
  {#if show_list_controls && !embedded}
    <ListControls bind:items on:close={()=>{show_list_controls=false;}}/>
  {/if}
  <ExperienceList bind:items {embedded} {mobile} work={true}/>
  <div class="h-1"></div>
</Section>

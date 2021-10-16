<svelte:options accessors={true}/>
<script>
  export const contentSettings = () => {
    return items;
  };

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
        item.tags = s.tags;
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

		let items = [{
    title: 'Trexo Robotics',
    location: 'Toronto',
    position: 'Backend Engineer',
    date: 'Sep-Dec 2021',
			points: [{
        title: 'Improved security, performance and maintainability by replacing legacy NodeJS server with Kotlin (Spring) implementation',
        order: 1,
        force_hide: false
      },
			{
        title: "Meshed highly performant native code (C++) with Kotlin server using the Java Native Interface",
        order: 2,
        force_hide: false
      },
      {
        title: 'Improve data throughputs on Kotlin android app by adding websocket communication',
        order: 4,
        force_hide: false
      },
      {
        title: 'Designed and built a Kafka message pub/sub to achieve comprehensive logging, tracking, and profiling of robot activity and faults',
        order: 6,
        force_hide: false
      }],
			tags: [{
        title: TagNames.KOTLIN,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.JAVA,
        order: 2,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.SPRING,
        order: 3,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.ROS,
        order: 4,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.AWS,
        order: 6,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.CPP,
        order: 6,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.KAFKA,
        order: 8,
        force_hide: false,
        use_index: true
			}],
    force_hide: false,
    order: 2
  },

				
				{
    title: 'Pronti Inc.',
    location: 'Waterloo',
    position: 'Backend/Infrastructure Engineer',
    date: 'Jan-Apr 2021',
			points: [{
        title: 'Developed secure registration/login system with 2FA, JWTs for security, with a waitlist / referral system to control new user inflow',
        order: 1,
        force_hide: false
      },
			{
        title: "Developed distributed microservice architecture to create scalable deployment on Kubernetes",
        order: 2,
        force_hide: false
      },
      {
        title: 'Reduced critical service runtime by over 80% by optimizing SQL Queries',
        order: 4,
        force_hide: false
      },
      {
        title: 'Led the development of a new flask app which processes and catalogs web content and provides a GraphQL interface',
        order: 6,
        force_hide: false
      }],
			tags: [{
        title: TagNames.FLASK,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.PYTHON,
        order: 2,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.GRAPHQL,
        order: 4,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.AWS,
        order: 6,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.KUBERNETES,
        order: 8,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.POSTGRESQL,
        order: 10,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.JWT,
        order: 10,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.DOCKER,
        order: 12,
        force_hide: false,
        use_index: true
      }],
    force_hide: false,
    order: 2
  },
	{
    title: 'Backr Inc.',
    location: 'Toronto',
    position: 'Backend Developer',
    date: 'June-Sep 2020',
    points: [{
        title: 'Designed and led a team to implement Flask server performing data ingestion',
        order: 4,
        force_hide: false
      },
      {
        title: 'Developed fullstack webapp using NodeJS + ReactJS stack',
        order: 6,
        force_hide: false
      },
      {
				title: 'Deployed microservices to GCP and designed CI/CD pipelines',
        order: 10,
        force_hide: false
      }
    ],
    tags: [{
        title: TagNames.FLASK,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.PYTHON,
        order: 2,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.JS,
        order: 4,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.GCLOUD,
        order: 6,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.APPENGINE,
        order: 8,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.POSTGRESQL,
        order: 10,
        force_hide: false,
        use_index: true
      },{
        title: TagNames.NODEJS,
        order: 14,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.NLP,
        order: 16,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.SQL,
        order: 18,
        force_hide: false,
        use_index: true
      }
    ],
    force_hide: false,
    order: 2
  },
  {
    title: 'CIBC',
    location: 'Toronto',
    position: 'Full Stack Developer',
    date: 'Sep-Dec 2019',
    points: [{
        title: 'Led the development of a webapp with users nationwide, using SvelteJS as frontend, Flask (Python) webserver backend with OracleDB SQL server',
        order: 0,
        force_hide: false
      },
      {
        title: 'Provided data visualiations by embedding Tableau dashboards into webapp in JS/SCSS/HTML',
        order: 2,
        force_hide: false
      },
      {
        title: 'Improved fraud detection capabilities by creating a title classifier using spaCy, NLTK (Python)',
        order: 4,
        force_hide: false
      },
      {
        title: 'Achieved "Above and Beyond" award for outstanding performance',
        order: 6,
        force_hide: false
      }
    ],
    tags: [{
        title: TagNames.FLASK,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.SVELTE,
        order: 2,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.JS,
        order: 4,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.PYTHON,
        order: 6,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.NLP,
        order: 8,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.TABLEAU,
        order: 10,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.UI,
        order: 12,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.SQL,
        order: 14,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.SCSS,
        order: 16,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.SPACY,
        order: 18,
        force_hide: false,
        use_index: true
      }
    ],
    force_hide: false,
    order: 4
  },
  {
    title: 'North Inc. (Acquired by Google)',
    location: 'Waterloo',
    position: 'Computer Vision Software Developer',
    date: 'Jan-April 2019',
    points: [{
        title: 'Improved simulation accuracy by 76% by developing a performance critical DLL plugin that performs raytraces',
        order: 0,
        force_hide: false
      },
      {
        title: 'Created enhanced optical artifact simulator, using advanced OpenCV matrix calculations in C++',
        order: 2,
        force_hide: false
      },
      {
        title: 'Improved effectiveness of material property lookup table by developing n-dimensional interpolation algorithm',
        order: 4,
        force_hide: false
      },
      {
        title: 'Automated a laser test fixure by developing control software in Python & Arduino',
        order: 6,
        force_hide: false
      }
    ],
    tags: [{
        title: TagNames.CPP,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.OPENCV,
        order: 2,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.PYTHON,
        order: 4,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.ARDUINO,
        order: 6,
        force_hide: false,
        use_index: true
      }
    ],
    force_hide: false,
    order: 6
  }
];

</script>

<Section {header} {embedded} {force_hide} bind:show_section_controls bind:show_list_controls>
  {#if show_section_controls && !embedded}
    <SectionControls bind:force_hide on:close={()=>{show_section_controls=false}}/>
  {/if}
  {#if show_list_controls && !embedded}
    <ListControls bind:items on:close={()=>{show_list_controls=false;}}/>
  {/if}
  <ExperienceList bind:items {embedded} {mobile} work={true}/>
</Section>

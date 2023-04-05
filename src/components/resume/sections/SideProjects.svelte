<script>
  export const contentSettings = () => {
    return items;
  };
  /* $: console.log(items); */

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

  import Section from './Section.svelte';
  import ExperienceList from '../components/ExperienceList.svelte';
  import ListControls from '../components/ListControls.svelte';
  import SectionControls from '../components/SectionControls.svelte';
  import { TagNames } from '../utils/settings.js';

  let header = 'Highlighted Projects';
  let show_section_controls = false;
  let show_list_controls = false;
  let force_hide = false;
		let items = [
		{
    title: 'GibJob - Resume App',
    location: 'GibJob',
    position: 'Project Lead',
    date: '2021',
    points: [{
      title: 'Developed backend in Go implementing user login, JWT auth, GraphQL, unit tests',
      order: 2,
      force_hide: false
    }, {
      title: 'Developed frontend in SvelteJS+Typescript+SCSS, leveraging local storage to store JWT & maintain sessions',
      order: 4,
      force_hide: false
    }],
    tags: [{
        title: TagNames.GOLANG,
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
        title: TagNames.SVELTE,
        order: 4,
        force_hide: false,
        use_index: true
    },
		{
        title: TagNames.DOCKER,
        order: 4,
        force_hide: false,
        use_index: true
    },
		{
        title: TagNames.GCLOUD,
        order: 4,
        force_hide: false,
        use_index: true
    },
    ],
    force_hide: true,
    order: -4
  },
    {
      title: 'Distributed Underwater Positioning System',
      location: '',
      position: '',
      points: [{
        'title':'Floating beacons use trilateration (3D triangulation) to resolve position of Remote Underwater Vehicle',
        order: 1, force_hide: false
      }, {title: 'Distributed network in which minimal-overhead message protocol is used to transmit data underwater as audio', order: 2, force_hide: false},{
        title: 'Sliding window fourier transform performed at 500KHz to decode audio signals, written in C', order: 3, force_hide: false},
        { title: 'Protobufs allow bidirectional comms over TCP socket between nodes and an orchestrating server', order: 5, force_hide: false
        }],
      tags: [],
      date: 'Feb 2023',
      force_hide: false,
      order: 1
  },
  {
    title: 'Distributed Underwater Positioning System',
    /* title: 'asdfsa', */
    location: 'Capstone Design Project',
    position: '',
    date: 'Feb 2023',
    /* title: 'Rocket vent board firmware', */
    /* location: 'UW Rocketry - Electrical Team', */
    /* position: 'Programmer', */
    /* date: 'Aug 2020', */
    points: [
      {title:'Distributed floating beacons use trilateration (3D triangulation) to resolve position of Remote Underwater Vehicle',
        order: 1, force_hide: false
      }, {title: 'Designed min-overhead msg protocol for transmitting data underwater as modulated audio tones', order: 2, force_hide: false},{
        title: 'Sliding window fourier transform performed at 500KHz to decode audio signals, written in <C> for Teensy 4.1', order: 3, force_hide: false},
      { title: 'Implemented <TCP> socket based comms between each node and <Python> server, exchanging <protobuf> for cmd & ctrl', order: 5, force_hide: false
        }],
    tags: [{
        title: TagNames.C,
        order: 2,
        force_hide: false,
        use_index: true
    },
    {
        title: TagNames.EMBEDDED,
        order: 4,
        force_hide: false,
        use_index: true
    }
    ],
    force_hide: false,
    order: -4
  },
  {
    title: 'Rocket Vent MCU Firmware',
    location: 'UW Rocketry - Electrical Team',
    /* position: 'Programmer', */
    position: '',
    date: 'Aug 2020',
    points: [{
      title: 'Developed C firmware for PIC microcontroller onboard a rocket flying to 30,000 feet',
      order: 2,
      force_hide: false
    }, {
      title: 'Handles valves which control the flow of fuel and oxidizer, communicating with other components via CAN Bus',
      order: 4,
      force_hide: false
    }],
    tags: [{
        title: TagNames.C,
        order: 2,
        force_hide: false,
        use_index: true
    },
    {
        title: TagNames.EMBEDDED,
        order: 4,
        force_hide: false,
        use_index: true
    }
    ],
    force_hide: false,
    order: -4
  },

    {
    title: 'I3WM Emulator',
    location: '',
    position: 'Personal Project',
    date: 'June 2020',
    points: [{
      title: 'Created Windows native emulator of popular Linux window manager i3 which uses MSVC in C++ for UI manipulation',
      order: 2,
      force_hide: false
    }, {
      title: 'Developed data structures to handle management logic using modern C++ techniques',
      order: 4,
      force_hide: false
    }],
    tags: [{
        title: TagNames.CPP,
        order: 6,
        force_hide: false,
        use_index: true
      }],
    force_hide: true,
    order: -2
  },
  {
    title: 'Slack Chatbot (AWS)',
    location: 'UW Rocketry - Electrical Team',
    position: 'Programmer',
    date: 'Jan 2019',
    points: [{
      title: 'Developed scheduling application in Python, deployed to AWS Lambda',
      order: 2,
      force_hide: false
    }, {
      title: 'Set up REST API Gateway to communicate with AWS Lambda Function',
      order: 4,
      force_hide: false
    }, {
      title: 'Created Amazon DynamoDB database to store user and group schedules',
      order: 6,
      force_hide: false
    }],
    tags: [{
        title: TagNames.PYTHON,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.AWS,
        order: 2,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.BASH,
        order: 4,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.BACKEND,
        order: 6,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.DYNAMODB,
        order: 8,
        force_hide: false,
        use_index: true
      }
    ],
    force_hide: true,
    order: 0
  },
  {
    title: 'Realtime Rocket Data Visualiser',
    location: 'UW Rocketry - Electrical Team',
    position: 'Programmer',
    date: 'Jan 2019',
    points: [{
      title: 'Developed data transfer protocol for realtime transmission of rocket sensor data',
      order: 0,
      force_hide: false
    }, {
      title: 'Improved analysis capabilities by creating data visualizations with D3.js graphs encapsulated as Python Plotly Dash components',
      order: 2,
      force_hide: false
    }],
    tags: [{
        title: TagNames.PYTHON,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.ARDUINO,
        order: 2,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.DATA_VISUALIZATION,
        order: 4,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.PLOTLY,
        order: 6,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.D3,
        order: 8,
        force_hide: false,
        use_index: true
      }
    ],
    force_hide: true,
    order: 2
  },
  {
    title: 'PyBudgeter',
    location: '',
    position: 'Personal Project',
    date: 'Jan 2019',
    points: [{
      title: 'Created PostgreSQL database to store salted passwords, user info, transactions',
      order: 0,
      force_hide: false
    }, {
      title: 'Developed Android app frontend in Kotlin',
      order: 2,
      force_hide: false
    }],
    tags: [{
        title: TagNames.PYTHON,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.FLASK,
        order: 2,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.SQL,
        order: 4,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.POSTGRESQL,
        order: 6,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.KOTLIN,
        order: 8,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.UI,
        order: 10,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.BACKEND,
        order: 12,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.FRONTEND,
        order: 14,
        force_hide: false,
        use_index: true
      }
    ],
    force_hide: true,
    order: 4
  },
  {
    title: 'ROS Robot Driver Station',
    location: 'UW React',
    position: 'Controls team programmer',
    date: '2018',
    points: [{
      title: 'Lead the design and development of a QT application which provides a human interface to the robot simulator',
      order: 0,
      force_hide: false
    }, {
      title: 'Implemented driver station in Python handling joystick input, high-level state control, and diagnostic info',
      order: 2,
      force_hide: false
    }, {
      title: 'Implemented Robot Operating System (ROS) message publishing/subscribing to relay critical information to and from the robot',
      order: 4,
      force_hide: false
    }],
    tags: [{
        title: TagNames.PYTHON,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.CONTROL_SYSTEMS,
        order: 2,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.DATA_VISUALIZATION,
        order: 4,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.UI,
        order: 6,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.ROS,
        order: 8,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.QT,
        order: 10,
        force_hide: false,
        use_index: true
      }
    ],
    force_hide: true,
    order: 6
  },
  {
    title: 'Smart Headlamp',
    location: 'UTRAHacks',
    position: 'Hackathon Project',
    date: '2018',
    points: [{
      title: 'Created gesture controlled headlamp with deep learning facial recognition via Haar Cascades in OpenCV',
      order: 0,
      force_hide: false
    }, {
      title: 'Implemented Leap Motion Control using C++',
      order: 2,
      force_hide: false
    }, {
      title: 'Set up onboard Rasperry Pi and Arduino to control motors, sensors, and lights',
      order: 4,
      force_hide: false
    }, {
      title: 'Achieved second place, and received Leap Motion award',
      order: 6,
      force_hide: false
    }],
    tags: [{
        title: TagNames.PYTHON,
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
        title: TagNames.UI,
        order: 4,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.MACHINE_LEARNING,
        order: 6,
        force_hide: true,
        use_index: true
      },
      {
        title: TagNames.CONTROL_SYSTEMS,
        order: 8,
        force_hide: true,
        use_index: true
      },
      {
        title: TagNames.CPP,
        order: 10,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.ARDUINO,
        order: 12,
        force_hide: false,
        use_index: true
      }
    ],
    force_hide: true,
    order: 8
  }
]; 
</script>

<Section {header} {force_hide} bind:show_section_controls bind:show_list_controls>
  {#if show_section_controls}
    <SectionControls bind:force_hide on:close={()=>{show_section_controls=false}}/>
  {/if}
  {#if show_list_controls}
    <ListControls bind:items on:close={()=>{show_list_controls=false;}}/>
  {/if}
  <ExperienceList bind:items work={false}/>
</Section>

import type { ProjMeta } from './project.ts';
import { LANGUAGES } from './project.ts';
export let projects: ProjMeta[] = [
	{
		name: 'dummy',
		dir: '.',
		languages: [],
		project_desc: [],
		contributions: [],
		links: [''],
		images: [],
		leftColWidthFactor: 1
	},
	{
		name: 'Distributed Underwater Positioning System',
		dir: 'pinguins',
		languages: ['rust', 'cpp', 'ts', 'svelte', 'docker'],
		project_desc: [
			'The <Final Year Design Project> for my Mechatronics Engineering degree, 8 months of work by my 4 teammates and I.',
			'`Awarded <Best Overall Project> out of 52 teams',
			'Distributed positioning system for underwater robots using acoustic nodes in a mesh' // Received first place out of 52 teams.',
		],
		contributions: [
			'Responsible for the <Rust> Server which orchestrates all the devices, ingests live data, delivers the webserver',
			"`Server multiplexes each node's data to a seperate terminal for debugging",
			'`Manages client state and provides smooth reconnection for nodes that get interrupted',
			'Responsible for the dashboard webapp incl. live data visualizer and playback of pre-recorded data sync’d with video',
			'`TODO: link / embed video of this here',
			'Architected the <CPP> firmware, wrote all the network integrations, implemented the calibration algorithm',
			'Responsible for the system infrastructure: networking (full stack), software build systems, and message protocols',
			'`Responsible for the team’s website (nothing impressive, not at all the focus of the project) but https://pinguins.boats)'
		],
		links: ['https://github.com/kiranjray/fydp_software'],
		images: ['award', 'demo_outside', 'underwater', 'pinguins'],
		leftColWidthFactor: 0.7
	},
	{
		name: 'Autonomous Robot Race Winner',
		dir: '380',
		languages: ['cpp', 'python', 'protobuf'],
		project_desc: [
			'Wheeled robot that autonomously navigates an obstacle course as fast as possible',
			'1st place out of 23 teams'
		],
		contributions: [
			'Developed pathfinding algorithm and PID controller with look-ahead to stay on track at high speeds',
			'Used protobufs in CPP, streamed them to laptop/dashboard in realtime over a TCP socket, and parsed them automatically in python to create realtime readouts and plots.',
			'Made a dashboard in Python that visualizes robot position, robot trajectory, and gives readouts of key data at high refresh rates / realtime, can save and replay data',
			'`Developed simulation mode for dashboard which simulated the robot physics and enabled us to develop and refine the algorithms before we finished building the robot.',
			'Wrote my own plotting library with automatic rescaling and other overkill features',
			'GF fixed my sensors on comp day, thanks bb'
		],
		links: ['https://github.com/Oasixer/380-robot-sw'],
		images: ['380'],
		leftColWidthFactor: 0.65
	},
	{
		name: 'GibJob (side project)',
		dir: 'gibjob',
		languages: ['go', 'graphql', 'svelte', 'js'],
		project_desc: [
			'Webapp for resume creation that makes it easy to choose from styles, templates, layouts, and provides a convenient workflow to maintain and update it.',
			'Developed backend in <Go> implementing user login, JWT auth, <GraphQL>, unit tests',
			'Developed frontend in <SvelteJS>+<Typescript>+SCSS, leveraging local storage to store JWT & maintain sessions'
		],
		contributions: [],
		links: ['https://github.com/GibJob-ai/GObjob'],
		images: ['gibjob'],
		leftColWidthFactor: 0.6
	},
	{
		name: 'Live Rocket Data Visualiser',
		dir: 'plotly',
		languages: ['python', 'js'],
		project_desc: [
			'Visualisation dashboard for UW Rocketry to display live sensor data.',
			'Developed data transfer protocol for realtime transmission of rocket sensor data.',
			'Improved analysis capabilities by creating data visualizations with D3.js graphs encapsulated as Python Plotly Dash components'
		],
		contributions: [],
		links: ['https://github.com/waterloo-rocketry/rlcs-daq-plotting'],
		images: ['plotly'],
		leftColWidthFactor: 0.6
	},
	{
		name: 'Backr Inc. Backend and Analytics',
		dir: 'backr',
		languages: ['python', 'js'],
		project_desc: [
			'Now dead startup that did a bunch of twitter and youtube scraping and data analysis for youtubers seeking to have good fan interaction'
		],
		contributions: [
			'Led the design and development of Flask server that handles data ingestion and analytics for customers.',
			'Designed an overhauled db schema for the entire product using SQLAlchemy ORM',
			'Maintained the legacy ExpressJS server codebase while switching over to my improved design.'
		],
		links: ['https://backr.space/'],
		images: ['backr'],
		leftColWidthFactor: 0.5
	},
	{
		name: 'i3 Window Manager Emulator',
		dir: 'i3',
		images: ['i3'],
		languages: ['cpp'],
		project_desc: [
			'Windows native emulator of popular Linux window manager i3 that we all know and love',
			'Developed using MSVC in C++ for UI manipulation',
			'Never got around to finishing this, but the prototype is linked (github, above)'
		],
		contributions: [],
		links: ['https://github.com/Oasixer/i3_emu'],
		leftColWidthFactor: 1
	},
	{
		name: 'Smart Headlamp',
		dir: 'headlamp',
		languages: ['python', 'cpp'],
		images: ['headlamp'],
		contributions: [],
		project_desc: [
			'Gesture controlled headlamp with deep learning facial recognition via Haar Cascades in OpenCV (performed offboard)',
			'Implemented Leap Motion Control using C++.',
			'Set up onboard Rasperry Pi and Arduino to control motors, sensors, and lights.',
			'Achieved second place, and received Leap Motion award.'
		],
		links: ['https://github.com/ParthSareen/SmartLamp'],
		leftColWidthFactor: 1
	},
	{
		name: 'Rocket Microcontroller Firmware',
		images: ['vent.png'],
		dir: 'vent',
		languages: ['c'],
		project_desc: [
			'Handles valves which control the flow of fuel and oxidizer on board a rocket flying to 30,000 feet.',
			'Firmware for PIC microcontroller, written in C.',
			'Communicates via CAN bus with the rest of the rocket, and the remote launch control system.'
		],
		contributions: [],
		links: ['https://github.com/waterloo-rocketry/cansw_vent/tree/v2-dev'],
		leftColWidthFactor: 1
	},
	{
		name: 'ROS Robot Driver Station',
		dir: 'ros',
		images: ['ros'],
		languages: ['python'],
		project_desc: [
			'Lead the design and development of a QT application which provides a human interface to the robot simulator.',
			'Implemented driver station in Python handling joystick input, high-level state control, and diagnostic info.',
			'Implemented Robot Operating System (ROS) message publishing/subscribing to relay critical information to and from the robot'
		],
		contributions: [],
		links: ['https://github.com/uwreact/frc_control'],
		leftColWidthFactor: 1
	},
	{
		name: 'Ultra low budget 3D printer from scratch',
		dir: 'printer',
		images: ['printer.jpg'],
		languages: ['c'],
		project_desc: [
			'Made a mini 3D printer powered by a 3d pen for under $40, programmed some prototype firmware',
			'Surprisingly, it kinda worked'
		],
		contributions: [],
		// links: [],
		links: ['https://github.com/Oasixer/Lego-3D-Printer'],
		leftColWidthFactor: 1
	},
	{
		name: 'dummy',
		dir: '.',
		languages: [],
		project_desc: [],
		contributions: [],
		links: [''],
		images: [],
		leftColWidthFactor: 1
	}
].map((i, idx) => {
	// add index property to each element
	return {
		...i,
		idx,
		selected_img: 0,
		languages: i.languages.map((j) => {
			return LANGUAGES[j];
		}),
		thumb_hovered: false
	};
});

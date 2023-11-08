import type { ProjMeta, Link } from './project.ts';
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
			'Awarded <Best Overall Project> out of 52 teams',
			'The <Final Year Design Project> for my Mechatronics Engineering degree, 8 months of work by my 4 teammates and I.',
			'Distributed positioning system for underwater robots using acoustic nodes in a mesh' // Received first place out of 52 teams.',
			// 'demo_in_browser'
		],
		contributions: [
			'Responsible for the <`rust!Rust Server> which orchestrates all the devices, ingests live data, serves the dashboard',
			"`<`rust!Server> multiplexes each node's data to a seperate terminal for debugging",
			'`Manages client state and provides smooth reconnection for nodes that get interrupted',
			'Responsible for the dashboard, a <`svelte!SvelteJS> + <`ts!TypeScript> webapp which serves as the user interface for the entire system',
			'`Designed live data visualizer and playback of pre-recorded data sync’d with video', // [see <Demo in Browser> btn above]',
			'Architected the <`cpp!C++> firmware, wrote all the network integrations, implemented the calibration algorithm',
			'Responsible for the system infrastructure: networking (full stack), software build systems, and message protocols (<`protobuf!protobufs>)'
			// '`Responsible for the team’s website (nothing impressive, not at all the focus of the project), live @ https://pinguins.boats)'
		],
		links: [
			// { display: 'Demo in browser', target: 'pinguins_demo' },
			{ target: 'https://github.com/Oasixer/underwater_PINGuins' }
		],
		images: ['award', 'demo_outside', 'underwater', 'pinguins'],
		leftColWidthFactor: 0.55
	},
	{
		name: 'grappler.nvim (Neovim plugin)',
		dir: 'grappler',
		languages: ['lua', 'nvim'],
		project_desc: [
			'Grappling hook based movement plugin written in <`lua!Lua>',
			'Intuitive and fast movement based on whitespace and raycasting',
			'Configurable animation function, keybinds, timing parameters.'
		],
		contributions: [],
		links: [{ target: 'https://github.com/Oasixer/grappler.nvim' }],
		images: ['video{grappler}'],
		leftColWidthFactor: 0.55
	},
	{
		name: 'Packet Panic',
		dir: 'ppanic',
		languages: ['go'],
		project_desc: [
			'High performance network proxy written in <`go!Go> that emulates bad network conditions to verify the fault-tolerance of distributed systems in adverse conditions.',
			'Implemented <TUN> (kernel virtual interface) to transparently and bidirectionally intercept 15+ Gb/s of layer 3 packets.',
			'Coroutines are dispatched to handle requests concurrently, apply packet loss/corruption/delay, forward to destination',
			'`filter stages such as packet loss/corruption/delay are applied using probablistic models',
			'Each request is then forwarded to the original destination with a spoofed source address so that replies can also be intercepted and processed.'
		],
		contributions: [],
		links: [{ target: 'https://github.com/Oasixer/packet-panic' }],
		images: ['ppanic'],
		leftColWidthFactor: 0.55
	},
	{
		name: 'Autonomous Robot Race Winner',
		dir: '380',
		languages: ['cpp', 'python', 'protobuf'],
		project_desc: [
			'1st place out of 23 teams',
			'Wheeled robot that autonomously navigates an obstacle course as fast as possible'
		],
		contributions: [
			'Developed pathfinding algorithm and PID controller with look-ahead to stay on track at high speeds',
			'Used <`protobuf!protobufs> in <`cpp!C++>, streamed them to laptop/dashboard in realtime over a TCP socket, and parsed them automatically in <`python!Python> to create realtime readouts and plots.',
			'Made a dashboard in <`python!Python> that visualizes robot position, robot trajectory, and gives readouts of key data at high refresh rates / realtime, can save and replay data',
			'`Developed simulation mode which approximates the robot physics and enabled us to develop and refine the algorithms before we finished building the robot.',
			'Wrote my own plotting library with automatic rescaling and other overkill features',
			'GF fixed my sensors on comp day, thanks bb'
		],
		links: [{ target: 'https://github.com/Oasixer/380-robot-sw' }],
		images: ['380'],
		leftColWidthFactor: 0.65
	},
	{
		name: 'GibJob (side project)',
		dir: 'gibjob',
		languages: ['go', 'graphql', 'svelte', 'js'],
		project_desc: [
			'Webapp for resume creation that makes it easy to choose from styles, templates, layouts, and provides a convenient workflow to maintain and update it.',
			'Developed backend in <`go!Go> implementing user login, JWT auth, <`graphql!GraphQL>, unit tests',
			'Developed frontend in <`svelte!SvelteJS>+<`ts!Typescript>+SCSS, leveraging local storage to store JWT & maintain sessions'
		],
		contributions: [],
		links: [{ target: 'https://github.com/GibJob-ai/GObjob' }],
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
			'Improved analysis capabilities by creating data visualizations with <`js!D3.js> graphs encapsulated as <`python!Python> Plotly Dash components'
		],
		contributions: [],
		links: [{ target: 'https://github.com/waterloo-rocketry/rlcs-daq-plotting' }],
		images: ['plotly'],
		leftColWidthFactor: 0.6
	},
	// {
	// 	name: 'Backr Inc. Backend and Analytics',
	// 	dir: 'backr',
	// 	languages: ['python', 'flask', 'js'],
	// 	project_desc: [
	// 		'Now dead startup that did a bunch of twitter and youtube scraping and data analysis for youtubers seeking to have good fan interaction'
	// 	],
	// 	contributions: [
	// 		'Led the design and development of <`flask!Flask> server that handles data ingestion and analytics for customers.',
	// 		'Designed an overhauled db schema for the entire product using SQLAlchemy ORM',
	// 		'Maintained the legacy <`js!ExpressJS> server codebase while switching over to my improved design.'
	// 	],
	// 	links: [{ target: 'https://backr.space/' }],
	// 	images: ['backr'],
	// 	leftColWidthFactor: 0.5
	// },
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
		links: [{ target: 'https://github.com/ParthSareen/SmartLamp' }],
		leftColWidthFactor: 1
	},
	{
		name: 'Rocket Microcontroller Firmware',
		images: ['vent'],
		dir: 'vent',
		languages: ['c'],
		project_desc: [
			'Handles valves which control the flow of fuel and oxidizer on board a rocket flying to 30,000 feet.',
			'Firmware for PIC microcontroller, written in C.',
			'Communicates via CAN bus with the rest of the rocket, and the remote launch control system.'
		],
		contributions: [],
		links: [{ target: 'https://github.com/waterloo-rocketry/cansw_vent/tree/v2-dev' }],
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
		links: [{ target: 'https://github.com/uwreact/frc_control' }],
		leftColWidthFactor: 1
	},
	{
		name: 'Ultra low budget 3D printer from scratch',
		dir: 'printer',
		images: ['printer'],
		languages: ['c'],
		project_desc: [
			'Made a mini 3D printer powered by a 3d pen for under $40, programmed some prototype firmware',
			'Surprisingly, it kinda worked'
		],
		contributions: [],
		// links: [],
		links: [{ target: 'https://github.com/Oasixer/Lego-3D-Printer' }],
		leftColWidthFactor: 1
	},
	{
		name: 'i3 Window Manager Emulator',
		dir: 'i3',
		images: ['i3'],
		languages: ['cpp'],
		project_desc: [
			'Windows native emulator of popular Linux window manager i3 that we all know and love',
			'Developed using MSVC in <`cpp!C++> for manipulation of OS windows'
			// 'Never got around to finishing this, but the prototype is linked (github, above)'
		],
		contributions: [],
		links: [{ target: 'https://github.com/Oasixer/i3_emu' }],
		leftColWidthFactor: 1
	},
	{
		name: 'dummy',
		dir: '.',
		languages: [],
		project_desc: [],
		contributions: [],
		links: [{}],
		images: [],
		leftColWidthFactor: 1
	}
].map((i, idx) => {
	// add index property to each element
	let _links: Link[] = [];
	for (let j = 0; j < i.links.length; j++) {
		_links.push({
			display: i.links[j].hasOwnProperty('display') ? i.links[j].display : 'github',
			target: i.links[j].target
		} as Link);
	}
	return {
		...i,
		idx,
		selected_img: 0,
		languages: i.languages.map((j) => {
			return LANGUAGES[j];
		}),
		links: _links,
		thumb_hovered: false
	};
});

import type { Item, ProtoItem } from '../SideProjects/side_projects_content';
import {
	generateStringy,
	enumerateProtoItemsToItemInstances
} from '../SideProjects/side_projects_content';

export function get_items(print_experience: boolean) {
	let __items: ProtoItem[] = [
		{
			title: 'Tronix Product Design',
			location: 'Toronto',
			position: 'Embedded Software Developer',
			date: "Oct '23 - Present",
			points: [
				'Designed and implemented <C> firmware leveraging <Zephyr RTOS> on an nRF52 ARM-based embedded system.',
				// 'Implemented <Bluetooth> audio streaming from PDM mic with LC3 compression for offboard processing.',
				'Implemented <Bluetooth> audio streaming, wireless charging, and capacitative touch sensing.',
				'Integrated MCUboot bootloader to perform OTA (wireless) firmware updates over Bluetooth.'
			]
		},
		{
			title: 'NVIDIA',
			location: 'Remote',
			position: 'Software Engineer Intern',
			date: "May '22 - Aug '22",
			// repo: 'https://kaelan.xyz/resume?select=NVIDIA',
			// website_link: true,
			points: [
				// 'Developed features for Omnigraph (scalable compute engine), working with WARP convert Python',

				// "Worked on the Core team for OmniGraph, the scalable procedural graph engine that supports hundreds of Python and C++ extensions",
				// "Reduced latency for core <C++> and <Python> nodes in OmniGraph (scalable procedural graph engine) using memoization to cache repeated vector inputs.",
				// "Reduced latency and improved performance in OmniGraph (scalable procedural <graph> engine) by porting n-dimensional vector math nodes from <Python> to <C++>",

				// "Accelerated rendering pipeline by 10% by porting Python extension to C++, and used Pybind ", // a flag in the config for action graph nodes, equivalent to @cache
				// "Collaborated with BMW to create an adapter between their physics simulation and the OmniGraph framework"
				// ""
				// "Identified memory leaks coming from hash grids in JIT-compiled <CUDA C++> kernels using <Heaptrack> and <GDB>.",

				'Ported OmniGraph (distributed <graph> engine) nodes for vector math from <Python> to <C++>, resulting in 4x speedup.',
				// "Overhauled OmniGraph extension install system by integrating a global cache for dependencies, reducing build sizes 18+%",
				'Improved OmniGraph extension installation with global cache, reducing build size by 18+%',
				// the reason why nobody had done it was realistically because it was a huge pain in the ass to switch from all relative paths
				// to now some global paths pointing to like C://nvidia_libs or whatever it was... And ig I am a junior employee

				// the most difficult part of this was the enormous number of places that depended on the paths to the dependencies resulting in
				// me having to learn the python import system deeply and do some tweaking to get the import system to import libraries
				// from the correct location depending on the version of the build system used

				// i had to draw one 0f those crazy, conspiracy theory looking diagrams to understand everything.......... ehhhhhhhhhhh

				// "Overhauled versioning and install system for OmniGraph <C++>/<Python> extensions to cache dependencies, reduce conflicts, and allow multi-instancing on developer machines.",
				'Fixed memory leaks from <C++> extensions reloading with pybind11 ABI by forking Pybind as a hotfix.' // backstory was a bug with a temporary data structure in autogenerated

				// Pybind generates an ABI and

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
			date: "Sep '21 - Dec '21",
			// repo: 'https://kaelan.xyz/resume?select=Trexo',
			// website_link: true,
			points: [
				'Created a <Kotlin>+<Spring Boot> server on <AWS> to manage live data to and from <200 exoskeleton robots>.',
				// 'Integrated registration, login, ',
				'Implemented a fault-tolerant bidirectional <DB sync> (robot ↔ cloud) using <Merkle Tree> based algorithm.',
				// 'Leveraged <Merkle Tree> data structure to bidirectionally sync onboard and cloud DBs, allowing seamless access for customers with spotty internet.',
				// 'Eliminated expensive manual testing by designing integration testing framework in <Bash> that emulates a remote server to verify behavior of the onboard server across a suite of use-cases.',
				'Created three way integration testing (mobile ↔ robot ↔ cloud) in <Bash>, reducing QA testing workload by 15%'
				// 'Improved security, performance and maintainability by porting legacy <ExpressJS> login server to <Spring>/<Kotlin>'
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
			date: "Jan '21 - Apr '21",
			// repo: 'https://kaelan.xyz/resume?select=Pronti',
			// website_link: true,
			points: [
				'Created <Flask> server for registration/logins using SMS 2FA, <JWT>, and <GraphQL> to reduce API boilerplate.',
				// 'Created nightly job that scrapes clothing retailer websites and hydrates an ML pipeline where results are classified.',
				// 'Reduced runtime of recommender algorithm by 75% by batching SQL queries, and caching results in <Redis>.',
				// 'Migrated server container from <GCP> to <Kubernetes> to scale with an influx of users, and implemented waitlist/referral system to manage growth rate.'
				'Migrated containers to <Kubernetes>, implemented waitlist/referral system to manage growth rate.'
				// 'Redesigned main DB schema to speed up CRUD with indexing and relationships, migrated <3M> rows using <Python> script, and used <GraphQL> to simplify the associated API endpoints.'
				// 'Redesigned main DB schema to speed up CRUD with indexing and relations, migrated <3M> rows using <Python> script.'
			]
		},
		{
			title: 'Backr Inc.',
			location: 'Toronto',
			position: 'Backend Developer Intern',
			date: "Jun '20 - Sep '20",
			// repo: 'https://kaelan.xyz/resume?select=Backr',
			// website_link: true,
			points: [
				'Ported high-volume ingestion microservice to <Go>, resulting in 4x speedup over OG <Python> implementation.',
				'Reduced <AWS> costs by refactoring monolithic ML pipeline into microservices to enable granular scaling.'
				// 'Redesigned main DB schema to speed up CRUD with indexing and relationships, migrated <3M> rows using <Python> script, and used <GraphQL> to simplify the associated API endpoints.'
				// 'Enhanced Docker Compose and CI/CD pipelines to the company\'s main projects.',
				// 'Desigustom graph datastructure for fast CRUD and scalability',
			]
		},
		{
			title: 'CIBC',
			location: 'Toronto',
			position: 'Fullstack Developer Intern',
			date: "Sep '19 - Dec '19",
			force_hide: true,
			// repo: 'https://kaelan.xyz/resume?select=CIBC',
			// website_link: true,
			points: [
				'Created full-stack webapp for managers to create and retrieve fraud reports, built in <Flask>, <SvelteJS>, Postgres.',
				'Streamlined ticket inflow process for fraud reports by creating a <classifier> using spaCy, NLTK in <Python>.'
				// 'Provided data visualiations by embedding Tableau dashboards in new <JS/SCSS/HTML> webapp, developed to help identify patterns that may indicate fraudulant transactions',
			]
		},
		{
			title: 'North Inc. (Acquired by Google)',
			location: 'Waterloo',
			position: 'Computer Vision Software Intern',
			date: "Jan '19 - Apr '19",
			// repo: 'https://kaelan.xyz/resume?select=North',
			// website_link: true,
			points: [
				'Created optical raytracing engine using <OpenCV> matrices in <C++> and optimized for specialized ASIC.',
				'Worked with scientists to create a material property calculator with n-dimensional interpolation in <C++>.',
				'Improved optical raytracing accuracy by 36% by developing a <DLL> plugin in <C++> for a simulation engine.'
				// 'Automated high-powered laser test jig by developing a <Python> + <Arduino> IOT .',
			]
		}
	];

	let _items: Item[] = enumerateProtoItemsToItemInstances(__items);
	if (print_experience) {
		console.log(generateStringy(__items));
	}
	return _items;
}

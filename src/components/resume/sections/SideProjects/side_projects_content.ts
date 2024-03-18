// side_projects_content.ts

export interface ItemPoint {
	title: string;
	order: number;
}

function pointStringsToItemPoints(strings: string[]): ItemPoint[] {
	return strings.map((title, index) => ({
		title,
		order: index // 0-indexed enumeration
	}));
}

export interface Item {
	force_hide?: boolean;
	order: number;
	points: ItemPoint[];
	location: string;
	position: string;
	title: string;
	date: string;
	repo?: string | null;
	// website_link?: boolean | null;
}
export interface ProtoItem {
	points: string[];
	location: string;
	position: string;
	title: string;
	date: string;
	force_hide?: boolean | null;
	repo?: string | null;
	// website_link?: boolean | null;
}

function parseDateRange(dateRange: string): string[] {
	// Define a map for month abbreviations to their numeric representations
	const monthMap: { [key: string]: string } = {
		Jan: '01',
		Feb: '02',
		Mar: '03',
		Apr: '04',
		May: '05',
		Jun: '06',
		Jul: '07',
		Aug: '08',
		Sep: '09',
		Oct: '10',
		Nov: '11',
		Dec: '12'
	};

	// Split the date range into start and end
	const parts = dateRange.split(' - ');
	const startPart = parts[0];
	const endPart = parts[1];

	// Function to parse a date part into YYYY/MM format
	const parsePart = (part: string): string => {
		const [monthAbbr, year] = part.split(' ');
		const numericMonth = monthMap[monthAbbr];
		// Assuming the year is always in the format "'YY"
		const fullYear = `20${year.slice(1)}`;
		return `${fullYear}/${numericMonth}`;
	};

	// Handle the 'Present' case
	if (endPart === 'Present') {
		return [parsePart(startPart), 'present'];
	}

	// Default case, parse both start and end parts
	return [parsePart(startPart), parsePart(endPart)];
}

// Example usage:
// console.log(parseDateRange("Apr '23 - Jun '23")); // ["2023/04", "2023/06"]
// console.log(parseDateRange("Aug '23 - Present")); // ["2023/08", "present"]

export function generateStringy(protoItems: ProtoItem[]) {
	let stringy = '';
	for (let i = 0; i < protoItems.length; i++) {
		const date = parseDateRange(protoItems[i].date);
		stringy += 'Position: ' + protoItems[i].position + '\n';
		stringy += protoItems[i].date + '\n';
		stringy += date[0] + '\n';
		stringy += date[1] + `\n`;
		stringy += 'Company: ' + protoItems[i].title + '\n';
		for (let j = 0; j < protoItems[i].points.length; j++) {
			stringy += '- ' + protoItems[i].points[j].replaceAll('<', '').replaceAll('>', '') + '\n';
		}
	}
	return stringy;
}

export function enumerateProtoItemsToItemInstances(protoItems: ProtoItem[]): Item[] {
	return protoItems.map((proto, index) => ({
		points: pointStringsToItemPoints(proto.points),
		location: proto.location,
		position: proto.position,
		title: proto.title,
		date: proto.date,
		repo: proto.repo,
		// website_link: proto.website_link,
		force_hide: proto.force_hide || false,
		order: index // 0-indexed enumeration
	}));
}
let __items: ProtoItem[] = [
	{
		title: 'Distributed Underwater Positioning System',
		location: '',
		position: 'Final Year Design Project',
		date: "Sep '22 - Apr '23",
		repo: 'https://github.com/Oasixer/underwater_PINGuins',
		points: [
			'Awarded <Best Overall Project> out of 52 teams presenting at 2023 U of Waterloo Mechatronics Eng. symposium.',
			'Created positioning system for underwater robots using acoustics, outperforming commercial solutions in tolerance to reflections and obstructions, achieving 85 meter range with 98% accuracy.',
			'Responsible for a <Rust> Server exchanging high bandwidth data with each node and delivering the UI (app).',
			'Architected firmware (<C++> on ARM M7), implementing positioning, autocalibration, and fault-tolerant networking',
			'Enabled realtime freq. analysis, via <sliding window Fast Fourier Transform> at 2μs intervals, processing 20MB/s of acoustic samples.'
		]
	},
	{
		title: 'Packet Panic',
		location: '',
		position: 'Networking Project',
		date: "Oct '23",
		repo: 'https://github.com/Oasixer/packet-panic',
		points: [
			'High performance <Go> network proxy that emulates bad network conditions to verify the fault-tolerance of distributed systems in adverse conditions.',
			'<TUN> (kernel virtual interface) is used to transparently and bidirectionally intercept <15+ Gb/s> of <layer 3 packets>.',
			'<Coroutines> are dispatched to handle requests <concurrently>, apply packet loss/corruption/delay, fwd to dest.'
		]
	}
];

export function getItems(): Item[] {
	let _items: Item[] = enumerateProtoItemsToItemInstances(__items);
	return _items;
}

import { writable } from 'svelte/store';

// export const topic_colours = {
	// ''
// }

export const colour = //writable(
{
	'lightred': '#F27E7E', // arp:hw_addr_type
	'red': '#EE5B5B',
	'darkred': '#A42D2D'
	'lightmaroon': '#AF5968',
	'maroon': '#82354b',
	'lightblue': '#74abbe', // preamble
	'tealblue': '#4d7989',
	'blue': '#3a606e',
	'darkblue': '#264653',
	'lightgreen': '#a3c299',
	'green': '#81AD91',
	'darkgreen': '#5e9788',
	'yellow': '#e9c46a',
	'darkyellow': '#9e8340', // src (src MAC)
	'orange': '#f4a261',
	'darkorange': '#E98F45' // target (target MAC)// 
	'lightpink': '#f9ada0', // arp: protocol_addr_type
	'pink': '#ff66ee',
	'lightpurple': '#dd88ff',
	'purple': '#795892',
	'darkpurple': '#5D4370',
	'lightgrey': 'todo', // preamble
	'grey': 'todo'
};

// src: 
//
export const field_groups: {
	'ethernet': 'lightblue'
	'src': 'darkyellow',
	'target': 'darkorange',
	'protocol': 'red',
	'group': 'stub_or_placeholder',
	'arp': 'maroon'
}

export const field_colours:{
	'ethernet': {
		'ethernet': 'group:ethernet'
		'preamble': 'group:stub_or_placeholder',
		'target_mac': 'group:target',
		'src_mac': 'group:src',
		'ether_type': 'group:protocol',
		'payload': 'group:stub_or_placeholder',
	}
	'arp': {
		'arp': 'group:arp',
		'hw_addr_type': 'group:stub_or_placeholder',
		'protocol_addr_type': 'group:stub_or_placeholder',
		'src_hw_addr': 'group:src',
		'src_protocol_addr': 'group:src',
		'target_hw_addr': 'group:target',
		'target_protocol_addr': 'group:target',
	}
}

//darkblue:
//ICMP, ICMP type

// hc = highlight colour (toggle)
export const hc_local_lightblue = writable(true);

export const hostA_lightblue = writable(true);


export const cmap = {
}


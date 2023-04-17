import { writable } from 'svelte/store';

export interface VP {
	width: number;
	height: number;
	layout: string; // 'mobile', 'md', 'lg'
}

export const vp = writable({ width: 0, height: 0, layout: 'md' } as VP);
// export const vp_height = writable(0);
// export const layout = writable('med');
// export const vp_height = writable(0);

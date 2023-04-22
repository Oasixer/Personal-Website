import { writable } from 'svelte/store';

export interface VP {
	width: number;
	height: number;
	layout: number; // 'mobile', 'md', 'lg'
}

export const LAYOUT = {
	xxs: 0,
	xs: 1,
	sm: 2,
	md: 3,
	lg: 4
	// xl: 5
};

export const MENUBAR_HEIGHT = 40;

export const vp = writable({ width: 0, height: 0, layout: 0 } as VP);
// export const vp_height = writable(0);
// export const layout = writable('med');
// export const vp_height = writable(0);
export const purpleMode = writable(true);

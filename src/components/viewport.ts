import { writable } from 'svelte/store';

export interface VP {
	width: number;
	height: number;
	layout: number; // 'mobile', 'md', 'lg'
}

export const LAYOUT = {
	xs: 0,
	sm: 1,
	md: 2,
	lg: 3
	// xl: 5
};

export const LAYOUT_MIN_THRESH = {
	xs: 0,
	sm: 475,
	md: 1175,
	lg: 1400
	// xl: 5
};

export const MENUBAR_HEIGHT = 40;

export const vp = writable({ width: 0, height: 0, layout: 0 } as VP);
// export const vp_height = writable(0);
// export const layout = writable('med');
// export const vp_height = writable(0);
export const purpleMode = writable(false);

export const goToPortfolio = writable(() => {});
export const choosePortfolioProj = writable((string) => {});

import { writable } from 'svelte/store';
import type { VP } from '../viewport';

const null_img_src = './images/null.jpg';

export interface Link {
	display: string;
	target: string;
}

export interface PortfolioState {
	active: bool;
	proj_idx: number;
	expand_all: bool;
	force_expand_all: bool;
	filter_fn: FilterFn;
	readonly n_projects: number;
	shouldColorKeywords: boolean;
}

export interface MediaSource {
	filename: string;
	is_video: boolean;
}

export function parse_media_source(input: string, base_dir: string): MediaSource {
	if (input === undefined || base_dir == undefined) {
		console.log(
			`Error: bad argument to parse_media_source from input: ${input} or base_dir: ${base_dir}`
		);
		return {
			filename: 'ERROR',
			is_video: false
		};
	}
	const isVideo = input.startsWith('video{');
	const filename = isVideo ? input.match(/^{(.*?)}/)?.[1] + '/vid.mp4' : input + '/full.jpg';

	if (filename !== undefined) {
		return {
			filename: base_dir + filename,
			is_video: isVideo
		};
	} else {
		return { filename: null_img_src, is_video: false }; // Invalid input
	}
}

export interface LanguageInfo {
	readonly name: string;
	readonly color: string;
	readonly sizeMod: number;
}

export const LANGUAGES: Record<string, LanguageInfo> = {
	lua: {
		id: 'lua',
		name: 'Lua',
		color: '#6b6bf9',
		sizeMod: 1
	},
	rust: {
		id: 'rust',
		name: 'Rust',
		color: '#87573e',
		sizeMod: 1
	},
	svelte: {
		id: 'svelte',
		name: 'SvelteJS',
		color: '#ff3e00',
		sizeMod: 1
	},
	c: {
		id: 'c',
		name: 'C',
		color: '#659ad2',
		sizeMod: 1
	},
	cpp: {
		id: 'cpp',
		name: 'C++',
		color: '#659ad2',
		sizeMod: 1
	},
	go: {
		id: 'go',
		name: 'Golang',
		color: '#00aad5',
		sizeMod: 1
	},
	ts: {
		id: 'ts',
		name: 'Typescript',
		color: '#3178c6',
		sizeMod: 1
	},
	js: {
		id: 'js',
		name: 'JS',
		color: '#f6e13b',
		sizeMod: 1
	},
	python: {
		id: 'python',
		name: 'Python',
		color: '#ffe05b',
		sizeMod: 1
	},
	flask: {
		id: 'flask',
		name: 'Flask',
		color: '#ffffff',
		sizeMod: 1
	},
	graphql: {
		id: 'graphql',
		name: 'GraphQL',
		color: '#e633a7',
		sizeMod: 1
	},
	docker: {
		id: 'docker',
		name: 'Docker',
		color: '#2b91ea',
		sizeMod: 1
	},
	protobuf: {
		id: 'protobuf',
		name: 'Protobuf',
		color: '#ffffff',
		sizeMod: 1
	},
	nvim: {
		id: 'nvim',
		name: 'Neovim',
		color: '#69a746',
		sizeMod: 1
	}
};

export interface FilterFn {
	(langs: string[], lang: string): boolean;
}

// directory structure:
// static/
//   images/
//     portfolio/
//       dir_property_for_this_proj/
//         thumb.jpg <-- use this for thumb for project
//         image_name_1/
//           thumb.jpg
//           full.jpg
//         image_name_2/
//           thumb.jpg
//           full.jpg
//       other_proj/
//         thumb.jpg
//         ...
export interface ProjMeta {
	readonly name: string;
	readonly dir: string; // dir name eg. dir_property_for_this_proj(above)
	images: ReadonlyArray<string>; // array of images eg. image_name_1
	languages: ReadonlyArray<LanguageInfo>; // array of languages, ie. rust, python, etc.
	project_desc: ReadonlyArray<string>; // array of paragraphs
	contributions: ReadonlyArray<string>; // array of paragraphs for my contributions
	links: ReadonlyArray<string>; // urls, ie. github, youtube, or <demo button> ig
	readonly idx: number; // urls, ie. github, youtube, or <demo button> ig
	selected_img: number;
	hovered: boolean;
	leftColWidthFactor: number;
	mobile: boolean;
}

// export function getGithubLink(proj: ProjMeta): string | undefined {
// 	return proj.links.find((link) => link.startsWith('https://github'));
// }

// export interface ProjCard {
// 	export const THUMB_ASPECT_RATIO = 5 / 3;
// 	export const THUMB_LABEL_HEIGHT = 50;
// 	export const THUMB_WIDTH = 350;
// 	export const THUMB_HEIGHT = Math.floor(THUMB_WIDTH / THUMB_ASPECT_RATIO);
// 	export const FULL_WIDTH = 650;
// 	export const FULL_HEIGHT = Math.floor(FULL_WIDTH / THUMB_ASPECT_RATIO);
// 	export const FULL_IMG_NEXTARROW_TINT_WIDTH = 50;
// 	export const ICON_STACK_WIDTH = 150;
// 	export const SEP = 20;
// 	export const IMAGES_BASE_DIR = './images/portfolio/';
// }

namespace ProjImgConst {
	export let THUMB_ASPECT_RATIO = 5 / 3;
	export let THUMB_LABEL_HEIGHT = 50;
	export let THUMB_WIDTH = 300;
	export let ICON_STACK_WIDTH = 170;
	export let THUMB_HEIGHT = Math.floor(THUMB_WIDTH / THUMB_ASPECT_RATIO);
	export let FULL_HEIGHT = Math.floor(FULL_WIDTH / THUMB_ASPECT_RATIO);
	export let FULL_IMG_NEXTARROW_TINT_WIDTH = 50;
	export let SEP = 25;
	export let IMAGES_BASE_DIR = './images/portfolio/';

	export let CARD_PAD = 18;
	export let CARD_WIDTH_MED = 800;
	export let CARD_CONTENT_WIDTH_MED = CARD_WIDTH_MED - CARD_PAD * 2;
	// export let CARD_WIDTH_MOBILE = 450;

	export let FULL_WIDTH = 650;

	export let CARD_WIDTH_XS = 300;
	export let CARD_CONTENT_WIDTH_XS = CARD_WIDTH_XS - CARD_PAD * 2;
	export let FULL_WIDTH_XS = CARD_CONTENT_WIDTH_XS;
}

export default ProjImgConst;

export interface Sizes {
	full_width: number;
	full_height: number;
	pcard_width: number;
	pcard_content_width: number;
	text_col_width: number;
}

export const sz_xs_scale_to_vp = (_vp: VP): Sizes => {
	let pcard_width = _vp.width;
	let pcard_content_width = pcard_width - ProjImgConst.CARD_PAD * 2;
	return {
		pcard_width,
		pcard_content_width,
		full_width: pcard_content_width,
		full_height: pcard_content_width / ProjImgConst.THUMB_ASPECT_RATIO,
		text_col_width: pcard_content_width
	} as Sizes;
};

// XS = less than 639 px. So lets keep CARD_PAD at 18px, and have card_width at 600px;
export const SZ_XS = {
	full_width: ProjImgConst.CARD_WIDTH_XS - ProjImgConst.CARD_PAD * 2,
	full_height:
		(ProjImgConst.CARD_WIDTH_XS - ProjImgConst.CARD_PAD * 2) / ProjImgConst.THUMB_ASPECT_RATIO,
	pcard_width: ProjImgConst.CARD_WIDTH_XS,
	pcard_content_width: ProjImgConst.CARD_CONTENT_WIDTH_XS,
	text_col_width: ProjImgConst.CARD_CONTENT_WIDTH_XS,
	mobile: true
} as Sizes;

export const SZ_MED = {
	full_width:
		ProjImgConst.CARD_WIDTH_MED -
		ProjImgConst.ICON_STACK_WIDTH -
		ProjImgConst.SEP -
		1 -
		ProjImgConst.CARD_PAD * 2,
	full_height:
		(ProjImgConst.CARD_WIDTH_MED -
			ProjImgConst.ICON_STACK_WIDTH -
			ProjImgConst.SEP -
			1 -
			ProjImgConst.CARD_PAD * 2) /
		ProjImgConst.THUMB_ASPECT_RATIO,
	pcard_width: ProjImgConst.CARD_WIDTH_MED,
	pcard_content_width: ProjImgConst.CARD_CONTENT_WIDTH_MED,
	text_col_width: (ProjImgConst.CARD_CONTENT_WIDTH_MED - ProjImgConst.SEP - 1) / 2,
	mobile: false
} as Sizes;

export const highlight_hjkl = writable({ h: false, j: false, k: false, l: false });
export const sz = writable(SZ_XS);
export const show_pinguins_modal = writable(false);

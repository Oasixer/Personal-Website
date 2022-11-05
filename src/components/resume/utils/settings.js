import { writable } from 'svelte/store';

export let TagNames = {
  PCB: 'PCB Design',
  PLC: 'PLC Programming',
  SOLDERING: 'Soldering',
  WIRING: 'Wiring',
  CIRCUITS: 'Circuit Design',
  FRONTEND: 'Frontend web development',
  BACKEND: 'Backend',
  CONTROL_SYSTEMS: 'Control systems',
  PYTHON: 'Python',
  CPP: 'C++',
  DATA_ANALYSIS: 'Data Analysis',
  NLP: 'NLP',
  ARDUINO: 'Arduino',
  UI: 'UI Design',
  MACHINE_LEARNING: 'Machine Learning',
  ROS: 'ROS',
  OPENCV: 'OpenCV',
  SPACY: 'SpaCy',
  SVELTE: 'SvelteJS',
  FLASK: 'Flask',
  DATA_VISUALIZATION: 'Data Visualization',
  SQL: 'SQL',
  POSTGRESQL: 'PostgreSQL',
  MYSQL: 'MySQL',
  ORACLEDB: 'OracleDB',
  SCSS: 'SASS/SCSS',
  CSS_SLASH_SCSS: 'HTML+CSS',
  REGEX: 'Regex',
  CSS: 'CSS',
  HTML: 'HTML',
  JS: 'JS',
  PYQT: 'PyQT',
  SELENIUM: 'Selenium',
  PANDAS: 'Pandas',
  MATPLOTLIB: 'Matplotlib',
  PLOTLY: 'Plotly Dash',
  TABLEAU: 'Tableau',
  NLTK: 'NLTK',
  QT: 'QT',
  PYQT: 'PyQT',
  REACT: 'ReactJS',
  KOTLIN: 'Kotlin',
  LATEX: 'Latex',
  BASH: "Bash",
  ZSH: "Zsh",
  GIT: "Git",
  AWS: "AWS",
  C: "C",
  DOCKER: "Docker",
  SQLALCHEMY: "SQLAlchemy",
  D3: "D3.js",
  DYNAMODB: 'Amazon DynamoDB',
  JQUERY: 'JQuery',
  GCLOUD: 'GCP',
  APPENGINE: 'AppEngine',
  CLOUD_RUN: 'Cloud Run',
  COMPUTE_ENGINE: 'Compute Engine',
  CLOUD_SQL: 'Cloud SQL',
  PROTOBUF: 'Protobuf',
  LUA: 'Lua',
  EXPRESSJS: 'ExpressJS',
  EMBEDDED: 'Embedded',
  SEQUELIZE: 'Sequelize',
  MONGODB: 'MongoDB',
  VIMSCRIPT: 'Vimscript',
  VIM: 'Vim',
  ARCH: 'Arch',
  UBUNTU: 'Ubuntu',
  LINUX: 'Linux',
  DEBIAN: 'Debian',
  WSL: 'Windows Subsystem for Linux',
  GRAPHQL: 'GraphQL',
  GRAFANA: 'Grafana',
  PROFICIENT: 'Proficient:',
  FAMILIAR: 'Familiar:',
  MEME: 'Meme:',
  SWAGGER: 'Swagger',
  ASSEMBLY: 'x86',
  GOLANG: 'Golang',
	KUBERNETES: 'Kubernetes',
	TCPIP: 'TCP/IP',
	TYPESCRIPT: 'Typescript',
	MATLAB: 'MATLAB',
	JWT: 'JWT',
	JAVA: 'Java',
	NGINX: 'Nginx',
	SPRING: 'Spring Boot',
	REDIS: 'Redis',
	REST: 'REST',
	KAFKA: 'Kafka',
	AWK: 'Awk'
}

// For tags that are more categories than specific
// which are useful for organization, but a little unnecesary to list under each position
export let TagCategoryNames = [
  // NLP, MACHINE_LEARNING, CONTROL_SYSTEMS could go here
  // but I kinda like them
  TagNames.DATA_ANALYSIS,
  TagNames.UI,
  TagNames.BACKEND,
  TagNames.FRONTEND,
  TagNames.DATA_VISUALIZATION,
  TagNames.NLP,
];


let defaultOrders = {
  WORKEXPERIENCE: 2,
  SIDEPROJECTS: 4,
  SKILLS: 6,
  EDUCATION: 8,
  AWARDS: 10,
  INTERESTS: 12
}

export const disable_interests_section = writable(false);
export const show_project_locations = writable(true);
export const show_project_positions = writable(false);
export const show_project_dates = writable(false);

export const limit_resume_height = writable(false);

export const swap_columns = writable(false);
export const single_column = writable(true);

export const force_use_all_employment = writable(true);
export const show_tags_under_experience = writable(false);
export const disable_categorical_tags = writable(true);

export const alternate_skills_display_mode = writable(false);

export const top_align_sections = writable(true);

export const tags = writable(Object.values(TagNames));

export const orders = writable(defaultOrders);

export const display_mode = writable(false); // if true, dont show modal button

export const education_awards_interests_font_size = writable("14");
export const experience_content_font_size = writable("14");
export const skills_headings_font_size = writable("15");
export const skills_content_font_size = writable("15");
export const skills_content_bottom_margin = writable("7");
export const section_content_top_margin = writable("0");
export const section_bottom_margin = writable("10");
export const show_section_header_line = writable(false);
export const section_headings_font_size = writable("20");
export const top_name_font_size = writable("3");

export const force_display_skills_ignore_tags = writable(false);
export const compact_exp_info = writable(false);

export const top_name_top_margin = writable("10");
export const top_name_bottom_margin = writable("15");
export const top_header_bottom_margin = writable("7");

export const disable_settings_button = writable(true); // for printing / exporting to pdf

export const show_11in_line = writable(true); // for printing / exporting to pdf

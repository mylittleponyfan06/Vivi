const default_theme = "classic.css";
const href_for = (theme) => `styles/themes/${theme}`;
let current_theme = default_theme;

const theme_link = document.createElement("link");
theme_link.rel = "stylesheet";
theme_link.href = href_for(current_theme);
theme_link.id = "theme-link";
document.head.appendChild(theme_link);

const get_theme = () => current_theme;
const set_theme = () => {
	current_theme = default_theme;
	theme_link.href = href_for(current_theme);
	$(window).triggerHandler("theme-load");
};

export { get_theme, set_theme };

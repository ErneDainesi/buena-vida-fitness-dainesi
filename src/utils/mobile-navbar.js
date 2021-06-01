
const navMenu = document.querySelector("#mobile-menu");
const navLinks = document.querySelector("#mobile-menu-links");

navMenu.addEventListener("click", (e) => {
	if (e.target.id === navMenu.id) {
		if (nav.classList.contains("showMenu")) {
			navLinks.classList.remove("showMenu");
		} else {
			navLinks.classList.add("showMenu");
		}
	}
});

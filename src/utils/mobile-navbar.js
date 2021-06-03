
// WIP
// Con esta funcion lo que haría es que se despliegue el menu hamburgues cuando se
// hace click en el. Como todavia no aprendimos bien a como utilizar utils en react
// no supe bien como integrarlo, entonces por el momento lo dejo asi
const navMenu = document.querySelector("#mobile-menu");
const navLinks = document.querySelector("#mobile-menu-links");

navMenu.addEventListener("click", (e) => {
	if (e.target.id === navMenu.id) {
		if (navLinks.classList.contains("showMenu")) {
			navLinks.classList.remove("showMenu");
		} else {
			navLinks.classList.add("showMenu");
		}
	}
});

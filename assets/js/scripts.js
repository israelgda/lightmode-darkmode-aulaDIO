function toggleMode(){
	changeClasses();
	changeTexts();
}

function changeClasses(){
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}

function changeTexts(){
	const lightMode = "Light Mode";
	const darkMode = "Dark Mode";

	if(body.classList.contains(darkModeClass)){
		button.innerHTML = lightMode;
		h1.innerHTML = darkMode + " ON";
		return;

	}else{
		button.innerHTML = darkMode;
		h1.innerHTML = lightMode + " ON";
	}

	
}

//Elementos a manipular
const darkModeClass = "dark-mode"
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', toggleMode)
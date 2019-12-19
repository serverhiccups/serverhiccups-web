// Only play the slideup animation once
window.addEventListener('load', () => {
	let animationPlayed = localStorage.getItem('animationPlayed');
	let coverElement = document.getElementById("main-cover");
	if(animationPlayed != 'true') {
		coverElement.style.animationDuration = "3s";
		coverElement.style.animationName = "slideup";
		coverElement.style.animationPlayState = "running";
		localStorage.setItem('animationPlayed', 'true');
	}
});
const expandTopNavBtn = document.getElementById("expand-top-nav");
if (expandTopNavBtn){
	expandTopNavBtn.addEventListener("click", e => {
		e.preventDefault();
		const nav = document.querySelector("#expand-top-nav + nav");
		setTimeout(function(){
			nav.classList.toggle("show");
		});
	});
}
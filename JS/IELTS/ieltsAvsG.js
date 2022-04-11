document.getElementById('button').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});

document.querySelector('.subClose').addEventListener("click", function() {
	document.querySelector('.after-submitting').style.display="none";
});

document.getElementById("formSubmit").addEventListener("click", function(){
	document.querySelector('.bg-modal').style.display = "none";
	document.querySelector('.after-submitting').style.display="flex";
});


document.getElementById('button').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
	document.querySelector('#name').value='';
	document.querySelector('#email').value='';
});

document.querySelector('.subClose').addEventListener("click", function() {
	document.querySelector('.after-submitting').style.display="none";
});

document.getElementById("formSubmit").addEventListener("click", function(){

	let name= document.querySelector('#name');
	let namePattern=/^[a-zA-z]{3,30}$/;
	let email=document.querySelector('#email');
	let emailPattern=/^\S+@\S+\.\S+$/;

	if(name.value==''){
		document.querySelector('#name').placeholder='Please enter name';
		name.classList.add('nameValidation');
	}
	else if(!namePattern.test(name.value)){
		document.querySelector('#name').value='';
		document.querySelector('#name').placeholder='Please enter valid name';
		name.classList.add('nameValidation');
	}
	else if(email.value==''){
		document.querySelector('#email').placeholder='Please enter email';
		email.classList.add('emailValidation');
		name.classList.remove('nameValidation');
	}
	else if(!emailPattern.test(email.value)){
		document.querySelector('#email').value='';
		document.querySelector('#email').placeholder='Please enter valid email';
		email.classList.add('emailValidation');
		name.classList.remove('nameValidation');
	}
	else{
		name.classList.remove('nameValidation');
		email.classList.remove('emailValidation');
		document.querySelector('.bg-modal').style.display = "none";
		document.querySelector('.after-submitting').style.display="flex";
		document.querySelector('#name').value='';
		document.querySelector('#email').value='';
	}
});


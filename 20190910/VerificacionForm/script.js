let form = document.getElementById("submit")
form.addEventListener("submit", function(e){
	
	e.preventDefault();

	let msg = "";

	let alrt = document.getElementById("alert");

	let tarjeta = document.getElementById("tarjeta");
	if(validator.isCreditCard(tarjeta.value) === false){
		msg = "<p>Some fields are missing</p>";
		tarjeta.style.backgroundColor += "#f8d7da";
		alrt.classList.remove('alertVisible'); // quitar clase que oculta el alert
	} else {
		msg = "";
		tarjeta.style.backgroundColor = "white";
		alrt.classList.add('alertVisible');
	}

	let codigo = document.getElementById("codigo");
	if(validator.isBIC(codigo.value) === false){
		msg = "<p>Some fields are missing</p>";
		codigo.style.backgroundColor += "#f8d7da";
		alrt.classList.remove('alertVisible'); // quitar clase que oculta el alert
	} else {
		msg = "";
		codigo.style.backgroundColor = "white";
		alrt.classList.add('alertVisible');
	}

	let cantidad = document.getElementById("cantidad");
	if (validator.isCurrency(cantidad.value) === false){
		msg = "<p>Some fields are missing</p>";
		cantidad.style.backgroundColor += "#f8d7da";
		alrt.classList.remove('alertVisible'); // quitar clase que oculta el alert
	} else {
		msg = "";
		cantidad.style.backgroundColor = "white";
		alrt.classList.add('alertVisible');
	}

	let nombre = document.getElementById("nombre");
	if(validator.isAlpha(nombre.value) === false){
		msg = "<p>Some fields are missing</p>";
		nombre.style.backgroundColor += "#f8d7da";
		alrt.classList.remove('alertVisible'); // quitar clase que oculta el alert
	} else {
		msg = "";
		nombre.style.backgroundColor = "white";
		alrt.classList.add('alertVisible');
	}

	let apellido = document.getElementById("apellido");
	if(validator.isAlpha(apellido.value) === false){
		msg = "<p>Some fields are missing</p>";
		apellido.style.backgroundColor += "#f8d7da";
		alrt.classList.remove('alertVisible'); // quitar clase que oculta el alert
	} else {
		msg = "";
		apellido.style.backgroundColor = "white";
		alrt.classList.add('alertVisible');
	}

	let ciudad = document.getElementById("ciudad");
	if(validator.isAlpha(ciudad.value) === false){
		msg = "<p>Some fields are missing</p>";
		ciudad.style.backgroundColor += "#f8d7da";
		alrt.classList.remove('alertVisible'); // quitar clase que oculta el alert
	} else {
		msg = "";
		ciudad.style.backgroundColor = "white";
		alrt.classList.add('alertVisible');
	}

	let estado = document.getElementById("estado");
	if(validator.isAlpha(estado.value) === false){
		msg = "<p>Some fields are missing</p>";
		estado.style.backgroundColor += "#f8d7da";
		alrt.classList.remove('alertVisible'); // quitar clase que oculta el alert
	} else {
		msg = "";
		estado.style.backgroundColor = "white";
		alrt.classList.add('alertVisible');
	}

	let zip = document.getElementById("zip");
	if(validator.isPostalCode(zip.value,'any') === false){
		msg = "<p>Some fields are missing</p>";
		zip.style.backgroundColor +="#f8d7da";;
		alrt.classList.remove('alertVisible'); // quitar clase que oculta el alert
	} else {
		msg = "";
		zip.style.backgroundColor = "white";
		alrt.classList.add('alertVisible');
	}

	let mensaje = document.getElementById("mensaje");
	if(validator.isAlpha(mensaje.value) === false){
		msg = "<p>Some fields are missing</p>";
		mensaje.style.backgroundColor +="#f8d7da";;
		alrt.classList.remove('alertVisible'); // quitar clase que oculta el alert
	} else {
		msg = "";
		mensaje.style.backgroundColor = "white";
		alrt.classList.add('alertVisible');
	}

	if(msg != ""){
		alrt.innerHTML = msg;
	}else{
		e.target.submit();
	}

});




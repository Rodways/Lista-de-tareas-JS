///declaracion de las variables
const input = document.querySelector('input');
const botonAgregar = document.querySelector('.boton-agregar');
const ul = document.querySelector('ul');
const noTareas = document.querySelector('.vacio');
const botonEliminarTodo = document.querySelector('.boton-eliminar-todo');


///funcion del boton eliminar
function addBotonEliminar(){
	const botonEliminar = document.createElement("button");

	botonEliminar.textContent = "X";///pone la X
	botonEliminar.className = "boton-eliminar";//añade una clase al nuevo objeto
	
	botonEliminar.addEventListener("click", (e) =>{
	  const item = e.target.parentElement;
	  ul.removeChild(item);

		const numTareas = document.querySelectorAll("li");

		if(numTareas.length ===0){
			noTareas.style.display = "block";
		}

	});

	return botonEliminar;

}

///main
botonAgregar.addEventListener("click", (e) => {
	
	e.preventDefault();//previene el refresh de la pagina
  
	const text = input.value;///agregamos el contenido del text en html a la variable text
  
	 if(text !==""){
		const li = document.createElement("li");
		const p = document.createElement("p");
		p.textContent = text;
	
		li.appendChild(p);///añade el parrrafo
		li.appendChild(addBotonEliminar());///añade la funcion del boton eliminar
		ul.appendChild(li);///añade el ul al li
  
		input.value = "";//pongo en blanco el txt
		noTareas.style.display ="none";

	 }
  });

  

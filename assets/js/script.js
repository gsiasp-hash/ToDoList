const nuevaTarea = document.getElementById("nuevaTarea");
const agregarTarea = document.querySelector(".agregarTarea");
const listaTareas = document.querySelector(".listaDeTareas");
const totalTareas = document.querySelector(".totalTareas");
const tareasRealizadas = document.querySelector(".tareasRealizadas");
const listaDeTareas = document.querySelector(".listaDeTareas");

const tareas = ["Revisar correos", "Hacer ejercicio", "Comprar alimentos"];

function mostrarTareas() {
  listaDeTareas.innerHTML = "";
  tareas.forEach((tarea, index) => {
    const lista = `<li><span class="idTarea">${index + 1} </span> <span class="tarea">${tarea}</span> <input type="checkbox" name="" class="tareaRealizada" id="${index}" /><i class="fa-solid fa-x eliminarTarea" id="${index}"></i></li>`;
    listaDeTareas.innerHTML += lista;
  });
  totalTareas.textContent = ` ${tareas.length}`;
}

agregarTarea.addEventListener("click", agregarNuevaTareas);
function agregarNuevaTareas() {
  const tarea = nuevaTarea.value;
  if (tarea) {
    tareas.push(tarea);
    nuevaTarea.value = "";
    mostrarTareas();
  }
}

mostrarTareas();

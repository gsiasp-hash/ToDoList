const nuevaTarea = document.getElementById("nuevaTarea");
const agregarTarea = document.querySelector(".agregarTarea");
const listaTareas = document.querySelector(".listaDeTareas");
const totalTareas = document.querySelector(".totalTareas");
const tareasRealizadas = document.querySelector(".tareasRealizadas");
const listaDeTareas = document.querySelector(".listaDeTareas");

const tareas = ["Revisar correos", "Hacer ejercicio", "Comprar alimentos"];

function mostrarTareas() {
  listaDeTareas.innerHTML = "";
  tareas.forEach((tarea) => {
    const lista = `<li>${tarea}</li>`;
    listaDeTareas.innerHTML += lista;
  });
  totalTareas.textContent = `Total de tareas: ${tareas.length}`;
}

mostrarTareas();

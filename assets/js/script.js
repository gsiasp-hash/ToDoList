const nuevaTarea = document.getElementById("nuevaTarea");
const agregarTarea = document.querySelector(".agregarTarea");
const listaTareas = document.querySelector(".listaDeTareas");
const totalTareas = document.querySelector(".totalTareas");
const tareasRealizadas = document.querySelector(".tareasRealizadas");
const listaDeTareas = document.querySelector(".listaDeTareas");
const eliminarTarea = document.querySelector(".eliminarTarea");

const tareas = [
  { id: 1, tarea: "Hacer la compra", estado: false },
  { id: 2, tarea: "Lavar el coche", estado: false },
  { id: 3, tarea: "Pagar las facturas", estado: false },
];

//creando una nueva tarea
const crearTarea = (name) => {
  const ultimatarea = tareas[tareas.length - 1];
  return {
    id: ultimatarea ? ultimatarea.id + 1 : 1,
    tarea: name,
    estado: false,
  };
};

//agregando una nueva tarea al arreglo de tareas
const addTarea = () => {
  nombreTarea = nuevaTarea.value.trim();
  const tarea = crearTarea(nombreTarea);
  tareas.push(tarea);
  nuevaTarea.value = "";
  mostrarTareas();
};

//cambiando el estado de la tarea
const cambiarEstado = (id) => {
  const tareaRealizada = tareas.find((tarea) => tarea.id === id);
  tareaRealizada.estado = !tareaRealizada.estado;
  mostrarTareas();
};

//eliminando una tarea, la variable index va a buscar el id de la tarea
const borrarTarea = (id) => {
  const index = tareas.findIndex((tarea) => tarea.id === id);
  tareas.splice(index, 1);
  if (index === -1) {
    return;
  }
  mostrarTareas();
};

//contador de tareas realizadas
const contadorTareasRealizadas = () => {
  const tareaRealizada = tareas.filter((tarea) => tarea.estado === true);
  tareasRealizadas.textContent = ` ${tareaRealizada.length}`;
};

function mostrarTareas() {
  listaDeTareas.innerHTML = "";
  tareas.forEach((tarea) => {
    const lista = `<li><span>${tarea.id} </span> <span class=${tarea.estado ? "tareaLista" : ""}>${tarea.tarea}</span> <input type="checkbox" name="" class="tareaRealizada" id="${tarea.id}" ${tarea.estado ? "checked" : ""} /><i class="fa-solid fa-x eliminarTarea"></i></li>`;
    listaDeTareas.innerHTML += lista;
  });
  totalTareas.textContent = ` ${tareas.length}`;
  contadorTareasRealizadas();
}
const tareaRealizada = document.querySelectorAll(".tareaRealizada");

agregarTarea.addEventListener("click", addTarea);

listaDeTareas.addEventListener('change', (e) => {
  if (e.target.classList.contains('tareaRealizada')) {
    cambiarEstado(parseInt(e.target.id));
  }
});

listaDeTareas.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminarTarea')) {
    const id = parseInt(e.target.previousElementSibling.id);
    borrarTarea(id);
  }
});

mostrarTareas();

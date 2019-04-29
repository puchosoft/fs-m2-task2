// Agrega listeners que atiendan los cambios de los checkboxes
var query = document.querySelectorAll('input[name=party]');
query.forEach(input => input.onchange = filtraYMuestraTabla);

function filtraYMuestraTabla(){
  // Lee los checkboxes seleccionados del "Filter by Party"
  var query = document.querySelectorAll('input[name=party]:checked');

  // Crea un array con los valores de los checkboxes seleccionados
  var partidoSeleccionado = Array.from(query).map(element => element.value)

  // Crea un array con los miembros de la camara
  var miembros = data.results[0].members;

  // Funcion de filtrado de miembros segun partidos seleccionados
  var partyFilter = miembro => {
    if(partidoSeleccionado.indexOf(miembro.party) > -1){
      return miembro;
    }
  }

  // Reduce el array de miembros dejando los seleccionados por el filtro
  miembros = miembros.filter(partyFilter);

  // Muestra la tabla
  setTable(miembros);
}

filtraYMuestraTabla();

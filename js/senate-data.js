var numMiembros = data.results[0].num_results;
var miembros = data.results[0].members;

var parent = document.getElementById('senate-data'); //Toma como elemento padre a una tabla

// Comienzo del proceso del <thead>
var thead = document.createElement("thead");
var trHead = document.createElement("tr");
var thText=["Name","Party","State","Years in Office","% Votes w/ Party"];

for(var i = 0; i<thText.length; i++){
  var th = document.createElement("th");
  th.innerText = thText[i];
  trHead.appendChild(th);
}
thead.appendChild(trHead);
parent.appendChild(thead);
// Fin del proceso del <thead>

// Comienzo del proceso del <tbody>
var tbody = document.createElement("tbody");

// Comienzo del recorrido del array de senadores
for(var i=0; i < numMiembros; i++){
  var tr = document.createElement("tr");
  var fullName = miembros[i].first_name;
  if(miembros[i].middle_name){
    fullName += " " + miembros[i].middle_name;
  }
  fullName += " " + miembros[i].last_name;
  
  var a = document.createElement("a");
  a.href = miembros[i].url;
  a.innerText = fullName;
  
  var tdName = document.createElement("td");
  tdName.appendChild(a);
  
  var tdParty = document.createElement("td");
  tdParty.innerText = miembros[i].party;
  var tdState = document.createElement("td");
  tdState.innerText = miembros[i].state;
  var tdSeniority = document.createElement("td");
  tdSeniority.innerText = miembros[i].seniority;
  var tdVotes_with_party_pct = document.createElement("td");
  tdVotes_with_party_pct.innerText = miembros[i].votes_with_party_pct + "%";
  
  tr.appendChild(tdName);
  tr.appendChild(tdParty);
  tr.appendChild(tdState);
  tr.appendChild(tdSeniority);
  tr.appendChild(tdVotes_with_party_pct);
  
  tbody.appendChild(tr);
  
}
parent.appendChild(tbody);
// Fin del proceso del <tbody>

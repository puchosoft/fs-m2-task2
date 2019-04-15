// document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);

var numMiembros = data.results[0].num_results;
var miembros = data.results[0].members;

var parent = document.getElementById('senate-data');
var thead = document.createElement("thead");
var trHead = document.createElement("tr");
var thText=["Senator","Party","State","Seniority","% Party Votes"];
var th = document.createElement("th");

for(var i=0; i<thText.length; i++){
  console.log(thText[i]);
  th.innerText = thText[i];
  trHead.appendChild(th);
}
thead.appendChild(trHead);
parent.appendChild(thead);

var tbody = document.createElement("tbody");

for(var i=0; i < numMiembros; i++){
  var tr = document.createElement("tr");
  var fullName = miembros[i].first_name;
  if(miembros[i].middle_name){
    fullName += " " + miembros[i].middle_name;
  }
  fullName += " " + miembros[i].last_name;
  
  var tdName = document.createElement("td");
  tdName.innerText = fullName;
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
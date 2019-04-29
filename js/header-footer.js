// **************************************************************
// Agrega una cabecera a un contenedor <header> con id="cabecera"
// **************************************************************

var cabecera = document.getElementById("cabecera");

cabecera.innerHTML = '\
<div class="row align-items-center">\
  <div class="col-md-1">\
    <img src="img/tgif-logo.jpg" class="img-fluid rounded-circle" alt="tgif-logo">\
  </div>\
  <div class="col-md-9 text-center">\
    <h2>Transparent Government in Fact</h2>\
  </div>\
  <div class="col-md-2 text-right">\
    <span class="fa fa-envelope"></span>\
    <a href="mailto:info@tgif.net">info@tgif.net</a>\
  </div>\
</div>\
';

// ***************************************************
// Agrega un pie a un contenedor <footer> con id="pie"
// ***************************************************

var pie = document.getElementById("pie");
pie.innerHTML = '\
<div class="footer-copyright text-center align-items-center border border-secondary rounded">\
  <h5 class="my-1">©2019 TGIF | All Rights Reserved</h5>\
</div>\
';
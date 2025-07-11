document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("mensagemEnviada").style.display = "block";
  this.reset();
});
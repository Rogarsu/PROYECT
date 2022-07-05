var boton= document.getElementById('enviar');
var data=[];
boton.addEventListener("click", agregar);
function agregar(){
var Code= document.getElementById('cod').value;
var Nombre= document.getElementById('nombre').value;
var Type= document.getElementById('type').value;
var Fechaini = document.getElementById('fecini').value;
var Fechafin = document.getElementById('fecfin').value; 
var Responsable = document.getElementById('responsable').value;
var Presupuesto = parseFloat(document.getElementById('presupuesto').value);
var persona='';

if(document.getElementById('estudiante').checked){
    persona="Estudiante";
}
if(document.getElementById('profesor').checked){
    persona="Profesor";
}
var Semetre = parseFloat(document.getElementById('semestre').value);

console.log(Code);
console.log(Nombre);
console.log(Type);
console.log(Fechaini);
console.log(Fechafin); 
console.log(Responsable);
console.log(Presupuesto);
console.log(persona); 
console.log(Semetre)
}
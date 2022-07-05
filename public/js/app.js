var boton= document.getElementById('enviar');
var lista=document.getElementById('lista');
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

data.push(
    {
        "cod":Code,
        "nom":Nombre,
        "tipo":Type,
        "fstart":Fechaini,
        "fend":Fechafin,
        "Responsable":Responsable,
        "presupuesto":Presupuesto,
        "persona":persona,
        "semestre":Semetre


    }
);
var fila='<tr id = '+ Code +'> <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">'+Code +' </th><td class="px-6 py-4">'+Nombre+'</td><td class="px-6 py-4">'+Responsable+'</td><td class="px-6 py-4">'+Fechaini +'</td><td class="px-6 py-4">'+Fechafin+'</td><td class="px-6 py-4">10</td> <td class="px-0 py-0 block">  <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg></button></tr>';

/* agregar fila */
$("#lista").append(fila);

}
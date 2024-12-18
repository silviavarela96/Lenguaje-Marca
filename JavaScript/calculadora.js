function suma(){
    let n1= parseFloat(document.getElementById('numero1').value); //como es una caja de texto hay que poner .VALUE
    let n2= parseFloat(document.getElementById('numero2').value);
    let resultado = n1+ n2; 
    document.getElementById('resultado').innerHTML = resultado;
}

function resta(){
    let n1= parseFloat(document.getElementById('numero1').value); 
    let n2= parseFloat(document.getElementById('numero2').value);
    let resultado = n1- n2; 
    document.getElementById('resultado').innerHTML = resultado;
}

function multiplica(){
    let n1= parseFloat(document.getElementById('numero1').value); 
    let n2= parseFloat(document.getElementById('numero2').value);
    let resultado = n1 * n2; 
    document.getElementById('resultado').innerHTML = resultado;
}

function divide(){
    let n1= parseFloat(document.getElementById('numero1').value); /*Hay que usar PARSEFLOAT*/
    let n2= parseFloat(document.getElementById('numero2').value);
    let resultado = n1 / n2; 
    document.getElementById('resultado').innerHTML = resultado;
}
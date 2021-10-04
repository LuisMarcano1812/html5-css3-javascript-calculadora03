const solonumeros = e =>{
    let key = e.keyCode 
    let teclado = String.fromCharCode(key);
    let numeros = "0123456789";
    const especiales="8-37-39-46";
    let tecla_especial = false;

    // const i = (especiales) => (especiales[i]==key) ? tecla_especial = true : false

    for(let i in especiales){
        if(key==especiales[i]){
            tecla_especial=true;
        }
    }
    // let numeros = (numeros,teclado) => (teclado==-1 && !tecla_especial) ? alert ("No se permiten letras") : false
    if(numeros.indexOf(teclado)==-1 && !tecla_especial){
        return alert ("No se permiten letras"), false;
    }

}

//para asignar cada valor
const retornar = num => {let anterior=document.fo.valores.value; document.getElementById("valores").value=anterior+num}

//para eliminar ultimo caracter
const eliminar = () => {let anterior=document.fo.valores.value; let nuevovalor=anterior.substring(0,anterior.length-1); 
    document.getElementById("valores").value=nuevovalor}

// para eliminar todo
const eliminar_todo = () => document.fo.valores.value=""

//para  validar los signos
const comprobar = num =>{ 
    let record=0; 
    let igual=1; 
    let letraRecord=""
    let b=0 
    let letra="" 
    let anterior = document.fo.valores.value;
    
    if(anterior==""){
    document.fo.valores.value="";
    }else{    
    let anterior = document.fo.valores.value;
    document.getElementById("valores").value=anterior+num;
    let esto=document.fo.valores.value;
    

    for (a=1;a<esto.length;a++){      
    if (esto.charAt(a)=="+" || esto.charAt(a)=="-" || esto.charAt(a)=="*" || esto.charAt(a)=="/"){ 
    igual=igual+1; 
    letra=esto.charAt(a);
    }else{ 
         if(igual>record){record=igual;letraRecord=letra} 
            igual=1 
         } 
         b=a 
    }
    
    if(igual>record){
      record=igual;
      letraRecord=letra;
    } 

    if (record>2){
        let anterior = esto;
        let nuevovalor = anterior.substring(0, anterior.length-1);
        document.getElementById("valores").value=nuevovalor;
    }     
} 
}

//realizar las operacionesmatematicas
const calcular = () => {let resultado=eval(document.fo.valores.value); (resultado != "Infinity")? document.fo.valores.value=resultado : document.fo.valores.value="No se puede dividir entre cero"}
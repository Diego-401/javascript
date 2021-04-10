function init(){
    var a=document.getElementById("numero1").value;
    var b=document.getElementById("numero2").value;
    var mcm;
    mcm=mayor(a,b);
    document.getElementById("resultado").value="El maximo comun multiplo es:"+comun(mcm,a,b);
}

function mayor(a,b){
    var maximo;
    if(a>b){
        maximo=a;
    }else{
        maximo=b;
    }
    return maximo
}

function comun(mcm,a,b){
    while(mcm%a!==0||mcm%b!==0){
        mcm++
    }
    return mcm
}
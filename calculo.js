function Calcular(){
    
    let idadeCanina = prompt("Qual a idade do cachorrinho?");
    document.getElementById("Resultado").textContent = "Resultado: a idade humana do cachorrinho é " + idadeCanina * 7;
    
    if (idadeCanina * 7 <= 11 ) {
        document.getElementById("fase_da_vida").textContent = "Seu cachorro é: Criança";
        
    }
    if (17 <  idadeCanina * 7 && idadeCanina * 7 <= 29 ) {
        document.getElementById("fase_da_vida").textContent = "Seu cachorro é: Jovem";
       


    }
    if (11 < idadeCanina * 7 &&  idadeCanina * 7 <= 17 ) {
        document.getElementById("fase_da_vida").textContent = "Seu cachorro é: Adolescente";

    }
    if (29 < idadeCanina * 7 &&  idadeCanina * 7 <= 59 ) {
        document.getElementById("fase_da_vida").textContent = "Seu cachorro é: Adulto";

    }
    else{
        document.getElementById("fase_da_vida").textContent = "Seu cachorro é: Idoso";     
        

    }
    //BRO ESTOU PERDIDO NÃO TA FAZENDO SOL, VOCÊ PODE ME AJUDAR A TERMINAR ESSA CALCULADORA PARA MEU FILHO??
    //POR FAVOR BRO TERMINE PARA MIM GANG GANG GANG 777 FERNANDX CLOATHING
}
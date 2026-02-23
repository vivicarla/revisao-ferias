const texto = document.getElementById("texto")
const botao = document.getElementById("botao")
const senha = "nahida1"


botao.addEventListener("click",()=>{
    const cupom = document.getElementById("cupom").value
    if (cupom==senha){
        texto.textContent="você ganhou 10% de desconto em sua compra."
        botao.textContent="resgatado"
    }else{
        texto.textContent="Código inválido"
    }
    
});

const texto = document.getElementById("texto")
const botao = document.getElementById("botao")
const senha = "123"


botao.addEventListener("click",()=>{
    const cupom = document.getElementById("si").value.trim().toUpperCase()
    if (cupom==senha){
        texto.textContent="você ganhou 10% de desconto em sua compra."
        botao.textContent="resgatado"
    }else{
        texto.textContent="Código inválido"
    }
    
});
             
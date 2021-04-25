/**
 * JS - Aula5: Calculadora FLEX
 */

/* alert("teste");*/
var etanol,gasolina;
function calcular() {
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."));
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));
    if (etanol < 0.7 * gasolina) {
        document.getElementById("status").src="Imagens/etanol.png";
    }else{
        document.getElementById("status").src="Imagens/gasolina.png";
    }
}

function resetar() {
    document.getElementById("status").src="Imagens/neutro.png";
}
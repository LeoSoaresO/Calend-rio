function mes(){
    var novoMes = new Array();
    novoMes[0] = "Janeiro";
    novoMes[1] = "Fevereiro";
    novoMes[2] = "Março";
    novoMes[3] = "Abril";
    novoMes[4] = "Maio";
    novoMes[5] = "Junho";
    novoMes[6] = "Julho";
    novoMes[7] = "Agosto";
    novoMes[8] = "Setembro";
    novoMes[9] = "Outubro";
    novoMes[10] = "Novembro";
    novoMes[11] = "Dezembro";

    var mes = new Date();
    var catchMes = novoMes[mes.getMonth()];
    document.getElementById("mes").innerHTML = catchMes;
}


function ano() {
    var ano = new Date();
    var novoAno = ano.getFullYear();
    document.getElementById("ano").innerHTML = novoAno;
}
window.onload = function(){ano(); mes()};
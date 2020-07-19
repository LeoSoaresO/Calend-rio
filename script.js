function converteMes(mes) {
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

    return novoMes[mes];
}
function ano() {
    var ano = new Date();
    var novoAno = ano.getFullYear();
    document.getElementById("ano").innerHTML = novoAno;
    return novoAno;
}
window.onload = function(){
    ano();

    var mes = new Date();
    var catchMes = converteMes(mes.getMonth());
    document.getElementById("mes").innerHTML = catchMes;
    mesesDias()
};

function mesesDias(){

    var dias = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sabádos"
    ];

    var mes = new Date();
    var m = converteMes(mes.getMonth());
    var a = ano();
    var valorMes = diasDoMes(m);
    var im = inicioMes(m,a);
    var days = dias[im];
    renderDays(im,m,a);
        
}

function diasDoMes(mes) {
    var meses = []
    meses["Janeiro"] = {dias: 31, mes: 0};
    meses["Fevereiro"] = {dias:29, mes: 1};
    meses["Março"] = {dias:31, mes: 2};
    meses["Abril"] = {dias: 30, mes: 3};
    meses["Maio"] = {dias: 31, mes: 4};
    meses["Junho"] = {dias: 30, mes: 5};
    meses["Julho"] = {dias: 31, mes: 6};
    meses["Agosto"] = {dias: 31, mes: 7};
    meses["Setembro"] = {dias: 30, mes: 8};
    meses["Outubro"] = {dias: 31, mes: 9};
    meses["Novembro"] = {dias: 30, mes: 10};
    meses["Dezembro"] = {dias: 31, mes: 11};

    return meses[mes];
}
function inicioMes(mes,ano){
    var nmes = diasDoMes(mes).mes;
    var data = new Date(ano, nmes, 1)
    return data.getDay();

}
function renderDays(im,mes,ano){
    var dd = diasDoMes(mes).dias;
    var mesAnterior = converteMes(diasDoMes(mes).mes - 1);
    var diasAnteriores = diasDoMes(mesAnterior).dias;
    var html = '';

    for(var b = diasAnteriores - (im -1); b <= diasAnteriores; b++){
        html += '<li class="month-prev">'+b+'</li>';
    }
    for(var a = 0; a <= dd; a++){
       html += '<li class="month-days">'+a+'</li>';
    }
    document.getElementById("day-grid").innerHTML = html;
    var totalDias = document.getElementById('day-grid').children.length;
    
    var count = 1;
    for(var i = totalDias; i <= 41; i++){
        html += '<li class="month-next">'+count+'</li>';
        count++
    }
    document.getElementById("day-grid").innerHTML = html;

}

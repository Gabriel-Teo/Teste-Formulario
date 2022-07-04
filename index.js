//validação//
var form = document.querySelector('.needs-validation');
form.addEventListener('submit', function(event){
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        alert("Cadastro Enviado!");
    }
    form.classList.add('was-validated');
});
//validação/comparação senha//
function validasenha() {
    cpassword.setCustomValidity(cpassword.value != password.value ? "/" : "");
};
//customvalidity + função de validação data de nascimento//
function validaDatadn(){
    datadn.setCustomValidity(ValidateDOB() != true ? "/" : "");
};

function ValidateDOB() {
    //mensagem de erro//
    var invddn = document.getElementById("invalid-ddn");
    //pega valor do campo cpf
    var dateString = document.getElementById("datadn").value;
    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;


    if (regex.test(dateString)) {
        var parts = dateString.split("/");
        var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        var dtCurrent = new Date();
        invddn.innerHTML = "Você deve ter 18 anos para se cadastrar.";
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
            return false;
        }

        if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {

            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                return false;
            }
            if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                if (dtCurrent.getDate() < dtDOB.getDate()) {
                    return false;
                }
            }
        }
        invddn.innerHTML = "Coloque uma data de nascimento valida";
        return true;
    } else {
        return false;
    }
}

//customvalidity + função de validação CPF//
function valcpf(){
    var vcpf = document.getElementById("CPF").value;
    CPF.setCustomValidity(validaCPF(vcpf) != true ? "/" : "");
};

function validaCPF(cpf) {
var Soma = 0;
var Resto;
var strCPF = String(cpf).replace(/[^\d]/g, '');

if (strCPF.length !== 11)
    return false

if ([
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
    ].indexOf(strCPF) !== -1)
    return false

for (i=1; i<=9; i++)
    Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);

Resto = (Soma * 10) % 11

if ((Resto == 10) || (Resto == 11)) 
    Resto = 0

if (Resto != parseInt(strCPF.substring(9, 10)) )
    return false

Soma = 0

for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)

Resto = (Soma * 10) % 11

if ((Resto == 10) || (Resto == 11)) 
    Resto = 0

if (Resto != parseInt(strCPF.substring(10, 11) ) )
    return false

return true
}

//mascara cpf//
$(document).ready(function(){
    var $campocpf = $("#CPF");
    $campocpf.mask('000.000.000-00');
});
$(document).ready(function(){
    var $campodatadn = $("#datadn");
    $campodatadn.mask('00/00/0000');
});
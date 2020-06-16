function calcularImc() {
    var estatura = document.getElementById('estaturaimc').value;
    var peso = document.getElementById('pesoimc').value;

    var resultado = (peso / ((estatura * estatura) / 100) * 100);

    document.getElementById('resultado-imc').value = resultado.toFixed(2);
}

function calcularGrasa() {
    var grasa = document.getElementById('grasa').value;
    var edadGrasa = document.getElementById('edad-grasa').value;

    var resultado = (edadGrasa / ((grasa * grasa) / 100) * 100);

    document.getElementById('resultado-grasa').value = resultado.toFixed(2);
}

function calcularMusculo() {
    var musculo = document.getElementById('musculo').value;
    var edadMusculo = document.getElementById('edad-musculo').value;

    var resultado = (edadMusculo / ((musculo * musculo) / 100) * 100);

    document.getElementById('resultado-musculo').value = resultado.toFixed(2);
}
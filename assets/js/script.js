document.addEventListener('DOMContentLoaded', function () {

    function atualizarDataHora() {

        const agora = new Date();

        const dias = [
            "Domingo",
            "Segunda-feira",
            "Terça-feira",
            "Quarta-feira",
            "Quinta-feira",
            "Sexta-feira",
            "Sábado"
        ];

        const diaSemana = dias[agora.getDay()];
        const data = agora.toLocaleDateString('pt-BR');

        const hora = agora.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        document.getElementById('diaSemana').innerHTML = diaSemana;
        document.getElementById('dataHora').innerHTML = data + ' - ' + hora;
    }

    atualizarDataHora();
    setInterval(atualizarDataHora, 1000);

});
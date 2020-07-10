class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._inputData = $('#data');

    }

    adciona(event) {
        event.preventDefault();

        let data = new Date(
            ...this._inputData.value // spread operator -> permite passar array como parâmetro casando os indices
              .split('-')        // separa a data em array usando o '-' como separador
              .map((item , indice) => item - indice % 2) // formata o array com função que subtrai 1 dos elementos ìmpares (mod 2)
        );

        let negociacao = new Negociacao (
            data,   
            this._inputQuantidade.value, 
            this._inputValor
        );
    }
}
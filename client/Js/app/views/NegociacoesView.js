class NegociacoesView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${this._formataModel(model)}
            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${model.negociacoes.reduce((total, x) => total + x.volume , 0.0)}
                </td>
            </tfoot>
        </table>
        `;
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);  // innerHTML convert string em elementos do DOM
    }

    _formataModel(model) {
        return ` 
        ${model.negociacoes.map(n =>   // formata o array em uma string sem separador
            `
                <tr>
                   <td>${DateHelper.dataParaTexto(n.data)}</td>
                   <td>${n.quantidade}</td>
                   <td>${n.valor}</td>
                   <td>${n.volume}</td>
               </tr>
             `
        ).join('')}`;  // transforma o array em string
    }

}
class ListaNegociacaoes {
    
    constructor() {
        this._negociacoes = []              
    }

    adiciona(negociacao) {        
        this._negociacoes.push(negociacao);                
    }

    get negociacoes() {
        return [...this._negociacoes];        
    }

    esvazia() {
        this._negociacoes = [];        
    }
}
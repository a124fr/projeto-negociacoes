class View {

    constructor(elemento) {
        this._elemnto = elemento;
    }

    template(model) {
        throw new Error("O método template deve ser implementado.");
    }

    update(model){
        this._elemnto.innerHTML = this.template(model);
    }
}
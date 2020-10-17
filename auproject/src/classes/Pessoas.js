export class Pessoas {
    constructor() {
        this.Pessoas = [
            {nome: "andré", telefone: "123456789", habilitado: true},
            {nome: "joão", telefone: "147852369", habilitado: true},
            {nome: "pedro", telefone: "258741369", habilitado: true},
            {nome: "judas", telefone: "852963741", habilitado: false},
        ]
    }

    getPessoas = () => {
        return this.Pessoas
    }

    obterPessoa = (nome) => {
        let selecionado
        this.Pessoas.forEach(item => {
            if(item.nome == nome) selecionado = item
        })
        return selecionado
    }

    salvarPessoa = (nome, telefone, habilitado) => {
        this.Pessoas.push({nome, telefone, habilitado})
    }
}
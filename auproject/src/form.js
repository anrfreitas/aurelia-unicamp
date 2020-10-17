import {PLATFORM, inject} from 'aurelia-framework'
import {ValidationRules, ValidationControllerFactory} from 'aurelia-validation'
import {Router} from 'aurelia-router'
import {Pessoas} from './classes/Pessoas'

@inject(Pessoas, Router, ValidationControllerFactory)
export class Form {
  constructor(Pessoas, Router, ValidationControllerFactory) {
    this.Pessoas = Pessoas
    this.router = Router
    this.controller = ValidationControllerFactory.createForCurrentScope()

    this.message = 'Formulário para inserir nova pessoa'

    this.nome = ""
    this.telefone = ""
    this.habilitado = 1

    ValidationRules
    .ensure('nome')
    .required()
    .minLength(5)
    .on(this)
  }

  salvarPessoa = () => {
    //Before implement validation
    //this.Pessoas.salvarPessoa(this.nome, this.telefone, this.habilitado)
    //this.router.navigate("")

    //New method with validation rules
    this.controller.validate().then(result => {
      if(result.valid) {
        console.log('validation success')
        this.router.navigate("")
      }
      else
        console.log('validation failed!')
    }).catch(error => {
      console.log('error: ' + error)
    })
  }

  backToMenu = () => {
    this.router.navigate("")
  }
}

import {EventAggregator} from 'aurelia-event-aggregator'
import {PLATFORM, inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {Pessoas} from './classes/Pessoas'

@inject(EventAggregator, Router, Pessoas)
export class Lista {
  constructor(EventAggregator, Router, Pessoas) {
    this.message = 'Tela de listagem de pessoas';

    this.ea = EventAggregator
    this.router = Router
    this.Pessoas = Pessoas
  }

  /* Nothing happened because we need the subscribe function to consume this publish function
  All these features are managed by EventAggregator!! Once we call here the publish, automatically the subscribe function is called
  through EA 
  
  IMPORTANT: the subscribe function must be created in the app component, always, because it's a parent componenet!!! 
  
  The component must be contained inside in order to allow it to call through Event Aggregator callback!! */
  exibirInfoClickDelegate = (nome) => {
    this.ea.publish('printMSG', JSON.stringify(this.Pessoas.obterPessoa(nome)))
  }

  backToMenu = () => {
    this.router.navigate("")
  }
  
}

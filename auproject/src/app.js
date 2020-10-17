import {EventAggregator} from 'aurelia-event-aggregator'
import {PLATFORM, inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {AuthSettings} from './classes/authSettings'

@inject(Router, EventAggregator)
export class App {
  constructor(Router, EventAggregator) {
    this.router = Router
    this.ea = EventAggregator

    /* Important to create the function here in the constructor, because right when the app component is constructed, 
    it consctructs the subscribe events too! */

    this.ea.subscribe('printMSG', result => {
      console.log("Console Log Data: " + result)
    })
  }

  /* Lets go now add authentication methods to our project!! */
  configureRouter(config, router) {
    this.router = router
    config.title = "AUProject title"
    config.addAuthorizeStep(AuthSettings)
    config.map([
      {
        route: ['', 'index', 'home'],
        name: "homeRoute",
        moduleId: PLATFORM.moduleName("home"),
        title: "Home Title"
      },
      {
        route: ['lista/:id'],
        name: "listaRoute",
        moduleId: PLATFORM.moduleName("lista"),
        title: "Lista Title"
      },
      {
        route: ['form'],
        name: "formRoute",
        moduleId: PLATFORM.moduleName("form"),
        title: "Form Title",
        settings: {auth: true}
      }
    ])
  }
}

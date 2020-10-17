import {Redirect} from 'aurelia-router'
import {inject} from 'aurelia-framework'

@inject(Redirect)
export class AuthSettings
{
    run(navigationInstruction, next){
        if(navigationInstruction.getAllInstructions().some(i => i.config.settings.auth)){
            //executes the code accordingly to the value settings.auth!
            //here we should just check if the user is authenticated, i'll just set as true!
            let authenticated = true
            
            if(authenticated)
                return next() //it wont block your access, it'll just keep it rolling
            else
            {
                console.log("WARNING: The user is not authenticated!")
                return next.cancel(new Redirect('index'))
            }
        }
        return next();
      }
}
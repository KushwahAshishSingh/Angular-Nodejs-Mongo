import {Component} from "@angular/core";
import {MessageService} from "./message.service";
import {Message} from "./message.model";
import {NgForm} from "@angular/forms";


@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent{
    constructor(private messageService: MessageService) {

    }
    OnSubmit(form: NgForm) {
       // console.log(form);
        const message = new Message(form.value.content, 'ashish');
       this.messageService.addMessage(message)
           .subscribe(
               data => console.log(data),
               error => console.error(error)
           );
       form.resetForm();

        //console.log(value);
        // <input type="text" id="content" class="form-control" #TempinputDataStorage>
        // <button class="btn btn-primary" type="submit" (click)="onSave(TempinputDataStorage.value)">Save</button>
        // using   #TempInputDataStorage  in html..  will holds the value and using (click) = "onSave(TempInputDataStorage.value) will transfer the value
        // to this above >>..  onSave function    and u can see the values written on txt field after click on save button in "console"

    }
}
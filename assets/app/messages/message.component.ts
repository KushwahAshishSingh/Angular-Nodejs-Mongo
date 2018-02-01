import {Component, EventEmitter, Input, Output} from "@angular/core";
import { Message } from "./message.model";
import {MessageService} from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .panel-body{
            display: inline-block;
            font-style: oblique;
            font-size: 15px;
            width: 80%;
        }
    .author {
        display: inline-block;
        font-style: italic;
        font-size: 12px;
        width: 80%;
    }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]


})
export class MessageComponent{
    @Input() message: Message;
    @Output() eidtClicked = new EventEmitter<string>();

    color= 'Orange';

   constructor(private messageService: MessageService){

   }
    onEdit() {
        // alert('not working for now');
        //this.eidtClicked.emit('reset');
        this.eidtClicked.emit('a new value');
    }

    onDelete(){
       this.messageService.deleteMessage(this.message);

    }

}
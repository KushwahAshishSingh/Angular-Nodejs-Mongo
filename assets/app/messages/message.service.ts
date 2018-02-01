import { Message} from "./message.model";
import {Http, Response, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {error} from "util";

@Injectable()
export  class MessageService{
    private messages: Message[] =[];

    constructor(private http: Http) {}

    addMessage(message: Message) {
        this.messages.push(message);
        const headers = new Headers({'Content-Type': 'application/json'});
    const body = JSON.stringify(this.messages);
     return this.http.post('http://localhost:3003/message', body,{headers: headers})
         .map((response: Response) => response.json())
         .catch((error: Response)=> Observable.throw(error.json()));

    }

    getMessage() {
        return this.messages;
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}
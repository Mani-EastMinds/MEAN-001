import { Component } from '@angular/core';
import { Message } from './messages/message.model';
import { MessageService } from './messages/messages.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [],
    providers: [MessageService]
})
export class AppComponent {

}

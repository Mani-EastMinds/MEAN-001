import { Component, Input} from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './messages.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent {
  @Input() message: Message;

  constructor(private messageService: MessageService) {}

  onEdit() {
    this.messageService.editMessage(this.message);
  }

  onDelete() {
    this.messageService.deleteMessage(this.message)
    .subscribe(
      response => console.log(response)
    );
  }

  belongsToUser() {
    return localStorage.getItem('userId') == this.message.userId;
  }
}

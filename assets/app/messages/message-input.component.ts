import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MessageService } from './messages.service';
import { Message } from './message.model';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html'
})

export class MessageInputComponent implements OnInit {
  message: Message;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.messageIsEdit.subscribe(
      (message: Message) => {
        this.message = message;
      }
    );
  }

  OnSubmit(form: NgForm) {
    if(this.message) {
      this.message.content = form.value.content;
      this.messageService.updateMessage(this.message)
      .subscribe(
        result => console.log(result)
      )
      this.message = null;
    } else {
      const message: Message = new Message(form.value.content, 'Mani');
      this.messageService.addMessage(message)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    }

    form.reset();
  }

  OnClear(form: NgForm) {
    this.message = null;
    form.reset();
  }
}

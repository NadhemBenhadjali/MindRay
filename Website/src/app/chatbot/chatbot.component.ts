import { Component } from '@angular/core';
import { ChatbotContainerComponent } from '../chatbot-container/chatbot-container.component';
import { ChatbotSidebarComponent } from '../chatbot-sidebar/chatbot-sidebar.component';

@Component({
  selector: 'app-chatbot',
  imports: [ChatbotSidebarComponent, ChatbotContainerComponent],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent {

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-chatbot-sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule, TruncatePipe],
  templateUrl: './chatbot-sidebar.component.html',
  styleUrls: ['./chatbot-sidebar.component.scss']
})
export class ChatbotSidebarComponent {
  activeChatId: string | null = 'chat-2';
  conversations = [
    {
      id: 'chat-1',
      title: 'Chest Pain Analysis',
      lastMessage: 'Patient exhibits symptoms consistent with mild angina...',
      lastUpdated: new Date('2023-05-18'),
      patientId: 'PT-4892'
    },
    {
      id: 'chat-2',
      title: 'Fracture Follow-up',
      lastMessage: 'X-ray shows good bone alignment post-reduction...',
      lastUpdated: new Date('2023-05-15'),
      patientId: 'PT-3751'
    },
    {
      id: 'chat-3',
      title: 'Pre-Op Consultation',
      lastMessage: 'Patient cleared for surgery pending final lab results...',
      lastUpdated: new Date('2023-05-10'),
      patientId: 'PT-6284'
    }
  ];

  startNewChat() {
    const newChat = {
      id: `chat-${this.conversations.length + 1}`,
      title: `New Consultation ${this.conversations.length + 1}`,
      lastMessage: '',
      lastUpdated: new Date(),
      patientId: `PT-${Math.floor(1000 + Math.random() * 9000)}`
    };
    this.conversations.unshift(newChat);
    this.setActiveChat(newChat.id);
  }

  setActiveChat(chatId: string) {
    this.activeChatId = chatId;
    // Add logic to load the selected chat
  }
}
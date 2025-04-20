import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

interface ChatMessage {
  text: string;
  isUser: boolean;
  timestamp: Date;
  imageUrl: string | null;
}

@Component({
  selector: 'app-chatbot-container',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './chatbot-container.component.html',
  styleUrls: ['./chatbot-container.component.scss']
})
export class ChatbotContainerComponent implements AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  newMessage = '';
  selectedFile: File | null = null;
  userAvatar = 'https://example.com/user-avatar.jpg';
  loading = false;
  responseCount = 0;
  
  // Start with the chatbot asking for scan
  messages: ChatMessage[] = [{
    text: 'Please upload your chest X-ray scan for analysis',
    isUser: false,
    timestamp: new Date(),
    imageUrl: null
  }];

  predefinedResponses = [
    "Thank you. I've analyzed your chest X-ray. The scan appears normal with no visible abnormalities.",
    "I notice you might be feeling anxious. Try to stay calm and breathe deeply.",
    "Anxiety can affect your physical health. Let's discuss what's troubling you."
  ];

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      // Auto-send when file is selected
      this.sendMessage();
    }
  }

  removeFile() {
    this.selectedFile = null;
  }

  sendMessage() {
    // Don't send empty messages unless there's a file
    if (!this.newMessage && !this.selectedFile) return;

    // Add user message to chat (either text or file upload)
    this.messages.push({
      text: this.newMessage || 'X-ray image uploaded',
      isUser: true,
      timestamp: new Date(),
      imageUrl: this.selectedFile ? URL.createObjectURL(this.selectedFile) : null
    });

    this.newMessage = '';
    this.loading = true;

    setTimeout(() => {
      if (this.responseCount < this.predefinedResponses.length) {
        this.messages.push({
          text: this.predefinedResponses[this.responseCount],
          isUser: false,
          timestamp: new Date(),
          imageUrl: null
        });
        this.responseCount++;
      } else {
        // Default response after predefined sequence
        this.messages.push({
          text: "How are you feeling about this?",
          isUser: false,
          timestamp: new Date(),
          imageUrl: null
        });
      }
      
      this.selectedFile = null;
      this.loading = false;
    }, 1000);
  }
}
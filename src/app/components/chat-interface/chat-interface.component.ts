import { Component } from '@angular/core';
import {GeminiService} from '../../services/gemini.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-interface',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './chat-interface.component.html',
  styleUrl: './chat-interface.component.css'
})
export class ChatInterfaceComponent {
  userInput='';
  response='';
  isLoading=false;
  constructor(private geminiService: GeminiService) { }
  async sendPrompt(){
    console.log(this.userInput)
    if(!this.userInput.trim()) return
    this.isLoading=true;
    try{
      console.log(this.userInput)
      this.response=await this.geminiService.generateText(this.userInput);
    }catch(error){
      this.response='Error al comunicarse con la API';
    }
    this.isLoading=false;
  }
}

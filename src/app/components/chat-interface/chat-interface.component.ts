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
  conversation:{sender:string,text:string}[]=[];
  response='';
  isLoading=false;
  constructor(private geminiService: GeminiService) { }
  async sendPrompt(){
    if(!this.userInput.trim()) return;
    this.conversation.push({sender:'user',text:this.userInput});
    this.isLoading=true;
    try{
      this.response=await this.geminiService.generateText(this.userInput);
      this.conversation.push({sender:'ai',text:this.response});
    }catch(error){
      this.response='Error al comunicarse con la API';
    }
    this.userInput='';
    this.isLoading=false;
  }
}

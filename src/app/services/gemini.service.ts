import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {GoogleGenerativeAI} from '@google/generative-ai';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private genAI = new GoogleGenerativeAI(environment.geminiApiKey);
  private model = this.genAI.getGenerativeModel({model:'gemini-1.5-flash'});
  constructor() { }
  async generateText(prompt:string):Promise<string>{
    try{
      const result = await this.model.generateContent(prompt);
      return result.response.text();
    }catch(error){
      console.error('Error con Gemini API: ',error);
      return 'Error al generar la respuesta';
    }
  }
}

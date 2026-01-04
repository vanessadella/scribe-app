import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export class GeminiService {
    private model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    async generateSOAPNote(transcript: string, language: string = 'en-US') {
        const langName = language === 'id-ID' ? 'Bahasa Indonesia' : 'English';
        const prompt = `
      You are a medical scribe. Analyze the following transcript between a doctor and a patient.
      The transcript is in ${langName}.
      Generate a structured SOAP note (Subjective, Objective, Assessment, Plan) in JSON format.
      The output content must be in ${langName}.
      
      Transcript:
      ${transcript}

      Output JSON format:
      {
        "subjective": "...",
        "objective": "...",
        "assessment": "...",
        "plan": "..."
      }
    `;

        try {
            const result = await this.model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            // Simple clean up to ensure we get JSON (sometimes models add markdown backticks)
            const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();
            return JSON.parse(jsonStr);
        } catch (error) {
            console.error('Error generating note:', error);
            throw new Error('Failed to generate SOAP note');
        }
    }
}

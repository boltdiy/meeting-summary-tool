import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL_NAME = "gemini-1.5-pro";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL_NAME });

export async function generateResponse(prompt, content) {
  try {
    const enhancedPrompt = `
      ${prompt}
      
      Please format your response in clean, semantic HTML using appropriate tags like <h2>, <p>, <ul>, <li>, etc.
      Use minimal inline CSS for essential styling only.
      Avoid using complex CSS or external styles.
      
      Meeting Transcript:
      ${content}
    `;

    const result = await model.generateContent([enhancedPrompt]);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    throw new Error('Failed to generate response. Please try again.');
  }
}

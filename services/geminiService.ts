import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the "Context Engine" for Reading Africa, a curated knowledge platform. 
Your goal is to provide nuance, history, and context about African topics.
1. Fight the "single story": Emphasize complexity, regional differences, and specific histories.
2. Context over opinion: Explain *why* things are happening (historical antecedents, economic structures) rather than just *what* is happening.
3. Tone: Intellectual, accessible, calm, and objective. Like a very well-read historian or editor.
4. If asked about a specific country, mention its region and avoid generalizing to the whole continent.
5. Keep answers concise but dense with value (under 250 words unless asked for more).
`;

export const generateContextResponse = async (query: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3, // Low temperature for factual, grounded responses
      },
    });

    return response.text || "I was unable to generate a context response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The Context Engine is currently unavailable. Please check your connection or try again later.";
  }
};
import { GoogleGenAI } from "@google/genai";

const getAI = () => {
  const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateAssistantResponse = async (
  query: string,
  history: { role: string; text: string }[]
) => {
  const model = "gemini-2.5-flash";

  // System instruction to guide the AI on the proposal context
  const systemInstruction = `
    You are the "Legacy Digital Architect", an AI assistant specialized in explaining the website proposal for "The Legacy Building".
    
    Context:
    - Client: The Legacy Building (Kerwyn Kirton)
    - Provider: Ocasio Ak-Bar Saleem Willson (Trust)
    - Project: Multi-division business website (Real Estate, Property Management, Building Services).
    - Location: South End, Albany (Community Anchor).
    - Timeline: 30 Days.
    
    Tech Stack & Infrastructure (The Hybrid Approach):
    - Frontend: Vercel (React/Next.js).
      - Why? Speed, Global Edge Network, Instant Deployments.
      - NOTE: Vercel *cannot* host the WordPress database/PHP natively.
    - Backend: Namecheap (WordPress Hosting).
      - Why? Cheapest reliable way to host the WordPress Database and API ($15/mo).
      - Can we use Vercel alone? NO. We need a server that runs PHP for WordPress. Namecheap provides this.
    
    Maintenance Options (Only 2 Options Available):
      1. Self-Managed Handover (~$45/mo total): 
         - Client must manage and pay vendors directly. 
         - RISK: Client is responsible for ALL security updates. This includes WordPress Core updates, Plugin patching, and Server PHP updates. If the site is hacked, client must fix it.
         - Vendors: Namecheap ($15/mo), Vercel ($20/mo), Resend ($0-$20/mo), Domain ($15/yr).
      
      2. Wraparound Partnership ($500/mo): 
         - Recommended. "Digital Concierge" service.
         - Ocasio pays all vendor fees.
         - Includes unlimited content updates, 24/7 security monitoring, priority phone support, and monthly growth strategy calls.
         - ROI: Total peace of mind and continuous platform growth.
    
    Your goal is to answer questions about the proposal, technical details, timeline, and costs accurately.
    Be professional, confident, and persuasive. Use the tone of a high-end digital agency.
    
    If the user asks about location or community context, you MUST use the googleMaps tool to provide real-world data about the South End of Albany.
  `;

  const ai = getAI();
  if (!ai) {
    return "The AI assistant is not configured for this demo. Add your Gemini API key to enable it.";
  }

  try {
    const contents = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));
    
    // Add current user query
    contents.push({
      role: 'user',
      parts: [{ text: query }]
    });

    const response = await ai.models.generateContent({
      model: model,
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        tools: [{ googleMaps: {} }], // Enable Maps Grounding
        maxOutputTokens: 500,
      }
    });

    let finalText = "";
    
    // Process candidates to handle grounding or standard text
    if (response.candidates && response.candidates.length > 0) {
      const candidate = response.candidates[0];
      
      // Check for grounding chunks (Maps)
      if (candidate.groundingMetadata?.groundingChunks) {
        const chunks = candidate.groundingMetadata.groundingChunks;
        
        // Extract map links if available
        const mapLinks = chunks
          .filter(chunk => chunk.web?.uri || chunk.web?.title) // Fallback to web for general, but look for maps specifically if structure allows
          .map(chunk => `[${chunk.web?.title || 'Map Location'}](${chunk.web?.uri})`)
          .join('\n');
          
         // Note: The specific structure for maps grounding in the SDK returns text + metadata. 
         // We will primarily rely on the generated text which usually incorporates the grounded info.
      }

      // Concatenate text parts
      if (candidate.content?.parts) {
        for (const part of candidate.content.parts) {
          if (part.text) {
            finalText += part.text;
          }
        }
      }
    }

    return finalText || "I apologize, I couldn't generate a response at this moment.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error while processing your request. Please try again.";
  }
};

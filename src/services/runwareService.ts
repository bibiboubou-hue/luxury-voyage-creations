
import { toast } from "sonner";

export interface GenerateImageParams {
  positivePrompt: string;
  model?: string;
  numberResults?: number;
  negativePrompt?: string;
  color?: string;
  background?: string;
  angle?: string;
  lighting?: string;
  style?: string;
}

export class RunwareService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async generateImage(params: GenerateImageParams): Promise<string> {
    try {
      // Create enhanced prompt from parameters
      let enhancedPrompt = params.positivePrompt;
      
      if (params.color) {
        enhancedPrompt += `, ${params.color} color`;
      }
      
      if (params.background) {
        enhancedPrompt += `, ${params.background} background`;
      }
      
      if (params.angle) {
        enhancedPrompt += `, ${params.angle} angle view`;
      }
      
      if (params.lighting) {
        enhancedPrompt += `, ${params.lighting} lighting`;
      }
      
      if (params.style) {
        enhancedPrompt += `, ${params.style} style`;
      }
      
      const response = await fetch('https://api.runware.ai/v1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify([{
          taskType: 'imageInference',
          positivePrompt: enhancedPrompt,
          negativePrompt: params.negativePrompt || "blurry, low quality, distorted, deformed, cartoon, anime",
          model: params.model || 'runware:100@1',
          width: 1024,
          height: 1024,
          numberResults: params.numberResults || 1,
        }])
      });

      const result = await response.json();

      if (result.data && result.data[0]?.imageURL) {
        return result.data[0].imageURL;
      } else {
        throw new Error('Failed to generate image');
      }
    } catch (error) {
      toast.error('Error generating image');
      console.error(error);
      throw error;
    }
  }

  async getAvailableModels(): Promise<string[]> {
    // In a real implementation, this would fetch available models from the API
    // For now, we'll return some sample models
    return [
      'runware:100@1',
      'runware:110@1',
      'runware:200@1'
    ];
  }
}

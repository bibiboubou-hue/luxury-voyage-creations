
import { toast } from "sonner";

export interface GenerateImageParams {
  positivePrompt: string;
  model?: string;
  numberResults?: number;
}

export class RunwareService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async generateImage(params: GenerateImageParams): Promise<string> {
    try {
      const response = await fetch('https://api.runware.ai/v1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify([{
          taskType: 'imageInference',
          positivePrompt: params.positivePrompt,
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
}

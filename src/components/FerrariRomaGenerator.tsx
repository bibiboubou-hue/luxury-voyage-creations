
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { RunwareService } from '@/services/runwareService';
import { toast } from 'sonner';

const FerrariRomaGenerator: React.FC = () => {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateFerrariRomaImage = async () => {
    setIsLoading(true);
    try {
      // You should replace this with an actual Runware API key
      const runwareService = new RunwareService('YOUR_RUNWARE_API_KEY');
      
      const imageUrl = await runwareService.generateImage({
        positivePrompt: "Ferrari Roma, sleek Italian sports car, photorealistic, luxury vehicle, professional studio lighting, metallic silver paint, modern automotive photography",
        model: "runware:100@1",
      });

      setGeneratedImage(imageUrl);
      toast.success('Ferrari Roma image generated successfully!');
    } catch (error) {
      toast.error('Failed to generate image');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-playfair font-bold mb-4">Ferrari Roma Image Generator</h1>
        <p className="text-nautical-sand mb-6">Click below to generate a stunning render of the Ferrari Roma</p>
      </div>

      <div className="flex flex-col items-center">
        <Button 
          onClick={generateFerrariRomaImage}
          disabled={isLoading}
          className="luxury-button-filled mb-8"
        >
          {isLoading ? 'Generating...' : 'Generate Ferrari Roma Image'}
        </Button>

        {generatedImage && (
          <div className="max-w-2xl mx-auto">
            <img 
              src={generatedImage} 
              alt="Generated Ferrari Roma" 
              className="w-full h-auto rounded-lg shadow-xl hover-3d"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FerrariRomaGenerator;

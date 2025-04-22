import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { RunwareService } from '@/services/runwareService';
import { toast } from 'sonner';
import { Download, RefreshCw, Copy, Image, Settings2 } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import ImageSkeletonLoader from "@/components/ui/ImageSkeletonLoader";

const FerrariRomaGenerator: React.FC = () => {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [apiKey, setApiKey] = useState<string>(localStorage.getItem('runwareApiKey') || '');
  const [showApiKeyInput, setShowApiKeyInput] = useState<boolean>(!localStorage.getItem('runwareApiKey'));
  const [availableModels, setAvailableModels] = useState<string[]>([]);
  
  const [selectedModel, setSelectedModel] = useState<string>('runware:100@1');
  const [carColor, setCarColor] = useState<string>('metallic silver');
  const [backgroundType, setBackgroundType] = useState<string>('studio');
  const [viewAngle, setViewAngle] = useState<string>('front 3/4');
  const [lightingStyle, setLightingStyle] = useState<string>('professional studio');
  const [imageStyle, setImageStyle] = useState<string>('photorealistic');
  const [customPrompt, setCustomPrompt] = useState<string>('');
  const [negativePrompt, setNegativePrompt] = useState<string>('blurry, low quality, distorted, deformed');
  
  useEffect(() => {
    if (apiKey) {
      const runwareService = new RunwareService(apiKey);
      runwareService.getAvailableModels()
        .then(models => setAvailableModels(models))
        .catch(error => console.error('Error fetching models:', error));
    }
  }, [apiKey]);
  
  const saveApiKey = () => {
    if (apiKey) {
      localStorage.setItem('runwareApiKey', apiKey);
      setShowApiKeyInput(false);
      toast.success('API Key saved successfully!');
      
      const runwareService = new RunwareService(apiKey);
      runwareService.getAvailableModels()
        .then(models => setAvailableModels(models))
        .catch(error => console.error('Error fetching models:', error));
    }
  };
  
  const clearApiKey = () => {
    localStorage.removeItem('runwareApiKey');
    setApiKey('');
    setShowApiKeyInput(true);
    toast.success('API Key removed');
  };

  const generateFerrariRomaImage = async () => {
    if (!apiKey) {
      toast.error('Please enter your Runware API Key first');
      setShowApiKeyInput(true);
      return;
    }
    
    setIsLoading(true);
    try {
      const runwareService = new RunwareService(apiKey);
      
      let basePrompt = customPrompt || "Ferrari Roma, sleek Italian sports car";
      
      const imageUrl = await runwareService.generateImage({
        positivePrompt: basePrompt,
        model: selectedModel,
        color: carColor,
        background: backgroundType,
        angle: viewAngle,
        lighting: lightingStyle,
        style: imageStyle,
        negativePrompt: negativePrompt
      });

      setGeneratedImage(imageUrl);
      
      setHistory(prev => [imageUrl, ...prev].slice(0, 5));
      
      toast.success('Ferrari Roma image generated successfully!');
    } catch (error) {
      toast.error('Failed to generate image');
    } finally {
      setIsLoading(false);
    }
  };
  
  const downloadImage = async () => {
    if (!generatedImage) return;
    
    try {
      const response = await fetch(generatedImage);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ferrari-roma-${Date.now()}.jpg`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      toast.success('Image downloaded successfully!');
    } catch (error) {
      toast.error('Failed to download image');
    }
  };
  
  const copyImageUrl = () => {
    if (!generatedImage) return;
    
    navigator.clipboard.writeText(generatedImage)
      .then(() => toast.success('Image URL copied to clipboard!'))
      .catch(() => toast.error('Failed to copy URL'));
  };
  
  const loadFromHistory = (url: string) => {
    setGeneratedImage(url);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-8 fade-in">
        <h1 className="text-4xl font-playfair font-bold mb-4 blue-gradient drop-shadow-xl animate__animated animate__fadeInDown">Ferrari Roma Image Generator</h1>
        <p className="text-nautical-sand mb-6 fade-in" style={{ animationDelay: "100ms" }}>Create stunning renders of the Ferrari Roma with AI</p>
      </div>

      {showApiKeyInput ? (
        <Card className="mb-8 luxury-card">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Enter your Runware API Key</h2>
            <div className="flex gap-2">
              <Input 
                type="password" 
                placeholder="Your Runware API Key" 
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="luxury-input"
              />
              <Button onClick={saveApiKey}>Save Key</Button>
            </div>
            <p className="text-sm text-nautical-sand mt-2">
              Get your API key from <a href="https://runware.ai" target="_blank" rel="noopener noreferrer" className="text-nautical-lightblue hover:underline">Runware.ai</a>
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="flex justify-end mb-4">
          <Button variant="outline" size="sm" onClick={() => setShowApiKeyInput(true)}>
            <Settings2 className="mr-1 h-4 w-4" /> Change API Key
          </Button>
        </div>
      )}

      <Tabs defaultValue="basic" className="mb-8 fade-in" style={{ animationDelay: "150ms" }}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="basic">Basic Options</TabsTrigger>
          <TabsTrigger value="advanced">Advanced Options</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basic" className="luxury-card p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="carColor">Car Color</Label>
              <Select value={carColor} onValueChange={setCarColor}>
                <SelectTrigger id="carColor" className="!bg-nautical-navy !z-30">
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent className="!bg-nautical-navy !z-50">
                  <SelectItem value="metallic silver">Silver Metallic</SelectItem>
                  <SelectItem value="rosso corsa red">Rosso Corsa Red</SelectItem>
                  <SelectItem value="midnight blue">Midnight Blue</SelectItem>
                  <SelectItem value="pearl white">Pearl White</SelectItem>
                  <SelectItem value="matte black">Matte Black</SelectItem>
                  <SelectItem value="british racing green">British Racing Green</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="backgroundType">Background</Label>
              <Select value={backgroundType} onValueChange={setBackgroundType}>
                <SelectTrigger id="backgroundType" className="!bg-nautical-navy !z-30">
                  <SelectValue placeholder="Select background" />
                </SelectTrigger>
                <SelectContent className="!bg-nautical-navy !z-50">
                  <SelectItem value="studio">Studio</SelectItem>
                  <SelectItem value="coastal road">Coastal Road</SelectItem>
                  <SelectItem value="city street">City Street</SelectItem>
                  <SelectItem value="mountain pass">Mountain Pass</SelectItem>
                  <SelectItem value="showroom">Showroom</SelectItem>
                  <SelectItem value="race track">Race Track</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="viewAngle">View Angle</Label>
              <Select value={viewAngle} onValueChange={setViewAngle}>
                <SelectTrigger id="viewAngle" className="!bg-nautical-navy !z-30">
                  <SelectValue placeholder="Select view angle" />
                </SelectTrigger>
                <SelectContent className="!bg-nautical-navy !z-50">
                  <SelectItem value="front 3/4">Front 3/4</SelectItem>
                  <SelectItem value="rear 3/4">Rear 3/4</SelectItem>
                  <SelectItem value="side profile">Side Profile</SelectItem>
                  <SelectItem value="front">Front</SelectItem>
                  <SelectItem value="rear">Rear</SelectItem>
                  <SelectItem value="top down">Top Down</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="imageStyle">Image Style</Label>
              <Select value={imageStyle} onValueChange={setImageStyle}>
                <SelectTrigger id="imageStyle" className="!bg-nautical-navy !z-30">
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent className="!bg-nautical-navy !z-50">
                  <SelectItem value="photorealistic">Photorealistic</SelectItem>
                  <SelectItem value="cinematic">Cinematic</SelectItem>
                  <SelectItem value="magazine advertisement">Magazine Ad</SelectItem>
                  <SelectItem value="automotive rendering">3D Rendering</SelectItem>
                  <SelectItem value="dramatic lighting">Dramatic</SelectItem>
                  <SelectItem value="minimalist">Minimalist</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="advanced" className="luxury-card p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <Label htmlFor="customPrompt">Custom Prompt</Label>
              <Input
                id="customPrompt"
                placeholder="Custom prompt (optional)"
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                className="luxury-input"
              />
              <p className="text-xs text-nautical-sand mt-1">
                Leave empty to use the default prompt with your selected options
              </p>
            </div>
            
            <div>
              <Label htmlFor="lightingStyle">Lighting</Label>
              <Select value={lightingStyle} onValueChange={setLightingStyle}>
                <SelectTrigger id="lightingStyle" className="!bg-nautical-navy !z-30">
                  <SelectValue placeholder="Select lighting" />
                </SelectTrigger>
                <SelectContent className="!bg-nautical-navy !z-50">
                  <SelectItem value="professional studio">Studio</SelectItem>
                  <SelectItem value="golden hour">Golden Hour</SelectItem>
                  <SelectItem value="dramatic spot">Dramatic Spot</SelectItem>
                  <SelectItem value="night time">Night Time</SelectItem>
                  <SelectItem value="sunset">Sunset</SelectItem>
                  <SelectItem value="moody">Moody</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="model">AI Model</Label>
              <Select value={selectedModel} onValueChange={setSelectedModel}>
                <SelectTrigger id="model" className="!bg-nautical-navy !z-30">
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent className="!bg-nautical-navy !z-50">
                  {availableModels.length > 0 ? (
                    availableModels.map(model => (
                      <SelectItem key={model} value={model}>
                        {model}
                      </SelectItem>
                    ))
                  ) : (
                    <SelectItem value="runware:100@1">runware:100@1</SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>
            
            <div className="md:col-span-2">
              <Label htmlFor="negativePrompt">Negative Prompt</Label>
              <Input
                id="negativePrompt"
                placeholder="Elements to avoid in the image"
                value={negativePrompt}
                onChange={(e) => setNegativePrompt(e.target.value)}
                className="luxury-input"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex flex-col items-center mb-8">
        <Button 
          onClick={generateFerrariRomaImage}
          disabled={isLoading}
          className="luxury-button-filled glow-on-hover w-full max-w-md transition-all duration-200 hover:scale-105"
          size="lg"
        >
          {isLoading ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Image className="mr-2 h-5 w-5" />
              Generate Ferrari Roma Image
            </>
          )}
        </Button>
      </div>

      <div className="w-full flex flex-col items-center mb-8 min-h-[440px]">
        {isLoading ? (
          <ImageSkeletonLoader />
        ) : generatedImage ? (
          <div className="fade-in">
            <Card className="luxury-card overflow-hidden mb-8 shadow-xl hover:shadow-2xl card-3d transition-all duration-500">
              <CardContent className="p-0">
                <div className="relative group">
                  <img 
                    src={generatedImage} 
                    alt="Generated Ferrari Roma" 
                    className="w-full h-auto transition-transform duration-300 hover:scale-105 group-hover:shadow-lg"
                  />
                  <div className="absolute bottom-0 right-0 p-4 flex gap-2 z-20">
                    <Button 
                      onClick={downloadImage}
                      variant="secondary"
                      size="sm"
                      className="transition-all hover:scale-105"
                    >
                      <Download className="h-4 w-4 mr-1" /> Download
                    </Button>
                    <Button 
                      onClick={copyImageUrl}
                      variant="secondary"
                      size="sm"
                      className="transition-all hover:scale-105"
                    >
                      <Copy className="h-4 w-4 mr-1" /> Copy URL
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            {history.length > 1 && (
              <Accordion type="single" collapsible className="mb-8 fade-in" style={{ animationDelay: "120ms" }}>
                <AccordionItem value="history">
                  <AccordionTrigger>Generation History</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {history.map((url, index) => (
                        <div 
                          key={index} 
                          className="cursor-pointer hover-3d transition-all duration-200 group"
                          onClick={() => loadFromHistory(url)}
                        >
                          <img 
                            src={url} 
                            alt={`History ${index + 1}`} 
                            className="w-full h-auto rounded-lg shadow group-hover:shadow-lg group-hover:scale-105 transition-all"
                          />
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
          </div>
        ) : null}
      </div>
      
      <div className="mt-12 text-center fade-in" style={{ animationDelay: "140ms" }}>
        <p className="text-sm text-nautical-sand">
          Powered by <a href="https://runware.ai" target="_blank" rel="noopener noreferrer" className="text-nautical-lightblue hover:underline">Runware AI</a>
        </p>
        <Button 
          variant="link" 
          className="mt-2 text-xs" 
          onClick={clearApiKey}
        >
          Clear API Key
        </Button>
      </div>
    </div>
  );
};

export default FerrariRomaGenerator;


import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const VideoPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-24 mb-12">
        <div 
          className="absolute inset-0 bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)"
          }}
        ></div>
        
        <div className="relative luxury-container text-center">
          <h1 className="luxury-heading mb-6 text-shadow">
            Experience <span className="blue-gradient">Luxury</span>
          </h1>
          <p className="luxury-paragraph max-w-2xl mx-auto mb-8 text-nautical-sand">
            Immerse yourself in the world of exceptional luxury vehicles
            through our cinematic showcase.
          </p>
        </div>
      </section>
      
      {/* Main Video Section */}
      <section className="section-padding bg-nautical-darknavy">
        <div className="luxury-container">
          <motion.div
            className="relative aspect-video bg-nautical-navy border border-nautical-blue/30 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source 
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
            
            {/* Cinematic overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{ 
              boxShadow: "inset 0 0 100px rgba(0,0,0,0.8)",
              background: "linear-gradient(0deg, rgba(7,10,20,0.4) 0%, rgba(7,10,20,0) 50%, rgba(7,10,20,0.4) 100%)"
            }}></div>
            
            {/* Play/Pause button */}
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex items-center justify-center bg-nautical-blue/20 hover:bg-nautical-blue/50 backdrop-blur-md rounded-full transition-all duration-300 border border-nautical-blue/50"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 text-white" />
              ) : (
                <Play className="w-8 h-8 text-white ml-1" />
              )}
            </button>
            
            {/* Video controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2 bg-nautical-darknavy/60 backdrop-blur-sm border border-nautical-blue/20">
              <button
                className="text-nautical-sand hover:text-nautical-blue transition-colors"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </button>
              
              <div className="flex items-center">
                <span className="text-nautical-sand text-xs mr-2">Luxury Voyage Showcase</span>
                <button
                  className="text-nautical-sand hover:text-nautical-blue transition-colors"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-playfair font-bold mb-4">Luxury Voyage: A Journey Beyond Ordinary</h2>
            <p className="text-nautical-sand mb-6">
              This cinematic showcase presents our exclusive collection of luxury vehicles, 
              highlighting the exceptional craftsmanship, performance, and design that sets us apart. 
              From the sleek lines of our custom automobiles to the majestic presence of our yachts, 
              each frame reveals the attention to detail and commitment to excellence that defines Luxury Voyage.
            </p>
          </div>
        </div>
      </section>
      
      {/* Additional Videos Section */}
      <section className="section-padding bg-nautical-navy">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="luxury-subheading mb-4 blue-gradient">
              Additional Showcases
            </h2>
            <p className="luxury-paragraph max-w-2xl mx-auto text-nautical-sand">
              Explore more videos highlighting our exclusive collection and the luxury lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Art of Yacht Design",
                thumbnail: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                duration: "4:25",
              },
              {
                title: "Behind the Scenes: Luxury Car Manufacturing",
                thumbnail: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                duration: "6:12",
              },
              {
                title: "Mediterranean Yacht Tour",
                thumbnail: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                duration: "8:47",
              },
            ].map((video, index) => (
              <motion.div 
                key={video.title}
                className="group relative aspect-video bg-nautical-darknavy border border-nautical-blue/20 overflow-hidden cursor-pointer hover-3d"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-nautical-darknavy/40 group-hover:bg-nautical-darknavy/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-nautical-blue/20 group-hover:bg-nautical-blue/50 backdrop-blur-md rounded-full transition-all duration-300 border border-nautical-blue/50">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-nautical-darknavy to-transparent">
                  <h3 className="text-lg font-playfair font-bold mb-1">{video.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-nautical-sand text-xs">Luxury Voyage</span>
                    <span className="text-nautical-sand text-xs">{video.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-24">
        <div 
          className="absolute inset-0 bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1513511526885-8bcd465f9e56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)"
          }}
        ></div>
        
        <div className="relative luxury-container text-center">
          <h2 className="luxury-heading mb-6 text-shadow">
            Experience It <span className="blue-gradient">In Person</span>
          </h2>
          <p className="luxury-paragraph max-w-2xl mx-auto mb-8 text-nautical-sand">
            While our videos showcase the beauty of our collection, nothing compares to experiencing 
            these extraordinary vehicles in person. Schedule a private viewing at our showroom.
          </p>
          <button className="luxury-button-filled">
            Book a Private Viewing
          </button>
        </div>
      </section>
    </div>
  );
};

export default VideoPage;

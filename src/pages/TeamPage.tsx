
import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";

// Mock team data
const teamMembers = [
  {
    id: 1,
    name: "Alexander Montgomery",
    position: "Chief Executive Officer",
    bio: "With over 20 years of experience in the luxury automotive industry, Alexander leads our company with a vision of excellence and innovation.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    email: "alexander@luxuryvoyage.com",
    phone: "+377 99 12 34 56",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Isabella Laurent",
    position: "Design Director",
    bio: "Isabella brings her artistic vision and meticulous attention to detail to every vehicle in our collection, ensuring each meets our exacting standards of elegance.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    email: "isabella@luxuryvoyage.com",
    phone: "+377 99 23 45 67",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Marcus Chen",
    position: "Head of Engineering",
    bio: "Leading our engineering team, Marcus ensures that every vehicle not only looks exceptional but performs beyond expectations with cutting-edge technology.",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    email: "marcus@luxuryvoyage.com",
    phone: "+377 99 34 56 78",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "Sophia Reynolds",
    position: "Client Relations Director",
    bio: "Sophia oversees our client experience, ensuring that every interaction with Luxury Voyage is as exceptional as the vehicles we offer.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    email: "sophia@luxuryvoyage.com",
    phone: "+377 99 45 67 89",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 5,
    name: "Ethan Beaumont",
    position: "Yacht Division Manager",
    bio: "With extensive experience in maritime luxury, Ethan leads our yacht division with expertise and passion for exceptional nautical experiences.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    email: "ethan@luxuryvoyage.com",
    phone: "+377 99 56 78 90",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 6,
    name: "Olivia Martinez",
    position: "Marketing Director",
    bio: "Olivia crafts our brand narrative with creativity and strategic insight, ensuring our message resonates with the most discerning audience worldwide.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    email: "olivia@luxuryvoyage.com",
    phone: "+377 99 67 89 01",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

// Team member card component with 3D effect
const TeamMemberCard = ({ member, index }: { member: typeof teamMembers[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.5 });
  
  // 3D tilt effect on mouse move
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top; // y position within the element
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      ref={cardRef}
      className="bg-luxury-navy border border-luxury-gold/30 hover:border-luxury-gold/70 transition-all duration-500 card-3d"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index}
      variants={variants}
    >
      <div className="relative overflow-hidden h-80">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-playfair font-bold mb-1">{member.name}</h3>
          <p className="text-luxury-gold text-sm">{member.position}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-luxury-silver text-sm mb-6">{member.bio}</p>
        <div className="space-y-2">
          <div className="flex items-center text-luxury-silver text-sm">
            <Mail className="h-4 w-4 mr-2 text-luxury-gold" />
            <a href={`mailto:${member.email}`} className="hover:text-luxury-gold transition-colors">
              {member.email}
            </a>
          </div>
          <div className="flex items-center text-luxury-silver text-sm">
            <Phone className="h-4 w-4 mr-2 text-luxury-gold" />
            <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="hover:text-luxury-gold transition-colors">
              {member.phone}
            </a>
          </div>
        </div>
        <div className="flex space-x-3 mt-4">
          <a 
            href={member.social.linkedin} 
            className="text-luxury-silver hover:text-luxury-gold transition-colors"
            aria-label={`${member.name}'s LinkedIn`}
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href={member.social.twitter} 
            className="text-luxury-silver hover:text-luxury-gold transition-colors"
            aria-label={`${member.name}'s Twitter`}
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const TeamPage = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true });

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-24 mb-12">
        <div 
          className="absolute inset-0 bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)"
          }}
        ></div>
        
        <div className="relative luxury-container text-center">
          <h1 className="luxury-heading mb-6 text-shadow">
            Meet Our <span className="gold-gradient">Team</span>
          </h1>
          <p className="luxury-paragraph max-w-2xl mx-auto mb-8 text-luxury-silver">
            The visionaries and experts behind our exceptional collection of luxury vehicles.
            Each team member contributes unique expertise to deliver unparalleled experiences.
          </p>
        </div>
      </section>
      
      {/* Team Members Section */}
      <section className="section-padding bg-luxury-black">
        <div className="luxury-container">
          <motion.h2 
            ref={headingRef}
            className="luxury-subheading text-center mb-16 gold-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Passionate Experts in Luxury
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section-padding bg-luxury-navy">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="luxury-subheading mb-4 gold-gradient">
              Our Core Values
            </h2>
            <p className="luxury-paragraph max-w-2xl mx-auto text-luxury-silver">
              These principles guide everything we do, from the vehicles we select to the
              experiences we create for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We pursue perfection in every detail, from the selection of vehicles to the service we provide our clients.",
                icon: "🏆",
              },
              {
                title: "Innovation",
                description: "We continuously seek new ways to enhance our vehicles and services, pushing the boundaries of luxury and performance.",
                icon: "💡",
              },
              {
                title: "Integrity",
                description: "We maintain the highest standards of honesty and transparency in all our interactions, earning our clients' trust and loyalty.",
                icon: "⚖️",
              },
            ].map((value, index) => (
              <motion.div 
                key={value.title}
                className="bg-luxury-black p-8 border border-luxury-gold/20 hover:border-luxury-gold/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-playfair font-bold mb-3">{value.title}</h3>
                <p className="text-luxury-silver">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Our Team Section */}
      <section className="relative py-24">
        <div 
          className="absolute inset-0 bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)"
          }}
        ></div>
        
        <div className="relative luxury-container text-center">
          <h2 className="luxury-heading mb-6 text-shadow">
            Join Our <span className="gold-gradient">Team</span>
          </h2>
          <p className="luxury-paragraph max-w-2xl mx-auto mb-8 text-luxury-silver">
            We're always looking for exceptional talent to join our team of luxury vehicle experts.
            If you're passionate about creating extraordinary experiences, we'd love to hear from you.
          </p>
          <button className="luxury-button-filled">
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;

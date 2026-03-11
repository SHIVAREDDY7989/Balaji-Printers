import React, { useState } from 'react';
import { Layers, Image as ImageIcon, BookOpen, PenTool } from 'lucide-react';
import ModelsGallery from './ModelsGallery';

const services = [
  {
    icon: <Layers size={40} className="text-gradient" />,
    title: 'Offset & Flex Printing',
    description: 'High-quality offset printing for all your business needs. Vibrant flex banners, visiting cards, and multi-color pamphlets.',
    features: ['Wedding Cards', 'Laminations', 'Color Xerox', 'Stickers']
  },
  {
    icon: <ImageIcon size={40} className="text-gradient-secondary" />,
    title: 'Photo Frames & Custom Prints',
    description: 'Attractive photo frames in various sizes at reasonable prices. Wedding cards, laminations, and personalized gifts.',
    features: ['8x12 in', '12x18 in', '16x24 in', '18x24 in', '20x30 in', '24x36 in']
  },
  {
    icon: <BookOpen size={40} className="text-gradient" style={{ color: '#f59e0b' }} />,
    title: 'PJR Book Binding Works',
    description: 'Professional binding services for schools, colleges, and personal diaries. Durable and neat finishes.',
    features: ['School Notebooks', 'Diaries', 'Progress Cards', 'Answer Sheets']
  },
  {
    icon: <PenTool size={40} className="text-gradient" style={{ color: '#ec4899' }} />,
    title: 'Design & Pre-Press',
    description: 'Creative design services to make your brand stand out. From bill books to complete corporate identity.',
    features: ['Custom Layouts', 'Logo Design', 'Bill Books', 'Fast Turnaround']
  }
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleFeatureClick = (feature) => {
    setSelectedCategory(feature);
  };

  return (
    <section id="services" className="section" style={{ background: 'rgba(5, 8, 20, 0.5)' }}>
      <div className="container">
        <h2 className="section-title text-gradient">Our Premium Services</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 4rem', fontSize: '1.2rem' }}>
          We provide top-notch printing and binding solutions with uncompromised quality and timely delivery.
          Click on any item below to view our models!
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {services.map((service, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', width: 'max-content' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{service.description}</p>

              <ul style={{ listStyle: 'none', margin: 'auto 0 0 0', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', padding: 0 }}>
                {service.features.map((feature, fIdx) => (
                  <li 
                    key={fIdx} 
                    onClick={() => handleFeatureClick(feature)}
                    style={{ 
                      fontSize: '0.85rem', 
                      padding: '0.4rem 0.8rem', 
                      background: 'rgba(0, 242, 254, 0.1)', 
                      color: 'var(--accent-cyan)', 
                      borderRadius: '20px', 
                      border: '1px solid rgba(0,242,254,0.2)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--accent-cyan)';
                      e.currentTarget.style.color = '#000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 242, 254, 0.1)';
                      e.currentTarget.style.color = 'var(--accent-cyan)';
                    }}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <ModelsGallery 
        category={selectedCategory} 
        isOpen={!!selectedCategory} 
        onClose={() => setSelectedCategory(null)} 
      />
    </section>
  );
}

import React from 'react';
import { X } from 'lucide-react';

const mockData = {
  'Wedding Cards': [
    { id: 1, title: 'Traditional Gold', img: 'https://images.unsplash.com/photo-1544422960-951db116a4f5?w=500&h=500&fit=crop' },
    { id: 2, title: 'Modern Floral', img: 'https://images.unsplash.com/photo-1621245781476-aabebae81e7d?w=500&h=500&fit=crop' },
    { id: 3, title: 'Royal Die-Cut', img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&h=500&fit=crop' }
  ],
  'Photo Frames': [
    { id: 1, title: 'Classic Wood (16x24)', img: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=500&h=500&fit=crop' },
    { id: 2, title: 'Sleek Black (20x30)', img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&h=500&fit=crop' },
    { id: 3, title: 'Acrylic Mount (12x18)', img: 'https://images.unsplash.com/photo-1574737672288-c703b416e881?w=500&h=500&fit=crop' }
  ],
  'School Notebooks': [
    { id: 1, title: 'Long Book 200pg', img: 'https://images.unsplash.com/photo-1531346878377-a541e4a0ecce?w=500&h=500&fit=crop' },
    { id: 2, title: 'Custom School Diary', img: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&h=500&fit=crop' }
  ]
};

export default function ModelsGallery({ category, isOpen, onClose }) {
  if (!isOpen) return null;

  // Use mock data if available, or empty array if we don't have images for this category yet
  const items = mockData[category] || [
    { id: 0, title: 'Sample Model 1', img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=500&h=500&fit=crop' },
    { id: 1, title: 'Sample Model 2', img: 'https://images.unsplash.com/photo-1586282391129-76a6df230234?w=500&h=500&fit=crop' }
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(5, 8, 20, 0.9)',
      backdropFilter: 'blur(5px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '900px',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        padding: '2rem'
      }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
          <h2 className="text-gradient" style={{ margin: 0 }}>{category} Models</h2>
          <button 
            onClick={onClose}
            style={{ 
              background: 'rgba(255,255,255,0.1)', 
              border: 'none', 
              color: '#fff', 
              padding: '0.5rem', 
              borderRadius: '50%', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {items.map(item => (
            <div key={item.id} style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'transform 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img 
                src={item.img} 
                alt={item.title} 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
              />
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <h4 style={{ margin: 0, color: 'var(--text-main)' }}>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

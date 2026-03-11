import React, { useState } from 'react';
import { Gift, Package, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export default function Offers() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', details: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', phone: '', email: '', details: '' });
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setError('Failed to connect to the server. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="offers" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          
          {/* Seasonal Offers Card - Remains Unchanged */}
          <div className="glass-card" style={{ position: 'relative', overflow: 'hidden', border: '1px solid rgba(255, 8, 68, 0.3)', background: 'linear-gradient(145deg, rgba(255, 8, 68, 0.05) 0%, rgba(20, 5, 10, 0.8) 100%)' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.1 }}>
              <Gift size={200} />
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <Sparkles className="text-gradient-secondary" />
              <h3 className="text-gradient-secondary" style={{ fontSize: '2rem', margin: 0 }}>Seasonal Offers</h3>
            </div>
            
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-main)' }}>
              Get ahead of the season with our special festival discounts on Wedding Cards, Flex Banners, and customized Photo Frames!
            </p>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ArrowRight size={16} color="var(--accent-magenta)" /> Flat 15% off on bulk Wedding Card orders</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ArrowRight size={16} color="var(--accent-magenta)" /> Free Lamination with every 24x36in Photo Frame</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ArrowRight size={16} color="var(--accent-magenta)" /> Festival Special: Book Binding combo packs</li>
            </ul>
            
            <button className="btn" style={{ background: 'var(--gradient-secondary)', color: '#fff', width: '100%', boxShadow: '0 4px 15px rgba(255, 8, 68, 0.3)' }}>
              Claim Offer Now
            </button>
          </div>

          {/* Bulk Orders Card WITH FORM */}
          <div className="glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.05 }}>
              <Package size={200} />
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <Package className="text-gradient" />
              <h3 className="text-gradient" style={{ fontSize: '2rem', margin: 0 }}>Request Bulk Order</h3>
            </div>
            
            {success ? (
              <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--accent-cyan)' }}>
                <CheckCircle size={48} style={{ margin: '0 auto 1rem' }} />
                <h4>Request Received!</h4>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>We will contact you shortly to confirm your bulk order requirements.</p>
                <button 
                  className="btn btn-secondary" 
                  style={{ marginTop: '1.5rem' }}
                  onClick={() => setSuccess(false)}
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', zIndex: 10 }}>
                {error && <div style={{ color: '#ff4b4b', fontSize: '0.9rem', padding: '0.5rem', background: 'rgba(255,0,0,0.1)', borderRadius: '5px' }}>{error}</div>}
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input 
                    type="text" name="name" placeholder="Contact Name *" required 
                    value={formData.name} onChange={handleInputChange}
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--surface-border)', padding: '0.8rem', borderRadius: '8px', color: '#fff', outline: 'none' }} 
                  />
                  <input 
                    type="tel" name="phone" placeholder="Phone Number *" required 
                    value={formData.phone} onChange={handleInputChange}
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--surface-border)', padding: '0.8rem', borderRadius: '8px', color: '#fff', outline: 'none' }} 
                  />
                </div>
                
                <input 
                  type="email" name="email" placeholder="Email Address (Optional)" 
                  value={formData.email} onChange={handleInputChange}
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--surface-border)', padding: '0.8rem', borderRadius: '8px', color: '#fff', outline: 'none', width: '100%' }} 
                />
                
                <textarea 
                  name="details" placeholder="Describe your bulk formatting requirements, quantities, and deadlines... *" required 
                  rows="4" 
                  value={formData.details} onChange={handleInputChange}
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--surface-border)', padding: '0.8rem', borderRadius: '8px', color: '#fff', outline: 'none', resize: 'vertical', width: '100%' }} 
                ></textarea>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

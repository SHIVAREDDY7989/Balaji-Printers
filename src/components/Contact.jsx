import React, { useState } from 'react';
import { Phone, Mail, MapPin, Printer, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', phone: '', message: '' });
      }
    } catch (err) {
      console.error(err);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="contact" style={{ background: '#050814', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.5rem', marginBottom: '1rem' }}>
              <Printer size={32} color="#00f2fe" />
              <span className="text-gradient">Balaji Printers</span>
            </div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>& PJR Book Binding Works</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Your one-stop destination for premium offset printing, flex banners, wedding cards, and professional book binding services.
            </p>
          </div>

          {/* Connect Form */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Send an Inquiry</h4>
            {success ? (
               <div style={{ textAlign: 'center', padding: '1rem', background: 'rgba(0,242,254,0.1)', borderRadius: '10px' }}>
                 <CheckCircle style={{ margin: '0 auto 0.5rem', color: 'var(--accent-cyan)' }} />
                 <p style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>Your message was sent!</p>
               </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <input 
                  type="text" name="name" placeholder="Your Name" required 
                  value={formData.name} onChange={handleInputChange}
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--surface-border)', padding: '0.6rem', borderRadius: '5px', color: '#fff' }} 
                />
                <input 
                  type="tel" name="phone" placeholder="Your Phone" required 
                  value={formData.phone} onChange={handleInputChange}
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--surface-border)', padding: '0.6rem', borderRadius: '5px', color: '#fff' }} 
                />
                <textarea 
                  name="message" placeholder="How can we help you?" required rows="3"
                  value={formData.message} onChange={handleInputChange}
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--surface-border)', padding: '0.6rem', borderRadius: '5px', color: '#fff', resize: 'vertical' }} 
                />
                <button type="submit" className="btn btn-secondary" style={{ padding: '0.6rem' }} disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & Address */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Contact Details</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Phone size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p>99480 39625, 94414 38205</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Mail size={20} color="var(--accent-magenta)" style={{ flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: '0.9rem' }}>balajiprinters478@gmail.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={24} color="var(--accent-yellow)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontSize: '0.9rem' }}># 7-89/37, Mothkur Road</p>
                  <p style={{ fontSize: '0.9rem' }}>Thirumalagiri (Thonda)</p>
                  <p style={{ fontSize: '0.9rem' }}>Dist: Suryapet - 508 223 (T.G)</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Balaji Printers & PJR Book Binding Works. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

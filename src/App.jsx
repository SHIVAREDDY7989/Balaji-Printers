import React, { Suspense } from 'react';
import './App.css';

// Placeholder components that we will create next
const Hero3D = React.lazy(() => import('./components/Hero3D'));
const Navbar = React.lazy(() => import('./components/Navbar'));
const Services = React.lazy(() => import('./components/Services'));
const Offers = React.lazy(() => import('./components/Offers'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="app-container">
      {/* 3D Background Layer */}
      <div className="canvas-container">
        <Suspense fallback={null}>
          <Hero3D />
        </Suspense>
      </div>

      {/* Main Content Layer (Z-index above canvas) */}
      <div className="content-wrapper">
        <Suspense fallback={<div style={{ height: '60px' }}></div>}>
          <Navbar />
        </Suspense>
        
        <main>
          <section className="hero-section">
            <div className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <div style={{ textAlign: 'center' }}>
                  <h1 className="section-title text-gradient animate-fade-in" style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1.2' }}>
                    <span style={{ fontSize: '5rem', fontWeight: 900 }}>BALAJI</span>
                    <span style={{ fontSize: '2.5rem', fontWeight: 600, letterSpacing: '2px' }}>DIGITAL PRINTERS</span>
                  </h1>
                  <h2 className="text-muted animate-fade-in" style={{ fontSize: '2rem', animationDelay: '0.2s' }}>
                    & PJR Book Bindings
                  </h2>
                  <p className="animate-fade-in" style={{ marginTop: '2rem', fontSize: '1.2rem', maxWidth: '600px', margin: '2rem auto', animationDelay: '0.4s' }}>
                    Premium Offset, Flex Printing & Professional Book Binding Services. Bringing your ideas to life with stunning colors and precision.<br/><br/>
                    <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold', fontSize: '1.4rem', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '0 0 10px rgba(0, 242, 254, 0.5)' }}>"Technology in your hands"</span>
                  </p>
                  <div className="animate-fade-in" style={{ animationDelay: '0.6s', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button className="btn btn-primary">Bulk Orders</button>
                    <button className="btn btn-secondary">Our Services</button>
                  </div>
               </div>
            </div>
          </section>
          
          <Suspense fallback={<div>Loading Services...</div>}>
            <Services />
          </Suspense>

          <Suspense fallback={<div>Loading Offers...</div>}>
            <Offers />
          </Suspense>
        </main>
        
        <Suspense fallback={<div>Loading Contact...</div>}>
          <Contact />
        </Suspense>
      </div>
    </div>
  );
}

export default App;

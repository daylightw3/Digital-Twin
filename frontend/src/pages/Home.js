import React, { useState } from 'react';
import { Download, Play, Star, Check, ArrowRight, Menu, X } from 'lucide-react';
import { services, testimonials, caseStudies, blogPosts } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { toast } from 'sonner';
import { InlineWidget } from 'react-calendly';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDownload = (caseStudy) => {
    toast.success(`Downloading: ${caseStudy.title}`);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-20" style={{
        background: 'var(--bg-overlay)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
            AI Digital Twin
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="body-small hover:opacity-70 transition-opacity">Services</a>
            <a href="#testimonials" className="body-small hover:opacity-70 transition-opacity">Testimonials</a>
            <a href="#case-studies" className="body-small hover:opacity-70 transition-opacity">Case Studies</a>
            <a href="#blog" className="body-small hover:opacity-70 transition-opacity">Blog</a>
            <a href="#booking" className="btn-primary">Book Demo</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: 'var(--text-primary)' }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg p-6">
            <nav className="flex flex-col gap-4">
              <a href="#services" className="body-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#testimonials" className="body-medium" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
              <a href="#case-studies" className="body-medium" onClick={() => setMobileMenuOpen(false)}>Case Studies</a>
              <a href="#blog" className="body-medium" onClick={() => setMobileMenuOpen(false)}>Blog</a>
              <a href="#booking" className="btn-primary w-full" onClick={() => setMobileMenuOpen(false)}>Book Demo</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="gradient-hero-warm min-h-screen flex items-center justify-center text-center px-4 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)'
          }}>
            <span className="caption" style={{ textTransform: 'uppercase', letterSpacing: '0.025em' }}>Enterprise AI Solutions</span>
          </div>
          
          <h1 className="heading-hero mb-6">
            Transform Your Business with AI Clone Avatars
          </h1>
          
          <p className="body-large mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Create realistic AI avatars for training, customer service, and content creation. Reduce costs by 65% while scaling globally.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#booking" className="btn-primary">Book Free Demo</a>
            <a href="#services" className="btn-secondary">Explore Services</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">Our AI Avatar Solutions</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>Choose the perfect avatar technology for your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.id} className={`voice-card ${service.accent}`}>
                <h3 className="heading-2 mb-3">{service.title}</h3>
                <p className="body-small mb-4" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 caption">
                      <Check size={16} style={{ color: 'var(--text-primary)' }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 px-4" style={{ background: 'var(--bg-section)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">Book Your Demo</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>Schedule a personalized demonstration with our team</p>
          </div>
          
          <Card className="hover-lift">
            <CardContent className="p-0">
              <InlineWidget 
                url="https://calendly.com/daretotakerisk63/30min"
                styles={{
                  height: '700px',
                  width: '100%'
                }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: '232323',
                  textColor: '353535'
                }}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">What Our Clients Say</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>Trusted by industry leaders worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover-lift">
                <CardContent className="pt-6">
                  <div className="relative mb-4 rounded-lg overflow-hidden" style={{ paddingTop: '56.25%' }}>
                    <img 
                      src={testimonial.thumbnail} 
                      alt={testimonial.company}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                      <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                        <Play size={20} style={{ color: 'var(--text-primary)' }} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#FFA500" stroke="#FFA500" />
                    ))}
                  </div>
                  
                  <p className="body-small mb-4" style={{ color: 'var(--text-secondary)' }}>"{testimonial.content}"</p>
                  
                  <div>
                    <p className="body-medium font-semibold">{testimonial.author}</p>
                    <p className="caption">{testimonial.role}</p>
                    <p className="caption">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-4" style={{ background: 'var(--bg-section)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">Success Stories</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>Real results from real implementations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <Card key={study.id} className="hover-lift">
                <CardHeader>
                  <div className="caption mb-2" style={{ color: 'var(--text-muted)' }}>{study.industry}</div>
                  <CardTitle className="heading-2 mb-2">{study.title}</CardTitle>
                  <CardDescription>{study.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="body-small mb-4" style={{ color: 'var(--text-secondary)' }}>{study.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="p-2 rounded" style={{ background: 'var(--accent-grey-200)' }}>
                        <p className="caption font-semibold">{result}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => handleDownload(study)} 
                    className="btn-secondary w-full"
                  >
                    <Download className="mr-2" size={16} />
                    Download PDF ({study.fileSize})
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">Latest Insights</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>Stay updated with AI avatar trends and best practices</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover-lift overflow-hidden">
                <div className="relative" style={{ paddingTop: '60%' }}>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="caption px-2 py-1 rounded" style={{ background: 'var(--accent-purple-200)' }}>{post.category}</span>
                    <span className="caption">{post.readTime}</span>
                  </div>
                  <CardTitle className="heading-2 mb-2">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="caption">{post.author}</p>
                      <p className="caption" style={{ color: 'var(--text-muted)' }}>{post.date}</p>
                    </div>
                    <button className="btn-secondary flex items-center gap-2">
                      Read More
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4" style={{ background: 'var(--text-primary)', color: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="heading-2 mb-4" style={{ color: 'white' }}>AI Clone Avatar</h3>
              <p className="body-small" style={{ color: 'rgba(255,255,255,0.7)' }}>Enterprise AI avatar solutions for modern businesses.</p>
            </div>
            
            <div>
              <h4 className="body-medium font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="body-small" style={{ color: 'rgba(255,255,255,0.7)' }}>Static Avatars</a></li>
                <li><a href="#services" className="body-small" style={{ color: 'rgba(255,255,255,0.7)' }}>Motion Avatars</a></li>
                <li><a href="#services" className="body-small" style={{ color: 'rgba(255,255,255,0.7)' }}>Interactive Streaming</a></li>
                <li><a href="#services" className="body-small" style={{ color: 'rgba(255,255,255,0.7)' }}>Photo to Video</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="body-medium font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#case-studies" className="body-small" style={{ color: 'rgba(255,255,255,0.7)' }}>Case Studies</a></li>
                <li><a href="#blog" className="body-small" style={{ color: 'rgba(255,255,255,0.7)' }}>Blog</a></li>
                <li><a href="#testimonials" className="body-small" style={{ color: 'rgba(255,255,255,0.7)' }}>Testimonials</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="body-medium font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="body-small" style={{ color: 'rgba(255,255,255,0.7)' }}>contact@aicloneavatar.com</li>
                <li className="body-small" style={{ color: 'rgba(255,255,255,0.7)' }}>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
            <p className="text-center caption" style={{ color: 'rgba(255,255,255,0.7)' }}>
              © 2025 AI Clone Avatar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
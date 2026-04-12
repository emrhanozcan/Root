import { useState } from 'react';
import { usePageTitle } from '@/hooks/usePageTitle';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { siteConfig } from '@/data/siteConfig';
import { partners } from '@/data/partners';
import { Mail, MapPin, Send, User, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  usePageTitle('Contact');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder
    alert('Thank you for your message! This form is not yet connected to a backend.');
  };

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Banner */}
      <section className="bg-root-dark text-white py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <div className="w-12 h-1 rounded-full bg-root-orange mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 font-heading">
                Get in{' '}
                <span className="text-root-orange">Touch</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                Have questions about the ROOT project? Want to collaborate or learn more?
                We'd love to hear from you.
              </p>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28 bg-root-bg">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimateOnScroll>
                <Card padding="lg" hover={false}>
                  <h2 className="text-2xl font-bold text-root-dark mb-6 font-heading">
                    Send us a message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-sm font-medium text-root-dark mb-1.5"
                        >
                          Your Name
                        </label>
                        <div className="relative">
                          <User
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-root-muted/50"
                          />
                          <input
                            id="contact-name"
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="John Doe"
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-root-border bg-root-bg text-root-dark placeholder:text-root-muted/40 focus:outline-none focus:ring-2 focus:ring-root-orange/30 focus:border-root-orange transition-all text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-sm font-medium text-root-dark mb-1.5"
                        >
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-root-muted/50"
                          />
                          <input
                            id="contact-email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            placeholder="john@example.com"
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-root-border bg-root-bg text-root-dark placeholder:text-root-muted/40 focus:outline-none focus:ring-2 focus:ring-root-orange/30 focus:border-root-orange transition-all text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-sm font-medium text-root-dark mb-1.5"
                      >
                        Subject
                      </label>
                      <div className="relative">
                        <MessageSquare
                          size={16}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-root-muted/50"
                        />
                        <input
                          id="contact-subject"
                          type="text"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                          placeholder="What is this about?"
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-root-border bg-root-bg text-root-dark placeholder:text-root-muted/40 focus:outline-none focus:ring-2 focus:ring-root-orange/30 focus:border-root-orange transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-medium text-root-dark mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us more..."
                        className="w-full px-4 py-2.5 rounded-lg border border-root-border bg-root-bg text-root-dark placeholder:text-root-muted/40 focus:outline-none focus:ring-2 focus:ring-root-orange/30 focus:border-root-orange transition-all resize-none text-sm"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      <Send size={16} />
                      Send Message
                    </Button>
                  </form>
                </Card>
              </AnimateOnScroll>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <AnimateOnScroll delay={150}>
                <div className="space-y-6">
                  {/* Email */}
                  <Card hover={false}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-root-orange/10 flex items-center justify-center flex-shrink-0">
                        <Mail size={20} className="text-root-orange" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-root-dark mb-1 font-heading">
                          Email
                        </h3>
                        <a
                          href={`mailto:${siteConfig.contactEmail}`}
                          className="text-sm text-root-orange hover:underline"
                        >
                          {siteConfig.contactEmail}
                        </a>
                      </div>
                    </div>
                  </Card>

                  {/* Location */}
                  <Card hover={false}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-root-yellow/15 flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-root-yellow" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-root-dark mb-1 font-heading">
                          Coordinating Organization
                        </h3>
                        <p className="text-sm text-root-muted">
                          Ankara, Türkiye
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Partner Contacts */}
                  <Card hover={false}>
                    <h3 className="text-sm font-bold text-root-dark mb-4 font-heading">
                      Partner Organizations
                    </h3>
                    <div className="space-y-3">
                      {partners.map((p) => (
                        <div
                          key={p.id}
                          className="flex items-center gap-3 text-sm"
                        >
                          <span className="w-7 h-7 rounded-lg bg-root-bg flex items-center justify-center text-xs font-bold text-root-orange border border-root-border">
                            {p.countryCode}
                          </span>
                          <span className="text-root-muted">{p.name}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

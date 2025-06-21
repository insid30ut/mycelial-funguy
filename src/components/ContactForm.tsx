import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: 'General Question',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission (in a real app, this would send to a backend)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: 'General Question',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }
  };

  return (
    <div className="organic-card p-6">
      <h3 className="text-2xl font-bold text-[var(--color-forest-brown-dark)] mb-6 text-center">
        Get in Touch
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[var(--color-forest-brown-dark)] mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="organic-input"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--color-forest-brown-dark)] mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="organic-input"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-forest-brown-dark)] mb-2">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="organic-select"
          >
            <option value="General Question">General Question</option>
            <option value="Product Recommendation">Product Recommendation</option>
            <option value="Collaboration">Collaboration</option>
            <option value="Technique Help">Technique Help</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[var(--color-forest-brown-dark)] mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="organic-textarea"
            placeholder="Tell me about your mushroom cultivation journey, questions, or ideas..."
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full cartoon-button-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <div className="mushroom-loading mr-2"></div>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mt-4 p-4 bg-green-100 border border-green-200 text-green-800 rounded-xl">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Thanks for reaching out! I'll get back to you soon.
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-100 border border-red-200 text-red-800 rounded-xl">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Something went wrong. Please try again or contact me directly.
            </div>
          </div>
        )}
      </form>

      {/* Alternative Contact */}
      <div className="mt-8 pt-6 border-t border-[var(--color-earth-green)]/20 text-center">
        <p className="text-sm text-[var(--color-forest-brown)]/70 mb-2">
          Or reach out directly:
        </p>
        <a
          href="mailto:hello@mycelialfunguy.com"
          className="inline-flex items-center text-[var(--color-electric-blue)] hover:text-[var(--color-deep-purple)] transition-colors duration-300"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          hello@mycelialfunguy.com
        </a>
      </div>
    </div>
  );
};

export default ContactForm;

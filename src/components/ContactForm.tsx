import { useState, type FormEvent, type DragEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Upload, X, FileText } from 'lucide-react';
import api from '../api/axios';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('subject', formData.subject);
      data.append('message', formData.message);
      if (file) data.append('file', file);

      await api.post('/contact', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFile(null);
    } catch {
      showToast('Failed to send message. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {toast && (
        <div className={`toast toast-${toast.type}`} id="contact-toast">
          {toast.message}
        </div>
      )}

      <motion.form
        onSubmit={handleSubmit}
        className="glass-card"
        style={{ padding: '2rem' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        id="contact-form"
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          <div className="form-group">
            <label className="form-label" htmlFor="contact-name">Full Name</label>
            <input
              className="form-input"
              id="contact-name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="contact-email">Email Address</label>
            <input
              className="form-input"
              id="contact-email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-subject">Subject</label>
          <input
            className="form-input"
            id="contact-subject"
            type="text"
            placeholder="How can we help?"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-message">Message</label>
          <textarea
            className="form-input"
            id="contact-message"
            placeholder="Tell us about your project..."
            rows={5}
            style={{ resize: 'vertical' }}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </div>

        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
          <label className="form-label">Attach a file (optional)</label>
          
          {!file ? (
            <div
              className={`file-upload-zone ${isDragging ? 'dragging' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById('contact-file')?.click()}
            >
              <Upload size={24} className="text-indigo-400" />
              <div>
                <p style={{ fontWeight: 500, fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                  Drag & drop your file here, or <span className="gradient-text" style={{ textDecoration: 'underline' }}>browse</span>
                </p>
                <p style={{ fontSize: '0.75rem', color: '#64748b' }}>
                  Supports PDF, PNG, JPG, DOC (Max 5MB)
                </p>
              </div>
              <input
                id="contact-file"
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx"
              />
            </div>
          ) : (
            <div className="file-preview-item">
              <div className="file-preview-info">
                <FileText size={20} color="#818cf8" />
                <div>
                  <p style={{ fontWeight: 500, color: 'white', fontSize: '0.875rem' }}>{file.name}</p>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{formatFileSize(file.size)}</p>
                </div>
              </div>
              <button
                type="button"
                className="file-remove-btn"
                onClick={() => setFile(null)}
                aria-label="Remove file"
              >
                <X size={18} />
              </button>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="btn-primary"
          disabled={isSubmitting}
          id="contact-submit"
          style={{ width: '100%', justifyContent: 'center' }}
        >
          {isSubmitting ? (
            <div className="spinner" />
          ) : (
            <>
              Send Message
              <Send size={18} />
            </>
          )}
        </button>
      </motion.form>
    </>
  );
};

export default ContactForm;

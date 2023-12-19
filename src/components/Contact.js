import { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import '../styles.css';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xwkgeoyw');
  const [formData, setFormData] = useState({
    name: '',
    region: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  useEffect(() => {
    let timer;
    if (state.succeeded) {
      setSubmitted(true);
      timer = setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          region: '',
          phone: '',
          message: '',
        });
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [state.succeeded]);

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-info-header">
            <h2 className="contact-text">İletişim Bilgileri</h2>
            <p className="contact-text">Telefon 1: +90 539 103 4066</p>
            <p className="contact-text">Telefon 2: +90 533 847 3706</p>
            <p>Adres: Mumcu Tepe Sk 4, Hamitköy/Lefkoşa</p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13039.019524791527!2d33.3729432!3d35.2125741!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dfc91f36ab0c65%3A0xa66e9cf589bfcced!2sGold%20Hospitals!5e0!3m2!1sen!2s!4v1702982990251!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gold Hospital Location"
            />
          </div>
        </div>
        <div className="contact-form-container">
          <h2>Bize Ulaşın</h2>
          <div className="contact-form-cont">
            <form onSubmit={onSubmit} className="contact-form">
              <div className="form-element">
                <label htmlFor="name">
                  Adınız:
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Adınız"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </label>
              </div>
              <div className="form-element">
                <label htmlFor="region">
                  Bölge:
                  <select
                    id="region"
                    name="region"
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    required
                  >
                    <option value="Region 1">Lefkoşa</option>
                    <option value="Region 2">Gazimağusa</option>
                    <option value="Region 2">Girne</option>
                    <option value="Region 2">Güzelyurt</option>
                    <option value="Region 2">Lefke</option>
                    <option value="Region 2">İskele</option>
                  </select>
                </label>
              </div>
              <div className="form-element">
                <label htmlFor="phone">
                  Telefon Numaranız:
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Telefon Numaranız"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </label>
              </div>
              <div className="form-element">
                <label htmlFor="message">
                  Mesajınız:
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Bilgi Almak İstiyorum."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </label>
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="submit-button"
              >
                Gönder
              </button>
              {submitted && (
                <div className="success-message">
                  <h2>Bize ulaştığınız için teşekkürler!</h2>
                  <p>Size dönüş sağlayacağız..</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

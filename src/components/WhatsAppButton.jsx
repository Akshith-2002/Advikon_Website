import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const phone = '919818745239';
  const message = encodeURIComponent('Hi, I am interested in Advikon vending machines. Please share more details.');

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
      <span className="whatsapp-tooltip">Chat with us</span>
    </a>
  );
}

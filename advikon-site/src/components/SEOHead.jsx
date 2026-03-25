import { useEffect } from 'react';

export default function SEOHead({ title, description }) {
  useEffect(() => {
    document.title = title
      ? `${title} | Advikon Technologies`
      : 'Advikon Technologies | Smart Vending Machines | 100% Made in India';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}

import { ContactHero } from '@/components/ContactHero/ContactHero';
import { ContactPageForm } from '@/components/ContactPageForm/ContactPageForm';

const Contact = () => {
  return (
    <div className=''>
      <ContactHero />
      <ContactPageForm />
      <img src="/images/map.png" alt="map" />
    </div>
  );
};

export default Contact;

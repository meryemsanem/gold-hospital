import React from 'react';
import '../styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Homepage = () => {
  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="homepage" id="homepage">
      <h1>Refleksoloji Nedir?</h1>
      <p>
        Refleksoloji, insan vücudundaki organların, el ve ayaklarda sonlanan
        sinir uçlarına bası uygulanarak, çeşitli rahatsızlıklara yönelik destek
        tedavi sağlanan tamamlayıcı tıp metodu. Refleksoloji ile, belirli baskı
        noktalarına çeşitli masajlar yaparak organlardaki bozukluklar
        iyileştirilmeye çalışılır. Ayaklara uygulanan özel masaj hareketleri ile
        bedenin belli alanlarında toplanan enerjiyi dağıtarak vücudun kendi
        kendini tedavi etme yeteneğini harekete geçirme yöntemi olarak
        tanımlanabilir.
      </p>
      <button type="button" className="info" onClick={handleClick}>
        Gold Hospitals&apos;a Ulaşın
        {' '}
        <FontAwesomeIcon icon={faPhone} />
      </button>
    </section>
  );
};

export default Homepage;

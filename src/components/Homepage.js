import React from 'react';
import '../styles.css';
// import imageHomepage from '../images/ref2.jpg';

const Homepage = () => (
  <section className="homepage" id="homepage">
    <h1>Refleksoloji Nedir?</h1>
    <p>
      Refleksoloji, insan vücudundaki organların, el ve ayaklarda sonlanan sinir
      uçlarına bası uygulanarak, çeşitli rahatsızlıklara yönelik destek tedavi
      sağlanan tamamlayıcı tıp metodu. Refleksoloji ile, belirli baskı
      noktalarına çeşitli masajlar yaparak organlardaki bozukluklar
      iyileştirilmeye çalışılır. Ayaklara uygulanan özel masaj hareketleri ile
      bedenin belli alanlarında toplanan enerjiyi dağıtarak vücudun kendi
      kendini tedavi etme yeteneğini harekete geçirme yöntemi olarak
      tanımlanabilir.
    </p>
    {/* <img src={imageHomepage} className="img" alt="Description" /> */}
  </section>
);

export default Homepage;

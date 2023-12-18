import React from 'react';
import '../styles.css';
import secondImage from '../images/ref1.gif';
import firstImage from '../images/ref2.jpg';

const About = () => (
  <section className="about" id="about">
    <div className="text-and-image">
      <div className="text">
        <h2>Refleksoloji faydaları nelerdir?</h2>
        <ul>
          <li>
            Kan akışını hızlandırır ve şeker, tansiyon ve kolesterol gibi
            rahatsızlıkların dengede kalmasını sağlar.
          </li>
          <li>Stresi ve anksiyeteyi azaltmaya yardımcı olur.</li>
          <li>Bel, boyun ve kas ağrılarına iyi gelir.</li>
          <li>Endorfin üretimini artırarak vücudun rahatlamasını sağlar.</li>
          <li>
            Ruhsal ya da fiziksel nedenlere bağlı uykusuzluk ve yorgunluğu
            azaltır.
          </li>
          <li>
            Kronik ya da kronik olmayan hastalıklarda uygulanan tedaviyi
            destekler.
          </li>
          <li>Detoks etkisi yaparak lenf dolaşımını hızlandırır.</li>
          <li>Kan dolaşımını ve basıncını düzenler.</li>
          <li>
            Vücut sağlığı için faydalı hormonları artırır ve bağışıklık
            sistemini uyarır.
          </li>
          <li>Dolaşım, boşaltım ve sinir sistemini uyarır.</li>
          <li>Vücutta bulunan toksinleri azaltır.</li>
          <li>Migren ve baş ağrılarının şiddetini azaltır.</li>
          <li>Zihinsel fonksiyonları uyararak konsantrasyonu artırır.</li>
          <li>Eklem hareketliliğini artırır.</li>
          <li>Adet öncesi semptomları ve adet sancılarını azaltır.</li>
        </ul>
      </div>
      <div className="image-first">
        <img src={firstImage} alt="Text" />
      </div>
    </div>
    <div className="image-and-text">
      <div className="image">
        <img src={secondImage} alt="Text" />
      </div>
      <div className="text">
        <h2>Refleksoloji Noktaları ve Alanları Nelerdir?</h2>
        <p>
          El, ayak ve kulaklarda bulunan refleksoloji noktaları vücutta bulunan
          belli organlara, sistemlere ve kemiklere karşılık gelmektedir. Bu
          anlamda, organ ve sistemler üzerinde etki yaratabilmek amacıyla el ve
          ayakların alt, üst ve yan bölümlerine; kulakların ise gözle
          görülebilen noktalarına masaj uygulanmaktadır. Refleksoloji ayak, el
          ve kulaklardaki refleks noktalarının haritaları üzerinden
          uygulanmaktadır. Organ ve sistemlerin yansıdığı noktaların en geniş
          olduğu bölüm ayaklardır. Vücudu dikey olarak temsil eden sağ ve sol
          ayaklarda farklı organlar uyarılmaktadır. Kalp başta olmak üzere
          vücudun sol tarafından bulunan tüm organlar sol ayakta, karaciğer gibi
          sağ tarafta yer alan organlar ise sağ ayakta temsil edilmektedir.
        </p>
      </div>
    </div>
  </section>
);

export default About;

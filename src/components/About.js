import React from 'react';
import '../styles.css';
import secondImage from '../images/ref1.gif';
import firstImage from '../images/ref2.jpg';
import image1 from '../images/kirec.jpg';
import image2 from '../images/varis.jpg';
import image3 from '../images/rom.jpg';
import image4 from '../images/video1.mp4';

const contentData = [
  {
    header: 'Kireçlenme',
    text: 'Sık kullanılan diz, bilek ve parmak eklemlerinde daha çok görülmekle birlikte bulunan her noktada kireçlenme meydana gelebilir. Kıkırdağın tahr​ip olmasının fazla kilo, eklem bölgesini etkileyen yaralanmalar, kas zayıflığı, romatizmalı hastalıklar gibi pek çok farklı nedeni olabilir. Yakın aile bireylerinizde kireçlenme varsa sizin de kireçlenme sorunu yaşama olasılığınız yükselir çünkü kalıtsal olarak nesilden nesile aktarılan bir problemdir. Refleksoloji sıvıları besleyen sinirlerin görevini daha iyi yerine getirmesini sağlar.',
    image: image1,
    alt: 'Description 1',
  },
  {
    header: 'Varis Tedavisi',
    text: 'Varis tedavisindeki amaç yaşam kalitesini arttırmaktır. Hastalık genellikle iyi huylu seyir gösterip , hastaların çoğunda ameliyat gerekmez ve konservatif tedavi yöntemleriyle iyi sonuçlar alınır. Refleksoloji masaj aleti ile ayak altından uygulanan masaj damarlardaki kan akışını düzenler.',
    image: image2,
    alt: 'Description 2',
  },
  {
    header: 'Romatizma',
    text: 'Romatizma farklı hastalıklara bağlı olarak eklem, kas, kemik ve yumuşak dokularda görülen ağrılar olarak tanımlanabilir.​ Romatizmaya çoğunlukla genetik faktör, eklemin aşırı yıpranması, fazla kilo, spor yaralanmaları ve travmalar sebep olabilir. Ayak altından uygulanan masaj ve tensler yardımıyla vücuda gönderilen akımlar sayesinde ağrıların azalmasına yardımcı olur.',
    image: image3,
    alt: 'Description for Romatizma',
  },
  {
    header: 'Selülit Tedavisi',
    text: 'Selülit; özellikle kadınlarda görülen ve adiposit adı verilen derialtı yağ hücre gruplarının kan ve lenfatik dolaşımı bozmasıyla oluşan bir yapıdır. Deride çöküntülere ve portakal kabuğu görüntülerine neden olur. Selülit oluşumu dolaşım bozukluğu ile başlar. Refleksoloji masaj aleti sayesinde vücuttaki kan dolaşımı düzenlenir ve tahrip olan bölgenin onarımını sağlar.',
    video: image4,
    alt: 'Description for Selülit Tedavisi',
  },
];

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
    <div className="diseases">
      <h2>Refleksoloji cihazı hangi hastalıklarda uygulanabilir?</h2>
      {contentData.map((data) => (
        <div key={data.header} className="content">
          <div className="text">
            <h3>{data.header}</h3>
            <p>{data.text}</p>
          </div>
          <div className="media">
            {data.image && <img src={data.image} alt={data.alt} />}
            {data.video && (
              <video src={data.video} alt={data.alt} controls>
                <track kind="captions" srcLang="en" label="English" />
              </video>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default About;

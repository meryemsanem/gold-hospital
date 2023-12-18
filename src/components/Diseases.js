import React from 'react';
import '../styles.css';
import image1 from '../images/kirec.jpg';
import image2 from '../images/varis.jpg';
import image3 from '../images/rom.jpg';
import image4 from '../images/video1.mp4';
import image5 from '../images/bel-boyun.jpg';
import usageImage from '../images/usage.jpg';

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
    header: 'Bel ve Boyun Fıtığı Tedavisi',
    text: 'Tekrarlayan hareketler, aşırı zorlanmalar, duruş bozuklukları ve uygun olmayan pozisyonlarda yapılan fiziksel aktiviteler dış kısmındaki anulus fibrozis adı verilen kuşakta yırtılmalara yol açar, yırtılma anulusun iç liflerinden başlayarak dışarıya doğru uzanır. Hastalık daha da ilerleyince bacağa giden siyatik sinirini sıkıştırır, daha çok genç ve orta yaşlarda görülür. İnsanların yeterince spor yapamaması veya vücutlarının yeterince güçlü olmamasından kasların yeterince güçlü olmamasından kaynaklanan sorunlardan dolayı fıtık rahatsızlıkları sık görülmektedir. Bel fıtığı ve boyun fıtığını önleyici tedbir olarak Gold Hospital tens cihazının kullanılarak kasları güçlendirmek amacıyla yani vücuda pasif spor yaptırarak bel ve boyun fıtığı rahatsızlığını en aza indirmek mümkündür. Ayrıca bölgesel ağrı gidermede kullanılır.',
    image: image5,
    alt: 'Description for Bel ve Boyun Fıtığı Tedavisi',
  },
  {
    header: 'Selülit Tedavisi',
    text: 'Selülit; özellikle kadınlarda görülen ve adiposit adı verilen derialtı yağ hücre gruplarının kan ve lenfatik dolaşımı bozmasıyla oluşan bir yapıdır. Deride çöküntülere ve portakal kabuğu görüntülerine neden olur. Selülit oluşumu dolaşım bozukluğu ile başlar. Refleksoloji masaj aleti sayesinde vücuttaki kan dolaşımı düzenlenir ve tahrip olan bölgenin onarımını sağlar.',
  },
  {
    header: 'Bölgesel Yağ Yakımı ve Zayıflama',
    text: 'Spor yapmayı sevmeyenler ya da vakit bulamayanlar için pasif jimnastik ile yağ yakımı ve zayıflama sonucunu elde edebilirsiniz. Pasif jimnastik; bir nevi yatarak zayıflamaktır yani oturduğunuz yerden vücuda verilen titreşimlerle kasları uyarması sonucu zayıflama yöntemidir. Gold Hospitalın pedleri ile bölgesel zayıflamanın yanı sıra gevşek dokuları da sıkılaştırabilirsiniz. Günde ortalama 15-20 dakika uygulayarak cihazın verdiği titreşim ile istenilen bölge zayıflatılabilir. Bunun yanı sıra ısı terapisi(kemer) ile de yağ yakma özelliği bulunmaktadır.',
    video: image4,
    alt: 'Description for Bölgesel Yağ Yakımı ve Zayıflama',
  },
];

const Diseases = () => (
  <>
    <section className="diseases" id="diseases">
      <h2>Refleksoloji cihazı hangi hastalıklarda uygulanabilir?</h2>
      {contentData.map((data) => (
        <div
          key={data.id}
          className={`content ${data.image ? '' : 'no-image'}`}
        >
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
      <div className="additional-content">
        <h2>Pedlerin Kullanım Alanları</h2>
        <img src={usageImage} alt="Usage" />
      </div>
    </section>
  </>
);
export default Diseases;

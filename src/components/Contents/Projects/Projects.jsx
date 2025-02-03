import Project from "./Project";
const _projects = [
  {
      _title: "Hasta Kayıt ve Randevu Sistemi",
      _atts: [
        "Müşteri, Görüşme, Randevu Modülleri",
        "Klinik, Personel ve Rapor ve PDF Export Modülleri",    
        "Randevu Takvimi",    
      ],
      _href: "https://bit.ly/muharrem-hasta-kayit-ve-randevu",
  }, 
  {
    _title: "Facebook ve Twitter API Yönetim Sistemi",
    _atts: [
      "Facebook Business ve Twitter API Modülleri",
      "Facebook Business hesaba bağlı 100 den fazla hesaba tek bir panel üzerinden toplu şekilde gönderi (Text, Image, Video, Multiple Post ) paylaşımı sistemi",    
      "Belirli #hashtag veya tweet içeriklerine göre tweetleri çekip veritabanına kaydedip listelemek durum işaretlemek",    
    ],
    _href: "https://bit.ly/muharrem-facebook-api",
  },  
  {
    _title: "Google Ads API",
    _atts: [
      "Google Ads hesabına ait hesap ve kampanya modülleri",
      "Bakiye ve harcama bilgisi takibi modülleri",    
    ],
    _href: "#",
  },    
  {
    _title: "Hazır Wordpress Temalar",
    _atts: [
      "Emlak, Kurumsal, Otel, Transfer Tur temaları",
      "Domaine lisanslama algoritması ile şifreleme", 
      "Ioncube ile dosya ile şifreleme"   
    ],
    _href: "http://demo.temadijital.com",
  },
  







  {
    _title: "Diğer Projeler",
    _atts: [
      "B2B ve B2C Sistemler",
      "Kurumsal ve blog web siteleri", 
      "Sanal pos entegrasyonları ( Garanti, Akbank, Vakıfbank, Iyzico, paytr vs.)",
      "Kargo Entegrasyonları",
      "SMS Entegrasyonları ( Gold Mesaj Verimor Net GSM)",
      "Bülten aboneliği ve bildirim sistemleri",
      "Google Ads Conversions",
      "Facebook Pixel, Track Events",
      "Plesk, Cpanel, Direct Admin, Hestia Control Panel yönetim ve kurulumu",
      "Java ve C# Basit masaüstü uygulamaları",
      "Android için batarya kontrollü sms gönderme sistemi"
    ],
    _href: "#",
  },    
];
const _projects_block = {
    _title:'Projelerim',
    _desc:'Muharrem Etdöğer',
}
export default function Projects() {
    return (
      <>
      <section className="bg-white products-list" id="landing-projects">
        <div className="container px-5 pb-5">
          <div className="row">
            <div className="col-md-12 text-center">
              {_projects_block._title &&          
                  <h2 className="display-5 fw-bolder">
                    <span className="text-gradient d-inline">{_projects_block._title}</span>
                  </h2>
              }
              {_projects_block._desc &&          
                  <p className="lead fw-light mb-4">{_projects_block._desc}</p>
              }                         
            </div>
          </div>
          <div className='row'>
            {
                _projects.map((g) => (             
                    <Project gObj={g} key={g._title} />
                ))
            }
          </div>
        </div>
      </section>
      </>
    )
}
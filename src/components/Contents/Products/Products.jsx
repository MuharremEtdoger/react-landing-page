import Product from "./Product";
const _products = [
  {
      _title: "PHP",
      _desc: "PHP ile programlama",
      _image: "src/assets/img/products/php-image.png",
  },
  {
    _title: "Laravel",
    _desc: "Laravel ile web uygulamaları",
    _image: "src/assets/img/products/laravel-image.png",
  },
  {
    _title: "Wordpress",
    _desc: "Tema ve eklenti geliştirme",
    _image: "src/assets/img/products/wordpress-image.png",
  },
  {
    _title: "Node.js",
    _desc: "Node.js ile web uygulamaları",
    _image: "src/assets/img/products/node-js-image.png",
  },    
  {
    _title: "React",
    _desc: "React ile frontend çalışmaları",
    _image: "src/assets/img/products/react-image.png",
  },  
  {
    _title: "Javascript & jQuery",
    _desc: "Javascript & jQuery işlemleri",
    _image: "src/assets/img/products/javascript-image.png",
  },  
  {
    _title: "CSS",
    _desc: "CSS işlemleri",
    _image: "src/assets/img/products/css-image.png",
  }, 
  {
    _title: "HTML",
    _desc: "HTML kodlama",
    _image: "src/assets/img/products/html-image.png",
  },     
];
const _products_block = {
    _title:'Yeteneklerim',
    _desc:'Muharrem Etdöğer',
}
export default function Products() {
    return (
      <>
      <section className="bg-white py-5 products-list" id="landing-products">
        <div className="container px-5 pb-5">
          <div className="row">
            <div className="col-md-12 text-center">
              {_products_block._title &&          
                  <h2 className="display-5 fw-bolder">
                    <span className="text-gradient d-inline">{_products_block._title}</span>
                  </h2>
              }
              {_products_block._desc &&          
                  <p className="lead fw-light mb-4">{_products_block._desc}</p>
              }                         
            </div>
          </div>
          <div className='row'>
            {
                _products.map((g) => (             
                    <Product gObj={g} key={g._title} />
                ))
            }
          </div>
        </div>
      </section>
      </>
    )
}
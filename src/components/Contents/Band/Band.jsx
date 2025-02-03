const _band_block = {
    _title:'Daha Fazla Bilgi İçin',
    _button:'İletişime Geçin',
}
export default function Band() {
    return (
        <section className="py-5 bg-gradient-primary-to-secondary text-white" id="landing-contact">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        { _band_block._title &&          
                            <h2 className="display-4 fw-bolder mb-4">{_band_block._title}</h2>
                        }                        
                        { _band_block._button &&          
                            <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="mailto:muharremetdoger@gmail.com">{_band_block._button}</a>                           
                        }                         
                    </div>
                </div>
        </section>      
    )
}
export default function Navbar() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-gradient-primary-to-secondary py-3 fixed-top">
            <div className="container px-5">
                <a className="navbar-brand" href=""><span className="fw-bolder text-white">Muharrem Etdöğer</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                        <li className="nav-item"><a className="nav-link to-div-link text-white" href="#landing-head">Anasayfa</a></li>
                        <li className="nav-item"><a className="nav-link to-div-link text-white" href="#landing-about">Hakkımda</a></li>
                        <li className="nav-item"><a className="nav-link to-div-link text-white" href="#landing-products">Yeteneklerim</a></li>
                        <li className="nav-item"><a className="nav-link to-div-link text-white" href="#landing-projects">Projelerim</a></li>
                        <li className="nav-item"><a className="nav-link to-div-link text-white" href="#landing-contact">İletişim</a></li>
                    </ul>
                </div>
            </div>
        </nav>      
      </>
    )
  }
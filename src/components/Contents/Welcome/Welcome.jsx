export default function Welcome() {
    return (
      <>
            <section className="bg-light py-5" id="landing-about">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xxl-8">
                            <div className="text-center my-5">
                                <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">Hakkımda</span></h2>
                                <p className="lead fw-light mb-4">Muharrem Etdöğer</p>
                                <p className="text-muted">İskenderun Teknik Üniversitesi(Mustafa Kemal Üniversitesi) Bilgisayar Mühendisliği bölümünden Haziran 2015 yılında mezun oldum. 9 Yıllık Full Stack Web Developer olarak çalıştığım iş hayatımda backend ve frontend olarak görev yaptım. Backend ve fronted iki taraflı olarak kendimi geliştirdim. MVC yapısını kullanan frameworkler ve Wordpress konusunda ileri seviyede tecrübem bulunmaktadır. Web çözümlerinin yanı sıra çalışma hayatımda aktif olarak kullanmasam da OOP programlama dillerinde (C#, Java ve Android) bilgi sahibiyim.</p>
                                <div className="d-flex justify-content-center fs-2 gap-4">
                                    <a className="text-gradient" href="https://x.com/muharremetd" target="_blank"><i className="bi bi-twitter"></i></a>
                                    <a className="text-gradient" href="https://www.linkedin.com/in/muharrem-etdoger/" target="_blank"><i className="bi bi-linkedin"></i></a>
                                    <a className="text-gradient" href="https://github.com/MuharremEtdoger" target="_blank"><i className="bi bi-github"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      </>
    )
}
function Index() {
    return (
        <section className="d-flex justify-content-center align-items-center vh-100">
            <div className="containe">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-9 col-xl-7">
                        <div className="card rounded-3">
                            <div className="card-body p-4 align-items-center text-center">
                                <div className="text-center mb-3">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                         className="img-fluid" alt="Login illustration" style={{ maxWidth: "80%" }} />
                                </div>
                                <h1 className="display-4 mb-4">Task Tracker</h1>
                                <p className="lead">Enostaven sistem za upravljanje nalog in projektov.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Index;
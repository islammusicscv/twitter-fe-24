const Header = () => {
    return (
        <>
            <header data-bs-theme="dark">
                <div className="collapse text-bg-dark" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <h4>About</h4>
                                <p className="text-body-secondary">Projektni teden</p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4>Meni</h4>
                                <ul className="list-unstyled">
                                    <li><a href="/" className="text-white">Home</a></li>
                                    <li><a href="/make" className="text-white">Make</a></li>
                                    <li><a href="#" className="text-white">Login</a></li>
                                    <li><a href="/register" className="text-white">Register</a></li>
                                    <li><a href="/users" className="text-white">Users</a></li>
                                    <li><a href="#" className="text-white">Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container">
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <strong>Twitter ERŠ</strong>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;
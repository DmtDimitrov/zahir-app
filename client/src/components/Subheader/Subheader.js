// import './Header.css';

export default function Subheader({
    title
}) {
    return (
        <div className="main-container connect">
            <div className="inside-container">
                <div className="row">
                    <div className="col-12 subhead">
                        <h1 className="text-center">{title}</h1>
                        <nav className="breadcrumb page-linker">
                            <a className="breadcrumb-item" href="#">Home <i className="fas fa-angle-right"></i></a>
                            <span className="breadcrumb-item active">{title}</span>
                        </nav>
                    </div>

                </div>
            </div>
        </div>
    );
}
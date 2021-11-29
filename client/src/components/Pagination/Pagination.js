
export default function Pagination() {

    return (
        <nav className="pagin-nr">
            <ul className="pagination  justify-content-center">
                <li className="page-item  arr-lf-rt">
                    <a className="page-link" href="/#" tabIndex="-1"><i className="fas fa-arrow-left"></i> </a>
                </li>
                <li className="page-item"><a className="page-link" href="/#">01</a></li>
                <li className="page-item active">
                    <a className="page-link" href="/#">02 <span className="sr-only">(current)</span></a>
                </li>
                <li className="page-item"><a className="page-link" href="/#">3</a></li>
                <li className="page-item arr-lf-rt">
                    <a className="page-link" href="/#"><i className="fas fa-arrow-right"></i></a>
                </li>
            </ul>
        </nav>
    );
}
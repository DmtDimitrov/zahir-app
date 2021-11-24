export default function PopularRecipes() {
    return (
        <div className="main-container promotion-bg">
            <div className="inside-container">
                <div className="row">
                    <div className="col-12 our-header prom-padd">
                        <h2> best recipes</h2>
                        <div className="text-center">
                            <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i>
                        </div>
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className ="card-body">
                            <h5 className ="card-title">Card title</h5>
                            <p className ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className ="card-body">
                            <h5 className ="card-title">Card title</h5>
                            <p className ="card-text">This is a short card.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className ="card-body">
                            <h5 className ="card-title">Card title</h5>
                            <p className ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className ="card-body">
                            <h5 className ="card-title">Card title</h5>
                            <p className ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
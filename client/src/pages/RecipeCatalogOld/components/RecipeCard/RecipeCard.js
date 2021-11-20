export default function RecipeCard({
    recipe,
    navigationHandler
}) {

    return (
        <div className="row blog-row-padd">
            <div className="col-md-12  ">
                <div className="blog-post">
                    <div> <img src={recipe.image} alt="" className="blog-image img-fluid" /></div>
                    <div className="blog-description">
                        <div className="text-center">  <a href="#"> Shop </a>
                            <h2>{recipe.title}</h2>
                            <div className="post-info"> <p> <span className="info-over">  <i className="far fa-user"></i> By {recipe.author}</span> <span className="spc-line"> |</span> <span className="info-over"> {recipe.createdAt}</span>
                                <span className="spc-line"> |</span> <span className="info-over"> <i className="far fa-heart"></i> 39 Likes </span> <span className="spc-line"> |</span>
                                <span className="info-over"> <i className="far fa-comment"></i> 55 comments </span> </p> </div>
                        </div>

                        <p> {recipe.description}</p>

                        <div className="rd-btn">
                            <button className="read-more"> view</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
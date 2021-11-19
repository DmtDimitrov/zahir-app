export default function BestRecipesCard({
    recipe
}) {
    return (

        <div class="col-sm-6 col-lg-4">
            <div class="card h-100">
                <img src={recipe.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{recipe.title}</h5>
                    <p class="card-text">asdasd</p>
                </div>
            </div>
        </div>

    );
}
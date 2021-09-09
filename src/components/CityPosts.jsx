import Posts from './Posts'

function CityPosts(props) {
    let postsJsx = props.city.posts.map((post, idx) => {
        return (
            <article className="recipe">
                <img src={post.img} alt="" className="recipe-img" />
                <div className="recipe-container">
                    <h4 className="recipe-title">{post.title}</h4>
                    <p className="recipe-p">{post.content}</p>
                    <br></br>
                    <p className="author">Author: LuVz2TrAVEL</p>
                </div>
            </article>
        )
    })
    return (
        <section className="recipes-section">
            {postsJsx}
        </section>
    )
}


export default CityPosts
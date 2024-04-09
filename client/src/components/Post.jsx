export default function Post({title,author, time, desc, image}){
    return(
        <div className="post-container">
            <div className="post-details">
                <h2>{title}</h2>
                <p>{desc}</p>
                
                <div>
                    <p>{author}</p>
                    <p>{time}</p>
                </div>

            </div>
            <img src={image}/>
        </div>
    )

}
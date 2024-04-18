export default function Post({title,author, time, desc, image}){
    return(
        <div className="post-container">
            <div className="post-details">
                <div>
                    <p>{author}</p>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
             
                <div className="post-auth"> 
                    <p>{time}</p>
                </div>
            </div>
            <img src={image}/>
        </div>
    )

}
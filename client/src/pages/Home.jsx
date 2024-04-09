import Post from "../components/Post";
import Dune from "../assets/Dune-2-title.jpg"; 
export default function Home(){
    return(
        <div className="home-container">
            <div className="hero-banner">
                <p className="tagline"> <strong> Welcome to&nbsp;
                    <span className="relay">Relay</span>.</strong> Inspire, Learn, Grow. 
                </p>
                <p> Write, share and read about the ideas and topics that you care about. The only limit is your imagination.</p>
                <button> Get started </button>
            </div>

            <div className="home-posts">
                <Post title={"Testing"} 
                desc={"Some sort of description"} 
                author={"Esau Rahim"}
                time={"April 9th 2024"}
                image={Dune}/>

                <Post title={"Testing"} 
                desc={"Some sort of description"} 
                author={"Esau Rahim"}
                time={"April 9th 2024"}
                image={Dune}/>               

            </div>

        </div>
    )
}
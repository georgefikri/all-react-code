import React from "react"

class MemeGenerator extends React.Component {   
    constructor(){
        super();
        this.state={
            topText: "",
            bottomText: "",
            randomImg: "https://i.imgflip.com/1bij.jpg",
            allMemeImgs:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            /* 
            .data: represent the object property that hold another object that holds the array 
            */
           let apiData = response.data.memes
            //const apiData = response.data
            this.setState({
                allMemeImgs: apiData
            })
        })
    }

    handleChange(event){
        const {name , value} = event.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit(event){
        /* preventing the default behavior which is refreshing the page from happening */
        event.preventDefault();
        /* get a random number
        this.state.allMemeImgs.length: the length of our array meme, to get a number within our array length*/
        let randomNumber = Math.floor(Math.random() * this.state.allMemeImgs.length)
        /* getting the image from the API */
        let randMemeImg = this.state.allMemeImgs[randomNumber].url
        /* i will update state with my new this.state.randomImg */
        this.setState({
            randomImg: randMemeImg
        })

    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text"
                    name="topText"
                    placeholder="top Text" 
                    /* to be controlled form */
                    value={this.state.topText} 
                    onChange={this.handleChange}
                    />

                    &nbsp;&nbsp;&nbsp;

                    <input 
                    type="text"
                    name="bottomText"
                    placeholder="bottom text" 
                    /* to be controlled form */
                    value={this.state.bottomText} 
                    onChange={this.handleChange}
                    />
                    &nbsp;&nbsp;&nbsp;
                    <button>submit</button>
                </form>

                {/* place for the random meme */}

                <div className="displayMeme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }

    
}

export default MemeGenerator
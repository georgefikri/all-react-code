import React from "react"

class BodyComponent extends React.Component{
    constructor(){
        super();
        this.state={
            topText    : "",
            bottomText : "",
            randomImg: "https://i.imgflip.com/1bij.jpg",
            data: []
        }
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(res => {
            this.setState({
                data: res.data.memes
            })
            console.log(res)
        })
    }

    handleChange = (event)=> {
        this.setState({
            [event.target.name] :  event.target.value
        })
    }

    handleClick = ()=> {
        /* 
        get the length of the array
        get random picture the array 
        with each click update randomImg in state
        */
       let arrLength = this.state.data.length;
       let randomNum = Math.floor(Math.random() * arrLength)
       console.log(randomNum)
       let img = this.state.data[randomNum].url
       this.setState({
           randomImg: img
       })
    }



    render(){
        return(
            <div className="memeBody">
                {/* inputs and button */}
                <div>
                    <input 
                    type="text"
                    name="topText" 
                    placeholder="topText" 
                    value={this.state.topText}
                    onChange={this.handleChange} />

                    <input 
                    type="text"
                    name="bottomText" 
                    placeholder="bottomText" 
                    value={this.state.bottomText}
                    onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Generate</button>
                </div>

                {/* meme body */}
                <div className="memeDisplay">
                    <img
                    src={this.state.randomImg}
                    alt="random" />

                    <p className="topText">{this.state.topText}</p>
                    <p className="bottomText">{this.state.bottomText}</p>
                </div>
            </div>
        )
    }

}


export default BodyComponent
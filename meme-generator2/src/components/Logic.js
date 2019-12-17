import React from "react"

class Logic extends React.Component {
    constructor(){
        super();
        this.state={
            topText: "",
            bottomText:"",
            defaultImg:"https://i.imgflip.com/1bij.jpg",
            allImgs: []
            
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => {
                let APIData = data.data.memes
                console.log(APIData)
                this.setState({
                    allImgs: APIData
                })
            })
    }

    handleChange(event){
        const {name , value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(e){
        /* stop submit refresh */
        e.preventDefault();
        /* random number from our API returned array within the length of our array */
        let arrNumber= Math.floor(Math.random()*this.state.allImgs.length)
        let apiURL = this.state.allImgs[arrNumber].url;
        console.log(apiURL)
        /* updating default image with what obtained from apiURL  */
        this.setState({
            defaultImg: apiURL
        })
    }

    render(){
        return (
            <div className="mainCont">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="topText" value={this.state.topText} onChange={this.handleChange} />
                    <input type="text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange}/>
                    <button>generate</button>
                </form>

                <div className="memeTxtCont">
                     <p>
                         <span className="imgCont">
                            <img src={this.state.defaultImg} alt='?' />
                        </span>
                    </p>
                    <div className="memeText">
                        <span className="topText">{this.state.topText}</span>
                        <span className="bottomText">{this.state.bottomText}</span>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Logic
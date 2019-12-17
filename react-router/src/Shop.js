import React , {useState , useEffect} from 'react';
import './App.css';

/* import Link from react-router-dom */
import {Link} from "react-router-dom"

class Shop extends React.Component {

    constructor(){
        super();
        this.state={
            api: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            this.setState({
                api:data
            })
        })
    }

    render(){

        const liStyle= {listStyleType: "disc"}

        let arr = this.state.api.map((item)=>{
            return <div key={item.id}> 
                    <ul style={liStyle}>
                         <li>
                             <Link to={`/shop/${item.id}`}>
                                {item.title}
                            </Link>
                         </li>
                    </ul>
                    
            
            </div>
        })

        return (
            <div>
                {arr}
            </div>
        )
    }
}

export default Shop;

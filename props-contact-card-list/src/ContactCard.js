import React from "react"

function ContactCard(props) {
    return (
       /*************** Way 1 *****************/
/*         <div className="contact-card">
                <img  src={props.imgURL}/>
                <h3>{props.name}</h3>
                <p>phone: {props.phone}</p>
                <p>email: {props.email}</p>
            </div> */

      /*************** Way 2 *****************/

        <div className="contact-card">
            <img  src={props.contact.imgURL}/>
            <h3>{props.contact.name}</h3>
            <p>phone: {props.contact.phone}</p>
            <p>email: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard
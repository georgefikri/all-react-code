import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactCard from "./ContactCard"

function App() {
  return (
    <div className="contacts">
      {/*************** Way 1 *****************/}

{/*   <ContactCard name ="cat 1" imgURL="https://placekitten.com/300/200" phone="12345" email="aaa@google.com" />
      <ContactCard name ="cat 2" imgURL="https://placekitten.com/400/200" phone="4444" email="bbbb@google.com" />
      <ContactCard name ="cat 3" imgURL="https://placekitten.com/200/200" phone="666" email="ccc@google.com" />
      
 */}

      {/*************** Way 2 ***************/}
      <ContactCard contact = {{
        name :"cat 1" ,
        imgURL:"https://placekitten.com/300/200",
        phone:"12345",
        email:"aaa@google.com"
      }} />

      <ContactCard contact = {{
          name :"cat 2" ,
          imgURL:"https://placekitten.com/400/200",
          phone:"444",
          email:"bbb@google.com"
        }} />
        <ContactCard contact = {{
          name :"cat 3" ,
          imgURL:"https://placekitten.com/200/200",
          phone: "6666",
          email:"ccc@google.com"
      }} />

    </div>
  );
}

export default App;

import React from "react"

function FormPresentation(props){
    return (
        <form>

        {/***************************  first name ****************************/}
          <div>
            <span>First Name </span>
            <input type="text" name="firstName" placeholder="First Name" value={props.data.firstName} onChange={props.handleChange} />
          </div>

          {/**************************** last name ****************************/}
          <div>
            <span>last Name </span>
            <input type="text" name="lastName" placeholder="last Name" value={props.data.lastName} onChange={props.handleChange} />
          </div>

          {/**************************** age ****************************/}
          <div>
            <span>Age </span>
            <input type="number" name="age" placeholder="Age" value={props.data.age} onChange={props.handleChange} />
          </div>

          {/**************************** gender ****************************/}
          <div className="gender">
            <span>Gender </span>
            <span>
              <input type="radio" name="gender"  checked={props.data.gender === "Male"}  value="Male" onChange={props.handleChange} />
              <label>Male</label>

              <div className="clear"></div>
              <input type="radio" name="gender"  checked={props.data.gender === "Female"}  value="Female" onChange={props.handleChange} />
              <label>Female</label>
            </span>
          </div>

          {/**************************** traveling locations - dropdown ****************************/}
          <div className="dropDown">
            <span>Traveling Locations</span>
            <select name="locations" value={props.data.locations} onChange={props.handleChange}>
              <option value="Germany">Germany</option>
              <option value="Italy">Italy</option>
              <option value="Sweden">Sweden</option>
            </select>
          </div>


          {/****************************  dietary restrictions   - checkbox ****************************/}
          <div>
            <span>alergies</span>
            <span>
              <input type="checkbox"  checked={props.data.alergies.isVegan} name="isVegan" onChange={props.handleChange} />
              <label>Vegan</label>
              <br />
              <input type="checkbox"  checked={props.data.alergies.isKosher} name="isKosher" onChange={props.handleChange} />
              <label>Kosher</label>
              <br />
              <input type="checkbox"  checked={props.data.alergies.isLactoseFree} name="isLactoseFree" onChange={props.handleChange} />
              <label>isLactoseFree</label>
            </span>

          </div>

      </form>

    )
}

export default FormPresentation
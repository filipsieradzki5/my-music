import { useState } from 'react';
import './formInput.css'

const FormInput = (props) => {
const [focused,setFocused] = useState(false);

const handleFocus= (e) => {
    setFocused(true);
};
    return (
      <div className="formInput">
            {/*<label>{props.placeholder}</label>*/}
            <input name ={props.name}
            placeholder = {props.placeholder}
            required = {props.required}
            pattern= {props.pattern}
            onBlur={handleFocus}
            onFocus={() => props.name ==='PESEL' || props.name ==='NIP' && setFocused(true)}
            focused={focused.toString()}
            hidden={props.hidden}
            />
                        <span style={{fontSize:'10px'}}>{props.errorMessage}</span>
        </div>
    )
}

export default FormInput;
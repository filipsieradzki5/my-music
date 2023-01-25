import './App.css'
import Previews from './components/dropzone';
import FormInput from './components/FormInputs'
import { useState } from 'react';



const App = () => {

  const handleSubmit =(e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    const formatedData = Object.fromEntries(data.entries());
    fetch("https://localhost:60001/Contractor/Save", {
  method: "POST",
  body: JSON.stringify({
    formatedData
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
  }
  const [firma, setFirma] = useState('switchButton active');
  const [osoba, setOsoba] = useState('switchButton');
  const [hide, setHide] = useState('true');
  const [hide2, setHide2] = useState('');
  const [required1, setRequired1] = useState('');
  const [required2, setRequired2] = useState('required');

  const handleClick = (e) => {
   console.log(e.target.name)
    if (e.target.name === 'NIP') {
        setFirma('switchButton active') 
        setOsoba('switchButton')
        setHide('true')
        setHide2('')
        setRequired1('')
        setRequired2('required')
    } else {
        setFirma('switchButton')
        setOsoba('switchButton active')
        setHide('');
        setHide2('true')
        setRequired1('required')
        setRequired2('')
      }
    }
  
  return (
    <div className="app">
      <h1>Nowe konto</h1>
      <form onSubmit={handleSubmit}>
        <FormInput 
        name='name' 
        placeholder='Imię' 
        pattern='^[A-Za-z]{2,20}'
        required = 'required'

        />
        <FormInput 
        name='surname' 
        placeholder='Nazwisko' 
        pattern='^[A-Za-z]{2,20}'
        required = 'required'
        />
        <div className='switchContainer'>
        <button name='NIP' className={firma} onClick={handleClick}>Firma</button>
          <button name='PESEL' className={osoba} onClick={handleClick}>Osoba fizyczna</button>
        </div>
        <FormInput 
        name ='PESEL' 
        placeholder='PESEL' 
        errorMessage='invalid number'
        pattern='^[0-9]{11}'
        hidden={hide}
        required = {required1}
        />
        <FormInput 
        name ='NIP' 
        placeholder='NIP' 
        errorMessage='invalid number'
        pattern='^[0-9]{10}'
        hidden={hide2}
        required = {required2}
        />
        <Previews/>
        
        <button className='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App;

import React, { useReducer } from 'react'

const iniitialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    passwordError: false,
}


const reducer = (state, action) => {
  switch(action.type) {
    case 'firstname':
      return {...state, firstname: action.input}
    case 'lastname':
      return {...state, lastname: action.input}
    case 'email':
      return {...state, email: action.value}
    case 'lastname':
      return {...state, password: action.value}
    case 'error1':
      return {...state, firstNameError: action.value}
    default:
      return state
  }
}


function App() {

  const [state, dispatch] = useReducer(reducer, iniitialState)

  const namehandler = (fieldName, value)=> {
    const input = value.replace(/[^A-Za-z\s]/g, '')
    dispatch({type: fieldName, input})
  }

  const lastNameHandler = (fieldName, value)=> {
    const input = value.replace(/[^A-Za-z\s]/g, '')
    dispatch({type: fieldName, input})
  }

  const emailHandler = (fieldName, value)=> {
    dispatch({type: fieldName, value})
  }

  const passwordHandler = (fieldName, value)=> {
    dispatch({type: fieldName, value})
  }

  const firstNameError = (fieldName, value)=> {
      dispatch({type: fieldName, value})
  }

  const submit = (e) => {
    e.preventDefault();

    if(state.firstname == '') {
      firstNameError('error1', true)
    } else {
      firstNameError('error1', false)
    }
  }

  return (
    <main>
      <p className="text-[red] text-3xl">{state.firstname}</p>
      <p className="text-[red] text-3xl">{state.lastname}</p>
      <p className="text-[red] text-3xl">{state.email}</p>
      <p className="text-[red] text-3xl">{state.password}</p>
      <section>
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable</p>
      </section>
      <section>
        <div>
          <p>
            <span>Try it free 7 days</span>
            then $22/mo. thereafter
          </p>
        </div>
        <form onSubmit={(e)=> {submit(e)}}>
          <div className={`border-2 border-[black]${state.firstNameError? ' border-[red]': ''}`}>
            <input type="text" name="first_name" id="first_name" onChange={(e)=>{namehandler('firstname', e.target.value)}}/>
            <p></p>
          </div>
          <div>
            <input type="text" name="last_name" id="last_name"  onChange={(e)=>{lastNameHandler('lastname', e.target.value)}}/>
            <p></p>
          </div>
          <div>
            <input type="email" name="email" id="email"  onChange={(e)=>{emailHandler('email', e.target.value)}}/>
            <p></p>
          </div>
          <div>
            <input type="password" name="password" id="password"  onChange={(e)=>{passwordHandler('password', e.target.value)}}/>
            <p></p>
          </div>
          <div>
            <input type="submit" value="CLAIM YOUR FREE TRIAL" className='cursor-pointer' />
          </div>
          <div>
            <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
          </div>
        </form>

        <button onClick={namehandler}>Hello World</button>
      </section>
    </main>
  )
}

export default App

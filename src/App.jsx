import React, { useReducer } from 'react'

// Initial State
const iniitialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    firstNameError: false,
    lastNameError: false,
    emailError: 0,
    passwordError: false   
}

// Error Messages Array. I am lazy to type it every inputs
const errorMessages = [
      'First Name cannot be Empty', 
      'Last Name cannot be Empty', 
      'Email cannot be Empty', 
      'Looks like this is not an Email',
      'Password cannot be Empty'
    ]

// Reducer Function for updating the state
const reducer = (state, action) => {
  switch(action.type) {
    case 'firstname':
      return {...state, firstname: action.input}
    case 'lastname':
      return {...state, lastname: action.input}
    case 'email':
      return {...state, email: action.value}
    case 'password':
      return {...state, password: action.value}
    case 'error1':
      return {...state, firstNameError: action.value}
    case 'error2':
      return {...state, lastNameError: action.value}
    case 'error3':
      return {...state, emailError: action.value}
    case 'error4':
      return {...state, passwordError: action.value}
    default:
      return state
  }
}


function App() {

  const [state, dispatch] = useReducer(reducer, iniitialState)

  // First Name Handler function, it will run every time the user input at first name input field
  // It accepts 2 parameter (fieldname and value). 
  // fieldname is the state that is being editted and value is the value that is set to be the value of fieldname
  const namehandler = (fieldName, value)=> {
    // Here is input variable. It will filter the input.
    // It will replace the input if it is not a letter
    const input = value.replace(/[^A-Za-z\s]/g, '')

    // This function will pass the fieldName and input to reducer function.
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

  const lastNameError = (fieldName, value)=> {
    dispatch({type: fieldName, value})
  }

  const emailError = (fieldName, value)=> {
    dispatch({type: fieldName, value})
  }

  const passwordError = (fieldName, value)=> {
    dispatch({type: fieldName, value})
  }

  // submit function. It will run if the form is submitted.
  // It verify the input fields if the input is not valid or empty
  const submit = (e) => {
    e.preventDefault();

    if(state.firstname == '') {
      firstNameError('error1', true)
    } else {
      firstNameError('error1', false)
    }

    if(state.lastname == '') {
      lastNameError('error2', true)
    } else {
      lastNameError('error2', false)
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(state.email == '') {
      emailError('error3', 1)
    } else if(!emailRegex.test(state.email)) {
      emailError('error3', 2)
    } else {
      emailError('error3', 0)
    }

    if(state.password == '') {
      passwordError('error4', true)
    } else {
      passwordError('error4', false)
    }

  }

  return (
    <main className='min-h-[100vh] flex flex-col justify-center items-center px-5 py-10 text-[white] sm:px-[5rem] lg:flex-row lg:gap-5'>
      {/* <p className="text-[red] text-3xl">{state.firstname}</p>
      <p className="text-[red] text-3xl">{state.lastname}</p>
      <p className="text-[red] text-3xl">{state.email}</p>
      <p className="text-[red] text-3xl">{state.password}</p> */}
      <section className='text-center mb-10 w-full max-w-[500px] lg:w-1/2 lg:text-left'>
        <h1 className='text-2xl text-center w-[200px] mx-auto font-[700] mb-5 sm:text-[3rem] sm:w-full sm:leading-[3rem] sm:mb-10 lg:px-0 lg:text-left'>Learn to code by watching others</h1>
        <p className='font-[600]'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable</p>
      </section>
      <section className='w-full max-w-[500px] lg:w-1/2'>
        <div className='mb-7 max-w-[500px]'>
          <h2 className='text-center py-3 px-[3.5rem] rounded-lg bg-Blue shadow-[0px_8px_0px_0_rgba(0,0,0,0.2)]'>
            <span className='font-[700]'>Try it free 7 days </span>
            then $22/mo. thereafter
          </h2>
        </div>
        <form 
          onSubmit={(e)=> {submit(e)}} 
          className='
            max-w-[500px]
            bg-[white] rounded-lg
            px-5 py-7
            flex
            flex-col
            justify-between
            gap-3
            lg:p-10
          '
          noValidate>
          <div>
            <div 
              className={
                `flex p-3
                border-[1px] border-Grayish-Blue
                text-Dark-Blue font-[700]
                rounded-md
                lg:px-6
                ${state.firstNameError? ' border-[red]': ''}  
                `}
            >
              <input
                type="text" 
                name="first_name" 
                id="first_name" 
                value={state.firstname} 
                onChange={(e)=>{namehandler('firstname', e.target.value)}}
                className='border-none outline-none w-full'
                placeholder='First Name'
              /> 
              <img src="https://raw.githubusercontent.com/RaulTindogan/intro-component-with-signup-form/cf21db77ee8be9ca92feaca2ad457511d7322a30/images/icon-error.svg" alt="Error Icon" 
                className={`${state.firstNameError? 'ml-3': 'hidden'}`}
              />
            </div>
            <p className='text-Red text-[.8rem] italic font-[600] text-right mb-2'>{state.firstNameError? errorMessages[0]: ''}</p>
          </div>
          <div>
            <div 
               className={
                `flex p-3
                border-[1px] border-Grayish-Blue
                text-Dark-Blue font-[700]
                rounded-md
                lg:px-6
                ${state.lastNameError? ' border-[red]': ''}`}
              >
              <input 
                type="text" 
                name="last_name" 
                id="last_name" 
                value={state.lastname}  
                onChange={(e)=>{lastNameHandler('lastname', e.target.value)}}
                placeholder='Last Name'
                className='border-none outline-none w-full'
              />
              <img src="https://raw.githubusercontent.com/RaulTindogan/intro-component-with-signup-form/cf21db77ee8be9ca92feaca2ad457511d7322a30/images/icon-error.svg" alt="Error Icon" 
                className={`${state.lastNameError? 'ml-3': 'hidden'}`}
              />
            </div>
            <p className='text-Red text-[.8rem] italic font-[600] text-right mb-2'>{state.lastNameError? errorMessages[1]: ''}</p>
          </div>
          <div>
            <div className={
                `flex p-3
                border-[1px] border-Grayish-Blue
                text-Dark-Blue font-[700]
                rounded-md
                lg:px-6
                ${state.emailError? ' border-[red]': ''}`}
              >
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={state.email} 
                onChange={(e)=>{emailHandler('email', e.target.value)}}
                className='border-none outline-none w-full'
                placeholder='Email Address'
              />
              <img src="https://raw.githubusercontent.com/RaulTindogan/intro-component-with-signup-form/cf21db77ee8be9ca92feaca2ad457511d7322a30/images/icon-error.svg" alt="Error Icon" 
                className={state.emailError!=0? 'ml-3': 'hidden'}
              />
            </div>
            <p className='text-Red text-[.8rem] italic font-[600] text-right mb-2'>{state.emailError == 1? errorMessages[2] : state.emailError == 2? errorMessages[3]: ''}</p>
          </div>
          <div>
            <div  className={
                `flex p-3
                border-[1px] border-Grayish-Blue
                text-Dark-Blue font-[700]
                rounded-md
                lg:px-6
                ${state.passwordError? ' border-[red]': ''}`}
            >
              <input 
                type="password" 
                name="password" 
                id="password"  
                onChange={(e)=>{passwordHandler('password', e.target.value)}}
                className='border-none outline-none w-full'
                placeholder='Password'
              />
              <img src="https://raw.githubusercontent.com/RaulTindogan/intro-component-with-signup-form/cf21db77ee8be9ca92feaca2ad457511d7322a30/images/icon-error.svg" alt="Error Icon" 
                className={state.passwordError? 'ml-3': 'hidden'}
              />
            </div>
            <p className='text-Red text-[.8rem] italic font-[600] text-right mb-2'>{state.passwordError? errorMessages[4]: ''}</p>
          </div>
          <input 
            type="submit" 
            value="CLAIM YOUR FREE TRIAL" 
            className='block cursor-pointer bg-Green rounded-md mb-3 py-3 text-center font-[600] hover:bg-Green/80 shadow-[0px_4px_0px_0_rgba(38,115,82,.6)]' 
          />
          <div>
            <p className='text-Grayish-Blue font-[400] text-sm text-center px-5 lg:px-0'>By clicking the button, you are agreeing to our <span className='text-Red font-[700]'>Terms and Services</span></p>
          </div>
        </form>
      </section>
    </main>
  )
}

export default App

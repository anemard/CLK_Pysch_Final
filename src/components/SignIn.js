import React, { useEffect, useState } from 'react';
import { About, Contact, Coverage, Experience, Interests, Landing, Nav, Publications, Services, Footer } from './'

function SignIn(props) {
  let {admin} = props
  const users = JSON.parse(localStorage.getItem('users'))
  let [user, setUser] = useState('')
  let [pass, setPass] = useState('')
  let [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if (users.isAdmin) { 
      setIsAdmin(true)
    }
  }, [])

    const submitSignin = (evt) => {
        evt.preventDefault();
        if ((user === admin.name) && (pass === admin.password)) {
          setIsAdmin(true)
          setPass('');
          setUser('')
          localStorage.setItem('users',
            JSON.stringify({isAdmin : true})
          )
          console.log('in!')
        }
        console.log('out..')
    }

    const signout = () => {
      localStorage.setItem('users',
      JSON.stringify({isAdmin : false})
      )
      setIsAdmin(false)
    }

    return (
      <>
      <div>
        {(isAdmin) ? 
          (
          <div className='signin'>
            <div>Welcome Cary!</div>
            <button onClick={signout}>Sign out</button>
          </div>
          ) :
          (<form className='signin' onSubmit={submitSignin}>
            <input value={user} placeholder="username" type="text" onChange={(evt) => setUser(evt.target.value)} />
            <input value={pass} placeholder="password" type="password" onChange={(evt) => setPass(evt.target.value)} />
            <button>SignIn</button>
          </form>
          )
      }
        
        
      </div>
      <Landing />
      <Nav />
      <About admin={isAdmin} />
      <Experience admin={isAdmin} />
      <Interests admin={isAdmin} />
      <Services admin={isAdmin} />
      <Coverage admin={isAdmin} />
      <Publications admin={isAdmin} />
      <Contact admin={isAdmin} />
      <Footer />
      </>
    )
}

export default SignIn
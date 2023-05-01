import React, { useState } from 'react';
import { About, Contact, Coverage, Experience, Interests, Landing, Nav, Publications, Services, Footer } from './'

function SignIn(props) {
  let {admin} = props
  let [user, setUser] = useState('')
  let [pass, setPass] = useState('')
  let [isAdmin, setIsAdmin] = useState(false)

    const submitSignin = (evt) => {
        evt.preventDefault();
        if ((user === admin.name) && (pass === admin.password)) {
          setIsAdmin(true)
          setPass('');
          setUser('')
          console.log('in!')
        }
        console.log('out..')
    }

    return (
      <>
      <div className='signin' onSubmit={submitSignin}>
        <form>
            <input value={user} placeholder="username" type="text" onChange={(evt) => setUser(evt.target.value)} />
            <input value={pass} placeholder="pass" type="password" onChange={(evt) => setPass(evt.target.value)} />
            <button>Sign In</button>
            <button onClick={() => setIsAdmin(false)}>Sign out</button>
        </form>
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
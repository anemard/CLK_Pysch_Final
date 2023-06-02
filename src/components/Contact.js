import React,  { useRef, useState }  from 'react'
import emailjs from 'emailjs-com'
import flowers from '../img/flowers.png';

function Contact() {
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [phone, setPhone] = useState('')
  let [message, setMessage] = useState('')
  const form = useRef();

  let sendEmail=(e)=>{
    e.preventDefault();
    // 'service_b1sxy6w'

    emailjs.sendForm('service_076v88x', 'template_j0tgiw8', form.current, 'kJ19dM_OPcWbI2AcR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setName('')
      setEmail('')
      setMessage('')
      setPhone('')
}

  console.log('name', name, 'email', email, 'phone', phone, 'mess', message)

    return (
      <div className='component-page'>
        <div className='component-body-left'>
          <img src={flowers} />
        </div>

        <div className='component-body-right' id='contact'>
          <div className='component-title'>Contact</div>
          <form ref={form} className='contact-form' onSubmit={sendEmail}>
            <div><label>Name</label></div>
            <div><input name="name" value={name} type="text" onChange={(evt) => setName(evt.target.value)} required /></div>
            <div><label>E-mail</label></div>
            <div><input name="email" value={email} type="email" onChange={(evt) => setEmail(evt.target.value)} required /></div>
            <div><label>Phone</label></div>
            <div><input name="phone" value={phone} type="text" onChange={(evt) => setPhone(evt.target.value)} required /></div>
            <div><label>Message</label></div>
            <div><textarea name="message" value={message} type="text" rows='10' onChange={(evt) => setMessage(evt.target.value)} required /></div>
            <div><input type='submit' value="Send" className='input-button' /></div>
          </form>
        </div>
      </div>
    )
}

export default Contact
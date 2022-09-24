import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import swal from 'sweetalert';

function Contact() {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[message,setMessage]=useState("")

     const form=useRef()

     const sendEmail=(e)=>{
       e.preventDefault();
       console.log(form)
       emailjs.sendForm("service_5q79g4k", "template_6i3zt2s", form.current, "NBfXFPxY5-jRL1yVx").then(res=>{
        swal(`Hi ${name},`, "Message sent, Tobi the admin we get to you after 24hrs", "success");
         setName("")
         setEmail("")
         setMessage("")
       }).catch(err=>{
        swal(`Hi ${name},`, "Network error! Try again", "error");
       });
     }

  return (
    <div>
        <div className='container-fluid'>
           <div className='row mt-5'>
              <div className='col-lg-4 col-md-5 col-sm-7 mx-auto p-2 shadow border mt-5'>
                   <div className='p-3'>
                        <hr/>
                          <h4 className='text-center text-success'>Contact Page</h4>
                        <hr/>
                       
                        <form ref={form} onSubmit={sendEmail}>
                        <div className='mt-3'>
                         <input placeholder='name' name='name' className='form-control' 
                          value={name} onChange={(e)=>setName(e.target.value)}
                         />
                       </div>
                       <div className='mt-3'>
                         <input placeholder='email' name='email' className='form-control' 
                           value={email} onChange={(e)=>setEmail(e.target.value)}
                         />
                       </div>
                       <div className='mt-3'>
                         <textarea placeholder='type your message' name='message' className='form-control'
                          value={message} onChange={(e)=>setMessage(e.target.value)}
                         />
                       </div>
                       
                         <button type='submit' className='btn btn-success btn-block mt-3'>Send Message</button>
                        </form>
                      

                   </div>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Contact
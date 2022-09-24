import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Chat() {
    const[chatInput,setChatInput]=useState("")
    const[chatArr,setChatArr]=useState([])
      useEffect(()=>{
          axios.get("https://tobichat.herokuapp.com/chat").then(res=>{
            setChatArr(res.data)
          })
      },[chatArr])


    const chatBtn=()=>{
       axios.post("https://tobichat.herokuapp.com/chat",{chatInput}).then(res=>{
          setChatInput("")
       })
    }
    const delMessage=(delIndex)=>{
      axios.delete(`https://tobichat.herokuapp.com/chat/${delIndex}`)
    }
  return (
    <div>
       <div className='container-fluid mt-5'>
          <div className='row mt-5'>
            <div className='col-lg-4 col-md-8 col-sm-6 mx-auto shadow border p-4'>
                       <hr/>
                       <h4 className='text-center text-success'>CHAT APP</h4>
                       <hr/>
                   <div>
      

            {
              chatArr.map((val,i)=>{
                    return(
                        <div key={i}>
            <div className='p-2 shadow rounded-lg my-2'>
                 <div className='row'>
                 <div className='col-10'>
                <span>{val.chatInput}</span>
                </div>

                <div className='col-2 text-right'>
                <span><i onClick={()=>delMessage(val.id)} className=" text-danger bi bi-x-circle"></i></span>
                </div>

                 </div>
            </div>
                        </div>
                    )
                })
            }



        <div className="input-group mb-3 mt-5">

            <input type="text"
             className="form-control"
              placeholder="type your message" aria-label="Recipient's username" aria-describedby="basic-addon2"
               value={chatInput}
               onChange={(e)=>setChatInput(e.target.value)}
              />

            <div className="input-group-append">
                <button onClick={()=>chatBtn()} className="btn btn-success" type="button"><i className="bi bi-send"></i></button>
            </div>

     </div>
                      
                   </div>


            </div>
          </div>
       </div>
    </div>
  )
}

export default Chat
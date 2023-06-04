"use client"

import { useState } from "react"
import IsiModal from "./IsiModal"


export default function Modal({desc}: any) {

    const [modal, setModal] = useState(false)

    const showModal = () => setModal(true) 
    const closeModal = () => setModal(false)
    


  return (
    <>

        {/* Open the modal using ID.showModal() method */}
                
         {
            modal ? 
            <> 
            <IsiModal closeModal={() => closeModal()} desc={desc}/>
            </>           
            
            :
            <button
            onClick={()=> showModal()} 
            className='text-black bg-white text-[10px] px-2 py-1 rounded-md md:text-md lg:text-lg xl:text-md'
            >Description</button>

        }
    </>
  )
}

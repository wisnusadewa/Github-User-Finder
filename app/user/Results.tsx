"use client"

import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import button from '../styles/button3d.module.css'
import cards from '../styles/cards.module.css'



export default function Results({query}: any) {

    const [ data, setData] = useState<any>([])
 
    
    useEffect(()=> { 
        axios.get(`https://api.github.com/search/users?q=${query}`)        
        .then(res => {
         setData((res.data.items))   
        })
        .catch(err => console.log(err))
    },[query])

    

  return (

    <>

        <div className="mx-auto grid mb-5 py-5">

            <div className="mx-auto grid md:grid-cols-2 gap-6" >
                
     {data.map((user:any, index:any)=> {
    return ( 
    <div 
    className="w-full h-full grid"
    key={index}>
        <div className="grid w-64 h-48 lg:w-96">
                <div className={`${cards.card}`}>
                        <div className={`${cards.cardInfo}`}>
                            {/* AVATAR */}
                            <div className="grid grid-cols-2 justify-center items-center text-center">
                                <div className="avatar py-5 items-center justify-center">
                                    <div className="w-20 rounded-full">
                                        <Image src={user.avatar_url} alt='/' loading = 'lazy' width={100} height={0} priority={false} sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"  />                           
                                    </div>
                                </div>
                                
                                <div className="justify-center items-center text-center flex">
                                    <div>
                                        <p className="text-white text-[11px] pl-5 sm:text-[18px] md:text-[10px]  lg:text-[10px] xl:text-[15px]">{user.login}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="justify-center items-center flex">
                                <div className="justify-center text-center items-center">
                                    <button className={button.btn}><Link href={`/user/${user.login}`}>Repository</Link></button>                    
                                </div>
                            </div> 
                        </div>
                </div>
            </div>
    </div>

)
})     
}

</div>

</div>
   
    </>
  )
}

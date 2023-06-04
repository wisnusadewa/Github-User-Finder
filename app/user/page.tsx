"use client"

import { useState } from "react";
import Navbar from "../components/Navbar";
import Results from "./Results";


export default function User() {
    
      const [query , setQuery ] = useState('')
      const [value, setValue] = useState('')

      const handleSubmit = (e: any) => {
        e.preventDefault()
        setQuery(value)
      }

    return (
    <>
    <div className="h-full text-white bg-black">
    <Navbar/>
        <div className="mb-10 py-10">
            <div className="grid lg:grid-cols-2 w-10/12 mx-auto gap-10">

                {/* SEARCH */}
                <div className="">
                <p className="pb-5 lg:text-[25px] text-cyan-400">Search Github Username</p>
                        <form onSubmit={handleSubmit}>
                            <input
                            type="text" placeholder="Find Someone..." className="input input-bordered input-warning w-44 sm:w-96 md:w-64 mr-2 lg:w-72 xl:w-96 rounded-md"
                            onChange={(e)=> setValue(e.target.value)}
                            />
                            <button className="btn btn-outline btn-warning rounded-md">
                               <p className="text-md">search</p> 
                            </button>
                       </form>
                        
                </div>

                {/* SLOGAN */}
                
                <div className="italic">                                 
                  <div className="text-2xl lg:text-3xl xl:text-4xl">
                    <span>&#39;</span>You can find all <span className="text-cyan-400">GITHUB </span>user<span>&#39;</span>
                  </div>   
                
                </div>
                              
                        
            </div>
        </div>

         {/* QUERY */}
         <div className="flex-col">
            {query ? <Results query={query}/> : ''}
        </div>

    </div>
    </>
  )
}

import React, { useState, useCallback } from 'react'
import { useNavigate } from "react-router-dom"

const Home = () => {

    const [value, setValue] = useState("");
        const navigate = useNavigate("")

    const join = useCallback(()=>{

        navigate(`/room/${value}`)
    }, [navigate, value]
)
  return (
    <div>
        <div>
            <section className=" h-screen w-screen justify-center items-center flex">
                <div className=" h-[20rem] justify-center items-center flex w-[29rem] border-2 border-slate-400 rounded-md shadow-lg">
                    <div className=" h-full w-full justify-center items-center flex flex-col gap-10">
                    <input value={value} onChange={(e)=>{setValue(e.target.value)}} className=" pl-2 h-[3rem] w-[24rem] border-2 hover:border-green-600 transition-all duration-300 border-sky-950 rounded" type="text" />
                    <div className=" absolute bg-white -mt-[3rem] px-2">Person Name</div>
                        <button onClick={join} className=" h-[3rem] w-[24rem] bg-black text-white text-xl rounded font-semibold hover:bg-slate-800">Join</button>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Home

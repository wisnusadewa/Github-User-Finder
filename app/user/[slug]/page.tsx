
import cards from '../../styles/cardsRepo.module.css'
import Link from "next/link"
import Image from 'next/image'
import Modal from '@/app/components/Modal'




const getRespos = async(param: string) => {
  const res = await fetch(`https://api.github.com/users/${param}/repos`)
  return res.json()

}

const getData = async(param: string) => {

  const res = await fetch(`https://api.github.com/users/${param}`)
  return res.json()
  
}

export default async function DetailUser({params}: {params:{slug: string}}) {


    const dataUser =  getData(params.slug)
    const repoUser =  getRespos(params.slug)

    const [ data, repo ] = await Promise.all([dataUser, repoUser])


  return (
    <>
   

    <div className='grid mx-auto bg-slate-600 w-full h-screen items-center justify-center'>
      <div className={cards.card}>
        <div className={cards.card2}>
          <div className='gap-4 mx-auto grid grid-cols-1 w-72 h-full md:w-full md:h-full lg:w-full lg:h-full md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>   
            
              {/* COLS 1 */}
              <div className='text-[10px] pl-5 pt-5 md:text-lg md:px-10 md:py-5 lg:text-xl xl:text-xl'>
                <div className='avatar border rounded-full border-cyan-400 mb-5'>
                    <div className='rounded-full w-20 lg:w-32 xl:w-32'>
                      <Image src={data.avatar_url} alt='avatar-user' width={100} height={100} priority={false} sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw" loading = 'lazy'/>
                    </div>
                </div>
                <ul className='pb-5'>
                  <li>Nama : {data.login}</li>
                  <li>Public Repo : {data.public_repos}</li>
                  <li>{data.company}</li>
                  <li>{data.location}</li>                  
                </ul>
                <button
                className='text-black bg-white rounded-md px-2 py-1'
                ><Link href={data.html_url}>Github Account</Link></button>         
              </div>          
              
              {/* COLS 2 */}
              <div className='text-[10px] pl-5 pt-5 md:text-lg md:px-10 md:py-5 lg:text-xl xl:text-xl'>
                <div className='pb-5'>Repository :</div>
                  <div className=''>
                {
                  repo.slice(0, 5).map((repos:any , index: any)=> {
                    return (
                      <>
                      <ul key={index} className='pb-3'>
                        <li className='hover:text-cyan-400'><Link href={repos.html_url}>{repos.name}</Link></li>
                        <Modal desc={repos.description}/>                                     
                      </ul>
                      
                      </>
                    )
                  })
                }
                </div>
              </div>

          </div>
        </div>
    </div>

  </div>







 

    </>
    )
}

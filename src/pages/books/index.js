import React, { useEffect, useState } from 'react'
import { Table } from '@/components/table'
import { CreateBookModalComponent } from '../../components/CreateBookModal'
import { useBooksQuery } from '@/services/supabaseServices'
import { Header } from '@/components/Header'
import { useBookStore } from '@/state/store'

function Page() {
    const [openCreateModal, setOpenCreateModal] = useState(false)
  const { isLoading, isError } = useBooksQuery();
  const [books, fetchData] = useBookStore((state) => [state.books, state.fetchData]);
    useEffect(() => {
        fetchData()
    },[])
  return (
    <>
     <CreateBookModalComponent 
        isOpenModal={openCreateModal} 
        setIsOpenModal={setOpenCreateModal}
    />
    <Header/>
   
    <div className='relative w-full '>
        <div className='w-full text-black text-center py-2 mx-auto text-6xl'>Books</div>
        <div className='flex flex-col mt-10 justify-center items-center w-full h-full '>
        <div className="w-full flex justify-center"> 
            <button 
                onClick={() => setOpenCreateModal(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
            >   Create A Book
            </button>
        </div>
            <Table data={books} isLoading={isLoading}/>
        </div>
        
    </div>
  
    </>
  )
}

export default Page
import moment from "moment"
import { DeleteBookModalComponent } from "./DeleteBookModal"
import { useState } from "react"
import { EditBookModalComponent } from "./EditBookModal"


export const Table = (props) => {
    const {data, isLoading} = props
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [deleteId, setDeleteId] = useState(null)
    const [openEditModal, setOpenEditModal] = useState(false)
    const [editItem, setEditItem] = useState(null)
    
    return (
        <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Author
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                                Title
                                <a href="#">
                                    <svg className="w-3 h-3 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg>
                                </a>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                                Genre
                                <a href="#"><svg className="w-3 h-3 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                </svg>
                                </a>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                                Published Date
                                <a href="#"><svg className="w-3 h-3 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                </svg>
                                </a>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <label>Actions</label>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.length > 0 && Array.isArray(data) ? data?.map((item, index) => {
                        return (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.id}
                                </th>
                                <th scope="row" className="px-6 py-4">
                                    {item.author}
                                </th>
                                <td className="px-6 py-4">
                                    {item.title}
                                </td>
                                <td className="px-6 py-4">
                                    {item.genre}
                                </td>
                                <td className="px-6 py-4">
                                    {moment(item.publishedDate).format('MMMM Do YYYY, h:mm:ss a')}
                                </td>
                                <td className="px-6 py-4 text-right space-x-4">
                                    <label onClick={() => {
                                         setOpenEditModal(true)
                                         setEditItem(item, () => {
                                            console.log("editItem", editItem)
                                         })
                                    }}
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </label>
                                    <label onClick={() => {
                                        setOpenDeleteModal(true)
                                        setDeleteId(item.id)
                                    }}
                                    className="font-medium text-ref-600 dark:text-red-500 hover:underline"
                                    >
                                        Delete
                                    </label>
                                </td>
                            </tr>
                        )
                    }) :
                        <>
                            {isLoading ?
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 space-y-2.5 animate-pulse max-w-lg">
                                    <td colSpan="7 " className=" bg-gray-300  dark:bg-gray-600 w-full text-center">Loading...</td>

                                </tr>
                                :
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                                    <td colSpan="7 " className="font-medium text-gray-900 whitespace-nowrap dark:text-white" id="records">No records found!</td>
                                </tr>}
                        </>}

                </tbody>
            </table>
        </div>
        <DeleteBookModalComponent 
        isOpenModal={openDeleteModal} 
        setIsOpenModal={setOpenDeleteModal} 
        deleteId={deleteId}
        />
        <EditBookModalComponent 
        isOpenModal={openEditModal} 
        setIsOpenModal={setOpenEditModal} 
        editItem={editItem}
        />
        </>

    )
}
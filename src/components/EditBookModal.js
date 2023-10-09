
import Modal from "./Modal";
import { useEditItem } from "@/services/supabaseServices";
import { useBookStore } from "@/state/store";
import { useEffect, useState } from "react";

export const EditBookModalComponent = (props) => {
  const editItemMutation = useEditItem();

  const {isOpenModal, setIsOpenModal, editItem} = props;
  const [fetchData] = useBookStore((state) => [state.fetchData]);
  const [booksData, setBooksData] = useState()
  useEffect(() => {
    setBooksData(editItem)
  },[editItem])

  const handleInputChange = (e) => {
      e.preventDefault();
    const { name, value } = e.target;
    setBooksData((prev) => {
        return { ...prev, [name]: value }
    });
  };

  const handleSubmit = async () => {
    try {
        await editItemMutation.mutateAsync(booksData).then(async (newData) => {
          await fetchData()
        });
        setIsOpenModal(false)
      } catch (error) {
        console.error('Error creating book:', error);
      }
  }
  return (
    <div className=" relative w-full h-auto p-auto">
    <Modal
      isOpen={isOpenModal}
      onClose={() =>
        setIsOpenModal(false)
      }
      closable
      title="Create A Book"
      contentClass={`rounded-lg`}
    >
      <div className="flex flex-col">
      {/* <form onSubmit={handleSubmit}> */}
        <div className="mb-4 flex flex-row gap-x-2 items-center">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-500 sm:text-sm"
            value={booksData?.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex flex-row gap-x-2 items-center">
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">
            Author:
          </label>
          <input
            type="text"
            id="author"
            name="author"

            className=" block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-500 sm:text-sm"
            value={booksData?.author}
            onChange={handleInputChange}            
            required
          />
        </div>
        <div className="mb-4 flex flex-row gap-x-2 items-center">
          <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
            Genre:
          </label>
          <input
            type="text"
            id="genre"
            name="genre"

            className=" block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-500 sm:text-sm"
            value={booksData?.genre}
            onChange={handleInputChange} 
            required
          />
        </div>
        <div className="w-full flex justify-center">
            <button
                type="button"
                onClick={() => handleSubmit()}
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full"
            >
                Add Book
            </button>
        </div>
      {/* </form> */}
      </div>
    </Modal>
    </div>
  );
};
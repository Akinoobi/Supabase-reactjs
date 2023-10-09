
import Modal from "./Modal";
import { useCreateBookMutation, useDeleteBookMutation } from "@/services/supabaseServices";
import { useBookStore } from "@/state/store";
import { useState } from "react";
import { useQueryClient } from "react-query";

export const DeleteBookModalComponent = (props) => {
  const deleteBookMutation = useDeleteBookMutation(); // Initialize the delete mutation hook

  const [fetchData] = useBookStore((state) => [state.fetchData]);
  const {isOpenModal, setIsOpenModal, deleteId} = props;
  const handleSubmit = async () => {
    try {
        await deleteBookMutation.mutateAsync(deleteId);
        setIsOpenModal(false)
        await fetchData();
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

      <div className="flex flex-row">
            <p>Do you really wish to delete this book <label className="text-md"></label>?</p>
      </div>
      <div className="flex flex-row justify-end gap-x-2">
        <button className="bg-red-400 rounded-md px-2 text-white" onClick={() => handleSubmit()}> Yes</button>
        <button className="bg-gray-400 rounded-md px-2 text-white" onClick={() => setIsOpenModal(false)}> No</button>

      </div>
        </div>
    </Modal>
    </div>
  );
};
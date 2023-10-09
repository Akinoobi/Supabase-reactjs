import { supabase } from '@/state/supabase';
import { useQuery, useMutation } from 'react-query';

export const fetchAllData = async () => {
  const { data, error } = await supabase.from('Books').select('*');
  if (error) throw error;
  return data;
};
const createBook = async (newBook) => {
    const { data, error } = await supabase.from('Books').insert([{
        title: newBook.title,
        author: newBook.author,
        genre: newBook.genre
    }]).select();
    if (error) throw error;
    return data;
  };

const deleteBook = async (bookId) => {
const { error } = await supabase.from('Books').delete().eq('id', bookId);
if (error) throw error;
};
const editItem = async (data) => {
    const { data: updatedData, error } = await supabase
      .from("Books")
      .update(data)
      .eq("id", data.id);
  
    if (error) {
      throw new Error(error.message);
    }
  
    return updatedData;
  };

export const useEditItem = () => {

return useMutation(editItem);
};
export const useDeleteBookMutation = () => {
    return useMutation(deleteBook);
  };
export const useBooksQuery = () => {
    return useQuery('Books', fetchAllData);
};
  
export const useCreateBookMutation = () => {
    return useMutation(createBook);
};
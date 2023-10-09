import { fetchAllData, useDeleteBookMutation } from '@/services/supabaseServices';
import create from 'zustand';

const useBookStore = create((set) => ({
    books: [],
    setBooks: (newBooks) => set({ books: newBooks }),
    fetchData: async () => {
        const data = await fetchAllData();
        set({ books: data });
      },
   
  }));
  
  export { useBookStore };
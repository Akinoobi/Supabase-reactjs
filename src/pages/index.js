import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/books'); // Replace 'home' with the new name of your custom index file
  }, []);

  return null;
};

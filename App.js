
import { useState } from 'react';
import { useEffect } from 'react';
import { ImageCard } from './ImageCard';
function App() {

        const [images,setImages]=useState([]);
        const [isloading,setIsLoading]=useState(true);
        const [term,setTerm]=useState("");
        const [text,setText]=useState("");

       

useEffect(()=>{
  fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
  .then(res=>res.json())
  .then(data=> {
    setImages(data.hits);
    setIsLoading(false);
  })
  .catch(err=> console.log(err))
},[term])

// const onSubmit=()=>{
//   setTerm(text)
// }

  return (
   <>
      <div className='p-4 bg-slate-950 text-center'> 
       
          <input onChange={e=>setText(e.target.value)} type='text' placeholder='Search for the images' className='w-fit border-2 border-slate-600 rounded-md'/>

          <button onClick={()=> setTerm(text)} className=' ml-2 bg-blue-600 hover:bg-blue-800 rounded-sm text-white px-2'>Search</button>
       
      </div>

   <div className='bg-slate-800 flex flex-wrap justify-around'>

   {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}


  </div>
 
   </>
  );
}

export default App;

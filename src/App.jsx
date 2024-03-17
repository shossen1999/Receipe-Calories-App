
import { useState } from 'react'
import './App.css'
import BannerImage from './components/BannerImage/BannerImage'
import Cards from './components/Cards/Cards'
import Cooks from './components/Cooks/Cooks'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [cooks, setCooks] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const handleDelete = (id) => {
  
    const newCooks = cooks.filter(item => item.id != id)
    setCooks(newCooks);

    const deletedRecipe = cooks.find(item => item.id === id);
    if (deletedRecipe) {
      
      setCurrentlyCooking(prevState => [...prevState, deletedRecipe]);
    }
  }

  const handleCart = (p) => {
    const isExist = cooks.find(item => item.id == p.id);
    if (!isExist) {
      setCooks([...cooks, p]);

    }

    else {
      toast("already exist");
    }



  };

  console.log(cooks);




  return (
    <>
      <ToastContainer />
      <Header></Header>
      <BannerImage></BannerImage>
      <div className=' max-w-7xl mx-auto mt-10 font-lexend'>
        <div className='text-center space-y-4'>
        <h3 className="text-4xl">Our Recipes</h3>
        <p className='text-[14px] w-2/3 mx-auto font-fireSans text-[#878787]'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
        </div>
        <div className='flex flex-col md:flex-row'>
        <Cards
          handleCart={handleCart}
        ></Cards>
        <Cooks
          currentlyCooking={currentlyCooking}
          handleDelete={handleDelete}
          cooks={cooks}>

        </Cooks>
        </div>
      </div>

    </>
  )
}

export default App

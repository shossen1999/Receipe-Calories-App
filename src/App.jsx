
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
      <div className=' max-w-7xl mx-auto mt-20 font-lexend'>
        <div className='text-center space-y-4'>
        <h3 className="text-4xl font-semibold">Our Recipes</h3>
        <p className='text-[14px] w-2/3 mx-auto  text-[#878787]'>Recipes with higher calorie counts may provide more energy but should be consumed in moderation to prevent excess calorie intake.When planning meals, its important to consider the caloric value of each recipe . </p>
        </div>
        <div className='flex flex-col md:flex-row mt-10'>
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

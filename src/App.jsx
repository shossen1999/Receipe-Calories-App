
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
    // to remove something we need to use 'filter'
    const newCooks=cooks.filter(item=>item.id != id)
    setCooks(newCooks);

    const deletedRecipe = cooks.find(item => item.id === id);
    if (deletedRecipe) {
        // Add the deleted recipe to the Currently Cooking table
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
      <div className='flex flex-col md:flex-row max-w-7xl mx-auto mt-10 '>
        <Cards
          handleCart={handleCart}
        ></Cards>
        <Cooks
        currentlyCooking={currentlyCooking}
          handleDelete={handleDelete}
          cooks={cooks}>

        </Cooks>
      </div>

    </>
  )
}

export default App

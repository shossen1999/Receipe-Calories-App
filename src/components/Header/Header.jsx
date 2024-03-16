import profile from '../../assets/images/Frame 5.png'
import icon from '../../assets/images/Frame (7).png'


const Header = () => {
    return (
        <div className='max-w-7xl mx-auto font-lexend'>
             <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a  className="text-xl" href="#item1">Home</a></li>
            <li><a className="text-xl" href="#item1">Recipes</a></li>
            <li><a className="text-xl"href="#item1">About</a></li>
            <li><a className="text-xl"href="#item1">Search</a></li>
            
            
          </ul>
        </div>
        <a href="#daisyUI" className="text-3xl text-black font-bold">Recipe Calories</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li><a  className="text-xl" href="#item1">Home</a></li>
            <li><a className="text-xl" href="#item1">Recipes</a></li>
            <li><a className="text-xl"href="#item1">About</a></li>
            <li><a className="text-xl"href="#item1">Search</a></li>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
      <button 
      
      className="flex items-center justify-center gap-3 rounded-full bg-gray-200 text-black py-2 px-14  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"

      
    >
        <img src={icon} alt="" />
    <span>  Search</span>
    </button>
     <img src={profile} alt="" />
      </div>
    </div>
        </div>






    );
};

export default Header;
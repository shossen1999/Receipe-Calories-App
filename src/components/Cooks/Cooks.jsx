import PropTypes from 'prop-types'
import Cook from '../Cook/Cook';

const Cooks = ({cooks,handleDelete,currentlyCooking}) => {
    return (
        <div className="md:w-1/3 border-2 rounded-xl">
            <h3 className="text-4xl font-lexend border-b-2  p-4">Want to Cook : {cooks.length}</h3>
            {
                cooks.map((cook,idx) => <Cook 
                key={idx} 
                idx={idx } 
                handleDelete={handleDelete}
                 cook={cook}></Cook>)
            }

<div className=" border-2 ">
                <h3 className="text-4xl font-lexend border-b-2 p-4">Currently Cooking: {currentlyCooking.length}</h3>
                {
                    currentlyCooking.map((cook,idx) => (
                        <div key={cook.id} className="flex bg-gray-100 font-fireSans rounded-[16px] p-4 m-2 items-center justify-around mt-4 space-y-4 text-[#878787]">
                            <p>{idx+1}</p>
                            <h5>{cook.name}</h5>
                            <h5>{cook.preparing_time}</h5>
                            <h5>{cook.calories}</h5>
                        </div>
                    ))
                }
            </div>
            
            
        </div>
    );
};

Cooks.propTypes = {
    
    cooks: PropTypes.array,
    handleDelete:PropTypes.func,
    currentlyCooking: PropTypes.array

}

export default Cooks;
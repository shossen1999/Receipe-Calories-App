import PropTypes from 'prop-types';
import Cook from '../Cook/Cook';

const Cooks = ({ cooks, handleDelete, currentlyCooking }) => {

    let totalPrepTimeCurrentlyCooking = 0;
    for (let i = 0; i < currentlyCooking.length; i++) {
        totalPrepTimeCurrentlyCooking += parseInt(currentlyCooking[i].preparing_time);
    }

    let totalCaloriesCurrentlyCooking = 0;
    for (let i = 0; i < currentlyCooking.length; i++) {
        totalCaloriesCurrentlyCooking += parseInt(currentlyCooking[i].calories);
    }



    return (
        <div className="md:w-1/3 border-2 border-[#282828] ml-4 mr-4 md:ml-0 md:mr-0 border-opacity-[20%] rounded-xl overflow-hidden">
            {/* Want to Cook Section */}
            <h3 className="text-4xl font-lexend border-b-2 p-8">Want to Cook : {cooks.length}</h3>
            <div className="flex bg-white font-fireSans  items-center mt-4 text-[#878787]">
                <h5 className='md:ml-14 ml-24'>name</h5>
                <h5 className='md:ml-14 ml-24'>Time</h5>
                <h5 className='md:ml-12 ml-16'>Calories</h5>
                


            </div>
            {
                cooks.map((cook, idx) => (
                    <Cook key={idx} idx={idx} handleDelete={handleDelete} cook={cook}></Cook>
                ))
            }


            {/* Currently Cooking Section */}
            <div className="mt-4">
                <h3 className="text-4xl font-lexend p-8  border-b-2">Currently Cooking: {currentlyCooking.length}</h3>
                <div className="flex bg-white font-fireSans  items-center  mt-4 text-[#878787]">

               
                <h5 className='md:ml-20 ml-36'>name</h5>
                <h5 className='md:ml-20 ml-28'>Time</h5>
                <h5 className='md:ml-20 ml-24'>Calories</h5>
                


            </div>
                {
                    currentlyCooking.map((cook, idx) => (
                        <div key={cook.id} className="flex  bg-gray-100 font-fireSans rounded-[16px] p-4 m-2 items-center justify-around space-y-4 text-[#878787]">
                            <p>{idx + 1}</p>
                            <h5 className='w-[80px]'>{cook.name}</h5>
                            <h5>{cook.preparing_time}</h5>
                            <h5>{cook.calories}</h5>
                        </div>
                    ))
                }

                <div className="flex justify-end font-lexend gap-4 p-4 mt-4 bg-white rounded-[16px] font-semibold text-[#282828] opacity-[80%]">
                    <div>
                        <p>Total Time= </p>
                        <p>{totalPrepTimeCurrentlyCooking} minutes</p>
                    </div>
                    <div>
                        <p>Total Calories= </p>
                        <p>{totalCaloriesCurrentlyCooking}calories</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

Cooks.propTypes = {
    cooks: PropTypes.array,
    handleDelete: PropTypes.func,
    currentlyCooking: PropTypes.array,
};

export default Cooks;

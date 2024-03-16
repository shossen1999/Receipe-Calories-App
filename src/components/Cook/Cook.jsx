import PropTypes from 'prop-types'

const Cook = ({ cook, idx,handleDelete }) => {
    const { name, preparing_time, calories } = cook;

    return (
        <div className="flex bg-gray-100 rounded-[16px] p-4 m-2 items-center justify-around mt-4 space-y-4 text-[#878787]">

            <p>{idx + 1}</p>
            <h5 className='w-[80px]'>{name}</h5>
            <h5>{preparing_time}</h5>
            <h5>{calories}</h5>
            <div className=''>
                <button
                   onClick={()=>handleDelete(cook.id) }
                    className=" text-black p-2 border-none rounded-[16px] text-[14px] font-bold bg-[#0BE58A]">
                    Preparing
                </button>
            </div>


        </div>
    );
};

Cook.propTypes = {

    cook: PropTypes.object,
    idx: PropTypes.number,
    handleDelete:PropTypes.func

}

export default Cook;
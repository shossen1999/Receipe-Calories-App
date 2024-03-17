import PropTypes from 'prop-types';
import clock from '../../assets/images/clock.png';
import fire from '../../assets/images/calories.png';

const Card = ({ card, handleCart }) => {
    const { name, image, description, ingredients, preparing_time, calories } = card;

    return (
        <div className='mb-10 font-lexend ml-4 mr-4'>

            {/* card */}
            <div className="border-[#282828] border-opacity-[20%] rounded-[16px] border-2 p-4 md:p-8 md:w-96 bg-base-100 shadow-xl">
                <figure>
                    <img className='w-full rounded-[16px]' src={image} alt="" />
                </figure>
                <div className="card-body">
                    <h4 className="text-[20px] font-semibold">{name}</h4>
                    <p className="text-[16px] font-fireSans text-[#878787]">{description}</p>

                    <hr className="my-2" />

                    <h5 className="text-[18px]">Ingredients : {ingredients.length}</h5>
                    <ul className="list-disc ml-4">
                        {ingredients.map((ingredient, index) => (
                            <li className='text-[16px] font-fireSans text-[#878787]' key={index}>{ingredient}</li>
                        ))}
                    </ul>

                    <div className='flex my-4 text-[#878787]'>
                        <div className="flex-1 flex items-center gap-2">
                            <div className="">
                                <img src={clock} alt="" />
                            </div>
                            <div className="">
                                <p className="text-[16px]">{preparing_time}</p>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center gap-2">
                            <div className="">
                                <img src={fire} alt="" />
                            </div>
                            <div>
                                <p className="text-[16px]">{calories}</p>
                            </div>
                        </div>
                    </div>

                    <div className="card-actions justify-center">
                        <button
                            onClick={() => handleCart(card)}
                            className="btn border-none rounded-[16px] text-[20px] font-semibold bg-[#0BE58A]">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object,
    handleCart: PropTypes.func
};

export default Card;

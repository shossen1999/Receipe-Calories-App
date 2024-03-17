import bannerImg from '../../assets/images/banner.png';
import './BannerImage.css'
const BannerImage = () => {
    return (
        <div className='max-w-7xl mx-auto font-lexend '>
            <div className="hero h-[600px] rounded-[24px]" style={{backgroundImage: `url(${bannerImg})`}}>
      <div className=""></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-5xl font-bold text-white">Exploring Recipe Calories for Healthier Living!</h1>
          <p className="mb-5 text-white">Recipe calories are an essential consideration for maintaining a balanced diet and healthy lifestyle, as they provide insight into the nutritional value and energy content of a meal.</p>
          <button className="btn border-none rounded-full text-[20px] font-semibold bg-[#0BE58A]">Explore Now</button>
          <button className="button">Our Feedback</button>

        </div>
      </div>
    </div>
            
        </div>
    );
};

export default BannerImage;
import bannerImg from '../../assets/images/banner.png';
import './BannerImage.css'
const BannerImage = () => {
    return (
        <div className='max-w-7xl mx-auto font-lexend '>
            <div className="hero h-[600px] rounded-[24px]" style={{backgroundImage: `url(${bannerImg})`}}>
      <div className=""></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-5xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
          <p className="mb-5 text-white">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
          <button className="btn border-none rounded-full text-[20px] font-semibold bg-[#0BE58A]">Explore Now</button>
          <button className="button">Our Feedback</button>

        </div>
      </div>
    </div>
            
        </div>
    );
};

export default BannerImage;
import Image from "next/image";
import FIREPIT from "../public/aa-firepit-icon-3.webp";
import WATERFALL from "../public/aa-waterfall-icon-3.webp";
import STEPS from "../public/aa-steps-icon-3.webp";
import WALLSTONE from "../public/aa-wallstone-icon-3.webp";
import FIREPITLG from "../public/firepit-01.webp";
import STEPSLG from "../public/steps-01.webp";
import WATERFALLLG from "../public/waterfall-01.webp";
import WOMAN from "../public/woman.webp";
import MAN from "../public/man.webp";

export default function Home() {
  return (
    <>
    <div className="w-full h-full pb-[5rem] bg-hero-home flex flex-col justify-start pt-[10rem] lg:pt-[15rem] px-[5%] items-start bg-no-repeat bg-cover bg-center">
      <h1 className="font-antonio font-bold text-white uppercase lg:w-[60%] [text-shadow:3px_3px_0px_#000]">Elevate Your Outdoors</h1>
      <h2 className="font-antonio text-xl text-[#cff2a3]">Transforming Cape Cod, One Hardscape at a Time</h2>
      <p className="font-robotolight text-xl text-white lg:w-[75%] tracking-wide">Choose Cape Cod Hardscapes for our unrivaled craftsmanship and commitment to bringing the timeless beauty of Cape Cod to your doorstep, one stone at a time. With our dedication to quality, integrity, and customer satisfaction, your outdoor space is in trusted hands.</p>
      <div className="btn mt-[2rem] cursor-pointer hover:bg-[#cff2a3]">Schedule a free consultation</div>
    </div>
    <div className="w-full flex justify-between items-stretch gap-y-20 mt-[10rem] mb-[10rem] px-[5%] flex-wrap">
      <div className="card lg:max-w-[18rem] lg:min-w-[7rem] max-w-full h-20rem border border-gray-300 rounded-sm p-5 font-didact flex flex-col justify-center items-center bg-white">
        <Image className="-mt-[4rem]" src={FIREPIT} alt="Firepit" width={100} height={100} />
        <h3 className="text-2xl">Fire Pits</h3>
        <p>Cape Cod Hardscapes excels at crafting stunning stone fire pits, turning outdoor areas into cherished gathering spots for creating lasting memories.</p>
      </div>
      <div className="card lg:max-w-[18rem] max-w-full h-20rem border border-gray-300 rounded-sm p-5 font-didact flex flex-col justify-center items-center bg-white">
        <Image className="-mt-[4rem]" src={STEPS} alt="Steps" width={100} height={100} />
        <h3 className="text-2xl">Steps & Treads</h3>
        <p>Cape Cod Hardscapes expertly crafts durable steps and treads, seamlessly blending functionality with timeless elegance for outdoor spaces.</p>
      </div>
      <div className="card lg:max-w-[18rem] max-w-full h-20rem border border-gray-300 rounded-sm p-5 font-didact flex flex-col justify-center items-center bg-white">
        <Image className="-mt-[4rem]" src={WATERFALL} alt="Waterfall" width={100} height={100} />
        <h3 className="text-2xl">Water Features</h3>
        <p>Cape Cod Hardscapes designs captivating backyard waterfalls, blending cascading water with serene surroundings for a relaxing oasis.</p>
      </div>
      <div className="card lg:max-w-[18rem] max-w-full h-20rem border border-gray-300 rounded-sm p-5 font-didact flex flex-col justify-center items-center bg-white">
        <Image className="-mt-[4rem]" src={WALLSTONE} alt="Wallstone" width={100} height={100} />
        <h3 className="text-2xl">Walls & Walkways</h3>
        <p>Cape Cod Hardscapes builds durable, stylish retaining walls that enhance outdoor spaces with stability, charm, and timeless elegance.</p>
      </div>
    </div>

    <div className="flex justify-start items-stretch w-full px-[5%] gap-4 flex-wrap mb-[5rem]">
      <div className="lg:flex-1">
        <Image src={FIREPITLG} alt="Firepit" width={500} height={300} />
      </div>
      <div className="lg:flex-1">
      <h3 className="text-4xl">Ignite Your Outdoor Oasis:</h3>
      <h4 className="text-2xl">The Allure of Cape Cod Hardscapes Stone Fire Pits</h4>
      <p>Discover the allure of Cape Cod Hardscapes stone fire pits where craftsmanship meets functionality. Our meticulously crafted fire pits are designed to be the focal point of your outdoor space, offering a perfect gathering spot for cherished moments with loved ones. Our fire pits promise durability and timeless style, ensuring countless memorable evenings under the stars.</p>
      </div>
    </div>

    <div className="flex justify-start items-stretch w-full px-[5%] gap-4 flex-wrap mb-[5rem]">
      <div className="lg:flex-1">
        <Image src={STEPSLG} alt="Steps" width={500} height={300} />
      </div>
      <div className="lg:flex-1">
      <h3 className="text-4xl">Pave the Way to Perfection:</h3>
      <h4 className="text-2xl">Cape Cod Hardscapes Stone Pavers</h4>
      <p>Transform your outdoor space with the exquisite craftsmanship of Cape Cod Hardscapes stone pavers. Crafted with precision and durability in mind, our stone pavers offer unmatched elegance and functionality to any landscape. With a wide selection of styles, colors, and textures, Cape Cod Hardscapes ensures that every project reflects your unique vision and enhances the beauty of your outdoor environment.</p>
      </div>
    </div>

    <div className="flex justify-start items-stretch w-full px-[5%] gap-4 flex-wrap mb-[5rem]">
      <div className="lg:flex-1">
        <Image src={WATERFALLLG} alt="Firepit" width={500} height={300} />
      </div>
      <div className="lg:flex-1">
      <h3 className="text-4xl">Experience Tranquility:</h3>
      <h4 className="text-2xl">Cape Cod Hardscapes Backyard Waterfalls</h4>
      <p>Immerse yourself in the soothing sounds of nature with a backyard waterfall. Designed to bring tranquility and elegance to your outdoor oasis, our expertly crafted water features create a serene ambiance like no other. Crafted from premium materials and expertly installed, our backyard waterfalls not only enhance the aesthetics of your space but also provide a calming retreat from the hustle and bustle of everyday life. </p>
      </div>
    </div>
    <h6 className="px-[5%] mt-[8rem]">What They Say</h6>
    <div className="flex w-full gap-5 px-[5%] justify-between mb-[5rem] flex-wrap lg:flex-nowrap">
      <div>
        <div className="flex gap-5 border border-[#D1D5DB] rounded-lg p-3 bg-white">
          <div className="w-[30%]"><Image src={WOMAN} alt="Woman avatar" width={100} height={100} /></div>
          <div className="flex  w-[70%] flex-col justify-center items-start">
            <div>Sarah M</div>
            <div>Yarmouth, MA</div>
            <p className="text-sm">Cape Cod Hardscapes&apos; bluestone pavers turned my bland backyard into a beautiful patio oasis, perfect for relaxing and entertaining. Now we spend all our free time outdoors enjoying the space!</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-5 border border-[#D1D5DB] rounded-lg p-3 bg-white">
          <div className="w-[30%]"><Image src={MAN} alt="Woman avatar" width={100} height={100} /></div>
          <div className="flex w-[70%] flex-col justify-center items-start">
            <div>John D</div>
            <div>Brewster, MA</div>
            <p className="text-sm">Our old concrete patio was a real eyesore. Cape Cod Hardscapes came in, ripped it out, and transformed the space with their new bluestone pavers. Now, the backyards the envy of the neighborhood - looks amazing and feels great underfoot.</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-5 border border-[#D1D5DB] rounded-lg p-3 bg-white">
          <div className="w-[30%]"><Image src={WOMAN} alt="Woman avatar" width={100} height={100} /></div>
          <div className="flex  w-[70%] flex-col justify-center items-start">
            <div>Lisa B</div>
            <div>Dennis, MA</div>
            <p className="text-sm">Cape Cod Hardscapes designed and installed a stunning new fire pit thats not only safe and functional, but adds a touch of real elegance to our backyard.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

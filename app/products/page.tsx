import React from 'react'
import Image from 'next/image'
import HEROBGPROD from '../../public/herobg-prod.webp'
import WALLSTONE1 from '../../public/wallstone-1.webp'
import WALLSTONE2 from '../../public/wallstone-sm-1.webp'
import WALLSTONE3 from '../../public/wallstone-sm-2.webp'
import WALLSTONE4 from '../../public/wallstone-sm-3.webp'

const Products = () => {
  return (
    <>
      <div className="w-full h-full pb-[5rem] bg-hero-products flex flex-col justify-start pt-[10rem] lg:pt-[15rem] px-[5%] items-start bg-no-repeat bg-cover bg-center">
      <h1 className="font-antonio font-bold text-white uppercase lg:w-[60%] [text-shadow:3px_3px_0px_#000]">Crafting Excellence</h1>
      <h2 className="font-antonio text-xl text-[#cff2a3]">Explore Cape Cod Hardscapes Range of Premium Products for Your Perfect Outdoor Sanctuary!</h2>
      <p className="font-robotolight text-xl text-white lg:w-[75%] tracking-wide">Choose Cape Cod Hardscapes for our unrivaled craftsmanship and commitment to bringing the timeless beauty of Cape Cod to your doorstep, one stone at a time. With our dedication to quality, integrity, and customer satisfaction, your outdoor space is in trusted hands.</p>
      <div className="btn mt-[2rem] cursor-pointer hover:bg-[#cff2a3]">Schedule a free consultation</div>
    </div>

    <div className='flex w-full justify-between px-[5%] py-[1%] mt-[5rem] flex-wrap gap-6'>
      <div className='lg:flex-1 w-full'>
        <Image src={WALLSTONE1} alt='a stone retaining wall with small New England Round Wallstone at a house in Chatham, Massachusetts' className='lg:w-300 lg:h-300 w-full h-full' />
      </div>
      <div className='flex-1'>
        <h1 className='text-3xl'>Long-Lasting Wall Solutions: Cape Cod Hardscapes Wallstones</h1>
        <p className='text-sm'>Transform your Cape Cod landscape with the timeless beauty and enduring strength of Cape Cod Hardscapes wallstone products. We offer a diverse selection of wallstones to suit any style and function, from natural fieldstone for a rustic charm to tumbled colonial wallstone for a classic elegance. Our extensive inventory ensures youll find the perfect size, color, and texture to bring your vision to life. Whether youre building a majestic retaining wall, creating raised garden beds, or defining elegant garden borders, Cape Cod Hardscapes has the perfect wallstone solution to elevate your outdoor space and enhance your Cape Cod propertys value.</p>
        <div className='flex mt-[1rem] gap-3 flex-wrap'>
          <Image src={WALLSTONE2} alt='a stone retaining wall with small New England Round Wallstone at a house in Chatham, Massachusetts' width={150} height={150} />
          <Image src={WALLSTONE3} alt='a stone retaining wall with small New England Round Wallstone at a house in Chatham, Massachusetts' width={150} height={150} />
          <Image src={WALLSTONE4} alt='a stone retaining wall with small New England Round Wallstone at a house in Chatham, Massachusetts' width={150} height={150} />
        </div>
      </div>
    </div>
    </>
  )
}

export default Products

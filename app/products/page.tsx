import React from 'react'
import Image from 'next/image'
import { SpeedInsights } from "@vercel/speed-insights/next"
import HEROBGPROD from '../../public/herobg-prod.webp'
import WALLSTONE1 from '../../public/wallstone-1.webp'
import WALLSTONE2 from '../../public/wallstone-sm-1.webp'
import WALLSTONE3 from '../../public/wallstone-sm-2.webp'
import WALLSTONE4 from '../../public/wallstone-sm-3.webp'
import PROD1 from '../../public/prod-4.webp'
import PROD2 from '../../public/prod5.webp'
import PROD3 from '../../public/prod6.webp'
import PROD4 from '../../public/prod7.webp'
import PROD8 from '../../public/prod8.webp'
import PROD9 from '../../public/prod9.webp'
import PROD10 from '../../public/prod10.webp'
import PROD11 from '../../public/prod11.webp'


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
          <Image src={WALLSTONE2} alt='Pennsylvania Fieldstone Wall Stone in a cape cod yard' width={150} height={150} />
          <Image src={WALLSTONE3} alt='Tumbled Colonial Wallstone wallstone in a cape cod yard' width={150} height={150} />
          <Image src={WALLSTONE4} alt='North Mountain Granite Wallstone in a Cape Cod yard' width={150} height={150} />
        </div>
      </div>
    </div>

    <div className='flex w-full justify-between px-[5%] py-[1%] mt-[5rem] flex-wrap gap-6'>
      <div className='lg:flex-1 w-full'>
        <Image src={PROD1} alt='a stone retaining wall with small New England Round Wallstone at a house in Chatham, Massachusetts' className='lg:w-300 lg:h-300 w-full h-full' />
      </div>
      <div className='flex-1'>
        <h1 className='text-3xl'>Elevate Your Cape Cod Entryway with Durable Granite Steps & Treads</h1>
        <p className='text-sm'>For a timeless and elegant touch that complements the Cape Cod aesthetic, consider incorporating granite steps and treads into your hardscape design. Granites natural beauty and exceptional durability make it a perfect choice for exterior applications. It weathers the harsh New England winters with ease, ensuring a long-lasting and low-maintenance upgrade to your propertys facade.</p>
        <div className='flex mt-[1rem] gap-3 flex-wrap'>
          <Image src={PROD2} alt='Antique Granite Steps in a Cape Cod cottage' width={150} height={150} />
          <Image src={PROD3} alt='Sierra Tan Steps in a Cape Cod yard' width={150} height={150} />
          <Image src={PROD4} alt='Pennsylvania Fieldstone Steps in a Cape Cod Yard' width={150} height={150} />
        </div>
      </div>
    </div>

    <div className='flex w-full justify-between px-[5%] py-[1%] mt-[5rem] flex-wrap gap-6'>
      <div className='lg:flex-1 w-full'>
        <Image src={PROD8} alt='Reclaimed Cobblestones in a Cape Cod driveway at a house in Dennis, Massachusetts' className='lg:w-300 lg:h-300 w-full h-full' />
      </div>
      <div className='flex-1'>
        <h1 className='text-3xl'>Crafted Beauty & Durability: Cape Cod Hardscape Pavers</h1>
        <p className='text-sm'>Transform your Cape Cod outdoor space with the timeless appeal and enduring strength of pavers. Unlike traditional materials, pavers offer unmatched versatility and resilience, perfectly suited for Cape Cods weather conditions. They create a charming and inviting atmosphere for patios, walkways, driveways, and pool decks, all while requiring minimal maintenance.</p>
        <div className='flex mt-[1rem] gap-3 flex-wrap'>
          <Image src={PROD9} alt='Pine Hall Brick Pavers in a Cape Cod Drivewy, Sandwich, Massachusetts' width={150} height={150} />
          <Image src={PROD10} alt='City Hall Brick Pavers in a Cape Cod driveway' width={150} height={150} />
          <Image src={PROD11} alt='KF Brick Pavers in a cape cod driveway' width={150} height={150} />
        </div>
      </div>
    </div>
    </>
  )
}

export default Products
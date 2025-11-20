import React from 'react'
import CustomContainer from '../reusable/container/CustomContainer'
import CustomButton from '../reusable/button/CustomButton'
import { ArrowRightIcon } from '../custom-icons'


function VendorHomeAccountComponent() {
  return (
    <div className="pt-[148px]">
      <CustomContainer>

        <div className=' h-[200px] mb-20 flex items-center'
        style={{backgroundImage: "url('/images/vendor-web-account.png')"}}
        >
          <div className='px-10 space-y-4 w-[90%] xl:w-[50%]'>
            <h1 className='text-[#000000] font-bold text-[16px] xl:text-[20px]'>Focus on Cleaning. We Handle the Bookings.</h1>
            <p className="font-medium text-[16px] text-[#535353]">Join the fastest-growing platform connecting top-tier cleaning professionals with clients across New York City. Get reliable, quality leads directly to your business.</p>
            <CustomButton text='Create your vendor account' svgIcon={<ArrowRightIcon />} />
          </div>
        </div>


      </CustomContainer>
    </div>

  )
}

export default VendorHomeAccountComponent
import Image from "next/image"
import { ArrowRightIcon, VendorIcon } from "../custom-icons"
import CustomContainer from "../reusable/container/CustomContainer"
import CustomTitle from "../reusable/CustomTitle"
import CustomButton from "../reusable/button/CustomButton"


function VendorComponent() {
    return (
        <div className="pt-[148px]">
            <CustomContainer>
                <div className="pb-8">
                    <CustomTitle text={'For vendors'} svgIcon={<VendorIcon />} />
                </div>

                <div className="flex justify-between items-center gap-3 xl:gap-10">
                    <div className="space-y-3">
                        <h1 className="text-[#000000] font-bold text-[16px] xl:text-[20px]">Ready to Grow Your Cleaning Business?</h1>
                        <div>
                            <p className="font-sans font-medium text-[16px] text-[#535353]">Focus on the excellent service you provide. We handle the demanding task of client acquisition, scheduling, and secure payments so your  </p>
                            <p className=" font-medium ">business can thrive in the NYC market.</p>
                        </div>

                        <ul className="list-disc list-inside">
                            <li className=""><span className="font-bold">Reliable Leads:</span>  Get steady bookings in your service area.</li>

                            <li><span className="font-bold">Set Your Rates:</span> You control your pricing and schedule..</li>
                            <li><span className="font-bold">Simple Payouts:</span> Fast, secure payment processing.</li>
                        </ul>
                        <CustomButton text="Continue as vendor" svgIcon={<ArrowRightIcon />} />
                    </div>

                    <div>
                        <Image
                            src="/images/vendor-web-photo.png"
                            alt="Nexus Logo"
                            width={500}
                            height={500}
                            className=""
                        />
                    </div>
                </div>
            </CustomContainer>
        </div>
    )
}

export default VendorComponent
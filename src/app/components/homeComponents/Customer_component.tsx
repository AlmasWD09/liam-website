import Image from "next/image"
import { ArrowRightIcon, CustomerIcon } from "../custom-icons"
import CustomContainer from "../reusable/container/CustomContainer"
import CustomTitle from "../reusable/CustomTitle"
import CustomButton from "../reusable/button/CustomButton"


function CustomerComponent() {
    return (
        <div className="pt-[148px]">
            <CustomContainer>
                <div className="pb-8">
                    <CustomTitle text={'For customers'} svgIcon={<CustomerIcon />} />
                </div>


                <div className="flex justify-between items-center gap-3 xl:gap-10">
                    <div>
                        <Image
                            src="/images/customer-web-photo.png"
                            alt="Nexus Logo"
                            width={500}
                            height={500}
                            className=""
                        />
                    </div>


                    <div className="space-y-3">
                        <h1 className="text-[#000000] font-bold text-[16px] xl:text-[20px]">Need a Sparkle? Book the Best Cleaners in NYC.</h1>
                        <div>
                            <p className="font-sans font-medium text-[16px] text-[#535353]">Stop sacrificing your weekends. Instantly connect with verified, top-rated cleaning professionals across all five boroughs. Quality service is </p>
                            <p className=" font-medium ">just a few clicks away.</p>
                        </div>

                        <ul className="list-disc list-inside">
                            <li className=""><span className="font-bold">Verified Pros:</span> Vetted and insured cleaners.</li>
                            <li><span className="font-bold">Transparent Pricing:</span>  No surprises, ever.</li>
                            <li><span className="font-bold">Flexible Booking:</span>  Schedule around your life.</li>
                        </ul>
                        <CustomButton text="Continue as user" svgIcon={<ArrowRightIcon />} />
                    </div>
                </div>
            </CustomContainer>
        </div>
    )
}

export default CustomerComponent
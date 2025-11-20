import Image from "next/image"
import CustomContainer from "../reusable/container/CustomContainer"
import CustomTitle from "../reusable/CustomTitle"
import { ClientSayIcon } from "../custom-icons"


function EXtraPage() {
    return (
        <div>
            <Image
                src="/images/logo.png"
                alt="Photo"
                width={40}
                height={40}
                className="rounded-full"
            />



            <h1 className="text-[#000000] font-bold text-[16px] xl:text-[20px]">Hello</h1>
            <p className="font-medium text-[16px] text-[#535353]">paragraph</p>


            {/* custom page for  */}
            <div className="pt-[148px]">
                <CustomContainer>
                    <div className="pb-8">
                        <CustomTitle text={'See what our customers say'} svgIcon={<ClientSayIcon />} />
                    </div>



                </CustomContainer>
            </div>
        </div>
    )
}

export default EXtraPage
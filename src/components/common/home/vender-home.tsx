import { Button } from "@/components/ui";
import React from "react";

function VendorBox() {
  return (
    <div className="pt-[148px]">
      <div className="container">
        <div
          className=" h-[200px] mb-20 flex items-center"
          style={{ backgroundImage: "url('/images/vendor-web-account.png')" }}
        >
          <div className="px-10 space-y-4 w-[90%] xl:w-[50%]">
            <h1 className="text-[#000000] font-bold text-[16px] xl:text-[20px]">
              Focus on Cleaning. We Handle the Bookings.
            </h1>
            <p className="font-medium text-[16px] text-[#535353]">
              Join the fastest-growing platform connecting top-tier cleaning
              professionals with clients across New York City. Get reliable,
              quality leads directly to your business.
            </p>
            <Button size="lg" icon={true}>
              Create your vendor account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorBox;

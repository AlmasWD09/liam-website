"use client";

import React, { useState } from "react";
import { CreditCard, Star, X } from "lucide-react";
import Image from "next/image";
import {
  CheckIcon,
  CVCIcon,
  DeleteIcon,
  EmailIcon,
  FeedbackCheckIcon,
  LocationFieldIcon,
  LocationIcon,
  PhoneIpfIcon,
  ScreenCardIcon,
  UserIcon,
} from "@/icon";
import assets from "@/assets";
import { Button } from "@/components/ui";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { booking_screma } from "@/lib";
import Form from "@/components/reusable/from";
import { FromInput } from "@/components/reusable/form-input";
import { FromTextArea } from "@/components/reusable/from-textarea";
import { useGlobalState } from "@/hooks";
import Modal2 from "@/components/reusable/modal2";
import Link from "next/link";

interface AddOn {
  id: number;
  label: string;
  price: number;
}

const intState = {
  isDReq: false,
  isFedb: false,
};

const BookingPayment: React.FC = () => {
  const [deliveryReModal, setDeliveryReModal] = useGlobalState(intState);
  const [saveCard, setSaveCard] = useState(false);
  const [addOns, setAddOns] = useState<AddOn[]>([
    { id: 1, label: "Add-on number 1", price: 50 },
    { id: 2, label: "Add-on number 2", price: 50 },
  ]);

  const packagePrice = 250;
  const subtotal =
    packagePrice + addOns.reduce((sum, addon) => sum + addon.price, 0);

  const removeAddOn = (id: number) => {
    setAddOns(addOns.filter((addon) => addon.id !== id));
  };

  const from = useForm({
    resolver: zodResolver(booking_screma),
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      address: "",
      message: "",
    },
  });

  const watchedValues = from.watch();

  const isFormValid =
    watchedValues.name?.trim() !== "" &&
    watchedValues.email?.trim() !== "" &&
    watchedValues.phone_number?.trim() !== "" &&
    watchedValues.address?.trim() !== "";

  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
  };

  return (
    <div className=" bg-white py-8 ">
      <div className="container px-4">
        <h1 className="text-[28px] font-semibold text-center mb-4">
          Schedule booking
        </h1>
        <Form from={from} onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column - Billing Details */}
            <div className="lg:col-span-8 space-y-6">
              {/* Billing Details Section */}
              <div className="border border-gray-200 rounded-lg   top-8">
                <h2 className="text-base font-semibold border-b border-gray-200 p-4">
                  Billing details
                </h2>

                <div className="space-y-5 p-4">
                  <div className="space-y-3  ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FromInput
                        label="Name"
                        name="name"
                        placeholder="Enter your full name here"
                        icon={<UserIcon />}
                        className="h-[50px]  bg-secondary  placeholder:text-muted-foreground"
                        stylelabel="text-lg"
                      />

                      <FromInput
                        label="Email"
                        name="email"
                        placeholder="Enter your email"
                        icon={<EmailIcon />}
                        className="h-[50px]  bg-secondary  placeholder:text-muted-foreground"
                        stylelabel="text-lg"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FromInput
                        label="Phone number"
                        name="phone_number"
                        type="number"
                        placeholder="Enter your phone number"
                        icon={<PhoneIpfIcon />}
                        className="h-[50px]  bg-secondary  placeholder:text-muted-foreground"
                        stylelabel="text-lg"
                      />

                      <FromInput
                        label="Address"
                        name="address"
                        placeholder="Enter your address"
                        icon={<LocationFieldIcon />}
                        className="h-[50px]  bg-secondary  placeholder:text-muted-foreground"
                        stylelabel="text-lg"
                      />
                    </div>

                    <div>
                      <FromTextArea
                        label="Additional note (Optional)"
                        name="message"
                        placeholder="Write your note here if you want to tell something to the vendor"
                        className="h-[135px] bg-secondary rounded-2xl placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method Section */}
              <div>
                {/* Header */}
                <div className="flex items-center justify-between ">
                  <h2 className="text-lg sm:text-xl font-normal text-gray-700">
                    Card information
                  </h2>
                  <ScreenCardIcon />
                </div>

                {/* Card Information Section */}
                <div className="border border-gray-300 rounded-lg overflow-hidden mb-6">
                  {/* Card Number Field */}
                  <div className="border-b border-gray-300">
                    <div className="flex items-center justify-between px-4">
                      <input
                        type="text"
                        placeholder="Card information"
                        className="flex-1 text-base outline-none"
                      />
                      <div className="flex gap-2 ml-4">
                        <Image
                          src={assets.paymentCard}
                          alt="photo"
                          width={40}
                          height={40}
                          className="w-[50px] h-[50px]  object-contain rounded-md"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Expiry and CVC Fields */}
                  <div className="flex">
                    <div className="flex-1 border-r border-gray-300 p-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full text-base outline-none"
                      />
                    </div>
                    <div className="flex-1 p-4 flex items-center justify-between">
                      <input
                        type="text"
                        placeholder="CVC"
                        className="flex-1 text-base outline-none"
                      />
                      <CVCIcon />
                    </div>
                  </div>
                </div>

                {/* Billing Address Section */}
                <h3 className="text-lg sm:text-xl font-normal text-gray-700 mb-2">
                  Billing address
                </h3>

                <div className="border border-gray-300 rounded-lg overflow-hidden mb-6">
                  {/* Country Field */}
                  <div className="border-b border-gray-300 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">
                          Country or region
                        </p>
                        <p className="text-base font-medium">United States</p>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* ZIP Field */}
                  <div className="p-4">
                    <input
                      type="text"
                      placeholder="ZIP"
                      className="w-full text-base outline-none"
                    />
                  </div>
                </div>

                {/* Save Card Checkbox */}
                <div className="flex items-center gap-3 mb-6">
                  <input
                    type="checkbox"
                    id="saveCard"
                    checked={saveCard}
                    onChange={(e) => setSaveCard(e.target.checked)}
                    className="w-5 h-5 border-2 border-gray-300 rounded cursor-pointer"
                  />
                  <label
                    htmlFor="saveCard"
                    className="text-base text-gray-700 cursor-pointer"
                  >
                    Save this card for future payment
                  </label>
                </div>

                <Button
                  // onClick={() => setPaymentModal("isEdit", false)}
                  size="lg"
                  className="w-full"
                >
                  Save changes
                </Button>
              </div>
            </div>

            {/* Right Column - Order Details */}
            <div className="lg:col-span-4">
              <div className="border border-gray-200 rounded-lg   top-8">
                <h2 className="text-base font-semibold border-b border-gray-200 p-4">
                  Order details
                </h2>

                {/* Package */}
                <div className="space-y-4 p-4 ">
                  <div>
                    <h3 className="text-sm font-semibold mb-3">Package</h3>
                    <div className="flex gap-3">
                      <Image
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=100&h=100&fit=crop"
                        alt="House"
                        width={40}
                        height={40}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-xs text-gray-600 mb-1">
                          House cleaning service for residential areas in New
                          York City.
                        </p>
                        <p className="text-base font-semibold">
                          ${packagePrice}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="">
                    <h3 className="text-sm font-semibold mb-2">Date</h3>
                    <p className="text-xs text-gray-600">17th November, 2025</p>
                  </div>

                  {/* Add-ons */}
                  <div className="">
                    <h3 className="text-sm font-semibold pb-2">Add-ons</h3>
                    <div className="space-y-2">
                      {addOns.map((addon) => (
                        <div
                          key={addon.id}
                          className=" flex items-center justify-between"
                        >
                          <div className="bg-secondary p-2 rounded-lg flex items-center gap-2 px-4">
                            <span className="text-xs text-gray-700">
                              {addon.label}
                            </span>

                            <span className="text-xs font-medium">
                              <ul className="list-disc list-inside">
                                <li>${addon.price}</li>
                              </ul>
                            </span>
                            <CheckIcon />
                          </div>

                          <button onClick={() => removeAddOn(addon.id)}>
                            <DeleteIcon />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Vendor */}
                  <div className="mb-6 pb-6 ">
                    <h3 className="text-sm font-semibold mb-3">Vendor</h3>
                    <div className="flex items-center gap-3">
                      <Image
                        src={assets.userPhoto1}
                        alt="Vendor"
                        width={40}
                        height={40}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium">John Doe</p>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-gray-600">4.5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtotal and Button */}
                <div className="pt-4 px-4 border-t border-gray-200 my-6">
                  <div className="flex items-center justify-between  ">
                    <span className="font-semibold text-gray-900">
                      Subtotal: $245
                    </span>
                    <Button
                      onClick={() => setDeliveryReModal("isFedb", true)}
                      className=""
                      size="lg"
                      icon={true}
                      disabled={!isFormValid}
                    >
                      Order now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>

      <Modal2
        open={deliveryReModal.isFedb}
        setIsOpen={(v: any) => setDeliveryReModal("isFedb", v)}
        title=""
        titleStyle="text-center"
        className="sm:max-w-xl"
      >
        <div
          className="absolute top-3 right-4 cursor-pointer"
          onClick={() => setDeliveryReModal("isFedb", false)}
        >
          <X className="text-black" />
        </div>
        <div className="flex flex-col justify-center items-center pb-4 space-y-6">
          <FeedbackCheckIcon />
          <h1 className="text-center xl:text-[20px] font-bold text-[#2D9D1E]">
            Order placed successfully
          </h1>
          <p className="text-center">
            Your order has been placed successfully. It’s in under review <br />{" "}
            for now. Please be patient until vendor accepts it.
          </p>

          <Link href={"/"} className="w-full">
            <Button className="w-full" size="lg" icon={true}>
              Go home
            </Button>
          </Link>
        </div>
      </Modal2>
    </div>
  );
};

export default BookingPayment;

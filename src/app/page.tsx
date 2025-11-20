
import Navbar from "./components/navbar/Navbar";
import CustomerComponent from "./components/homeComponents/Customer_component";
import VendorComponent from "./components/homeComponents/Vendor_component";
import WorksComponent from "./components/homeComponents/Works_component";
import AboutComponent from "./components/homeComponents/About_component";
import LoveGuestReadyComponent from "./components/homeComponents/Love_guest_ready_component";
import FaqComponent from "./components/homeComponents/Faq_component";
import CustomersSayComponent from "./components/homeComponents/Customers_say_component";
import VendorHomeAccountComponent from "./components/homeComponents/Vendor_home_account_component";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <CustomerComponent />
      <VendorComponent />
      <WorksComponent />
      <AboutComponent />
      <LoveGuestReadyComponent />
      <FaqComponent />
      <CustomersSayComponent />
      <VendorHomeAccountComponent />
    </div>
  );
}
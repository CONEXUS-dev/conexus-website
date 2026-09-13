import ScrollRunway from "@/components/hero/ScrollRunway";
import Builds from "@/sections/Builds";
import Echoagent from "@/sections/Echoagent";
import Validation from "@/sections/Validation";
import Cyndicate from "@/sections/Cyndicate";
import Technology from "@/sections/Technology";
import PatentPortfolio from "@/sections/PatentPortfolio";
import Products from "@/sections/Products";
import Nairthex from "@/sections/Nairthex";
import Echoform from "@/sections/Echoform";
import Team from "@/sections/Team";
import RefinerBridge from "@/sections/RefinerBridge";
import Partnerships from "@/sections/Partnerships";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div className="overflow-x-clip">
      <ScrollRunway />
      <Builds />
      <Echoagent />
      <Validation />
      <Cyndicate />
      <Technology />
      <PatentPortfolio />
      <Products />
      <Nairthex />
      <Echoform />
      <Team />
      <RefinerBridge />
      <Partnerships />
      <Footer />
    </div>
  );
}

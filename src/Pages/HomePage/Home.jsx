import Bonuses from "./Blocks/Bonuses"
import Fortune from "./Blocks/Fortune"
import Katalog from "./Blocks/Katalog"
import NewsVariantOne from "../../Components/NewsVariants/NewsVariantOne"


function Home() {
  return (
    <div className="container">
      <Fortune />
      <Katalog />
      <NewsVariantOne />
      <Bonuses />
    </div>
  )
}

export default Home

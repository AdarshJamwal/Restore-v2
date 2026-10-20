import type { Product } from "../../app/models/product"
import ProductList from "./ProductList"

type Props = {
  products: Product[]
 
}

// Undert the fragment we can add two different element 
const Catalog = ({products}:Props) => {
  return (
    <> 
      <ProductList products={products}/>
    </>
  )
}
export default Catalog;







import { Box } from "@mui/material"
import type { Product } from "../../app/models/product"
import ProductCard from "./ProductCard"

type Props = {
  products:Product[]
}



const ProductList = ({products}: Props) => {
  return (
      <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        },
        gap: 3,
      }}
    >
        {products.map(product=>(
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
  )
}
export default ProductList



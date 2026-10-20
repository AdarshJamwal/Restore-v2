import { useEffect, useState } from "react"
import type { Product } from "../models/product"
import Catalog from "../../features/catalog/Catalog"
import NavBar from "./NavBar";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const[products, setProducts] = useState<Product[]>([])
  const [darkMode, setDarkMode] = useState(false);

  const palleteType = darkMode ? 'dark' : 'light' 

  const theme = createTheme({
    palette:{
      mode:palleteType,
      background:{
        default:(palleteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
  })

  const toggleDarkMode = ()=>{
    setDarkMode(!darkMode);
  }



  useEffect(()=>{
    fetch('http://localhost:5172/api/product')
    .then(response=>response.json())
    .then(data=>setProducts(data))

  },[])

  // const addProduct = ()=>{
  //   setProducts(prevState=> [...prevState, 
  //   {
  //     id: prevState.length+1,
  //     name:'product' + (prevState.length+1),
  //     price:(prevState.length * 100) + 100,
  //     quantityInStock:100,
  //     description:'test',
  //     pictureUrl:'https://picssum.photo/200',
  //     type:'test',
  //     brand:'test'

  //   }])
  // }


  return (
  <ThemeProvider theme={theme}>
  <CssBaseline/>
  <NavBar  toggleDarkMode={toggleDarkMode} darkMode = {darkMode} />
  <Box  
    sx={{
      minHeight: '100vh',
      background : darkMode 
      ?  'radial-gradient(Circle, #1e3aba, #111B27)' 
      :   'radial-gradient(Circle, #baecf9, #f0f9ff)',
      py:6 
    }}
  >
    <Container maxWidth='xl' sx={{mt:8}}>
      <Catalog products={products}/>
    </Container>
  </Box>

  </ThemeProvider>
  )
}

export default App; 






















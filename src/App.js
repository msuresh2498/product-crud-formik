import './App.css';
import { useState } from 'react';
import { AppBar, Button, Paper, ThemeProvider, Toolbar, createTheme } from '@mui/material';
import ProductDetails from './products';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AddProduct from './AddProduct';
import Home from './Home';
import EditProduct from './Editproduct';
import InfoIcon from '@mui/icons-material/Info';
import { Counter } from "./couter";
import { Card, CardActions, CardContent, CardMedia, IconButton } from "@mui/material";


export function Productlist({ product, deleteButton, editButton }) {

  const styles = {
    color: product.rating > 3.9  ? "green" : "red",
  };

  return (
    <div className="card-container">
      <Card className="product-Card">
        <CardMedia className="Card-img"
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <h3 className="card-name">{product.name}</h3>
          <p className="card-ram-text">({product.ram},  {product.storage}GB)</p>
          <h2 className="card-price">₹{product.price}</h2>
          <h3 className="card-rating" style={styles} >{product.rating}⭐</h3>
        </CardContent>
        <CardActions className="card-btns">
          <Counter />
          {editButton}
          <IconButton color="primary" href={product.buy}><InfoIcon /></IconButton>
          {deleteButton}
        </CardActions>
      </Card>
    </div>
  )
}


function App() {
  const [mode, setMode] = useState('dark')

  const themeCtx = createTheme({
    palette: {
      mode: mode,
    },
  });
  const navigate = useNavigate()

  return (
    <ThemeProvider theme={themeCtx}>
      <Paper elevation={4}>
        <div className="App">
          <AppBar className='AppBar' position="static">
            <Toolbar>
              <Button
                color="inherit"
                onClick={() => navigate("/")}
                className='appbar-home'>
                <h2>Fake Product</h2>
              </Button>
              <Button
                color="inherit"
                onClick={() => navigate("/product")}
                className='appbar-home'>
                product
              </Button>
              <Button
                color="inherit"
                onClick={() => navigate("/addproduct")}
                className='appbar-home'>
                addproduct
              </Button>
              <Button
                sx={{
                  marginLeft: "auto",
                }}
                startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                color="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                {mode === "light" ? "dark" : "light"} mode
              </Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path='/product' element={<ProductDetails />} />
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/product/edit/:id' element={<EditProduct />} />
            <Route path='/' element={<Home />} />
          </Routes>

          
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;

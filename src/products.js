import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Productlist } from "./App";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function ProductDetails() {

  const [productlist, setProductList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://6328115f5731f3db99635f14.mockapi.io/fakeproduct", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((prd) => setProductList(prd))
  }, [])

  const deleteproduct = (id) => {
    fetch(`https://6328115f5731f3db99635f14.mockapi.io/fakeproduct/${id}`, {
      method: "DELETE",
    });
  };

  return (

    <div>
      <div className="card-container">
        {productlist.map((prd) => (
          <Productlist product={prd} key={prd.id} deleteButton={
            <IconButton onClick={() => deleteproduct(prd.id)}
              color="error"
              aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }
            editButton={
              <IconButton onClick={() => navigate(`/product/edit/${prd.id}`)}
                color="primary"
                aria-label="edit">
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>

    </div>
  )
}

export default ProductDetails;
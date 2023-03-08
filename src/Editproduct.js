import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from "yup";


const formValidationSchema = yup.object({
    name: yup.string().required("Name is Required🙂"),
    price: yup.string().required("Price is Required🙂"),
    ram: yup.number().min(0).max(1000).required("Ram is Required🙂"),
    storage: yup.number().min(0).max(1000).required("Storage is Required🙂"),
    rating: yup.number().min(0).max(5).required("Rating is Required🙂"),
    image: yup.string().required("Image is Required🙂"),
    buy: yup.string().required("Buylink is Required🙂")
})

const EditProduct = () => {

    const { id } = useParams();
    console.log(useParams())

    const [product, setProduct] = useState(null)

    const Editproduct = () => {
        fetch(`https://6328115f5731f3db99635f14.mockapi.io/fakeproduct/${id}`, {
            method: "GET"
        })
            .then((data) => data.json())
            .then((prd) => setProduct(prd));
    };
    useEffect(() => Editproduct());

    console.log(product);
    return (
        <div>
            {product ? <EditproductForm product={product} /> : <h3>Loading..</h3>}
        </div>
    )
}

function EditproductForm({ product }) {
    const { handleBlur, handleChange, values, touched, errors, handleSubmit } = useFormik({
        initialValues: {
            name: product.name,
            price: product.price,
            ram: product.ram,
            storage: product.storage,
            rating: product.rating,
            image: product.image,
            buy: product.buy,
        },
        validationSchema: formValidationSchema,
        onSubmit: (updatedProduct) => {
            console.log(updatedProduct)
            Updateproduct(updatedProduct)
        },
    })

    const navigate = useNavigate();

    const Updateproduct = (updatedProduct) => {
        console.log(updatedProduct);

        fetch(`https://6328115f5731f3db99635f14.mockapi.io/fakeproduct/${product.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedProduct),
            headers:
            {
                "Content-Type": "application/json",
            },
        })
            .then(() => navigate("/product"))
    }

    return (
        <form className='addproduct-container' onSubmit={handleSubmit}>
            <h1 className='add-heading'>EDIT PRODUCT</h1>
            <TextField className="filled-basic"
                label="Name"
                name="name"
                variant="filled"
                onChange={handleChange}
                value={values.name}
                onBlur={handleBlur}
                error={touched.name && errors.name}
                helperText={touched.name && errors.name ? errors.name : null}
            />

            <TextField className="filled-basic"
                label="Price"
                name="price"
                variant="filled"
                onChange={handleChange}
                value={values.price}
                onBlur={handleBlur}
                error={touched.price && errors.price}
                helperText={touched.price && errors.price ? errors.price : null}
            />

            <TextField className="filled-basic"
                label="Ram"
                name="ram"
                variant="filled"
                onChange={handleChange}
                value={values.ram}
                onBlur={handleBlur}
                error={touched.ram && errors.ram}
                helperText={touched.ram && errors.ram ? errors.ram : null}
            />

            <TextField className="filled-basic"
                label="Storage"
                name="storage"
                variant="filled"
                onChange={handleChange}
                value={values.storage}
                onBlur={handleBlur}
                error={touched.storage && errors.storage}
                helperText={touched.storage && errors.storage ? errors.storage : null}
            />

            <TextField className="filled-basic"
                label="Rating"
                name="rating"
                variant="filled"
                onChange={handleChange}
                value={values.rating}
                onBlur={handleBlur}
                error={touched.rating && errors.rating}
                helperText={touched.rating && errors.rating ? errors.rating : null}
            />

            <TextField className="filled-basic"
                label="Image"
                name="image"
                variant="filled"
                onChange={handleChange}
                value={values.image}
                onBlur={handleBlur}
                error={touched.image && errors.image}
                helperText={touched.image && errors.image ? errors.image : null}
            />

            <TextField className="filled-basic"
                label="Buy Link"
                name="buy"
                variant="filled"
                onChange={handleChange}
                value={values.buy}
                onBlur={handleBlur}
                error={touched.buy && errors.buy}
                helperText={touched.buy && errors.buy ? errors.buy : null}
            />

            <Button variant='contained' type='submit' color='success'>Update</Button>
        </form>
    )
}

export default EditProduct;
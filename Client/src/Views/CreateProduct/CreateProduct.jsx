import React, { useEffect, useState } from 'react';
import { Container, Form, FormGroup, Input } from 'reactstrap';
import Style from "./CreateProduct.module.css"
import uploadImage from '../../helperCloudinary/helperCloudinary';
import { useDispatch, useSelector } from 'react-redux';
import {
    categoriesFilter, createProduct,
} from '../../Redux/actions';

const Cloudinary = (props) => {
    // Estado para controlar la carga de la imagen y el formulario
    const categories = useSelector(state => state.categories);
    console.log('categorias:', categories);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [reset, setReset] = useState(false);
    const textAux = 'Categoria/s seleccionada/s: ';
    const textAux2 = 'Para borrar una categoria seleccionada da click sobre ella';

    const [productPost, setProductPost] = useState({
        name: '',
        description: '',
        price: '',
        old_price: '',
        categories: [],
        amount: '',
        image: ''
    });

    // Maneja la carga de imagen en Cloudinary
    const handlerCloudinary = async (event) => {
        setLoading(true);
        const imagenCargada = await uploadImage(event);
        setProductPost({
            ...productPost,
            image: imagenCargada
        });
        setLoading(false);
    };

    // Maneja el cambio en los campos del formulario
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        if (name === 'categoriess') {
            setProductPost({
                ...productPost,
                categories: [...productPost.categories, value]
            })
        } else {
            setProductPost({
                ...productPost,
                [name]: value
            });
        }
    };

    const handleDeleteCategorie = (_event, ca) => {
        setProductPost({
            ...productPost,
            categories: productPost.categories.filter(
                (cate) => cate !== ca
            ),
        })
    };

    const handlerCreateProduct = async (event) => {
        event.preventDefault();
        const copyProduct = {
            ...productPost,
            price: Number(productPost.price),
            old_price: Number(productPost.old_price),
            amount: Number(productPost.amount)
        }
        console.log('copia: ', copyProduct);
        const id = 'a46e9aa1-f978-480f-ad97-842d28928413';
        await dispatch(createProduct(copyProduct, id));
        setProductPost({
            name: '',
            description: '',
            price: '',
            old_price: '',
            categories: [],
            amount: '',
            image: ''
        })
    };

    useEffect(() => {
        dispatch(categoriesFilter())
    }, [reset])

    //console.log(productPost);
    return (

        <div className={Style.container}>
            {console.log('este es el product', productPost)}
            <div className={Style.containerChild}>
                <div className={Style.containerChildText}>
                    <div>
                        <h1>text</h1>
                    </div>
                </div>
                <div className={Style.containerChildInput}>

                    <form onSubmit={(event) => handlerCreateProduct(event)}>
                        <button type='submit'>ENVIAR</button>

                        {/* SUBIR IMAGEN*/}
                        <Container>
                            <FormGroup>
                                <Input
                                    className={Style.exclude}
                                    type="file"
                                    name="file"
                                    placeholder="carga tu imagen"
                                    onChange={handlerCloudinary}
                                />
                                {loading ? (
                                    <h3>Cargando imagen...</h3>
                                ) : (
                                    <img src={productPost.image} style={{ width: '300px' }} alt="Producto" />
                                )}
                            </FormGroup>
                        </Container>
                        {/* SUBIR IMAGEN*/}

                        <div>
                            {/* DESDE ACA EMPIEZA EL CATEGORIES*/}
                            <label htmlFor="categoriess">Categorias: {' '}</label>

                            <select name='categoriess' onChange={handleOnChange}>
                                <option value=''>Selecciona tus categorias</option>
                                {categories
                                    .map((categorie) => {
                                        return (
                                            <option key={categorie} value={categorie}>
                                                {categorie}
                                            </option>
                                        )
                                    })}
                            </select>

                            {productPost.categories.length !== 0 && <p>{textAux}</p>}

                            {
                                productPost.categories.map((ca) => {
                                    return (
                                        <button
                                            type='button'
                                            key={ca}
                                            onClick={(event) => handleDeleteCategorie(event, ca)}
                                            value={ca}
                                        >
                                            {ca}
                                        </button>
                                    )
                                })
                            }

                            {productPost.categories.length !== 0 && <p>{textAux2}</p>}

                            {/* HASTA ACA VA CATEGORIES*/}

                            {/* NAME PRODUCT*/}
                            <label htmlFor="name">Nombre producto: {' '}</label>
                            <input
                                type="text"
                                name='name'
                                value={productPost.name}
                                placeholder='Ej: Panaderia Pancho'
                                onChange={handleOnChange}
                            />
                            {/* NAME PRODUCT*/}

                            {/* CANTIDAD*/}
                            <label htmlFor="amount">Cantidad: {' '}</label>
                            <input
                                type="number"
                                name='amount'
                                value={productPost.amount}
                                placeholder='Ej: 10'
                                onChange={handleOnChange}
                            />
                            {/* CANTIDAD*/}

                            {/* DESCRIPTION*/}
                            <label htmlFor="description">Descripcion: {' '}</label>
                            <textarea
                                name="description"
                                value={productPost.description}
                                cols="30"
                                rows="6"
                                placeholder='Rica docena de pan de queso'
                                onChange={handleOnChange}
                            />
                            {/* DESCRIPTION*/}

                            {/* PRECIO VIEJO*/}
                            <label htmlFor="old_price">Precio viejo: {' '}</label>
                            <input
                                type="number"
                                name='old_price'
                                value={productPost.old_price}
                                placeholder='Ej: 800'
                                onChange={handleOnChange}
                            />
                            {/* PRECIO VIEJO*/}

                            {/* PRECIO NUEVO*/}
                            <label htmlFor="price">Precio nuevo: {' '}</label>
                            <input
                                type="number"
                                name='price'
                                value={productPost.price}
                                placeholder='Ej: 400'
                                onChange={handleOnChange}
                            />
                            {/* PRECIO NUEVO*/}
                        </div>

                    </form>
                </div>
            </div>
        </div >
    )
}

export default Cloudinary;

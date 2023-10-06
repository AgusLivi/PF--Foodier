import React, { useEffect, useState } from 'react';
import { Card, Container, Form, FormGroup, Input } from 'reactstrap';
import Style from "./CreateProduct.module.css"
import uploadImage from '../../helperCloudinary/helperCloudinary';
import { useDispatch, useSelector } from 'react-redux';
import wave from '../../assets/wave.svg'
import {
    getCategories, createProduct,
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
        const id = 'e5de2f23-6b98-40d6-944d-503d880ef773';
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
        dispatch(getCategories())
    }, [reset])

    //console.log(productPost);
    return (
            <div className={Style.container}>
 <img className={Style.wave} src={wave} alt="Wave" />
                <form onSubmit={(event) => handlerCreateProduct(event)} className={Style.form}>
                    <div className={Style.containerChilds}>
                        <div className={Style.containerChildForm}>                    
                                <label htmlFor="name">Nombre producto:</label>
                                <input type="text" name='name' value={productPost.name} placeholder='Ej: Panadería Pancho' onChange={handleOnChange}/>
        
                               
                                <label htmlFor="categories">Categorías:</label>
                                    <select name='categoriess' onChange={handleOnChange} className={Style.cat}>
                                        <option value=''>Selecciona tus categorías</option>
                                        {categories.map((categorie) => {
                                            return (
                                                <option key={categorie} value={categorie}>
                                                    {categorie}
                                                </option>
                                            )
                                        })}
                                    </select>
            
                                    {productPost.categories.length !== 0 && <p>{textAux}</p>}
            
                                    {productPost.categories.map((ca) => {
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
                                    })}
            
                                    {productPost.categories.length !== 0 && <p>{textAux2}</p>}
                                
                            

                                <label htmlFor="amount">Cantidad:</label>
                                <input type="number" name='amount' value={productPost.amount}  onChange={handleOnChange}/>
                 
                                <label htmlFor="description">Descripción:</label>
                                <textarea name="description" value={productPost.description} cols="3" rows="1" placeholder='Rica docena de pan de queso' onChange={handleOnChange}/>
                          
                   
                                <label htmlFor="old_price">Precio viejo:</label>
                                <input type="number" name='old_price' value={productPost.old_price} placeholder='Ej: 800' onChange={handleOnChange}/>
          
                                <label htmlFor="price">Precio nuevo:</label>
                                <input type="number" name='price' value={productPost.price} placeholder='Ej: 400' onChange={handleOnChange}/>
                                
                              
                                <button type='submit' className={Style.btn}>Subir</button>
        
                        </div>
                        <FormGroup className={Style.containerChildImg}>
                                    <Input type="file" className={Style.input} name="file" placeholder="carga tu imagen" onChange={handlerCloudinary}/>
                                          {loading ? (
                                        <h3>Cargando imagen...</h3>
                                         ) : (
                                            <div className={Style.containerImg}>    
                                                <img src={productPost.image} alt="Producto" />
                                            </div>
                                         )}
                        </FormGroup>
                    </div>
                </form>
             </div>
           
        )
    }
    
    export default Cloudinary;
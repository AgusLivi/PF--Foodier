import React, { useState } from 'react';
import { Container, FormGroup, Input } from 'reactstrap';
import Style from "./CreateProduct.module.css"
import uploadImage from '../../helperCloudinary/helperCloudinary';

const Cloudinary = (props) => {
    // Estado para controlar la carga de la imagen y el formulario
    const [loading, setLoading] = useState(false);

    // Estado para los datos del producto
    const [productPost, setProductPost] = useState({
        image: '',
        nameProduct: '',
        cantidad: 0,
        descripcion: '',
        precioViejo: '',
        precioNuevo: ''
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
        setProductPost({
            ...productPost,
            [name]: value
        });
    };

    return (
        <div className={Style.container}>
            {console.log('este es el product', productPost)}
            <div className={Style.containerChild}>
                <div className={Style.containerChildText}>
                    <div>
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
                    </div>
                </div>
                <div className={Style.containerChildInput}>
                    <div>
                        <label htmlFor="nameProduct">Nombre producto: {' '}</label>
                        <input
                            type="text"
                            name='nameProduct'
                            value={productPost.nameProduct}
                            placeholder='Ej: Panaderia Pancho'
                            onChange={handleOnChange}
                        />

                        <label htmlFor="cantidad">Cantidad: {' '}</label>
                        <input
                            type="text"
                            name='cantidad'
                            value={productPost.cantidad}
                            placeholder='Ej: 10'
                            onChange={handleOnChange}
                        />

                        <label htmlFor="descripcion">Descripcion: {' '}</label>
                        <textarea
                            name="descripcion"
                            value={productPost.descripcion}
                            cols="30"
                            rows="6"
                            placeholder='Rica docena de pan de queso'
                            onChange={handleOnChange}
                        />

                        <label htmlFor="precioViejo">Precio viejo: {' '}</label>
                        <input
                            type="text"
                            name='precioViejo'
                            value={productPost.precioViejo}
                            placeholder='Ej: 800'
                            onChange={handleOnChange}
                        />

                        <label htmlFor="precioNuevo">Precio nuevo: {' '}</label>
                        <input
                            type="text"
                            name='precioNuevo'
                            value={productPost.precioNuevo}
                            placeholder='Ej: 400'
                            onChange={handleOnChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cloudinary;

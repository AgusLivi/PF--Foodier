import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardContainer from "../../Components/CardContainer/CardContainer.jsx";
import Style from "./Home.module.css";
import {
  getCategories,
  getProducts,
  locationProvincia,
  locationMunicipio,
  locationLocalidad,
} from "../../Redux/actions";

const Home = () => {
  // global state
  const categories = useSelector((state) => state.categories);
  const provincias = useSelector((state) => state.provincias);
  const municipios = useSelector((state) => state.municipios);
  const localidades = useSelector((state) => state.localidades);

  const [selectedProvincia, setSelectedProvincia] = useState("");
  const [selectedMunicipio, setSelectedMunicipio] = useState("");
  const [selectedLocalidad, setSelectedLocalidad] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts(new URLSearchParams(formData).toString()));
    dispatch(locationProvincia());
    return;
  }, []);

  const [formData, setFormData] = useState({
    page: 1,
    pageSize: 8,
    name: "",
    categories: [],
    address: [],
    average_rating: "",
    payment: "",
    orderBy: "name",
    order: "asc",
  });

  useEffect(()=>{
    handleSubmit()
  }, [formData])


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (event) => {
    const { name, checked } = event.target;
    const { categories } = formData;

    if (checked) {
      setFormData({ ...formData, categories: [...categories, name] });
    } else {
      setFormData({
        ...formData,
        categories: categories.filter((item) => item !== name),
      });
    }
  };

  const handleSubmit = () => {
    const {
      name,
      categories,
      address,
      average_rating,
      payment,
      orderBy,
      order,
    } = formData;
    console.log('QUERYYYYYYYYY_ADRESSS',address.join(", "));
    // generamos la cadena de consulta
    const queryParams = new URLSearchParams({
      name,
      categories: categories.join(", "),
      address,
      average_rating,
      payment,
      orderBy,
      order,
    }).toString();

    // hacer dispatch con la cadena de consulta
    dispatch(getProducts(queryParams));
    console.log('ADDRESSSS', formData.address)
  };

  // const [isModalVisible, setIsModalVisible] = useState(false);

  // // Función para mostrar u ocultar el modal
  // const toggleModal = () => {
  //   setIsModalVisible(!isModalVisible);
  // };
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name === 'categoriess') {
        setFormData({
            ...formData,
            categories: [...formData.categories, value]
        })
    } else {
        setProductPost({
            ...formData,
            [name]: value
        });
    }
};

const handleDeleteCategorie = (_event, ca) => {
    setFormData({
        ...formData,
        categories: formData.categories.filter(
            (cate) => cate !== ca
        ),
    })
};

const handleProvinciaChange = (event) => {
  const selectedProvinciaValue = event.target.options[event.target.selectedIndex].getAttribute("name");
  dispatch(locationMunicipio(event.target.value));
  
  // agrega la provincia a address y actualiza el estado
  let updatedAddress = [selectedProvinciaValue];
  
  setFormData({
    ...formData,
    address: updatedAddress
  });

  //  actualiza la cadena de consulta
  updateQueryParams({ address: updatedAddress });
};

const handleMuniChange = (event) => {
  const selectedMunicipioValue = event.target.options[event.target.selectedIndex].getAttribute("name");
  dispatch(locationLocalidad(event.target.value));
  
  // agrega el municipio a address y actualiza el estado
  const updatedAddress = [...formData.address];
  updatedAddress[1] = selectedMunicipioValue
  if (updatedAddress.length > 2) {
    updatedAddress.pop();
  }
  setFormData({
    ...formData,
    address: updatedAddress
  });
  // actualiza la cadena de consulta
  updateQueryParams({ address: updatedAddress });
};

const handleLocalChange = (event) => {
  const selectedLocalidadValue = event.target.options[event.target.selectedIndex].getAttribute("name");
  
  // agrega la localidad a address y actualiza el estado
  const updatedAddress = [...formData.address];
  updatedAddress[2] = selectedLocalidadValue;
  setFormData({
    ...formData,
    address: updatedAddress
  });

  // actualiza la cadena de consulta
  updateQueryParams({ address: updatedAddress });
};

 // actualizar la cadena de consulta
 const updateQueryParams = (paramsToUpdate) => {
  const updatedParams = {
    ...formData,
    ...paramsToUpdate
  };

  const queryParams = new URLSearchParams(updatedParams).toString();
  console.log('QUERYYYYYYYYY', queryParams);

  //  dispatch con la cadena de consulta
  dispatch(getProducts(queryParams));
};

  return (
    <div className={Style.containerChilds}>
      <div className={Style.searchBar}>
<label><input
              type="text"
              name="name"
              placeholder="Nombre del producto"
              value={formData.name}
              onChange={handleInputChange}
            /><i className='bx bx-search'></i></label>
      </div>
      <hr/>
      
      <div className={Style.containerChild}>
        
        <form className={Style.containerChildFilter}>
          
          {/* Modal */}
          <div className={Style.itemForm}>
            {/*---------------------------UBICACION------------------------------------------------*/}
            <div>
              <select name="" id="" onChange={handleProvinciaChange}>
                <option value="" disabled selected>Selecciona una provincia</option>
                {provincias.length ? (
                  provincias.map(prov => (
                    <option name={prov.nombre} key={prov.id} value={prov.id}>{prov.nombre}</option>
                  ))
                ) : (
                  <option>Selecciona una provincia</option>
                )}
              </select>
            </div>
          </div>  <hr/>
          <div className={Style.itemForm}>
            <select name="" id="" onChange={handleMuniChange}>
              <option value="" disabled selected>Selecciona un municipio</option>
              {municipios.length ? (
                municipios.map(muni => (
                  <option name={muni.nombre} key={muni.id} value={muni.id}>{muni.nombre}</option>
                ))
              ) : (
                <option>Selecciona un municipio</option>
              )}
            </select>
          </div>  <hr/>
          <div className={Style.itemForm}>
            <select name="" id="" onChange={handleLocalChange}>
              <option value="" disabled selected>Selecciona una localidad</option>
              {localidades.length ? (
                localidades.map(local => (
                  <option name={local.nombre} key={local.id} value={local.id}>{local.nombre}</option>
                ))
              ) : (
                <option>Selecciona una localidad</option>
              )}
            </select>
          </div>
          {/*---------------------------TERMINA UBICACION------------------------------------------------*/}

          {/* Resto de tus elementos de formulario aquí */}
          <div
          className={`${Style.checkbox}`} // className={`${Style.checkbox} ${isModalVisible ? Style.modalVisible : ""}`}
        >
          {/* <div className={Style.itemForm}>
            <button name="categoria" id="showHideButton" onClick={toggleModal}>
              X
            </button>
          </div> */}
          <div className={Style.itemForm}>
            {categories.map((categoryItem) => (
              <label>
                <input
                  type="checkbox"
                  name={categoryItem}
                  checked={formData.categories.includes(categoryItem)}
                  onChange={handleCategoryChange}
                  value={categoryItem}
                />{" "}
                {categoryItem}
              </label>
            ))}
          </div>
        </div>
        <div className={Style.itemForm}>
          <select
            name="average_rating"
            value={formData.average_rating}
            onChange={handleInputChange}
          >
            <option value="">Todos</option>
            <option value="5">5 estrellas</option>
            <option value="4">4 estrellas</option>
            <option value="3">3 estrellas</option>
            <option value="2">2 estrellas</option>
            <option value="1">1 estrella</option>
          </select>
        </div>
        <div className={Style.itemForm}>
          <select
            name="payment"
            value={formData.payment}
            onChange={handleInputChange}
          >
            <option value="">Cualquier forma de pago</option>
            <option value="Efectivo">Efectivo</option>
            <option value="Pago Online/Tarjeta">Pago Online/Tarjeta</option>
          </select>
        </div>
        <div className={Style.itemForm}>
          <div className={Style.filtro}>
            <label>Ordenar por:</label>
            <select
              name="orderBy"
              value={formData.orderBy}
              onChange={handleInputChange}
            >
              <option value="name">Nombre</option>
              <option value="price">Precio</option>
            </select>
          </div>
        </div>
        <div className={Style.itemForm}>
          <label>Orden:</label>
          <select
            name="order"
            value={formData.order}
            onChange={handleInputChange}
          >
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
        <div className={Style.itemForm}>
            {/* aca empiezan las categorias--------------------------------------------------------------------- */}
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

              {formData.categories.length !== 0 && <p>Categoria/s seleccionada/s: </p>}

              {
                  formData.categories.map((ca) => {
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

            {formData.categories.length !== 0 && <p>Para borrar una categoria seleccionada da click sobre ella</p>}
            {/* aca terminan las categorias----------------------------------------------------------- */}
        </div>
        <div className={Style.itemForm}>
        </div>
        </form>
        
     
      </div>
      <div className={Style.containerPost}>
        <CardContainer />
      </div>
    </div>

  );
};

export default Home;

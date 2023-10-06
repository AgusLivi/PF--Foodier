import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardContainer from "../../Components/CardContainer/CardContainer.jsx";
import Paginate from "../../Components/Pagination/paginate.jsx";
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
  const categoriesList = useSelector((state) => state.categories);
  const provincias = useSelector((state) => state.provincias);
  const municipios = useSelector((state) => state.municipios);
  const localidades = useSelector((state) => state.localidades);
  const productsAmount = useSelector((state) => state.productsAmount);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(
      getProducts(
        new URLSearchParams({
          ...formData,
          categories: formData.categories.join(","),
        }).toString()
      )
    );
    dispatch(locationProvincia());
  }, []);

  const [formData, setFormData] = useState({
    page: 1,
    pageSize: 8,
    name: "",
    categories: [],
    address: "",
    average_rating: "",
    payment: "",
    orderBy: "name",
    order: "asc",
  });

  //Paginations

  const pagination = (page) => {
    setFormData({ ...formData, page: page });
    dispatch(
      getProducts(
        new URLSearchParams({
          ...formData,
          categories: formData.categories.join(","),
        }).toString()
      )
    );;
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      getProducts(
        new URLSearchParams({
          ...formData,
          categories: formData.categories.join(","),
        }).toString()
      )
    );;
  };

  // const [isModalVisible, setIsModalVisible] = useState(false);

  // // Función para mostrar u ocultar el modal
  // const toggleModal = () => {
  //   setIsModalVisible(!isModalVisible);
  // };
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name === "categoriess") {
      setFormData({
        ...formData,
        categories: [...formData.categories, value],
      });
    } else {
      setProductPost({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleDeleteCategorie = (_event, ca) => {
    setFormData({
      ...formData,
      categories: formData.categories.filter((cate) => cate !== ca),
    });
  };

  const handleProvinciaChange = (event) => {
    setSelectedProvincia(
      event.target.options[event.target.selectedIndex].getAttribute("name")
    );
    dispatch(locationMunicipio(event.target.value));
  };

  const handleMuniChange = (event) => {
    setSelectedMunicipio(
      event.target.options[event.target.selectedIndex].getAttribute("name")
    );
    dispatch(locationLocalidad(event.target.value));
  };

  const handleLocalChange = (event) => {
    setSelectedLocalidad(
      event.target.options[event.target.selectedIndex].getAttribute("name")
    );
  };

  return (
    <div className={Style.containerChilds}>
      <div className={Style.searchBar}>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Nombre del producto"
            value={formData.name}
            onChange={handleInputChange}
          />
          <i className="bx bx-search"></i>
        </label>
      </div>
      <hr />

      <div className={Style.containerChild}>
        <form className={Style.containerChildFilter}>
          {/* Modal */}
          <div className={Style.itemForm}>
            <div>
              <select name="" id="" onChange={handleProvinciaChange}>
                <option value="" disabled selected>
                  Selecciona una provincia
                </option>
                {provincias.length ? (
                  provincias.map((prov) => (
                    <option name={prov.nombre} key={prov.id} value={prov.id}>
                      {prov.nombre}
                    </option>
                  ))
                ) : (
                  <option>Selecciona una provincia</option>
                )}
              </select>
            </div>
          </div>{" "}
          <hr />
          <div className={Style.itemForm}>
            <select name="" id="" onChange={handleMuniChange}>
              <option value="" disabled selected>
                Selecciona un municipio
              </option>
              {municipios.length ? (
                municipios.map((muni) => (
                  <option name={muni.nombre} key={muni.id} value={muni.id}>
                    {muni.nombre}
                  </option>
                ))
              ) : (
                <option>Selecciona un municipio</option>
              )}
            </select>
          </div>{" "}
          <hr />
          <div className={Style.itemForm}>
            <select name="" id="" onChange={handleLocalChange}>
              <option value="" disabled selected>
                Selecciona una localidad
              </option>
              {localidades.length ? (
                localidades.map((local) => (
                  <option name={local.nombre} key={local.id} value={local.id}>
                    {local.nombre}
                  </option>
                ))
              ) : (
                <option>Selecciona una localidad</option>
              )}
            </select>
          </div>
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
              {categoriesList.map((categoryItem) => (
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
            <label htmlFor="categoriess">Categorias: </label>

            <select name="categoriess" onChange={handleOnChange}>
              <option value="">Selecciona tus categorias</option>
              {categoriesList.map((categorie) => {
                return (
                  <option key={categorie} value={categorie}>
                    {categorie}
                  </option>
                );
              })}
            </select>

            {formData.categories.length !== 0 && (
              <p>Categoria/s seleccionada/s: </p>
            )}
            {
              formData.categories.map((ca) => (
                <button
                  type="button"
                  key={ca}
                  onClick={(event) => handleDeleteCategorie(event, ca)}
                  value={ca}
                >
                  {ca}
                </button>
              ))}

            {formData.categories.length !== 0 && (
              <p>Para borrar una categoria seleccionada da click sobre ella</p>
            )}
            {/* aca terminan las categorias----------------------------------------------------------- */}
          </div>
          <div className={Style.itemForm}></div>
        </form>
      </div>
      <div className={Style.containerPost}>
        <CardContainer/>
        <Paginate currentPage={formData.page} page={pagination} size={formData.pageSize}/>
      </div>
    </div>
  );
};

export default Home;

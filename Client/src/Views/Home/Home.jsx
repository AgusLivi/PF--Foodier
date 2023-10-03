import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import CardContainer from "../../Components/CardContainer/CardContainer.jsx";
import Style from "./Home.module.css";
import { getCategories, getProducts, locationProvincia, locationMunicipio, locationLocalidad } from "../../Redux/actions";

const Home = () => {
  // global state
  const categories = useSelector((state) => state.categories);
  const provincias = useSelector(state => state.provincias)
  const municipios = useSelector(state => state.municipios)
  const localidades = useSelector(state => state.localidades)

  const [selectedProvincia, setSelectedProvincia] = useState('');
  const [selectedMunicipio, setSelectedMunicipio] = useState('');
  const [selectedLocalidad, setSelectedLocalidad] = useState('');
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts(new URLSearchParams(formData).toString()));
    dispatch(locationProvincia())
    return;
  }, []);

  useEffect(() => {
    if (selectedProvincia || selectedMunicipio || selectedLocalidad) {
      const addressString = `${selectedProvincia}, ${selectedMunicipio}, ${selectedLocalidad}`;
      setFormData({ ...formData, address: addressString });
    } else {
      setFormData({ ...formData, address: "" }); // si no se selecciona nada, establece address como una cadena vacía
    }
  }, [selectedProvincia, selectedMunicipio, selectedLocalidad]);


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
    const {
      name,
      categories,
      address,
      average_rating,
      payment,
      orderBy,
      order,
    } = formData;

    // generamos la cadena de consulta
    const queryParams = new URLSearchParams({
      name,
      categories: categories.join(","),
      address,
      average_rating,
      payment,
      orderBy,
      order,
    }).toString();
    console.log(queryParams);

    // hacer dispatch con la cadena de consulta
    dispatch(getProducts(queryParams)); // hay q cambiar el funcionamiento de hahandleSubmit a un onChange
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Función para mostrar u ocultar el modal
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleProvinciaChange = (event) => {
    setSelectedProvincia(event.target.options[event.target.selectedIndex].getAttribute("name"));
    dispatch(locationMunicipio(event.target.value));
  };

  const handleMuniChange = (event) => {
      console.log(event.target)
      setSelectedMunicipio(event.target.options[event.target.selectedIndex].getAttribute("name"));
      dispatch(locationLocalidad(event.target.value));
    };

  const handleLocalChange = (event) => {
      setSelectedLocalidad(event.target.options[event.target.selectedIndex].getAttribute("name"));
  }

  return (
    <div>
      <div
        className={`${Style.checkbox} ${
          isModalVisible ? Style.modalVisible : ""
        }`}
      >
        <button name="categoria" id="showHideButton" onClick={toggleModal}>
          X
        </button>
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre del producto"
          value={formData.name}
          onChange={handleInputChange}
        />

        {/* Modal */}

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
        <button onClick={toggleModal} className={Style.categoria}>
          Categorias{" "}
        </button>
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

        <select
          name="payment"
          value={formData.payment}
          onChange={handleInputChange}
        >
          <option value="">Cualquier forma de pago</option>
          <option value="Efectivo">Efectivo</option>
          <option value="Pago Online/Tarjeta">Pago Online/Tarjeta</option>
        </select>

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

        <div>
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

        <button type="submit">Filtrar</button>
      </form>
      <div className={Style.containerPost}>
        <CardContainer />
      </div>
    </div>
  );
};
export default Home;

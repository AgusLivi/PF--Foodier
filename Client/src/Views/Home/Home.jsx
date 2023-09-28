const Home = () => {
    return (
        <div>
            <h1>Productos</h1>
            <h1>Aca se renderiza el componente cards</h1>
            {/*
                <label htmlFor="sortOrder">Ordenar por:</label>
                 <select id="sortOrder" value={sortOrder} onChange={handleSortOrderChange}>
                    <option value="masVendidos">Más Vendidos</option>
                    <option value="menosVendidos">Menos Vendidos</option>
    </select>*/}
             {/* <ul>
                 {sortedProducts.map((product) => (
              <li key={product.id}>
                 {product.name} - Ventas: {product.sales}
              </li>
                 ))}
             </ul> */}
        </div>
    )
}
export default Home
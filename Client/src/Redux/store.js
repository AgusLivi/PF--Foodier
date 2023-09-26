import { createStore } from 'redux';
import { myReducer } from './reducer'; // Asegúrate de que la ruta sea correcta

const store = createStore(myReducer);

export default store;

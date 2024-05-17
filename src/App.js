import GlobalRouter from "./routes/GlobalRouter";
import {AppContext} from "./context/AppContext";
import {Footer} from "./components/Footer";
import {useProducts} from "./hooks/useProducts";
import {CartProvider} from "./context/CartContext";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const products = useProducts();

    return (
        <AppContext.Provider value={{products}}>
            <CartProvider>
                <GlobalRouter></GlobalRouter>
                <ToastContainer />
                <Footer />
            </CartProvider>
        </AppContext.Provider>

    );
}

export default App;

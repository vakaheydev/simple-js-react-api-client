import './App.css';
import {
    Link,
    Route,
    Routes
} from "react-router";
import {
    Products
} from "./components/Products";
import {
    NoMatch
} from "./components/NoMatch";
import {
    Product
} from "./components/Product";


const Navigation = () => {
    return (
        <nav style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
            marginBottom: "2%"
        }}>
            <Link to="/products">Products</Link>
        </nav>
    )
}

function App() {
    return (
        <div className="App">
            <Navigation/>

            <Routes>
                <Route index element={ <Products/> }></Route>
                <Route path="products" element={ <Products/> }></Route>
                <Route path="products/:productId" element={ <Product/> }></Route>
                <Route path="*" element={ <NoMatch/> }/>
            </Routes>
        </div>
    );
}

export default App;

import styles from "../styles/Products.module.css";
import {
    useEffect,
    useState
} from "react";
import {
    Link
} from "react-router";

export const Products = () => {
    const API_URL = "https://fakestoreapi.com/products";
    let [items, setUsers] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setUsers(data));
    })

    function getRating(item) {
        let starsNumber = Math.round(item.rating.rate)

        let stars = []

        for (let i = 0; i < starsNumber; i++) {
            stars.push('⭐');
        }

        return (
            <div className="rating">
                { stars }
            </div>
        )
    }

    if (items.length === 0) {
        return (
            <div className={styles.container}>
                <h1>Products</h1>
                <div className={styles.spinner}></div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <h1>Product list</h1>
            <div className={styles.item_container}>
                {items.map(item => {
                    return (
                        <div className={styles.item} key={item.id}>
                            <h1>
                                <Link to={`/products/${item.id}`}>Имя товара: {item.title}</Link>
                            </h1>
                            <h1>{getRating(item)}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
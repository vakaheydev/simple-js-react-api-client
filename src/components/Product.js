import {
    useEffect,
    useState
} from "react";
import styles
    from "../styles/Product.module.css";
import {
    Link,
    useParams
} from "react-router";

export const Product = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const { productId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch(API_URL + "/" + productId)
            .then(res => res.json())
            .then(data => setItem(data))
            .catch(error => {
                console.error("Ошибка запроса:", error);
            });
    }, [productId]);

    function getRating(item) {
        console.log(item);
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

    if (!item.id) {
        return (
            <div className={styles.container}>
                <div className={styles.spinner}></div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1>
                    <Link to={`/products/${item.id}`}>Имя товара: {item.title}</Link>
                </h1>
                <h1>Стоимость: {item.price}$</h1>
                <h1>Описание: {item.description}</h1>
                <img className={styles.image} src={item.image}></img>
                <h1>{getRating(item)}</h1>
            </div>

            <button className={styles.backBtn} onClick={() => window.history.back()}>Назад</button>
        </div>
    );
}
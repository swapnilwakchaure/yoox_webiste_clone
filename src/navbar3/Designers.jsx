import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../styles/products.css";
import Footer from "../pages/Footer";
import "../pages/footer.css"

const getCurrentPageUrl = (value) => {
    value = Number(value);
    if (typeof value === 'number' && value <= 0) {
        value = 1;
    }
    if (!value) {
        value = 1;
    }
    return value;
};

function getUrl(url, sort, orderBy) {
    return sort && orderBy ? `${url}&_sort=${sort}&_order=${orderBy}` : url;
}

const Designers = () => {
    const [data, setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [totalCount, setTotalCount] = useState(0);
    const [page, setPage] = useState(
        getCurrentPageUrl(searchParams.get('page')) || 1
    );
    const [orderBy, setOrderBy] = useState('');
    const limit = 12;
    const sort = "price";

    useEffect(() => {
        let apiUrl = getUrl(`http://localhost:8080/concealer?_page=${page}&_limit=${limit}`, sort, orderBy);
        fetch(apiUrl)
            .then((res) => {
                setTotalCount(Number(res.headers.get('x-Total-Count')));
                return res.json();
            })
            .then((res) => {
                setData(res);
            });
    }, [page, orderBy]);

    useEffect(() => {
        let paramsObj = { page };
        if (orderBy) {
            paramsObj.orderBy = orderBy;
        }
        setSearchParams(paramsObj);
    }, [page, orderBy]);

    return (
        <div>
            <div id="main">
                <div id="sidebar_section">
                    <button>Sort By Price</button>
                    <button onClick={() => setOrderBy("asc")}>LOW TO HIGH</button>
                    <button onClick={() => setOrderBy("desc")}>HIGH TO LOW</button>
                    <button onClick={() => setOrderBy("")}>RESET</button>
                </div>
                <div id="products_section">
                    {data?.map((prod) => (
                        <div key={prod.id}>
                            <img src={prod.img1} alt="prod-img" />
                            <hr />
                            <p>{prod.name}</p>
                            <h5>EUR {prod.price}</h5>
                            <p>{prod.rating}</p>
                            <Link to={`/designers/${prod.id}`}>View</Link>
                        </div>
                    ))}
                    <button disabled={page === 1} onClick={() => setPage(page - 1)}>PREV</button>
                    <button>{page}</button>
                    <button disabled={page === Math.ceil(totalCount / limit)} onClick={() => setPage(page + 1)}>NEXT</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Designers;
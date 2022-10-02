import React from "react";
import { useParams, Link } from "react-router-dom";

const getData = (url) => {
    return fetch(url).then((res) => res.json());
}

const Description = () => {
    const { user_id } = useParams();
    const [ userDetails, setUserDetails ] = React.useState({});

    React.useEffect(() => {
        getData(`http://localhost:8080/designer/${user_id}`).then((res) => setUserDetails(res.data))
    }, [user_id]);

    return (
        <div>
            <img src="userDetails.img1" alt="prod_image" />
            <p>{userDetails.name}</p>
        </div>
    )
}

export default Description;
import React, { useState, useEffect } from 'react'

export default function NationList() {
    const [nations, setNations] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async function () {
        try {
            const response = await fetch("http://localhost:3000/nations")
            const data = await response.json();
            setNations(data);
            console.log(nations)
            setLoading(true);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1>Nation</h1>
            {loading && nations.map((item) => {
                return (
                    <>
                        <h1>{item.title}</h1>
                        <h1>{item.loc}</h1>
                        <h1>{item.population}</h1>
                    </>
                )
            })}
        </>
    )
}

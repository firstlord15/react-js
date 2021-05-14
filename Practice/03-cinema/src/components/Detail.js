import React from 'react';
import { useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import '../components/css/Detail.css'

const Detail = ({ state }) => {

    const { id } = useParams();

    return (
        <div className="container">
            {state.filter((item) => item.id === id).map((item, index) => (
                <div key={index} className="container bg mt-2 mb-2">
                    <h1 className="text-center title-style">{item.title}</h1>
                    <img src={item.image} className="p-4 mt-2 mb-2" alt="" />
                    <iframe width="770" height="600" src={item.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p className="mb-4 mr-4 ml-4 size-p">{item.description}</p>
                </div>
            ))}
        </div>

    );
};

export default Detail;

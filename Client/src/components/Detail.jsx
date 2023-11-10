import axios from "axios"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


const Detail = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
            ({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            }
        );
        return setCharacter({});
    }, [id]);

    return (
        <div>
            <h2>Character details!</h2>

            <h3>Name: "{character.name && character.name}"</h3>
            <h3>Status: "{character.status && character.status}"</h3>
            <h3>Specie: "{character.specie && character.specie}"</h3>
            <h3>Gender: "{character.gender && character.gender}"</h3>
            <h3>Origin: "{character.origin?.name && character.origin?.name}"</h3>
            <img src={character.image && character.image} alt="" />
            <br />
            <Link to='/home'>
                <button>Home</button>
            </Link>
        </div>
    )
}

export default Detail
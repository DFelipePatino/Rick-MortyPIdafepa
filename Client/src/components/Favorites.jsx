import { useSelector } from "react-redux"
import Card from "./Card"
import { filterCards, orderCards } from "../redux/actions"
import { useDispatch } from "react-redux"
import { useState } from "react"

const Favorites = () => {

    const [aux, setAux] = useState(false)

    const dispatch = useDispatch()

    const myFavorites = useSelector((state) => state.myFavorites)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <select onChange={handleOrder}>
                <option value='A'>Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            {
                myFavorites.map(({ id, name, species, gender, image, status, origin, onClose }) => {
                    return (
                        <Card
                            id={id}
                            key={id}
                            name={name}
                            status={status}
                            species={species}
                            gender={gender}
                            origin={origin}
                            image={image}
                            onClose={onClose}
                        />
                    )
                })
            }
        </div>
    )
}

export default Favorites
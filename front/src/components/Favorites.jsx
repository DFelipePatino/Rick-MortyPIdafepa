import { useSelector } from "react-redux"
import Card from "./Card"

const Favorites = () => {
    const myFavorites = useSelector((state) => state.myFavorites)
    return (
        <div>
            {
                myFavorites.map(({ id, name, species, gender, image, status, origin, onClose}) => {
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
const initialState = {
    myFavorites: [],
    allCharacters: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAV":
            return {
                ...state,
                allCharacters: [...state.allCharacters, action.payload],
                myFavorites: [...state.allCharacters, action.payload]
            }

        case "REMOVE_FAV":
            return {
                ...state,
                myFavorites: state.myFavorites.filter((fav) => fav.id !== Number(action.payload))
            }

        case "FILTER":
            const filterState = [...state.allCharacters].filter((character) => character.gender === action.payload)
            return {
                ...state,
                myFavorites: filterState
            }

        case "ORDER":
            const sortCharacters = [...state.allCharacters]
            sortCharacters.sort((a, b) => {
                if (action.payload === "A") {
                    if (a.id < b.id) return -1
                    if (a.id > b.id) return 1
                    return 0
                }
                else {
                    if (a.id < b.id) return 1
                    if (a.id > b.id) return -1
                    return 0
                }

            })

            return {
                ...state,
                myFavorites: sortCharacters
            }


        default:
            return { ...state }
    }
}


export default reducer
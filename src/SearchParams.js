import React, { useState, useEffect } from 'react'
import pet, { ANIMALS } from '@frontendmasters/pet'
import useDropdown from './useDropdown'

const SearchParams = () => {
    // All hooks begin with use and never put them in conditionals b/c they are remembered by order of creation
    // current state, updater function
    const [location, setLocation] = useState("Seattle, WA")
    const [breeds, setBreeds] = useState([])
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS)
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds)
    const [pets, setPets] = useState([])

    async function requestPets() {
        const { animals } = await pet.animals({ location, breed, type: animal })

        setPets(animals || [])
    }

    useEffect(() => {
        setBreeds([])
        setBreed("")

        pet.breeds(animal).then(({ breeds }) => {
            const breedStrings = breeds.map(({ name }) => name)
            setBreeds(breedStrings)
        })
    }, [animal, setBreed, setBreeds])

    // only update once, empty array
    // onlyl update on changes, array with dependencies
    // only update all the time, nothing!
    return (
        <div className="search-params">
            <form onSubmit={e => {
                e.preventDefault()
                requestPets()
            }}>
                <label htmlFor="location">
                    Location
                <input id="location" value={location} placeholder="Location" onChange={e => setLocation(e.target.value)} onBlur={e => setLocation(e.target.value)} />
                </label>
                <button>Submit</button>
                <AnimalDropdown />
                <BreedDropdown />
            </form>
        </div>
    )
}

export default SearchParams
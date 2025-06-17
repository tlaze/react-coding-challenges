const PetCard = ({breed, age, description}) => {

    return (
        <div className="max-w-sm mx-auto mb-4 p-4 border rounded shadow bg-white">
            <h3>Breed: {breed}</h3>
            <h4>Age: {age}</h4>
            <p>{description}</p>
        </div>
    )
}
export default PetCard
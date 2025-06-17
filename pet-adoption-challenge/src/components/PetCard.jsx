const PetCard = ({id, breed, age, adopted, onAdopt, description}) => {

    return (
        <div className="max-w-sm mx-auto mb-4 p-4 border rounded shadow bg-white">
        <h3>Breed: {breed}</h3>
        <h4>Age: {age}</h4>
        <p>{description}</p>
        <button
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${adopted ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white'}`}
            onClick={() => onAdopt(id)}
            disabled={adopted}
        >
            {adopted ? 'Adopted' : 'Adopt'}
        </button>
        </div>
    )
}
export default PetCard
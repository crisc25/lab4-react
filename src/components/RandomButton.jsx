import random1 from "../assets/random1.svg"

export default function RandomButton({ random }) {

    return (
        <button onClick={random}>
            <img src={random1} />
        </button>
    )

}
import random2 from "../assets/random2.svg"

export default function ShuffleButton({ shuffle }) {

    return (
        <button onClick={shuffle}>
            <img src={random2} />
        </button>
    )

}
import previous from "../assets/previous.svg"

export default function PrevButton({ prev }) {

    return (
        <button onClick={prev}>
            <img src={previous} />
        </button>
    )

}
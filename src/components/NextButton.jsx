import next from "../assets/next.svg"

export default function NextButton({ nextImage }) {

    return (
        <button onClick={nextImage}>
            <img src={next} />
        </button>
    )

}
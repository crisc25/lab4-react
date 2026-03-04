import { useState } from "react"
import imagesData from "./data/images.json"
import NextButton from "./components/NextButton"
import PrevButton from "./components/PrevButton"
import RandomButton from "./components/RandomButton"
import ShuffleButton from "./components/ShuffleButton"

export default function App() {

    const [images, setImages] = useState(imagesData)
    const [index, setIndex] = useState(0)

    function nextImage() {
        setIndex((index + 1) % images.length)
    }
    function prevImage() {
        setIndex((index - 1 + images.length) % images.length)
    }
    function randomImage() {
        const random = Math.floor(Math.random() * images.length)
        setIndex(random)
    }
    function shuffleImages() {
        const shuffled = [...images].sort(function () { return Math.random() - 0.5 })
        setImages(shuffled)
    }
    return (
        <>

            <div className="main-image">
                <img src={images[index].url} />
            </div>

            <div className="controls">

                <PrevButton prev={prevImage} />

                <RandomButton random={randomImage} />

                <ShuffleButton shuffle={shuffleImages} />

                <NextButton nextImage={nextImage} />

            </div>

            <div className="gallery">

                {images.map(function (img, i) {
                    return (
                        <img
                            key={img.id}
                            src={img.url}
                            className={index == i ? "poza active" : "poza"}
                            onClick={() => setIndex(i)}
                        />
                    )
                })}

            </div>

        </>
    )

}
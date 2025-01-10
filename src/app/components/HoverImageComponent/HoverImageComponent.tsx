import Image from "next/image";
import style from "./HoverImageComponent.module.css"

interface UrlImage {
    src: string;
}

const HoverImageComponent = ({src}: UrlImage) => {
    return (
        <>
            <Image
                className={style["hero-img"]}
                src={src}
                alt='jose vargas foto'
                width={600}
                height={0}
            />
        </>
    )
}
export default HoverImageComponent

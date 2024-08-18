import Lottie from "lottie-react";
import {useRef} from "react";
import musicAnimation from '../../../../public/music.json';

export default function AudioControlSVG({isPlaying}:{isPlaying:boolean}) {
    const lottieRef = useRef<any>(null);
    return (
        <Lottie
            lottieRef={lottieRef}
            animationData={musicAnimation}
            loop={true}
            autoplay={false}

        />
    )
}
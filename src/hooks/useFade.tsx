import React, { useRef } from 'react'
import { View, Text, Animated } from 'react-native'
interface FadeProps {
    toValue:number,
    duration:number
}
// recibe un dos parametros no obligatorios, el primero el tiempo, el segundo el valor de la opacidad
const useFade = () => {
    const opacity = useRef(new Animated.Value(0.5)).current

    const fadeIn = (callback?:Function,duration:number|undefined=1000,toValue:number|undefined=1) => {
        Animated.timing(opacity,
            {
                toValue,
                duration,
                useNativeDriver: true,
            }).start(()=> callback? callback():null)
    }

    const fadeOut = (callback?:Function,duration:number|undefined=1000,toValue:number|undefined=0) => {
        Animated.timing(opacity,
            {
                 toValue,
                 duration,
                useNativeDriver: true,
            }).start()
    }
    return {
        fadeIn,
        fadeOut,
        opacity
    }
}

export default useFade

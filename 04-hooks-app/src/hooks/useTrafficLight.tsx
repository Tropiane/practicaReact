import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
}

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = (initialColor: TrafficLightColor)=>{
    const [light, setLight] = useState<TrafficLightColor>(initialColor);
    const [countdown, setContdown] = useState(5);

    useEffect(()=>{
      if(countdown === 0) return;

      const intervalId = setInterval(()=>{
        setContdown((prev)=> prev -1)
      }, 1000)

      return () =>{
        clearInterval(intervalId)
      }
    }, [countdown])

    useEffect(()=>{
      if(countdown > 0) return;
      setContdown(5);

      if(light === 'red'){
        setLight('green')
        return;
      };
      if(light === 'yellow'){
        setLight('red')
        return;
      };
      if(light === 'green'){
        setLight('yellow')
        return;
      };
    }, [countdown, light])

    return{
        light,
        countdown,
        colors
    }
}
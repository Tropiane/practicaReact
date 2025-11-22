import { useTrafficLight } from "../hooks/useTrafficLight";

export const TrafficLightWithHook = () => {
  const {light, countdown, colors} = useTrafficLight('red')

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 flex flex-col items-center justify-center p-4">
      <h1 className="text-white text-3xl">Semaforo con useEffect</h1>
      <h2 className="text-white text-xl">Countdown {countdown}</h2>
      <div className="flex flex-col items-center space-y-8">
        <div className={`w-32 h-32 ${light === 'red'? colors[light] : 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${light === 'yellow'? colors[light] : 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${light === 'green'? colors[light] : 'bg-gray-500'} rounded-full`}></div>
      </div>
    </div>
  );
};
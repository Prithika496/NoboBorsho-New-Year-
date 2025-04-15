import FlipCard from './components/FlipCard';
import ConfettiButton from './components/CelebrationButton';
import BackgroundParticles from './components/BackgroundParticles';
import { assets } from './assets/assets';

function App() {
  return (

    <div className="w-screen h-screen flex items-center justify-center  relative overflow-hidden">
      <BackgroundParticles />



      <div className="flex flex-col items-center justify-center bg-orange-50 relative rounded-xl shadow-lg h-[500px] w-[800px] overflow-hidden">

      <img src={assets.g3} alt="garland" className="absolute inset-0 -ml-2 -mt-30 w-[300px]  overflow-hidden z-20" />
      <img src={assets.g3} alt="garland" className="absolute inset-0 ml-62 -mt-30 w-[300px]  overflow-hidden z-20" />
      <img src={assets.g3} alt="garland" className="absolute inset-0 ml-126 -mt-30 w-[300px]  overflow-hidden z-20" />

        <img src={assets.girl} alt="girl" className="absolute inset-0 -ml-20 mt-30 w-[300px]  overflow-hidden z-20" />
        <img src={assets.boy} alt="boy" className="absolute inset-0 ml-145 mt-30 w-[300px]  pointer-events-none z-20" />

        <img src={assets.m3} alt="Mandala" className="absolute inset-0 m-auto w-[500px] opacity-40 animate-spin-slow pointer-events-none " />

        <img src={assets.m2} alt="tp-l" className="absolute inset-0 -ml-37 -mt-37 w-[300px] opacity-35 animate-spin-slow pointer-events-none z-10" />

        <img src={assets.m2} alt="tp-r" className="absolute inset-0 ml-160 -mt-37 w-[300px] opacity-35 animate-spin-slow pointer-events-none z-10" />

        <img src={assets.m2} alt="bt-l" className="absolute inset-0 -ml-36 mt-87 w-[300px] opacity-35 animate-spin-slow pointer-events-none z-10" />

        <img src={assets.m2} alt="bt-r" className="absolute inset-0 ml-160 mt-87 w-[300px] opacity-35 animate-spin-slow pointer-events-none z-10" />


        <div className="relative bottom-10">

          <FlipCard />
        </div>
        <ConfettiButton />
      </div>
    </div>
  );
}

export default App;

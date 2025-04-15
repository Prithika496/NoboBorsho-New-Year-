import confetti from 'canvas-confetti';
import { div } from 'framer-motion/m';

export default function CelebrationButton() {
  const handleClick = () => {
    confetti({
      particleCount: 300,
      spread: 150,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className='perspective-[1000px]'>
      <button onClick={handleClick}
        className="mt-8 px-4 py-2 rounded-full shadow-lg bg-gradient-to-r from-[#1ac85a] via-[#fef08a] to-[#1ac85a]  font-bold text-orange-700 hover:scale-110  transition-all">
        উদযাপন শুরু করুন 🎉
      </button>
    </div>
  );
}

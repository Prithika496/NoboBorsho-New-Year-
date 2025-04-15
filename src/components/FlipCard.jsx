import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import greetingAudio from '../assets/greeting.mp3';

export default function FlipCard() {
    const [name, setName] = useState('');
    const userName = useRef(false);

    const [flipped, setFlipped] = useState(false);
    const audio = useRef(new Audio(greetingAudio));

    useEffect(() => {
        audio.current.loop = true;
    }, []);

    const handleClick = () => {
        setFlipped(!flipped);

        if (audio.current.paused) {
            audio.current.play();
        } else {
            audio.current.play();
        }
    };

    const handleShare = async () => {
        if (navigator.share) {
            await navigator.share({
                title: 'শুভ নববর্ষ!',
                text: 'শুভ নববর্ষ ১৪৩২ 🎉',
                url: window.location.href,
            });
        } else {
            alert('Share not supported. Copy the link manually.');
        }
    };

    useEffect(() => {
        if (!userName.current) {
            const namee = prompt("আপনার নাম লিখুন");
            if (namee) {
                setName(namee);
            }
            userName.current = true;
        }
    }, []);

    return (
        <div className="perspective-[1000px] w-200 h-48">
            <motion.div
                className="relative left-40 top-14 w-120 h-40"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.8 }}
                style={{ transformStyle: 'preserve-3d' }}
                onClick={handleClick}
            >
                <div className="absolute w-full h-full bg-gradient-to-b from-[#f59e0b] via-[#f59e0b] to-[#ea580c] rounded-2xl shadow-2xl flex items-center justify-center text-white text-2xl font-bold backface-hidden">
                    শুভ নববর্ষ <span className="name-text">{name ? ` ${name} ,` : ' '}</span>১৪৩২<img src={assets.r1} className='h-10' />
                </div>

                {/* Back */}
                <div className="absolute w-full h-full bg-gradient-to-tl from-[#c2410c] via-[#f97316] to-[#fdba74] text-white text-center rounded-2xl p-4 flex flex-col justify-center items-center rotate-y-180 backface-hidden text-xl">
                    <p>প্রিয় {name ? ` ${name} ,` : ' '} আপনার এবং আপনার পরিবারের জন্য পহেলা বৈশাখের আনন্দময় ও সমৃদ্ধ শুভেচ্ছা!</p>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleShare();
                        }}
                        className="mt-6 px-3 py-1 rounded-full bg-gradient-to-bl from-[#edd2f3] via-[#fffcdc] to-[#84dfff] text-red-600 h-12 font-semibold text-sm shadow-md hover:scale-105 transition-transform">
                        শেয়ার করুন 🎁
                    </button>
                </div>

            </motion.div>
        </div>
    );
}

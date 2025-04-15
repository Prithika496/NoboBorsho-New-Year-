export default function BackgroundParticles() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
            <div className="animate-pulse absolute w-32 h-32 bg-yellow-100 rounded-full top-[10%] left-[20%] opacity-30 blur-2xl"></div>
            <div className="animate-ping absolute w-48 h-48 bg-red-300 rounded-full top-[40%] left-[70%] opacity-20 blur-3xl"></div>
            <div className="animate-bounce absolute w-24 h-24 bg-orange-300 rounded-full top-[70%] left-[40%] opacity-30 blur-xl"></div>

            <div className="animate-pulse absolute w-32 h-32 bg-yellow-100 rounded-full top-[10%] left-[80%] opacity-30 blur-2xl"></div>
            <div className="animate-ping absolute w-48 h-48 bg-red-300 rounded-full top-[60%] left-[10%] opacity-20 blur-3xl"></div>
            <div className="animate-bounce absolute w-24 h-24 bg-orange-300 rounded-full top-[10%] left-[20%] opacity-30 blur-xl"></div>

            <div className="animate-bounce absolute w-24 h-24 bg-orange-300 rounded-full top-[90%] left-[10%] opacity-30 blur-xl"></div>

            <div className="animate-bounce absolute w-24 h-24 bg-orange-300 rounded-full top-[90%] left-[90%] opacity-30 blur-xl"></div>
        </div>
    );
}

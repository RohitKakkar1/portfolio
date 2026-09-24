import { Typewriter } from 'react-simple-typewriter';

export default function TypeStrip() {
  return (
    <div className="w-full bg-black text-white py-10 text-center h-[160px]">
      <h1 className="text-4xl font-bold px-4">
        AI Powered Discovery to {' '}
        <br />
        <span className="text-orange-500">
          <Typewriter
             words={['get found by Clients' , 'Ask & Seach anything', 'Save & Connect on Demand']}
            loop={true}
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={250}
          />
        </span>{' '}
      </h1>
    </div>
  );
}



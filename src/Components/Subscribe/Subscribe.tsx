import { useState, ChangeEvent } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    setEmail('');
  };

  return (
    <div className='flex items-center flex-col my-24'>
      <div className="text-white font-semibold text-3xl">Subscribe to Our Newsletter</div>
      <div className='my-6'>
        <input
          type="email"
          placeholder="Write your email here..."
          className='p-1 placeholder:text-md outline-none border-none rounded-l-lg'
          value={email}
          onChange={handleInputChange}
        />
        <button
          className='bg-button text-white py-1 px-4 transition-transform transform hover:scale-110 duration-300 rounded-r-lg'
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Subscribe;

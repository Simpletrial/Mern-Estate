import { useEffect, useState } from 'react';

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState('');

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  // Helper function to safely encode the message for the mailto link
  const encodeMessage = (msg) => {
    return encodeURIComponent(msg);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  return (
    <>
      {landlord && (
        <div className='flex flex-col gap-2'>
          <p>
            Contact <span className='font-semibold'>{landlord.username}</span>{' '}
            for{' '}
            <span className='font-semibold'>{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name='message'
            id='message'
            rows='2'
            value={message}
            onChange={onChange}
            placeholder='Enter your message here...'
            className='w-full border p-3 rounded-lg'></textarea>
          <a 
            href={`mailto:${landlordEmail}?subject=Regarding ${listingName}&body=To:%20${landlordEmail}%0D%0ACc:%20%0D%0ASubject:%20Regarding%20${listingName}%0D%0ABody:%20${messageText}`} 
            target="_blank"
            rel="noopener noreferrer">Send Message
          </a>
        </div>
      )}
    </>
  );
}

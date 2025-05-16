import { useEffect, useState } from 'react';

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false); // New state to toggle

  const onChange = (e) => {
    setMessage(e.target.value);
  };

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
      {landlord && !showForm && (
        <button
          onClick={() => setShowForm(true)}
          className='bg-blue-600 text-white px-4 py-2 rounded-md hover:opacity-90'
        >
          Contact Landlord
        </button>
      )}

      {landlord && showForm && (
        <div className='flex flex-col gap-2 mt-4'>
          <p>
            Contact <span className='font-semibold'>{landlord.username}</span>{' '}
            for{' '}
            <span className='font-semibold'>
              {listing.name.toLowerCase()}
            </span>
          </p>
          <textarea
            name='message'
            id='message'
            rows='2'
            value={message}
            onChange={onChange}
            placeholder='Enter your message here...'
            className='w-full border p-3 rounded-lg'>
            </textarea>
          <button onClick={() => {
            const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${landlord.email}&su=Regarding ${listing.name}&body=${encodeMessage(message)}`;
             window.open(gmailLink, '_blank');}}
            className='bg-slate-700 text-white p-3 rounded-lg text-center 
            uppercase hover:opacity-95'>Send Message</button>
        </div>
      )}
    </>
  );
}

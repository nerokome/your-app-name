'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const roles = ['Fan', 'Artist', 'Investor', 'Label', 'Curator'];

const WaitlistPage = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('✅ You’ve been added to the waitlist!');
        setEmail('');
        setRole('');
      } else {
        if (res.status === 409) {
          setMessage('⚠️ This email is already on the waitlist.');
        } else {
          setMessage(data?.error || 'Something went wrong.');
        }
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">
          Join the Music & Crypto Revolution
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Be the first to experience a platform where beats meet blockchain. Artists, fans, investors—this is your stage.
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/10 p-6 rounded-xl backdrop-blur-md space-y-4 border border-orange-500"
      >
        <input
          type="email"
          placeholder="Your email"
          className="w-full p-3 rounded bg-white/20 text-white placeholder:text-gray-300 focus:outline-none"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <select
          className="w-full p-3 rounded bg-white/20 text-white focus:outline-none"
          value={role}
          required
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select your role</option>
          {roles.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-600 hover:bg-orange-700 transition-all py-3 rounded font-semibold"
        >
          {loading ? 'Joining...' : 'Join the Waitlist'}
        </button>

        {message && <p className="text-sm text-center mt-2">{message}</p>}
      </motion.form>

      {/* Decorative Images */}
      <motion.div
        className="absolute bottom-0 left-0 flex items-end px-4 py-6 gap-1 sm:gap-2 overflow-hidden"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Image
          src="/btc.png"
          alt="BTC"
          className="w-16 sm:w-20 object-contain"
          width={80}
          height={80}
        />
        <Image
          src="/lite.png"
          alt="Litecoin"
          className="w-16 sm:w-20 object-contain"
          width={80}
          height={80}
        />
        <Image
          src="/eth.png"
          alt="ETH"
          className="w-16 sm:w-20 object-contain"
          width={80}
          height={80}
        />
      </motion.div>
    </div>
  );
};

export default WaitlistPage;

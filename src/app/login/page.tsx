'use client'
import React, { useState } from 'react';

export default function LoginPage() {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = (event: React.FormEvent) => {
   event.preventDefault();
   // Handle login logic here
 };

 return (
   <main className="min-h-[100vh] bg-white">
     <form onSubmit={handleSubmit}>
       <label>
         Username:
         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
       </label>
       <label>
         Password:
         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
       </label>
       <button type="submit">Log In</button>
     </form>
   </main>
 );
}
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="p-6 bg-white shadow-md flex justify-between">
        <h1 className="text-xl font-semibold">Spencer's Portfolio</h1>
        <div>
          <Link href="#about" className="px-4">About</Link>
          <Link href="#experience" className="px-4">Experience</Link>
          <Link href="#projects" className="px-4">Projects</Link>
          <Link href="#contact" className="px-4">Contact</Link>
        </div>
      </nav>
      
      <header className="text-center py-20">
        <div className="flex flex-col items-center">
          <Image 
            src="/IMG_6079.jpeg" 
            alt="Spencer's Profile Picture" 
            width={200} 
            height={200} 
            className="rounded-full shadow-md"
          />
          <h2 className="text-4xl font-bold mt-6">Hi, I'm Spencer.</h2>
          <p className="mt-4 text-lg">Product Manager | Strategist | Problem Solver</p>
        </div>
      </header>
      
      <section id="about" className="p-10 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold">About Me</h3>
        <p className="mt-4 text-lg">I am a Product Manager with experience in Qualtrics, bERZZANI, and more. Passionate about strategy, problem-solving, and building impactful products.</p>
      </section>
      
      <section id="experience" className="p-10 bg-white max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold">Experience</h3>
        <ul className="mt-4">
          <li className="py-2">🚀 Product Management Intern at Qualtrics</li>
          <li className="py-2">📊 Head Intern at bERZZANI</li>
          <li className="py-2">🔍 Analyst at Cougar Consulting Group</li>
        </ul>
      </section>
      
      <section id="projects" className="p-10 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold">Projects</h3>
        <p className="mt-4">Here are some of the key projects I’ve worked on:</p>
        <ul className="mt-4">
          <li className="py-2">📌 Apartment Comparison Platform</li>
          <li className="py-2">📌 Swig Case Competition - Social Impact Strategy</li>
          <li className="py-2">📌 Air Traffic Data Analysis</li>
        </ul>
      </section>
      
      <section id="contact" className="p-10 bg-white max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold">Contact</h3>
        <p className="mt-4">Let's connect! Reach out to me via LinkedIn or email.</p>
      </section>
      
      <footer className="text-center p-6 mt-10 bg-gray-200">
        <p>&copy; {new Date().getFullYear()} Spencer. All rights reserved.</p>
      </footer>
    </div>
  );
}



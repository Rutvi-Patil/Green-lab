'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const FooterCTA: React.FC = () => (
  <section className="bg-[#592C7F] py-16"> {/* Custom dark purple color */}
    <div className="container mx-auto max-w-7xl px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-1">
            GET INVOLVED
          </p>
          <h2 className="text-3xl font-bold text-white mb-2">
            Start your lab sustainability journey
          </h2>
          <p className="text-lg text-white/90 max-w-xl">
            Join the global movement of labs advancing science responsibly. Get support, tools, and recognition for your sustainability progress.
          </p>
        </div>
        <Link
          href="#"
          className="mt-6 lg:mt-0 inline-flex items-center justify-center space-x-3 text-base font-bold text-white bg-white/20 py-3 px-6 rounded-full border-2 border-white hover:bg-white hover:text-[#592C7F] transition duration-300"
        >
          <span>Get Certified</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  </section>
);

export default FooterCTA;

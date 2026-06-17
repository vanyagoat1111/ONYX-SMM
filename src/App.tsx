/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { Cases } from './components/sections/Cases';
import { Solutions } from './components/sections/Solutions';
import { Audit } from './components/sections/Audit';
import { Trust } from './components/sections/Trust';
import { Services } from './components/sections/Services';
import { Stages } from './components/sections/Stages';
import { Checklist } from './components/sections/Checklist';
import { FaqAndContact } from './components/sections/FaqAndContact';
import { Footer } from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-onyx-dark-900 text-white font-sans selection:bg-onyx-300 selection:text-onyx-dark-900">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Cases />
        <Solutions />
        <Audit />
        <Trust />
        <Services />
        <Stages />
        <Checklist />
        <FaqAndContact />
      </main>
      <Footer />
    </div>
  );
}

import CyberMatrixBackground from '../components/CyberMatrixBackground';
import Navbar from '../components/Navbar';
import ThreatTicker from '../components/ThreatTicker';
import HeroHUD from '../components/HeroHUD';
import OperationsDeck from '../components/OperationsDeck';
import InteractiveTerminal from '../components/InteractiveTerminal';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#03040b] text-slate-100 relative selection:bg-cyan-400 selection:text-slate-950 font-mono">
      {/* Infinite Cyber Constellation & Scanline Background */}
      <CyberMatrixBackground />

      {/* Top Fixed HUD Navbar */}
      <Navbar />

      {/* Infinite Threat Telemetry Ticker */}
      <div className="pt-16">
        <ThreatTicker />
      </div>

      {/* Main Tactical Command Flow */}
      <main className="flex-1 relative z-10">
        {/* Hero HUD & Rotating Cyber Sonar Radar */}
        <HeroHUD />

        {/* Compact Operations Deck: Tools / Skills / Academics / Comms */}
        <OperationsDeck />

        {/* Interactive Kali Security Console */}
        <InteractiveTerminal />
      </main>

      {/* Encrypted Node Footer */}
      <Footer />
    </div>
  );
}

// pages/index.tsx
import { useEffect, useState } from 'react';
import Image from 'next/image';
import StepCard from '../components/StepCard';

const steps = [
  {
    rtc: 'Connexion directe via commutateur',
    voip: 'Conversion voix en paquets IP',
    def: 'Le RTC réserve un circuit pour toute la durée de l’appel. La VoIP divise la voix en paquets envoyés via Internet.',
  },
  {
    rtc: 'Circuit réservé à 64kbps',
    voip: 'Circuit partagé avec d’autres données',
    def: 'Le RTC fixe une bande passante dédiée. En VoIP, les ressources réseau sont partagées dynamiquement.',
  },
  {
    rtc: 'Transmission continue (même pendant les silences)',
    voip: 'Silences ignorés pour optimiser la bande passante',
    def: 'En VoIP, les silences peuvent être supprimés pour économiser de la bande passante.',
  },
  {
    rtc: 'Pas de compression possible',
    voip: 'Compression audio (ex: G.729)',
    def: 'Les codecs VoIP permettent de compresser l’audio, ce qui réduit la consommation réseau.',
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1 < steps.length ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = steps[index];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Simulateur pédagogique VoIP vs RTC</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StepCard
          title="Téléphonie RTC"
          message={current.rtc}
          image="/rtc.svg"
        />
        <StepCard
          title="Téléphonie VoIP"
          message={current.voip}
          image="/voip.svg"
        />
      </div>

      <div className="text-center mt-6 text-gray-800 bg-white p-4 rounded shadow max-w-xl mx-auto">
        <p className="text-sm italic">{current.def}</p>
      </div>
    </div>
  );
}

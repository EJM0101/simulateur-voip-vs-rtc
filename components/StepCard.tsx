
// components/StepCard.tsx
import Image from 'next/image';

export default function StepCard({ title, message, image }: { title: string, message: string, image: string }) {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 text-lg min-h-[80px]">{message}</p>
      <div className="mt-4">
        <Image src={image} alt={title} width={400} height={200} className="mx-auto" />
      </div>
    </div>
  );
}

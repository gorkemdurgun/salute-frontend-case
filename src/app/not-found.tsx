'use client';

import { svg } from '@/assets/images/svg';
import Button from '@/components/common/Button';
import ImageBox from '@/components/common/ImageBox';
import { useRouter } from 'next/navigation';

export default function Custom404() {
  const router = useRouter();
  return (
    <div className="flex h-screen items-center justify-center gap-16 bg-white">
      <ImageBox
        src={svg.NotFound}
        alt="Not Found"
        className="h-96 w-96 animate-bounce"
      />
      <div className="flex flex-col items-center space-y-4 text-center">
        <h2 className="text-2xl font-medium text-neutral-dark">
          Böyle bir sayfa yok
        </h2>
        <p className="text-neutral-dark/60">
          Bu kadar derinlere inmeye çalışma, burada bir şey yok.
        </p>
        <Button
          className="!mt-8 bg-black px-8 py-2 text-sm font-semibold text-white"
          onClick={() => router.push('/jira')}
        >
          Jiraya geri dön
        </Button>
      </div>
    </div>
  );
}

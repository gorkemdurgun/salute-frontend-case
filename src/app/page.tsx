'use client';

import Button from '@/components/common/Button';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { PiSpinner as LoadingIcon } from 'react-icons/pi';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/jira');
    }, 3000);
  }, []);

  
  return (
    <div className="flex h-screen items-center justify-center gap-16 bg-gradient-to-t from-primary-light via-gray-100 to-white">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Görkem Durgun <span className="text-primary">Case</span>
        </h1>
        <p className="text-lg text-gray-600">
          İlgili sayfaya yönlendiriyorsunuz <code>jira/page.tsx</code>
        </p>
        <Button
          className="bg-primary/30 text-primary"
          onClick={() => router.push('/jira')}
        >
          Jira Sayfasına Git
        </Button>
      </div>
      <LoadingIcon className="h-16 w-16 animate-spin text-primary" />
    </div>
  );
}

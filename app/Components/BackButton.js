'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button className="btn btn-outline-light mb-4" onClick={() => router.back()}>
      ⬅ Back
    </button>
  );
}
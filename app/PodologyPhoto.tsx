'use client';

import Image from 'next/image';
import { ArrowUpRight, X } from 'lucide-react';
import { useRef } from 'react';

export default function PodologyPhoto() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        className="treatment-photo treatment-photo-button"
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label="Pokaż zdjęcia przed i po zabiegu podologicznym EC CLINIC"
      >
        <Image
          src="/services/podology.jpg"
          alt="Ilustracyjne zdjęcie zabiegu pielęgnacyjnego stopy"
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          unoptimized
        />
        <span>Zobacz zdjęcia przed i po <ArrowUpRight size={18} aria-hidden="true" /></span>
      </button>

      <dialog className="photo-dialog" ref={dialogRef} aria-labelledby="podology-dialog-title">
        <div className="photo-dialog-heading">
          <div><span>PORTFOLIO EC CLINIC · BOOKSY</span><h2 id="podology-dialog-title">Podologia: przed i po</h2></div>
          <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Zamknij zdjęcia"><X size={22} aria-hidden="true" /></button>
        </div>
        <div className="photo-dialog-image">
          <Image src="/booksy/podology.jpg" alt="Zestawienie zdjęć stopy przed zabiegiem podologicznym i po nim, opublikowane przez EC CLINIC w Booksy" fill sizes="(max-width: 700px) 90vw, 800px" unoptimized style={{ objectFit: 'contain' }} />
        </div>
        <p>Przykład opublikowany przez EC CLINIC w Booksy. Efekt zabiegu zależy od indywidualnych warunków.</p>
      </dialog>
    </>
  );
}

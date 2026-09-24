'use client';

import Image from 'next/image';
import { ArrowUpRight, X } from 'lucide-react';
import { useRef } from 'react';

type Props = {
  id: string;
  name: string;
  preview: string;
  previewAlt: string;
  photo: string;
  photoAlt: string;
  photoTitle: string;
  photoNote: string;
  buttonText: string;
};

export default function TreatmentPhoto({ id, name, preview, previewAlt, photo, photoAlt, photoTitle, photoNote, buttonText }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        className="treatment-photo treatment-photo-button"
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`${name}: ${buttonText}`}
        aria-haspopup="dialog"
      >
        <Image src={preview} alt={previewAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" unoptimized />
        <span>{buttonText} <ArrowUpRight size={18} aria-hidden="true" /></span>
      </button>

      <dialog className="photo-dialog" ref={dialogRef} aria-labelledby={`${id}-dialog-title`}>
        <div className="photo-dialog-heading">
          <div><span>PORTFOLIO EC CLINIC · BOOKSY</span><h2 id={`${id}-dialog-title`}>{photoTitle}</h2></div>
          <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Zamknij zdjęcie"><X size={22} aria-hidden="true" /></button>
        </div>
        <div className="photo-dialog-image">
          <Image src={photo} alt={photoAlt} fill sizes="(max-width: 700px) 90vw, 800px" unoptimized style={{ objectFit: 'contain' }} />
        </div>
        <p>{photoNote}</p>
      </dialog>
    </>
  );
}

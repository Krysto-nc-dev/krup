import { generateUploadButton, generateUploadDropzone } from '@uploadthing/react';
import type { OurFileRouter } from '@/app/api/uploadthing/core';
import { useUploadThing } from '@uploadthing/react/hooks';

// Création des composants UploadButton et UploadDropzone
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

// Export de useUploadThing pour l'utilisation dans d'autres parties de l'application
export { useUploadThing };

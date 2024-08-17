import {
    generateUploadButton,
    generateUploadDropzone,
  } from '@uploadthing/react';
  import { useUploadThing } from '@uploadthing/react/hooks';
  import type { OurFileRouter } from '@/app/api/uploadthing/core';
  
  // Remplacez `generateComponents` par `generateUploadButton` et `generateUploadDropzone`
  export const UploadButton = generateUploadButton<OurFileRouter>();
  export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
  
  export { useUploadThing };
  
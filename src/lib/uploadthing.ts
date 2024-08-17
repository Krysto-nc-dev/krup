import { generateUploadButton, generateUploadDropzone } from '@uploadthing/react';
import type { OurFileRouter } from '@/app/api/uploadthing/core';
import { generateReactHelpers } from '@uploadthing/react';

// Création des composants UploadButton et UploadDropzone
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

// Génération des helpers React, y compris useUploadThing
export const { useUploadThing } = generateReactHelpers<OurFileRouter>();

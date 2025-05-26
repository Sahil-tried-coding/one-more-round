import type { FieldValue, Timestamp } from "firebase/firestore";

export interface User {
  id: string;
  name: string;
  createdAt: Timestamp | FieldValue;
  uploadedAt: Timestamp | FieldValue;
  email: string;
  imageUrl: string;
}

export interface Interview {
  id: string;
  position: string;
  questions: { question: string; answer: string }[];
  createAt: Timestamp;
  uploadedAt: Timestamp;
  techstack: string;
  experience: number;
  description: string;
}

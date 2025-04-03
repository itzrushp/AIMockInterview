import { FieldValue, Timestamp } from "firebase/firestore";

export interface User {
  id: string;
  email: string;
  name: string;
  imageUrl: string;
  createdAt: Timestamp | FieldValue;
  updatedAt: Timestamp | FieldValue;
}


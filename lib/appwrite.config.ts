import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const Client = new sdk.Client();

Client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

export const databases = new sdk.Databases(Client);
export const storage = new sdk.Storage(Client);
export const users = new sdk.Users(Client);
export const messaging = new sdk.Messaging(Client);

import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_URL
};

export const client = new Client();

client.setProject(appwriteConfig.projectId);

// Check if appwriteConfig.url is defined before setting the endpoint
if (appwriteConfig.url) {
    client.setEndpoint(appwriteConfig.url);
} else {
    console.error("Appwrite URL is not defined. Make sure to set VITE_APPWRITE_URL environment variable.");
}

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

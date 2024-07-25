import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.lasindu.aora',
    projectId: '66a1d4cd003a4d6ee272',
    databaseId: '66a1d780000ac4a0475e',
    userCollectionId: '66a1d7b0001383163a4b',
    videoCollectionId: '66a1d7ff0037588f9638',
    storageId: '66a1db550017c8292570'
}

const client = new Client();
const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

client
    .setEndpoint(appwriteConfig.endpoint) 
    .setProject(appwriteConfig.projectId) 
    .setPlatform(appwriteConfig.platform) 

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if (!newAccount) throw Error
        const avatarUrl = avatars.getInitials(username)
        await signIn(email, password)
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )
        return newUser
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

export async function signIn(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email, password)
        return session
    } catch (error) {
        throw new Error(error)
    }
}
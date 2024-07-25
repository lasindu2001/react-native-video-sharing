import { Account, Client, ID } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.lasindu.aora',
    projectId: '66a1d4cd003a4d6ee272',
    databaseId: '66a1d780000ac4a0475e',
    userCollectionId: '66a1d7b0001383163a4b',
    videoCollectionId: '66a1d7ff0037588f9638',
    storageId: '66a1db550017c8292570'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
    ;

// Register User
const account = new Account(client);

export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}
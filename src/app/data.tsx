export const userData = [
    {
        id: 1,
        photoURL: "/User1.png",
        messages: [
            {
                id: 1,
                photoURL: "/User1.png",
                displayName: "Jane Doe",
                message: "Hey, Jakob",
            },
            {
                id: 2,
                photoURL: "/LoggedInUser.jpg",
                displayName: "Jakob Hoeg",
                message: "Hey!",
            },
            {
                id: 3,
                photoURL: "/User1.png",
                displayName: "Jane Doe",
                message: "How are you?",
            },
            {
                id: 4,
                photoURL: "/LoggedInUser.jpg",
                displayName: "Jakob Hoeg",
                message: "I am good, you?",
            },
            {
                id: 5,
                photoURL: "/User1.png",
                displayName: "Jane Doe",
                message: "I am good too!",
            },
            {
                id: 6,
                photoURL: "/LoggedInUser.jpg",
                displayName: "Jakob Hoeg",
                message: "That is good to hear!",
            },
            {
                id: 7,
                photoURL: "/User1.png",
                displayName: "Jane Doe",
                message: "How has your day been so far?",
            },
            {
                id: 8,
                photoURL: "/LoggedInUser.jpg",
                displayName: "Jakob Hoeg",
                message:
                    "It has been good. I went for a run this morning and then had a nice breakfast. How about you?",
            },
            {
                id: 9,
                photoURL: "/User1.png",
                displayName: "Jane Doe",
                message:
                    "I had a relaxing day. Just catching up on some reading.",
            },
        ],
        displayName: "Jane Doe",
    },
    {
        id: 2,
        photoURL: "/User2.png",
        displayName: "John Doe",
    },
    {
        id: 3,
        photoURL: "/User3.png",
        displayName: "Elizabeth Smith",
    },
    {
        id: 4,
        photoURL: "/User4.png",
        displayName: "John Smith",
    },
];

export type UserData = (typeof userData)[number];

export const loggedInUserData = {
    id: 5,
    photoURL: "/LoggedInUser.jpg",
    displayName: "Jakob Hoeg",
};

export type LoggedInUserData = typeof loggedInUserData;

export interface Message {
    id: number;
    photoURL: string;
    displayName: string;
    message: string;
}

export interface User {
    id: number;
    photoURL: string;
    messages: Message[];
    displayName: string;
}

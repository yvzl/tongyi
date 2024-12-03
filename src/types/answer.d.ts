interface IAnswer {
    id: number;
    type: "chat" | "user";
    content: string;
}

export {
    IAnswer
}
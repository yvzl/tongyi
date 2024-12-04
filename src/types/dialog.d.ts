interface IAnswer {
    id: number;
    type: "chat" | "user";
    content: string;
}

interface IDialog {
    id: number;
    time: string;
    data: IAnswer[];
}

export {
    IAnswer,
    IDialog
}
interface IAnswer {
    key: number;
    type: "chat" | "user";
    content: string;
}

interface IDialog {
    key: number;
    name: string;
    time: string;
    select: boolean;
    data: IAnswer[];
    top: boolean;
    edit: boolean;
}

export {
    IAnswer,
    IDialog
}
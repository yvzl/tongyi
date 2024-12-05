interface ILevel {
    key: number;
    name: string;
    top: boolean;
    edit: boolean;
}

interface IList {
    key: number;
    name: string;
    level: ILevel[];
}

export {
    ILevel,
    IList
}
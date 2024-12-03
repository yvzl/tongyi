interface ILevel {
    id: number;
    name: string;
}

interface IList {
    id: number;
    name: string;
    level: ILevel[];
}

export {
    ILevel,
    IList
}
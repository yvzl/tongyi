import type {IAnswer} from "@/types";

export const getContent = (data: IAnswer[], _type: IAnswer["type"]) => data.findLast(({type}) => type === _type)?.content || ""
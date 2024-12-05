import type {IDialog} from "@/types";

export const getSelectData = (data: IDialog[], _key: IDialog["key"]) => data.find(({key}) => key === _key)?.data ?? []
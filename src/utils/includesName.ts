import {getContent} from "utils/getContent";
import type {IDialog} from "@/types";

export const includesName = (item: IDialog, value: string) => {
    return getContent(item.data, "user").includes(value)
}
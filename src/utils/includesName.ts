import {IDialog} from "@/types";
import {getContent} from "utils/getContent";

export const includesName = (item: IDialog, value: string) => {
    return getContent(item.data, "user").includes(value)
}
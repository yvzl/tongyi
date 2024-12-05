import {ref} from "vue";
import {defineStore} from "pinia";
import {formatterDate} from "@/utils";
import type {IAnswer, IDialog} from "@/types";

export const dialogStore = defineStore("dialogStore", () => {
    const dialogData = ref<IDialog[]>([])
    const selectState = ref<IDialog["key"]>(1)

    const searchValue = ref("")
    const tableValue = ref("")

    const findIndex = (_key: IDialog["key"]) => dialogData.value.findIndex(({key}: IDialog) => key === _key)
    const resetDialog = (val: IDialog[]) => dialogData.value = val
    const updateDialog = (val: IDialog) => dialogData.value.unshift(val)
    const updateSelectState = (key: IDialog["key"]) => selectState.value = key
    const getNewKey = () => (dialogData.value[0]?.key ?? 0) + 1
    const createDialog = () => {
        const key = getNewKey()
        updateDialog({
            key,
            name: "",
            time: formatterDate(new Date()),
            data: [],
            select: false,
            top: false,
            edit: false,
        })
        console.log(dialogData.value)
        updateSelectState(key)
    }
    const updateData = (key: IDialog["key"], fun: (key: IDialog["key"]) => IAnswer) => {
        let arr = dialogData.value[findIndex(key)]?.data
        if (!arr) {
            createDialog()
            arr = dialogData.value[0].data
        }
        arr.push(fun(arr.length + 1))
    }
    const editDialog = <T extends keyof IDialog>(key: IDialog["key"], attr: T, value: IDialog[T]) => dialogData.value[findIndex(key)][attr] = value
    const deleteDialog = (key: IDialog["key"]) => dialogData.value.splice(findIndex(key), 1)

    return {
        dialogData,
        selectState,
        updateData,
        resetDialog,
        findIndex,
        createDialog,
        updateDialog,
        editDialog,
        deleteDialog,
        updateSelectState,
        searchValue,
        tableValue
    }
}, {
    persist: true,
})
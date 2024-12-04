import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {diffDay} from "@/utils";
import {ITableData, IDialog, IList} from "@/types";

const store = defineStore("defineStore", () => {
    const dialogData = ref<IDialog[]>([{
        id: 1,
        time: "2024-12-04 15:34",
        data: [{
            id: 1,
            type: "user",
            content: "",
        }, {
            id: 2,
            type: "chat",
            content: "",
        }, {
            id: 3,
            type: "user",
            content: "",
        }, {
            id: 4,
            type: "chat",
            content: "",
        }, {
            id: 5,
            type: "user",
            content: "",
        }, {
            id: 6,
            type: "chat",
            content: "",
        }, {
            id: 7,
            type: "user",
            content: "",
        }, {
            id: 8,
            type: "chat",
            content: "",
        }, {
            id: 9,
            type: "user",
            content: "",
        }, {
            id: 10,
            type: "chat",
            content: "",
        }, {
            id: 11,
            type: "user",
            content: "",
        }, {
            id: 12,
            type: "chat",
            content: "",
        }]
    }, {
        id: 2,
        time: "2024-12-04 15:34",
        data: [{
            id: 1,
            type: "user",
            content: "",
        }, {
            id: 2,
            type: "chat",
            content: "",
        }, {
            id: 3,
            type: "user",
            content: "",
        }, {
            id: 4,
            type: "chat",
            content: "",
        }]
    }, {
        id: 3,
        time: "2024-12-03 15:34",
        data: [{
            id: 1,
            type: "user",
            content: "",
        }, {
            id: 2,
            type: "chat",
            content: "",
        }]
    }])

    const tableData = computed<ITableData[]>(() => dialogData.value.map(({time, id}): ITableData => ({
        time,
        key: id,
        name: "",
        select: false
    })))

    const selectState = ref(1)

    const initListData = () => {
        const dateMap = new Map([
            [(diff: number) => diff === 0, 0],
            [(diff: number) => diff === 1, 1],
            [(diff: number) => diff <= 7, 2],
            [(diff: number) => diff <= 30, 3],
            [(diff: number) => diff > 30, 4],
        ]);

        let index = 0

        const arr: IList[] = ["今天", "昨天", "7天内", "30天内", "很久以前"].map((name, id) => ({id, name, level: []}))

        return dialogData.value.reduce((acc: IList[], {time, data}: IDialog) => {
            for (const [fun, result] of dateMap) {
                if (fun(diffDay(new Date().setHours(0, 0, 0, 0).valueOf(), new Date(time.split(" ")[0]).setHours(0, 0, 0, 0).valueOf()))) {
                    ++index
                    acc[result].level.push({id: index, name: data.findLast(({type}) => type === "user")?.content})
                    return acc
                }
            }
        }, arr)
    }

    const listData = computed<IList[]>({
        get: () => initListData(),
        set(val) {
            console.log(val)
        }
    })

    const updateDialogData = (val: IDialog) => dialogData.value.unshift(val)

    return {
        dialogData,
        tableData,
        selectState,
        listData,
        updateDialogData
    }
}, {
    persist: true,
});

export default store;
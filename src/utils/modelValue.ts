import {watch, ref, nextTick} from "vue"
import type {Ref, EmitFn, DefineProps} from "vue"

export const modelValue = <T>(props: DefineProps<any, any>, propsName: string, refValue: Ref<T>, emit: EmitFn, emitName: string) => {
    const state = ref(true)
    watch((): T => props[propsName], newVal => {
        state.value = false
        refValue.value = newVal
        nextTick(() => state.value = true)
    }, {deep: true})
    watch(refValue, newVal => state.value && emit(emitName, newVal), {deep: true})
}
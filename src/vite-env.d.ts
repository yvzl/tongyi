declare module "*.vue" {
    import type {DefineComponent} from "vue"
    const vueComponent: DefineComponent<{}, {}, any>
    export default vueComponent
}

interface ImportMeta {
    readonly env: Record<string, string | undefined>;
}
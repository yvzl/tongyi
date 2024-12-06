import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('typescript', typescript);

export const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                const highlighted = hljs.highlight(str, {language: lang});
                return `<pre class="hljs"><code>${highlighted.value}</code></pre>`;
            } catch (_) {
            }
        }
        return `<pre class="hljs"><code>${MarkdownIt.utils.escapeHtml(str)}</code></pre>`; // 默认安全输出
    }
});
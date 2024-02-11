import { marked } from 'marked';
import fm from 'front-matter';

let renderer = new marked.Renderer();

marked.setOptions({
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
});

function converter(content, allowUnsafe = false) {
    // Check if markdown is in *front matter* format,
    // common for Jekyll or GitHub Pages sites.
    if (fm.test(content)) {
        const fmContent = fm(content, { allowUnsafe });
        const { title } = fmContent.attributes;
        // Just use the markdown body itself.
        //
        // If `title` is available in the front matter,
        // add that as the article header.
        content = title
            ? `# ${title}\n\n` + fmContent.body
            : fmContent.body;
        // We've established this markdown is in Jekyll format.
        //
        // Jekyll supports Liquid template format in Markdown files.
        //
        // So, remove any lines in the format `{%...%}`
        content = content.replace(/^\{[ \t]*%.+%[ \t]*}$/gm, '');
    }

    return marked(content);
}

export default converter;

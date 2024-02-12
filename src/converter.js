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

    return cleanedContentForMedium(marked(content));
}

function cleanedContentForMedium(htmlContent) {
    return (
        htmlContent
            // This is mainly to address code blocks that
            // have two consecutive blank lines.
            //
            // Otherwise, Medium seems to split code blocks
            // at this terminator.
            .replace(/(\r\n|\r|\n){2}/g, '\n \n')
            // This is to address bulleted list items in
            // markdown that have a blank line between them.
            //
            // Medium seems to render them with a blank bulleted
            // list item in between, otherwise.
            .replace(
                /<li>[\r\n]*<p>(.*)<\/p>[\r\n]*<\/li>/g,
                '<li>$1</li>'
            )
            // This will replace embed links to other sites (I think
            // Medium calls them mixtape embeds) so that they will be
            // properly formatted in the post preview.
            //
            // The only thing needed is a manual `return` key press when
            // cursor is at the end of the text.
            .replace(
                /<blockquote>[\r\n]*<p><a href="(.*)"><strong>.*<\/strong><\/a><\/p>[\r\n]*<\/blockquote>/g,
                '<p><a href="$1">$1</a></p>'
            )
            // This will get rid of extraneous blank lines at the start and end
            // of blockquotes that show up in the Medium editor otherwise.
            .replace(
                /<blockquote>[\r\n]*<p>(.*)<\/p>[\r\n]*<\/blockquote>/g,
                '<blockquote><em>$1</em></blockquote>'
            )
            // This will replace markdown-flavor text inside underscore
            // like `_{ anything }_` with `<em>{ anything }</em>`
            .replace(/_([^\n]+)_/g, '<em>$1</em>')
    );
}

export default converter;

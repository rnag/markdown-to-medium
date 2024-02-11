/** Copy richly formatted text to clipboard.
 *
 * @param {string} rich - the text formatted as HTML
 */
export async function copyRichToClip(rich) {
    // a plain text fallback - here we default to rich-text
    const plain = rich;

    if (typeof ClipboardItem !== 'undefined') {
        // Shiny new Clipboard API, not fully supported in Firefox.
        // https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API#browser_compatibility
        const html = new Blob([rich], { type: 'text/html' });
        const text = new Blob([plain], { type: 'text/plain' });
        // eslint-disable-next-line no-undef
        const data = new ClipboardItem({
            'text/html': html,
            'text/plain': text,
        });
        await navigator.clipboard.write([data]);
    } else {
        // Fallback using the deprecated `document.execCommand`.
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#browser_compatibility
        function listener(e) {
            e.clipboardData.setData('text/html', rich);
            e.clipboardData.setData('text/plain', plain);
            e.preventDefault();
        }
        document.addEventListener('copy', listener);
        document.execCommand('copy');
        document.removeEventListener('copy', listener);
    }
}

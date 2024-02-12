# Markdown to Medium

> *Adapted from [@fanderzon/markdown-to-medium-tool](https://github.com/fanderzon/markdown-to-medium-tool)*

Source code for a tool that takes Markdown format, and outputs HTML formatted in a way compatible with [medium.com](https://medium.com/) editor.

The tool is hosted on my website: **https://ritviknag.com/markdown-to-medium**

I made it for myself, so I can take my personal blog posts, written in `.md` files, paste them in here and copy the output to Medium when adding the post there.

Medium does have a function to import posts, but it always fails miserably with the formatting.

## Options
There is only one option in the menu currently, and that is how to format `inline codespans`, there isn't quite any equivalent of these in a Medium post so you can select if you want to translate those to bold, italic, or with double quotes `"` around them (or all of the above which is what I normally do).

## Dev instructions

The project is based on [Create React App](https://github.com/facebookincubator/create-react-app), so if you want to build it locally and change things the setup is basically:

```
npm install
npm start
```

That will build and server the project on http://localhost:3000.

`npm run build` will make an optimized production build into the `build` directory.

// The current version on npm (v0.17.27) does not yet work on the server.
// import grapesjs from "grapesjs"

// Use the version build from the dev branch (commit 8b415b4e976f25bc133f66bc8a7ff1d3af8cebfa) instead
import "./grapes.min.js"

const PAGE_CONTENTS = [
    {
        tagName: 'h1',
        type: 'text',
        components: [
            {
                type: 'textnode',
                removable: false,
                draggable: false,
                highlightable: 0,
                copyable: false,
                selectable: true,
                content: 'Dit is een test!',
                _innertext: false,
            },
        ],
    },
]

export function renderHTML () {
    const editor = grapesjs.init({ headless: true })
    const components = editor.addComponents(PAGE_CONTENTS)
    const html = components.map(cmp => cmp.toHTML()).join('')
    console.log('Rendered HTML is ', html)
}

renderHTML()

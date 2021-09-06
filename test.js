import grapesjs from "grapesjs"

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

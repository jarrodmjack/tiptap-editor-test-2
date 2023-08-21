import Collaboration from "@tiptap/extension-collaboration"
import Document from "@tiptap/extension-document"
import Paragraph from "@tiptap/extension-paragraph"
import Placeholder from "@tiptap/extension-placeholder"
import Text from "@tiptap/extension-text"
import { EditorContent, useEditor } from "@tiptap/react"
import React from "react"
import { WebrtcProvider } from "../../node_modules/y-webrtc"
import * as Y from "yjs"

const ydoc = new Y.Doc()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const provider = new WebrtcProvider("tiptap-collaboration-extension", ydoc)

export default () => {
	const editor = useEditor({
		extensions: [
			Document,
			Paragraph,
			Text,
			Collaboration.configure({
				document: ydoc,
			}),
		],
    editorProps: {
      attributes: {
				class: "prose sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
			},
    },
    content: `
          <h2>
            Hi there,
          </h2>
          <p>
            this is a basic <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
          </p>
          <ul>
            <li>
              That’s a bullet list with one …
            </li>
            <li>
              … or two list items.
            </li>
          </ul>
          <p>
            Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
          </p>
      <pre><code class="language-css">body {
        display: none;
      }</code></pre>
          <p>
            I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
          </p>
          <blockquote>
            Wow, that’s amazing. Good work, boy! 👏
            <br />
            — Mom
          </blockquote>
        `,
	})

	return <EditorContent className="w-full h-full border border-black" editor={editor} />
}

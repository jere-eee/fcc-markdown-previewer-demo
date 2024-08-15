import { useState } from 'react'
import ReactMarkdown from "react-markdown"
import './App.css'

const defaultMarkdown = `

# Welcome to the React Markdown Previewer!

## Sub-heading for your troubles
### Also... 

Some code between two backticks, \`<div></div>\`

\`\`\`
// here's some multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == \`\`\` && lastLine == \`\`\`) {
    return multiLineCode;
  }
}

\`\`\`

One may also **bolden** text.
Or _italiscize_.
Or **_both!_**

Want a [link?](https://open.spotify.com/album/50yFYgKdwJANZ5O9MIbMkg), there you go! enjoy wheezy :D

> Block Quotes! For important stuff

![Spotify Logo](https://upload.wikimedia.org/wikipedia/commons/c/ce/Spotify_logo_2.png)

- And some lists.
  - Top ten artists 2024
    - Kendrick
      - End of list
`;

function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown)

  return (
    <>
      <div>
        <h1 style={{textAlign: "center"}}>MarkdownPreview</h1>
        <div className="boxes-container">
          <textarea name="editor" id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
          <div id="preview">
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

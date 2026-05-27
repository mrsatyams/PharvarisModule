import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

import style from "./styles/toc.scss"

// @ts-ignore
import script from "./scripts/toc.inline"

function HeadingsOnlyToc({ fileData }: QuartzComponentProps) {
  if (!fileData.toc) return null

  const filtered = fileData.toc.filter(
    (item) => item.depth === 0,
  )

  return (
    <div class="toc toc--simple">
      <button id="toc">
        Content
      </button>

      <div id="toc-content">
        <ul>
          {filtered.map((item) => (
            <li class={`depth-${item.depth}`} key={item.slug}>
              <a href={`#${item.slug}`}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

HeadingsOnlyToc.css = style
HeadingsOnlyToc.afterDOMLoaded = script

export default (() => HeadingsOnlyToc)
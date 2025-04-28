import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          Generated with 
          <a href="https://quartz.jzhao.xyz/"> Quartz v{version}</a> © {year}
          <br></br>
          'Tech Tree' component by <a href="https://www.linkedin.com/in/rosspopovs/">Ross Popovs</a> © {year}
          <i>
            <br></br>
            Except where otherwise noted, all guides and their contents are licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC-BY-NC-SA</a>. 
            Where possible, credit should be given to the original author followed by the University of Southampton.
          </i>
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor

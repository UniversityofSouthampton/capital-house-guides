import { QuartzComponentProps } from "./types"

export default (() => {

    function GuidesTree(props: QuartzComponentProps) {

      let m = 'flowchart TD \n A[Christmas] -->|Get money| B(Go shopping) \n B --> C{Let me think} \n C -->|One| D[Laptop] \n C -->|Two| E[iPhone] \n C -->|Three| F[ Car] \n click B "http://www.github.com" "This is a link"'
      let opt = {startOnLoad: true};
      return (
        <div id="guidetree-component"> 
          <div id="guidetree-container">
            <button id="guidetree-expand">Expand</button>
            <pre class="mermaid">
            {m}
            </pre>
            <script type="module">
              import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
              mermaid.initialize({opt});
            </script>
            <script src="https://unpkg.com/@panzoom/panzoom@4.6.0/dist/panzoom.min.js"></script>
          </div>
        </div>
      )
    }

   
    GuidesTree.beforeDOMLoaded = `
    console.log("hello from before the page loads!")
    `
   
    GuidesTree.afterDOMLoaded = `
      document.getElementsByClassName("right sidebar")[0].style.zIndex = "2";
      let expanded = false;
      document.getElementById('guidetree-expand').onclick = () => {
       expanded = !expanded;
        if(expanded){
            document.getElementById("guidetree-component").style.position="fixed";
            document.getElementById("guidetree-component").style.left="50%";
            document.getElementById("guidetree-component").style.top="50%";
            document.getElementById("guidetree-component").style.width="80%";
            document.getElementById("guidetree-component").style.height="80%";
            document.getElementById("guidetree-component").style.transform="translate(-50%,-50%)";
        }
        else
        {
            document.getElementById("guidetree-component").style.position="relative";
            document.getElementById("guidetree-component").style.left="0px";
            document.getElementById("guidetree-component").style.top="0px";
            document.getElementById("guidetree-component").style.width="fit-content";
            document.getElementById("guidetree-component").style.height="fit-content";
            document.getElementById("guidetree-component").style.transform="translate(0px,0px)";
        }
      }

    `
    

    GuidesTree.css = `
      #guidetree-component {
        border-radius: 5px;
        background: #3c0b47;
        background: linear-gradient(135deg,rgba(60, 11, 71, 1) 0%, rgba(52, 74, 217, 1) 100%);
        padding: 3px;
      }
      #guidetree-container {
        background: #222;
        width: calc(100% - 10px);
        height: calc(100% - 10px);
        padding: 5px;

      }
      .mermaid {
        border:none;
      }
      #guidetree-expand{
        float: right;
      }
    `;
 

    return GuidesTree
  }) satisfies QuartzComponentConstructor
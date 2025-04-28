import { QuartzComponentProps } from "./types"

export default (() => {

    function GuidesTree(props: QuartzComponentProps) {
      let curFile = props.fileData.slug;
      curFile = curFile.replaceAll('-', ' ');
         if(curFile.split('/').at(-1) === "index"){
          curFile = curFile.split('/').slice(0, -1).join('/');
         }
      let nodesParam : string = 'current='+curFile+'&all=';
      props.fileData
      props.allFiles.forEach((f) => {
         let file = f.slug;
         file = file.replaceAll('-', ' ');
         if(file.split('/').at(-1) === "index"){
          file = file.split('/').slice(0, -1).join('/');
         }
         nodesParam += file+";";
       });
      nodesParam+='"';
      nodesParam = btoa(nodesParam);
      let url : string = 'https://guides.techhub.wsagames.com/tree?data='+nodesParam;
      return (
        <div id="guidetree-component"> 
          <div id="guidetree-container">
            <iframe id="guidetree-iframe" src={url}></iframe>
            <div id="guidetree-expand">
              <svg width="30px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10V5L8 5M3 14V19L8 19M16 5H21V10M21 14V19H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      )
    }
   
    GuidesTree.afterDOMLoaded = `
      if (document.getElementById("guidetree-component")){
      
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

        window.addEventListener("message", (e) => {
        if(e.data.func == "quartzSetBodySlug"){
          console.log(e.data.message);
          let slug = e.data.message.replaceAll(" ", "-");
          window.location.pathname = slug;
        }
        },false);

        document.addEventListener("themechange", (e) => {
          console.log("Theme changed to " + e.detail.theme) // either "light" or "dark"
          let filter = e.detail.theme == "light" ? "invert(1)" : "invert(0)"
          document.getElementById("guidetree-component").style.filter = filter;
        })
      }

    `
    

    GuidesTree.css = `
      #guidetree-component {
        border-radius: 5px;
        background: #3c0b47;
        background: linear-gradient(135deg,rgba(60, 11, 71, 1) 0%, rgba(52, 74, 217, 1) 100%);
        height: fit-content;
        width: 100%;
        padding: 3px;
        z-index:3;
        transition: all 0.25s ease;
      }
      #guidetree-container {
        background: #222;
        position: relative;
        width: 100%;
        height: 100%;
      }
      .mermaid {
        border:none;
      }
      #guidetree-expand{
        position: absolute;
        right: 0px;
        bottom: 0px;
        z-index: 5;
        margin-top: -20px;
      }
      #guidetree-expand > svg{
        width: 100%;
        height: 100%;
        color: white;
      }
      #guidetree-iframe{
        position: relative;
        height: 100%;
        width: 100%;
        border:none;
        z-index: 4;
      }
    `;
 

    return GuidesTree
  }) satisfies QuartzComponentConstructor
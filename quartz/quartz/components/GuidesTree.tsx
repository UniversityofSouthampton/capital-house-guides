import { QuartzComponentProps } from "./types"

export default (() => {

    function GuidesTree(props: QuartzComponentProps) {
      const curFile = props.fileData.relativePath?.split('/').slice(0, -1).join('/');
      let curFileLocalOrderTag = props.fileData.frontmatter?.localOrder?.toString();
      if(props.fileData.frontmatter?.localOrder?.valueOf == undefined) {curFileLocalOrderTag = "0"}
      let nodesParam : string = 'current='+curFile+"<lo:"+curFileLocalOrderTag+'>&all=';
      props.fileData
      props.allFiles.forEach((f) => {
         let file = f.relativePath?.split('/').slice(0, -1).join('/');
         let localOrderTag = f.frontmatter?.localOrder?.toString();
         if(f.frontmatter?.localOrder?.valueOf == undefined) {localOrderTag = "0"}
         nodesParam += file+"<lo:"+localOrderTag+">;";
       });
      nodesParam+='"';
      nodesParam = btoa(nodesParam);
      let url : string = 'https://tech.wsagames.com/guides/tree?data='+nodesParam;
      return (
        <div id="guidetree-component"> 
          <div id="guidetree-container">
            <iframe id="guidetree-iframe" src={url}></iframe>
            <button id="guidetree-expand">Expand</button>
          
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
        height: fit-content;
        width: 100%;
        padding: 3px;
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
        float: right;
        z-index: 5;
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

const  Red = ()=>{
    window.addEventListener("offline", () => {
        MessageEvent("offline");
      });
      
      window.addEventListener("online", () => {
        MessageEvent("online");
      })

}
export default Red
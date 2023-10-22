
const  Red = ()=>{
    window.addEventListener("offline", () => {
        alert("offline");
      });
      
      window.addEventListener("online", () => {
        alert("online");
      })

}
export default Red
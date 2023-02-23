
const food = ({menu}) =>{
    
    const party = menu
    .filter((i) => i.category === "Party")
    .map(({ id, category, name }) => ({ id, category, name }));

   

 

    const simmredName = party.map(i =><li>{i.name}</li>)
  
    
  console.log(party);

console.log(menu)

    return(
        <>
        
        <ul>{simmredName}</ul>
        </>
    )
}
export default food
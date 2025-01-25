function Display(values){
    const{n,obj}=values
    const {name,rollno}=obj
    return(
        <>
        <h3>Hi hello</h3>
        <h4>{n} </h4>
        <h2>{name},{rollno}</h2>
        </>
    )
}
export default Display
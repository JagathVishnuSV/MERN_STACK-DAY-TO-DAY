import Display from "./Display"
function Datas(){
    var name='Jagath'
    const person={
        n:'vishnu',
        rollno:53
    }
    return(
        <>
        <h1>I'm {name} </h1>
        <Display n1={"bye"} obj={person} />
        </>
    )
}
export default Datas
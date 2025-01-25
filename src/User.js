import { useParams } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import {deleteUser} from './slices/userSlice';

export default function User(){
    const users=useSelector((state)=> state.userInfo.eusers)
    //const{name}=useParams()
    const dispatch = useDispatch()
    const deleteUserInfo=(index)=>{
        dispatch(deleteUser(index))
    }
    return(
        <>    
        <h1>iM the uSEr</h1>
        {
            users.map((users,index)=>{
                return(
                    <div key={index}>
                    <h1>{users.roll}</h1>
                    <h2>{users.name}</h2>
                    <h3>{users.city}</h3>
                    <button onClick={()=>deleteUserInfo(index)}>Delete</button>
                    </div>
                )
            })
        }
        </>
    )
}
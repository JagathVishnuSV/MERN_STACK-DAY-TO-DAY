import { useParams } from 'react-router-dom';

export default function Invoice(){
    const { invoiceId } = useParams()
    return(
        <>
        <h2>I'm from Invoive {invoiceId}</h2>
        </>
    )
}
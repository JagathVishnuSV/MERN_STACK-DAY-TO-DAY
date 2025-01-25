import { Link } from "react-router-dom";

const invoiceList = [
  { id: 1, name: "Jagath" },
  { id: 2, name: "Bala" },
  { id: 3, name: "Karthick" },
  { id: 4, name: "dena" },
];

export default function Invoices() {
  return (
    <>
      <h2>I'm from Invoices</h2>
      <ul>
        {invoiceList.map((invoice) => (
          <li key={invoice.id}>
            <Link to={`/invoices/${invoice.id}`}>{invoice.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

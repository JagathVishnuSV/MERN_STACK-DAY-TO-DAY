import Invoices from './Invoices';
import Invoice from './Invoice';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function App1() {
  return (
    <BrowserRouter>
      <h1>Book Keeper</h1>
      <Link to="/invoices">Invoices</Link> | <Link to="/expenses">Expenses</Link>
      <Routes>
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/invoices/:invoiceId" element={<Invoice />} />
        <Route path="/expenses" element={<h2>Expenses Page</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

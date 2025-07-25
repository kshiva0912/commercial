import { useLocation, useNavigate } from 'react-router-dom';

export default function Invoice() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, quantity, buyer, shipping } = location.state || {};

  if (!product || !quantity) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 text-lg">Invalid invoice data</p>
        <button
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
          onClick={() => navigate('/')}
        >
          Go Home
        </button>
      </div>
    );
  }

  const unitPrice = product.price;
  const totalPrice = unitPrice * quantity;
  const taxRate = 28;
  const taxAmount = (totalPrice * taxRate) / 100;
  const cgst = taxAmount / 2;
  const sgst = taxAmount / 2;
  const grandTotal = totalPrice + taxAmount;

  const today = new Date();
  const formattedDate = today.toLocaleDateString();
  const invoiceNumber = `INV-${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`;

  const amountInWords = (num) =>
    `Rupees ${num.toLocaleString('en-IN')} Only`;

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 shadow-md border">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-orange-700">KADYAN TELECOM</h1>
          <p className="text-sm">VPO. Sewah, Near New Bus Stand, Animal Hospital Vali Gali, Panipat, Haryana</p>
          <p className="text-sm">+91 94160 10880 | GSTIN: 06BIQPJ4938M1ZK</p>
        </div>
        <div className="text-right text-sm">
          <p><strong>Invoice No:</strong> {invoiceNumber}</p>
          <p><strong>Date:</strong> {formattedDate}</p>
          <p><strong>Place of Supply:</strong> Haryana</p>
        </div>
      </div>

      {/* Billed & Shipped */}
      <div className="grid grid-cols-2 text-sm mb-4 gap-4">
        <div>
          <h2 className="font-semibold mb-1">Billed To:</h2>
          <p>{buyer?.name || "Bajaj Finance Limited"}</p>
          <p>{buyer?.mobile || "N/A"}</p>
        </div>
        <div>
          <h2 className="font-semibold mb-1">Shipped To:</h2>
          <p>{shipping?.name || "Sanay Ashok"}</p>
          <p>{shipping?.address || "HOUSE NO 0 VARD, 22 VIKAS NAGA"}</p>
          <p>{shipping?.mobile || "9992253500"}</p>
        </div>
      </div>

      {/* Product Table */}
      <table className="w-full border text-sm mb-6">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">S/N</th>
            <th className="border px-2 py-1">Description</th>
            <th className="border px-2 py-1">HSN</th>
            <th className="border px-2 py-1">Qty</th>
            <th className="border px-2 py-1">Rate</th>
            <th className="border px-2 py-1">CGST</th>
            <th className="border px-2 py-1">SGST</th>
            <th className="border px-2 py-1">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1 text-center">1</td>
            <td className="border px-2 py-1">{product.title}</td>
            <td className="border px-2 py-1 text-center">8415</td>
            <td className="border px-2 py-1 text-center">{quantity}</td>
            <td className="border px-2 py-1 text-right">₹{unitPrice.toLocaleString()}</td>
            <td className="border px-2 py-1 text-right">₹{cgst.toFixed(2)}</td>
            <td className="border px-2 py-1 text-right">₹{sgst.toFixed(2)}</td>
            <td className="border px-2 py-1 text-right font-semibold">₹{grandTotal.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      {/* Tax Summary */}
      <div className="text-right text-sm mb-2">
        <p>Taxable Amount: ₹{totalPrice.toLocaleString()}</p>
        <p>CGST (14%): ₹{cgst.toFixed(2)}</p>
        <p>SGST (14%): ₹{sgst.toFixed(2)}</p>
        <p className="font-bold">Total: ₹{grandTotal.toLocaleString()}</p>
      </div>

      {/* Amount in Words */}
      <p className="text-sm font-semibold mb-4">{amountInWords(grandTotal)}</p>

      {/* Bank & QR */}
      <div className="grid grid-cols-3 text-sm gap-4 mt-4 border-t pt-4">
        <div>
          <h3 className="font-semibold mb-1">Bank Details</h3>
          <p>Bank: UNION BANK</p>
          <p>Account No: 402301010600245</p>
          <p>IFSC: UBIN0540234</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold mb-1">Scan & Pay</h3>
          <div className="w-24 h-24 mx-auto border">
            {/* Replace with actual QR image */}
            <div className="text-xs text-gray-400 pt-10">QR Code</div>
          </div>
        </div>
        <div className="text-right">
          <p className="mb-6">Receiver's Signature: _____________________</p>
          <p className="mt-2 font-semibold">For KADYAN TELECOM</p>
          <p className="text-sm">Authorized Signatory</p>
        </div>
      </div>

      {/* Terms */}
      <div className="mt-6 border-t pt-4 text-xs text-gray-600">
        <p>1. Goods once sold will not be taken back.</p>
        <p>2. Interest @ 18% p.a. will be charged if payment is not made within the stipulated time.</p>
        <p>3. Subject to 'Haryana' Jurisdiction only.</p>
      </div>

      <div className="text-center mt-8">
        <button
          className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

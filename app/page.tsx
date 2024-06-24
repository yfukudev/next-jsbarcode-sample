'use client'

import { useState, useRef, SetStateAction } from 'react';
import Barcode from 'react-jsbarcode';
import ReactToPrint from 'react-to-print';
import { PrintLayout } from './components/PrintLayout'

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const printRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(e.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold mb-5 no-print">Barcode Generator Sample</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text for barcode"
        className='mt-5 px-4 py-2 text-black text-lg font-semibold rounded no-print'
      />
      {inputValue && (
        <div className='mt-5'>
          <Barcode value={inputValue} />
        </div>
      )}
      <ReactToPrint
        trigger={() => (
          <button
            className="mt-5 px-4 py-2 bg-blue-500 text-white text-lg font-semibold rounded hover:bg-blue-600 no-print"
          >
            Print Preview
          </button>
        )}
        content={() => printRef.current}
      />
      <PrintLayout ref={printRef} barcodeValue={inputValue} />
    </main>
  );
}

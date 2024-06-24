'use client'

import React from 'react';
import Barcode from 'react-jsbarcode';

type PrintLayoutProps = {
  barcodeValue: string;
};

export const PrintLayout = React.forwardRef<HTMLDivElement, PrintLayoutProps>(function PrintLayout(props, ref) {
  return (
    <div ref={ref} className="print-only flex flex-col items-center h-screen">
      <h1 className='text-xs text-center mt-5'>Barcode Sample</h1>
      {props.barcodeValue && (
        <Barcode
          value={props.barcodeValue}
          options={{
            width: 1,
            height: 20,
            fontSize: 10,
          }}
        />
      )}
    </div>
  );
});

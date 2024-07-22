'use client'

import Image from 'next/image';
import React from 'react';
import Barcode from 'react-jsbarcode';

type PrintLayoutProps = {
  barcodeValue: string;
};

export const PrintLayout = React.forwardRef<HTMLDivElement, PrintLayoutProps>(function PrintLayout(props, ref) {
  return (
    <div ref={ref} className="print-only flex flex-col items-center h-screen">
      <h1 className='text-xs text-center mt-5'>First Page</h1>
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
      <div className="next-page"></div>
      <h1 className='text-xs text-center mt-5'>Second Page</h1>
      <Image src="https://placehold.jp/100x50.png" width={100} height={50} alt='sample image' />
    </div>
  );
});

'use client'

import React from 'react';
import Barcode from 'react-jsbarcode';

type PrintLayoutProps = {
    barcodeValue: string;
};

export const PrintLayout = React.forwardRef<HTMLDivElement, PrintLayoutProps>((props, ref) => {
    return (
        <div ref={ref} className="print-only flex-col item-center h-screen">
            <h1 className='text-xs text-center mt-5'>Barcode Sample</h1>
            {props.barcodeValue && (
                <div className='text-center'>
                    <Barcode
                        value={props.barcodeValue}
                        options={{
                            width: 1,
                            height: 20,
                            fontSize: 10,
                        }}
                    />
                </div>
            )}
        </div>
    );
});

PrintLayout.displayName = 'PrintLayout';


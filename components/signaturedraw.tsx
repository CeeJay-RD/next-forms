'use client'
import React, { useRef } from 'react';
import SignaturePad from 'react-signature-pad-wrapper';
import {Button, ButtonGroup} from "@nextui-org/button";

const SignatureDraw = () => {
    const signaturePadRef = useRef<SignaturePad | null>(null);
    
    const handleClear = () => {
        const signaturePad = signaturePadRef.current;

        if (signaturePad) {
            signaturePad.clear();
        }
    };

    const handleSave = () => {
        const signaturePad = signaturePadRef.current;

        if (!signaturePad) {
            return;
        }

        if (signaturePad.isEmpty()) {
            // eslint-disable-next-line no-alert
            alert('Please provide a signature first.');
        } else {
            // eslint-disable-next-line no-alert
            const pngSignature = signaturePad.toDataURL('image/png')
            alert('Se guardó la firma, chequea la consola!')
            console.log(pngSignature);
        }
    };

    return (
        <div className="flex">
            <div>
                <div>
                    <div >
                        <div>
                            <p className="text-center">
                                Firma Abajo
                            </p>
                            <SignaturePad options={{backgroundColor: 'rgb(255, 255, 255)'}} redrawOnResize ref={signaturePadRef} />
                        </div>
                    </div>

                    <div className="flex gap-6 justify-center mt-3">

                        <ButtonGroup>
                            <Button>
                                <a onClick={handleClear}>
                                    Clear
                                </a>
                            </Button>
                            
                            <Button>
                                <a onClick={handleSave}>
                                    Save
                                </a>
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignatureDraw;

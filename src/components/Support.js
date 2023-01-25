import React, { useState } from 'react'
import { useAccount } from 'wagmi';
import { TextField, Button, Link } from '@mui/material';
import { usePrepareSendTransaction, useSendTransaction } from 'wagmi';
import "../App.css";
import { parseEther } from 'ethers/lib/utils';




function Support() {

    const tipAddress = "0x767b4838b22116E7b05d9DE1168A39d7494337C3";
    const { isConnected, address } = useAccount();
    const [tipAmount, setTipAmount] = useState("10");

    const handleChange = (event) => {
        setTipAmount(event.target.value);
    }

    const { config, error } = usePrepareSendTransaction({
        request: {
            to: tipAddress,
            value: parseEther(tipAmount),
        },
        onError(error) {
            console.log(error);
        },
    });

    const { sendTransaction } = useSendTransaction(config);

    return(
        <>
            <div style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginTop: "5rem",
                marginBottom: "5rem"
            }}
            >
                <h1 style={{textAlign: "center"}}>Support The Gallery</h1>
                <p style={{margin: "2rem"}}>Help Fantom Gallery showcase the best art in Web3 and serve as an on-boarding tool for artists from Web2.</p>
                <TextField
                    sx={{
                        width: { xs: "15ch", md: "25ch" }
                    }}
                    id='tip-input'
                    value={tipAmount}
                    onChange={handleChange}
                />
                { 
                !address ? 
                <Button 
                    sx={{
                        width: { xs: "15ch", md: "25ch" },
                        height: "56px",
                        color: "black",
                        backgroundColor: "dark-grey"
                    }}
                    disabled={true}
                >
                    Donate
                </Button> :
                <Button 
                    sx={{
                        width: { xs: "15ch", md: "25ch" },
                        height: "56px",
                        color: "white",
                        backgroundColor: "black",
                    }}
                    onClick={() => sendTransaction?.()}
                >
                    Donate
                </Button>
                }
                <p style={{margin: "2rem", color: "#BBBBBB"}}>Connect your wallet to donate in $FTM.</p>
            </div>
        </>
    );
}

export default Support;
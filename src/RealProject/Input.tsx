import { Box, Button, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import {  getPhone, addCode } from "./index";


const Input = () => {
    const[firstName, setFirstName] = useState('');
    const[visible, setVisible] = useState<boolean>(false)
    const[count, setCount] = useState<number>(60)
    const[inputCode, setInputCode] = useState()
    const mass = [firstName, inputCode]
    
    const handleNameChange = (event:any) => {
        setFirstName(event.target.value);
    };

    useEffect(() => {
        if(visible){
        count > 0  && setTimeout(() =>  setCount(count - 1), 1000 )
        count === 0 && setVisible(false)}
        
    })
    const handleReCount = () =>  {
        setVisible(true)
        setCount(60)
        getPhone(firstName)
    }

    const handleSubmit = () => {
        if(firstName.length === 12){
            setVisible(true)
        }else {
            setVisible(false)
        }
        getPhone(firstName)
    }
    const handleCodeSubmit = () => {
        addCode(mass)
    }
    return (
        <div>
        <h2>Very long string</h2>
        <br/>
        <input
            maxLength={12}
            type="tel"
            placeholder="telifon raqamingiz"
            id="first_name"
            name="first_name"
            value={firstName}
            onChange={handleNameChange}
            onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
                }
            }
        }
        />
        <button onClick={handleSubmit}>submit phone</button>
        <br/>
        {
            count < 60 &&  <>
            <input maxLength={6} onChange={(e:any) => setInputCode(e.target.value) }   placeholder="Please inter the code" />
            <button onClick={handleCodeSubmit}>submit Code</button>
            </>

        }
        {
            visible && count > 0 ? <Box sx = {{mt: "1rem", display:"flex",alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"10px"}}>
                <Box sx = {{width:"50px", height:"50px", borderRadius:"50%", border:"4px solid crimson", display:"flex",alignItems:"center", justifyContent:"center"}}>
                    <Typography variant="h6">{count}</Typography>
                </Box>
            </Box>: null
            
        }

        <br/>
        {
            count === 0 ? <Button onClick={handleReCount} sx = {{mt:"1rem"}} variant="contained">Resend the code</Button>:null  
        }

        </div>
    );
}

export default Input
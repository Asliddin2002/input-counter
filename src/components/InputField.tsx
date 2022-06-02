import React, {useState, useEffect} from "react"
import { Button, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const Inputs = () => {
    const[phone, setPhone] = useState()
    const[visible, setVisible] = useState<boolean>(false)
    const[count, setCount] = useState<number>(60)
    const [value, setValue] = useState()

    
    useEffect(() => {
        if(visible){
        count > 0  && setTimeout(() =>  setCount(count - 1), 1000 )
        count === 0 && setVisible(false)
    }
    })
    const onHandChange = (e:any) => {
        setPhone(e.target.value)
        if(e.target.value.length >= 14){
            setVisible(true)
        }else{
            setVisible(false)
            
        }
    }
    const handleReCount = () => {
        setVisible(true)
        setCount(60)
    }
    return(
        <Box sx = {{width:300, m:"3rem"}}>
        <TextField placeholder="Phone number"  
        onChange={onHandChange}
        defaultValue = "+998"
        />
        {
            count < 60 &&  
            <TextField  sx = {{mt:"1rem"}} placeholder="Please inter the code" />

        }
        {
            visible? <Box sx = {{mt: "1rem", display:"flex",alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"10px"}}>
                <Box sx = {{width:"50px", height:"50px", borderRadius:"50%", border:"4px solid crimson", display:"flex",alignItems:"center", justifyContent:"center"}}>
                    <Typography variant="h6">{count}</Typography>
                </Box>
            </Box>: null
        }
        {
            count === 0 && <Button onClick={handleReCount} sx = {{mt:"1rem"}} variant="contained">Resend the code</Button>  
        }
        </Box>
    )
}

export default Inputs
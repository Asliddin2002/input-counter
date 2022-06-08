import React, {useState, useEffect} from "react"
import { Button, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useQuery, useMutation } from "react-query"
import { getTodos, addTodo } from "./index"

const AddItem = () => {
    return useMutation(addTodo)
}
const Inputs = () => {
    const[phone, setPhone] = useState()
    const[visible, setVisible] = useState<boolean>(false)
    const[count, setCount] = useState<number>(60)
    const[code, setCode] = useState()
    const[inputCode, setInputCode] = useState()
    const {data} = useQuery("phones", getTodos)
    const {mutate} = AddItem()
   
    let codes = data[0]?.code;
    console.log(codes);
    console.log(inputCode);

    if(codes === inputCode){
        setVisible(false)
    }

    useEffect(() => {
        if(visible){
        count > 0  && setTimeout(() =>  setCount(count - 1), 1000 )
        count === 0 && setVisible(false)
    }

    })
    const onHandChange = (e:any) => {
        setPhone(e.target.value)
        
        if(e.target.value.length > 13){
            setVisible(true)
            mutate({phone})
        }else{
            setVisible(false)
            
        }
    }
    const handleReCount = () =>  {
        setVisible(true)
        setCount(60)
    }
    return(
        <Box sx = {{width:350, m:"3rem"}}>
                
                <TextField placeholder="Phone number"  
                onChange={onHandChange}
                defaultValue = "+998"
                />
                
            {
            count < 60 &&  
            <TextField onChange={(e:any) => setInputCode(e.target.value) }  sx = {{mt:"1rem"}} placeholder="Please inter the code" />

        }
        {
             codes === inputCode ? <div>seccess</div> : <div>error</div>
        }
        {
            visible? <Box sx = {{mt: "1rem", display:"flex",alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"10px"}}>
                <Box sx = {{width:"50px", height:"50px", borderRadius:"50%", border:"4px solid crimson", display:"flex",alignItems:"center", justifyContent:"center"}}>
                    <Typography variant="h6">{count}</Typography>
                </Box>
            </Box>: null
        }
        {
            codes === inputCode?
            count === 0 && <Button onClick={handleReCount} sx = {{mt:"1rem"}} variant="contained">Resend the code</Button>:null  
        }
        <div>
            
        </div>
        </Box>
    )
}

export default Inputs
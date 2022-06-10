import axios from "axios"


export const getPhone = (phone:any) => {
    const phones = {number:phone}
    const res = axios.post("https://test.api.yengilcredit.uz/sms/generate", phones )
    console.log(res);
}


export const addCode = async (mass:any) => {
    const phone = mass[0]
    const code = mass[1]
    console.log(phone, code);
    axios({
        url:`https://test.api.yengilcredit.uz/sms/validation/${code}`,
        method:"POST",
        headers:{
            "number":`${phone}`
        }
    })
    .then((res) => {console.log(res);})
    .catch((err) => {console.log(err);})
}

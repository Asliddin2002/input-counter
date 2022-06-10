import React, {useState} from 'react';
import './App.css';
// import Inputs from './components/InputField';
import { QueryClientProvider, QueryClient } from 'react-query';
import InputControl from './Input';
import Input from './RealProject/Input';



const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
      {/* <Inputs/> */}
      <Input/>
      {/* <InputControl/> */}
      {/* <h2>Login Form</h2>
      <form>
          <input onChange={(e:React.ChangeEventHandler<HTMLInputElement>) => setPhone(e.target.value)} 
          type="number" 
          name = "mobile" 
          placeholder='Mobile number' 
          required />
          <button type='submit'>Submit</button>
      </form>
      <h2>Enter the code</h2>
      <form>
      <input onChange={(e) => setCode(e.target.value) 
      type="number" 
      name = "otp" 
      placeholder='enter the code' 
      required />
          <button type='submit'>Submit</button>
      </form> */}
    </div>
    </QueryClientProvider>
    
  );
}

export default App;

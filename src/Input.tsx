import {useState} from 'react';

const InputControl = () => {
    const [firstName, setFirstName] = useState('');

    const handleNameChange = (event:any) => {
        setFirstName(event.target.value);
    };
    console.log(firstName);

    return (
        <div>
        <h2>Very long string</h2>
        <input
            maxLength={5}
            type="text"
            id="first_name"
            name="first_name"
            value={firstName}
            onChange={handleNameChange}
            onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
                }
            }
        }/>
        </div>
    );
};

export default InputControl;



// import {useState} from 'react';

// const InputControl = () => {
//     const [firstName, setFirstName] = useState('');

//     const handleNameChange = (event:any) => {
//         const limit = 6;

//         // 👇️ only take first N characters
//         setFirstName(event.target.value.slice(0, limit));
//     };

//     console.log(firstName);

//     return (
//         <div>
//         <h2>Very long string</h2>

//         <input
//             type="number"
//             id="first_name"
//             name="first_name"
//             value={firstName}
//             onChange={handleNameChange}
//         />
//         </div>
//     );
//     };

// export default InputControl;
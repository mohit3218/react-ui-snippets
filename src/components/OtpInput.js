import React, { useEffect, useRef, useState } from "react";

const OTP_DIGIT_INPUT = 5;

const OtpInput = () => {
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_INPUT).fill(""));
  const refArr = useRef([]);

  useEffect(()=> {
    refArr.current[0]?.focus();
  }, [])
  const handleInputChangeEvent = (value, index) => {
    if(isNaN(value)) return;

    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);

    setInputArr(newArr);
    value && refArr.current[index + 1]?.focus();
    console.log("newArr", newArr);
  }

  const handleOnKeyDownPress = (e, index) => {
    if(!e.target.value && e.key === "Backspace"){
      refArr.current[index - 1]?.focus();
    }
  }
  
  return (
    <>
      <div className="p-2 m-2 justify-center">
        <h1 className="text-3xl font-bold">Validate OTP</h1>
        {inputArr.map((input, index) => (
          <input
            key={index}
            type="text"
            value={inputArr[index]}
            ref={(input) => (refArr.current[index] = input)}
            onChange={(e) => handleInputChangeEvent(e.target.value, index)}
            className="border border-2 border-indigo-600 h-10 w-10 m-1 text-center text-2xl"
            onKeyDown={(e) => handleOnKeyDownPress(e, index)}
          />
        ))}
      </div>
      
    </>
  );
};

export default OtpInput;

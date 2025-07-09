import React, { useEffect, useRef, useState } from "react";

const OTP_DIGIT_INPUT = 5;

const OtpInput = () => {
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_INPUT).fill(""));
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleInputChangeEvent = (value, index) => {
    if (isNaN(value)) return;

    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);

    setInputArr(newArr);
    value && refArr.current[index + 1]?.focus();
  };

  const handleOnKeyDownPress = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };

  return (
    <div className="p-4 w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        Validate OTP
      </h1>
      <div className="flex flex-wrap justify-center gap-2">
        {inputArr.map((input, index) => (
          <input
            key={index}
            type="text"
            value={inputArr[index]}
            ref={(input) => (refArr.current[index] = input)}
            onChange={(e) => handleInputChangeEvent(e.target.value, index)}
            onKeyDown={(e) => handleOnKeyDownPress(e, index)}
            maxLength={1}
            className="border border-indigo-600 h-10 w-10 md:h-12 md:w-12 text-center text-xl md:text-2xl"
          />
        ))}
      </div>
    </div>
  );
};

export default OtpInput;

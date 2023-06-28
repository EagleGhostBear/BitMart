import React, { useState } from "react";

const GenderRadioButton = () => {
  const [gender, setGender] = useState("none");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div style={{ marginTop: '10px' }}>
        <label style={ labelStyle }>
          <input 
            style={ inputStyle }
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleGenderChange}
          />
          남자
        </label>
        <label style={ labelStyle } >
          <input 
            style={ inputStyle }
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderChange}
          />
          여자
        </label>
        <label style={ labelStyle }>
          <input 
            style={ inputStyle }
            type="radio"
            name="gender"
            value="none"
            checked={gender === "none"}
            onChange={handleGenderChange}
          />
          선택안함
        </label>
    </div>
  );
};

const labelStyle = {
  marginRight: "30px",
  marginLeft: "30px",
  marginTop: "20px"
};

const inputStyle = {
  accentColor: "purple",
  width: "23px",
  height: "23px",
  marginRight: "10px"
};

export default GenderRadioButton;
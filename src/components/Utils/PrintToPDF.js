import React from "react";
import styled from "styled-components";

const PrintToPDF = ({ onPrint }) => {
  return (
    <div className="print-to-pdf">
      <Button onClick={onPrint}>Print to PDF</Button>
    </div>
  );
}

const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }

  &:active {
    background-color: #45a049;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`

export default PrintToPDF;
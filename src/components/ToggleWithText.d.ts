import React from "react";
interface ToggleWithTextProps {
    options: string[];
    value: string;
    onChange: (val: string) => void;
}
declare const ToggleWithText: React.FC<ToggleWithTextProps>;
export default ToggleWithText;

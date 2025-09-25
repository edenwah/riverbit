import React from "react";
interface ToggleButtonProps {
    label: string;
    value: boolean;
    onChange: (val: boolean) => void;
}
declare const ToggleButton: React.FC<ToggleButtonProps>;
export default ToggleButton;

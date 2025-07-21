import * as React from "react";

import { AngleDownIcon, AngleUpIcon } from "@hopper-ui/icons-react16";

import "./select-input.scss";

export interface SelectInputProps extends React.ComponentProps<"div"> {
    /** Default value displayed in the Select Input */
    children?: React.ReactNode;
    /** True if the option list is displayed */
    isOpen?: boolean;
    /** Callback for when the clear button is clicked */
}

const SelectInput: React.FunctionComponent<SelectInputProps> = ({
    children,
    isOpen = false,
    ...rest
}: SelectInputProps) => {
    const chevronClass = "ids-select__input__chevron";

    return (
        <div className="ids-select__input" {...rest}>
            {children}
            <div className="ids-select__input-actions">
                {isOpen ? (
                    <AngleUpIcon className={chevronClass} size="sm" />
                ) : (
                    <AngleDownIcon className={chevronClass} size="sm" />
                )}
            </div>
        </div>
    );
};

export default SelectInput;

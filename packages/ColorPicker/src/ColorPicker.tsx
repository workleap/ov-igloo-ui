import * as React from "react";

import cx from "classnames";
import { FocusScope, mergeProps } from "react-aria";
import { Button, type ButtonProps, ListBox } from "react-aria-components";
import type { Selection } from "react-stately";

import Color from "@igloo-ui/color";
import Dropdown from "@igloo-ui/dropdown";
import Checkmark from "@igloo-ui/icons/dist/Checkmark";
import { useLocalizedStringFormatter } from "@igloo-ui/provider";

import ColorPickerOption from "./ColorPickerOption";
import intlMessages from "./intl";

import "./color-picker.scss";

export interface ColorNameItem {
    id: string;
    value: string;
    hoverColor: string;
    iconColor: string;
}

export const colorNames = [
    {
        id: "decorativeOption3",
        value: "var(--hop-decorative-option3-surface)",
        hoverColor: "var(--hop-decorative-option3-surface-hover)",
        iconColor: "var(--hop-decorative-option3-icon)"
    },
    {
        id: "decorativeOption6",
        value: "var(--hop-decorative-option6-surface)",
        hoverColor: "var(--hop-decorative-option6-surface-hover)",
        iconColor: "var(--hop-decorative-option6-icon)"
    },
    {
        id: "decorativeOption1",
        value: "var(--hop-decorative-option1-surface)",
        hoverColor: "var(--hop-decorative-option1-surface-hover)",
        iconColor: "var(--hop-decorative-option1-icon)"
    },
    {
        id: "decorativeOption8",
        value: "var(--hop-decorative-option8-surface)",
        hoverColor: "var(--hop-decorative-option8-surface-hover)",
        iconColor: "var(--hop-decorative-option8-icon)"
    },
    {
        id: "decorativeOption5",
        value: "var(--hop-decorative-option5-surface)",
        hoverColor: "var(--hop-decorative-option5-surface-hover)",
        iconColor: "var(--hop-decorative-option5-icon)"
    },
    {
        id: "decorativeOption4",
        value: "var(--hop-decorative-option4-surface)",
        hoverColor: "var(--hop-decorative-option4-surface-hover)",
        iconColor: "var(--hop-decorative-option4-icon)"
    },
    {
        id: "decorativeOption2",
        value: "var(--hop-decorative-option2-surface)",
        hoverColor: "var(--hop-decorative-option2-surface-hover)",
        iconColor: "var(--hop-decorative-option2-icon)"
    },
    {
        id: "decorativeOption7",
        value: "var(--hop-decorative-option7-surface)",
        hoverColor: "var(--hop-decorative-option7-surface-hover)",
        iconColor: "var(--hop-decorative-option7-icon)"
    }
] as const;

export type ColorName = typeof colorNames[number]["id"];

export interface ColorPickerProps {
    /** Add a specific class to the color picker */
    className?: string;
    /** Add a data-test tag for automated tests */
    dataTest?: string;
    /** Disables the color picker */
    disabled?: boolean;
    /** Callback when a color is selected */
    onSelect?: (color: ColorName) => void;
    /** The selected color */
    selectedColor?: ColorName;
}

const ColorPicker: React.FunctionComponent<ColorPickerProps> = ({
    className,
    dataTest,
    disabled = false,
    onSelect,
    selectedColor = "decorativeOption3"
}: ColorPickerProps) => {
    const stringFormatter = useLocalizedStringFormatter(intlMessages);

    const classes = cx("ids-color-picker", className);
    const [showPicker, setShowPicker] = React.useState(false);
    const selectedColorObject = colorNames.find(color => color.id === selectedColor);
    const selectedColorValue = selectedColorObject?.value;
    const selectedHoverColor = selectedColorObject?.hoverColor;

    const handleSelectionChange = (keys: Selection): void => {
        const color = (keys as Set<ColorName>).keys().next().value;

        if (onSelect && color) {
            onSelect(color);
        }
        setShowPicker(false);
    };

    return <div className={classes} data-test={dataTest}>
        <Dropdown
            key="colorPickerDropdown"
            role="menu"
            content={
                <FocusScope restoreFocus autoFocus>
                    <div className="ids-color-picker__content">

                        <ListBox
                            selectionMode="single"
                            selectedKeys={[selectedColor]}
                            onSelectionChange={handleSelectionChange}
                            items={colorNames}
                            aria-label={stringFormatter.format("colorOptions")}
                            orientation="horizontal"
                            className="ids-color-picker__list"
                            disallowEmptySelection
                            shouldFocusWrap
                        >
                            {item => {
                                return (
                                    <ColorPickerOption
                                        key={item.id}
                                        id={item.id}
                                        color={item.value}
                                        hoverColor={item.hoverColor}
                                        iconColor={item.iconColor}
                                        icon={<Checkmark size="small" />}
                                        size="large"
                                    />
                                );
                            }}
                        </ListBox>
                    </div>
                </FocusScope>
            }
            isOpen={showPicker}
            className="ids-action-menu__dropdown"
            onClose={() => setShowPicker(false)}
            renderReference={(
                refProps: React.HTMLProps<HTMLButtonElement>
            ) => {
                const mergedProps = mergeProps({ ...refProps,
                    "data-color": selectedColor }, {
                    onPress: () => {
                        setShowPicker(!showPicker);
                    },
                    className: "ids-color-picker__button",
                    isDisabled: disabled,
                    style: { "--ids-picker-selected-color-hover": selectedHoverColor } as React.CSSProperties
                }) as ButtonProps;

                return <Button
                    {...mergedProps}
                >
                    <Color color={selectedColorValue} size="medium" />
                </Button>;
            }
            }
        />
    </div>;
};

export default ColorPicker;

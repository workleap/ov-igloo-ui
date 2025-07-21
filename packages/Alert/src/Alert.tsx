import classNames from "classnames";
import * as React from "react";

import { DismissIcon } from "@hopper-ui/icons-react16";
import Button from "@igloo-ui/button";
import type { HyperlinkProps } from "@igloo-ui/hyperlink";
import IconButton, { type Size as IconButtonSize } from "@igloo-ui/icon-button";
import { useLocalizedStringFormatter } from "@igloo-ui/provider";
import intlMessages from "./intl";
import {
    CrownIcon,
    InfoIcon,
    SuccessIcon,
    WarningIcon
} from "./svgs";

import Hyperlink from "@igloo-ui/hyperlink";
import "./alert.scss";

export type Type = "announcement" | "info" | "premium" | "success" | "warning";

export type Appearance = "card" | "inline" | "horizontal";

export interface AlertButton {
    label: React.ReactNode;
    onClick: (e?: React.SyntheticEvent) => void;
    loading?: boolean;
}

export interface AlertProps extends Omit<React.ComponentProps<"div">, "title"> {
    /** The title of the alert */
    title?: React.ReactNode;
    /** The content to display inside the Alert */
    message?: React.ReactNode;
    /** Additional text to display at the top right of the Alert */
    metadata?: React.ReactNode;
    /** Change the type of the Alert */
    type: Type;
    /** Change the Alert appearance */
    appearance?: Appearance;
    /** Add a specific class to the Alert */
    className?: string;
    /** Set if the Alert can be closed by the user */
    closable?: boolean;
    /** Custom icon for alert (Use 'null' to have no icon) */
    icon?: React.ReactElement | null;
    /** Action on Alert close button click */
    onClose?: () => void;
    /** Alert button */
    button?: AlertButton;
    /** Add a data-test tag for automated tests */
    dataTest?: string;
    /** Alert Link. Used in place of the button */
    link?: HyperlinkProps;
}

const renderIcon = (
    style: Appearance,
    hasButton: boolean,
    type: Type,
    icon?: React.ReactElement,
): JSX.Element => {
    const classes = classNames("ids-alert__icon", `ids-alert__icon--${style}`, {
        "ids-alert__icon--small-top": hasButton,
        "ids-alert__icon--medium-centered": !hasButton
    });

    return (
        <div className={classes}>
            {icon || (
                <>
                    {type === "announcement" && <InfoIcon />}
                    {type === "info" && <InfoIcon />}
                    {type === "premium" && <CrownIcon />}
                    {type === "success" && <SuccessIcon />}
                    {type === "warning" && <WarningIcon />}
                </>
            )}
        </div>
    );
};

const renderDismissButton = (
    setShow: (show: boolean) => void,
    size: IconButtonSize = "xsmall",
    onDismissClick?: () => void,
    ariaLabel?: string
): JSX.Element => {
    const action = (): void => {
        if (onDismissClick) {
            onDismissClick();
        }

        setShow(false);
    };

    return (
        <IconButton
            appearance={{ type: "ghost", variant: "secondary" }}
            className="ids-alert__dismiss-btn"
            type="button"
            size={size}
            icon={<DismissIcon size="sm" />}
            onClick={action}
            aria-label={ariaLabel}
        />
    );
};

const renderAlertActionButton = (
    button?: AlertButton,
): JSX.Element => {
    if (button == null || button.onClick == null || button.label == null) {
        return <></>;
    }

    return (
        <Button
            appearance="secondary"
            size="small"
            onClick={button.onClick}
            loading={button.loading}
            className="ids-alert__action-btn"
        >
            {button.label}
        </Button>
    );
};

const renderAlertActionLink = (
    link?: HyperlinkProps
): JSX.Element => {
    if (link == null || link.children == null) {
        return <></>;
    }

    return (
        <Hyperlink
            appearance={link.appearance ?? "secondary"}
            size={link.size ?? "small"}
            className={classNames(link.className, "ids-alert__action-btn")}
        >
            {link.children}
        </Hyperlink>
    );
};

const Alert: React.FunctionComponent<AlertProps> = ({
    title,
    message,
    metadata,
    type,
    appearance = "card",
    className,
    closable = appearance !== "horizontal",
    icon,
    onClose,
    button,
    dataTest,
    link,
    ...rest
}: AlertProps) => {
    const stringFormatter = useLocalizedStringFormatter(intlMessages);
    const classes = classNames(
        "ids-alert",
        `ids-alert--${appearance}`,
        `ids-alert--${type}`,
        className
    );

    const parentElement = React.useRef<HTMLDivElement>(null);
    const [show, setShow] = React.useState(true);
    const hasButton = button !== undefined;
    const hasLink = link !== undefined;
    const isHorizontal = appearance === "horizontal";
    const canBeClosed = closable;

    if (show) {
        return (
            <div
                className={classes}
                ref={parentElement}
                data-test={dataTest}
                {...rest}
            >
                {icon !== null && !isHorizontal && renderIcon(appearance, hasButton || hasLink, type, icon)}
                <div className="ids-alert__body">
                    <div className="ids-alert__header">
                        <p className="ids-alert__title">{title}</p>
                        <p className="ids-alert__metadata">{metadata}</p>
                    </div>
                    {!isHorizontal && <div className="ids-alert__content">{message}</div>}
                    {hasLink && renderAlertActionLink(link)}
                    {hasButton && renderAlertActionButton(button)}
                </div>

                {canBeClosed && renderDismissButton(setShow,
                                                    isHorizontal ? "medium" : "xsmall",
                                                    onClose,
                                                    stringFormatter.format("close"))}
            </div>
        );
    }

    return null;
};

export default Alert;

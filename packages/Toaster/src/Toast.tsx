import { useToast } from "@react-aria/toast";
import type { QueuedToast, ToastState } from "@react-stately/toast";
import cx from "classnames";
import * as React from "react";

import Close from "@igloo-ui/icons/dist/Close";
import RemoveSolid from "@igloo-ui/icons/dist/RemoveSolid";
import SuccessSolid from "@igloo-ui/icons/dist/SuccessSolid";
import type { ToastArgs } from "./Toaster";

export interface ToastProps<T> {
    /** The toast state used by react-aria */
    state: ToastState<T>;
    /** The toast to render */
    toast: QueuedToast<T>;
}

const Toast: React.FunctionComponent<ToastProps<ToastArgs>> = ({
    state,
    toast
}: ToastProps<ToastArgs>) => {
    const error = toast.content.status === "error";
    const duration = toast.timeout;
    const { message, isClosable } = toast.content;
    const toastRef = React.useRef<HTMLOutputElement>(null);
    const { toastProps, titleProps, closeButtonProps } = useToast(
        { toast },
        state,
        toastRef
    );

    delete closeButtonProps.onPress;

    React.useEffect(() => {
        if (duration !== undefined) {
            toastRef.current?.style.setProperty("--duration", `${duration}ms`);
        }
    }, [duration, toastRef]);

    const statusIcon = !error ? (
        <SuccessSolid className="ids-toast__icon" />
    ) : (
        <RemoveSolid className="ids-toast__icon" />
    );

    const classes = cx("ids-toast", {
        "ids-toast--error": error,
        "ids-toast--reduce-motion": duration === undefined
    });

    const toastElem = (
        <output
            {...toastProps}
            ref={toastRef}
            className={classes}
            data-animation={toast.animation}
            onAnimationEnd={() => {
                // Remove the toast when the exiting animation completes.
                if (toast.animation === "exiting") {
                    state.remove(toast.key);
                }
            }}
        >
            <div {...titleProps} className="ids-toast__title">
                {statusIcon} {message}
            </div>
            {isClosable && (
                <button
                    {...closeButtonProps}
                    onClick={() => {
                        state.close(toast.key);
                    }}
                    className="ids-toast__close-button"
                >
                    <Close size="medium" />
                </button>
            )}
            <div
                className="ids-toast__progress-indicator"
                onAnimationEnd={e => {
                    e.stopPropagation();
                }}
            />
        </output>
    );

    return toastElem;
};
export default Toast;

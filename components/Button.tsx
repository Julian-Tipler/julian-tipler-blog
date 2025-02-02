import classNames from "classnames";
import { forwardRef } from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ loading = false, children, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        disabled={loading || props.disabled}
        className={classNames(
          props.className,
          "flex items-center justify-center text-white bg-brand hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 outline-none",
          {
            loading: "opacity-50",
          }
        )}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-white "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

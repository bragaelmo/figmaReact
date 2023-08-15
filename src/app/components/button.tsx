import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = ComponentProps<'button'> & {
    className?: string;
    glowed ?: boolean;
    icon ?: string;
    sidebar ?: boolean;
    function?: any;
    fullWidth?: boolean;
    pattern: number;
}
export default function Button({ className, glowed, ...props } : ButtonProps){
    return (
        <div>
            {
                props.pattern == 1 ?
                <button  onClick={props.function ? props.function : undefined} className={twMerge(`bg-bgGreen text-textPrimary hover:text-textSecondary hover:bg-bgGreen/80 transition-all duration-300 p-2 rounded-2xl ${glowed ? "shadow-pattern" : ""} ${props.sidebar ? "w-10/12 bg-backgroundSecondary text-start pl-8 mt-4" : ""} ${props.fullWidth ? "w-full" : ""}`, className)}>
                {props.icon &&
                
                <i className={`${props.icon ? `fa-solid fa-${props.icon}` : ""} mx-auto my-auto text-md mr-2 text-danger`}></i>
                }
                {props.children}
                </button>
                :
                <button  onClick={props.function ? props.function : undefined} className={twMerge(`bg-buttonBg bg-cover text-textPrimary hover:text-textSecondary transition-all duration-300 p-2 rounded-2xl ${glowed ? "shadow-pattern" : ""} ${props.sidebar ? "w-10/12 bg-backgroundSecondary text-start pl-8 mt-4" : ""} ${props.fullWidth ? "w-full" : ""}`, className)}>
                {props.icon &&
                
                <i className={`${props.icon ? `fa-solid fa-${props.icon}` : ""} mx-auto my-auto text-md mr-2 text-danger`}></i>
                }
                {props.children}
                </button>
            }
            
        </div>
    )
}
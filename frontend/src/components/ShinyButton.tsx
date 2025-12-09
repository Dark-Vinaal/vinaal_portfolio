import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes, MouseEventHandler } from 'react';

type ButtonBaseProps = {
    children: ReactNode;
    className?: string;
    icon?: ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: never;
    };

type ButtonAsAnchor = ButtonBaseProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
    };

type ShinyButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function ShinyButton({
    children,
    className = '',
    icon,
    href,
    onClick,
    ...props
}: ShinyButtonProps) {
    const content = (
        <div className="relative flex items-center justify-center gap-2 px-8 py-4 bg-zinc-950 rounded-full overflow-hidden transition-all duration-300 group-hover:bg-zinc-900 group-active:scale-95">
            {/* Animated gradient background border effect */}
            <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent translate-x-[-100%] group-hover:animate-shine" />

            {/* Inner glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(106,17,203,0.3),transparent_70%)]" />

            {/* Text content */}
            <span className="relative z-10 font-semibold text-white tracking-wide group-hover:text-cyan-100 transition-colors">
                {children}
            </span>

            {/* Icon */}
            {icon && (
                <span className="relative z-10 text-white group-hover:translate-x-1 transition-transform duration-300">
                    {icon}
                </span>
            )}
        </div>
    );

    const containerClasses = `
    group relative inline-block p-[1px] rounded-full overflow-hidden
    bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600
    bg-[length:200%_100%] animate-gradient-xy
    hover:shadow-[0_0_20px_rgba(37,117,252,0.5)]
    transition-shadow duration-300
    ${className}
  `;

    if (href) {
        return (
            <a
                href={href}
                className={containerClasses}
                {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
                onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            onClick={onClick as MouseEventHandler<HTMLButtonElement>}
            className={containerClasses}
            {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {content}
        </button>
    );
}

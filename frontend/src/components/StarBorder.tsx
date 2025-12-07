import type { CSSProperties, ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';

type StarBorderProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: ReactNode;
    color?: string;
    speed?: CSSProperties['animationDuration'];
    thickness?: number;
};

const StarBorder = <T extends ElementType = 'button'>({
    as,
    className = '',
    color = 'white',
    speed = '6s',
    thickness = 1,
    children,
    ...rest
}: StarBorderProps<T>) => {
    const Component = as || 'button';

    return (
        <>
            <style>{`
        @keyframes star-movement-bottom {
          0% { transform: translate(0%, 0%); opacity: 1; }
          100% { transform: translate(-100%, 0%); opacity: 0; }
        }
        @keyframes star-movement-top {
          0% { transform: translate(0%, 0%); opacity: 1; }
          100% { transform: translate(100%, 0%); opacity: 0; }
        }
        .animate-star-movement-bottom {
          animation: star-movement-bottom linear infinite alternate;
        }
        .animate-star-movement-top {
          animation: star-movement-top linear infinite alternate;
        }
      `}</style>
            <Component
                className={`relative inline-block overflow-hidden rounded-[20px] ${className}`}
                {...(rest as any)}
                style={{
                    padding: `${thickness}px 0`,
                    ...(rest as any).style
                }}
            >
                <div
                    className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
                    style={{
                        background: `radial-gradient(circle, ${color}, transparent 10%)`,
                        animationDuration: speed
                    }}
                ></div>
                <div
                    className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
                    style={{
                        background: `radial-gradient(circle, ${color}, transparent 10%)`,
                        animationDuration: speed
                    }}
                ></div>
                <div className="relative z-1 bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-center text-[16px] py-[16px] px-[26px] rounded-[20px]">
                    {children}
                </div>
            </Component>
        </>
    );
};

export default StarBorder;

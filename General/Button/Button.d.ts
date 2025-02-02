import { default as React } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
export interface ButtonProps {
    type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
    shape?: 'default' | 'circle' | 'round';
    size?: 'small' | 'middle' | 'large';
    disabled?: boolean;
    loading?: boolean;
    block?: boolean;
    danger?: boolean;
    ghost?: boolean;
    gradient?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'start' | 'end';
    label?: string;
    htmlType?: 'submit' | 'reset' | 'button';
    href?: string;
    target?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const Button: React.FC<ButtonProps>;
//# sourceMappingURL=Button.d.ts.map
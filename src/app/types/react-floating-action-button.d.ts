// src/types/react-floating-action-button.d.ts
declare module 'react-floating-action-button' {
    import * as React from 'react';

    export interface FloatingMenuProps {
        slideSpeed?: number;
        direction?: 'up' | 'down' | 'left' | 'right';
        spacing?: number;
        isOpen?: boolean;
        children?: React.ReactNode; // children 속성 추가
    }

    export class FloatingMenu extends React.Component<FloatingMenuProps> {}

    export interface MainButtonProps {
        iconResting: React.ReactNode;
        iconActive: React.ReactNode;
        backgroundColor?: string;
        onClick?: () => void;
        size?: number;
        children?: React.ReactNode; // children 속성 추가
    }

    export class MainButton extends React.Component<MainButtonProps> {}

    export interface ChildButtonProps {
        icon: React.ReactNode;
        backgroundColor?: string;
        onClick?: () => void;
        size?: number;
        children?: React.ReactNode; // children 속성 추가
    }

    export class ChildButton extends React.Component<ChildButtonProps> {}
}

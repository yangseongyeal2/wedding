// components/SizedBox.tsx

import React from 'react';

interface SizedBoxProps {
    width?: number;
    height?: number;
}

const SizedBox: React.FC<SizedBoxProps> = ({ width, height }) => {
    return <div style={{ width: width ?? 'auto', height: height ?? 'auto' }} />;
};

export default SizedBox;

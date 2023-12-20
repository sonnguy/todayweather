import { StyledIcon } from './style';

interface IIconProps {
    name: string;
    size: number;
}

const Icon = ({ name, size }: IIconProps) => {
    const iconCoordinates: any = {
        'sunny': { x: 0, y: 20 },
        'windy': { x: 24, y: 0 },
        'cloudy': { x: 3, y: 305 },
    };

    const { x, y } = iconCoordinates[name];

    return <StyledIcon size={size} x={x} y={y} />;
};

export default Icon;
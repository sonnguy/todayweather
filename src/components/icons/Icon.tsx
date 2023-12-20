import { StyledIcon } from './style';

interface IIconProps {
    name: string;
    size: number;
}

const Icon = ({ name, size }: IIconProps) => {
    const iconCoordinates: any = {
        'drizzle': { x: 362, y: 160 },
        'thunderstorm': { x: 146, y: 305 },
        'clouds': { x: 3, y: 305 },
        'rain': { x: 362, y: 235 },
        'snow': { x: 2, y: 90 },
        'atmosphere': { x: 290, y: 15 },
        'clear': { x: 70, y: 15 },
    };

    const coordinates = iconCoordinates[name];

    if (!coordinates) {
        // set default value if coordinates undefined 
        return <StyledIcon size={size} x={3} y={305} />;
    }

    const { x, y } = coordinates;

    return <StyledIcon size={size} x={x} y={y} />;
};

export default Icon;
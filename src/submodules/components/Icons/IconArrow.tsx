import { IconProps } from "./types";

export const IconArrow = ({ width = 12, height = 7, fill = '#2F3A4B', viewBox = "0 0 12 7", alt }: IconProps) => {
    return <svg aria-details={alt} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.8529 0.645894C12.0485 0.840807 12.0491 1.15739 11.8542 1.353L6.3892 6.83748C6.17426 7.0532 5.82495 7.0532 5.61 6.83748L0.14502 1.353C-0.0498943 1.15739 -0.0493298 0.840808 0.146279 0.645894C0.341889 0.45098 0.658471 0.451544 0.853385 0.647153L5.9996 5.81173L11.1458 0.647153C11.3407 0.451543 11.6573 0.45098 11.8529 0.645894Z" fill={fill} />
    </svg>

}
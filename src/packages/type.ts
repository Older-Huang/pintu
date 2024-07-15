export type JigsawOptionType = {
    img?: string | SVGAElement | URL;
    row?: number;
    col?: number;
}

export interface JigsawProps extends JigsawOptionType {
    option?: JigsawOptionType;
}

export type BlockInfoArrType = {
    left: number;
    top: number;
    currLeft: number;
    currTop: number;
}[];

export type BlockType = {
    width: number;
    height: number;
    background: string;
    left: number;
    top: number;
    backgroundSize: string;
    display: string;
    border: string;
};

export interface BlockProps {
    click?: () => void;
    options: {
        width: number;
        height: number;
        background: string;
        left: number;
        top: number;
        backgroundSize: string;
        display: string;
        border: string;
    }
};

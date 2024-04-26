const responsiveImgAttrs = (srcs, sizes, widths, defaultSize, className = "", alt = "", heights = []) => {
    const dimensions = widths.map((width, index) => ({
        width,
        height: heights[index] || undefined,
        default: width === defaultSize
    }));

    const srcset = srcs.map((src, index) => `${src} ${dimensions[index].width}w`).join(', ');

    const defaultDimensionIndex = dimensions.findIndex(({ default: isDefault }) => isDefault);
    const defaultDimension = dimensions[defaultDimensionIndex];
    const src = defaultDimension ? srcs[defaultDimensionIndex] : '';
    const height = defaultDimension ? defaultDimension.height : undefined;
    
    return {
        src,
        sizes,
        srcset,
        dimensions,
        alt,
        class: className,
        height
    };
};

export default responsiveImgAttrs;
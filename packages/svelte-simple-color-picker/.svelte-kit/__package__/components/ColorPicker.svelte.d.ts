type $$ComponentProps = {
    value?: string;
    showAlpha?: boolean;
    onChange?: (hex: string) => void;
};
declare const ColorPicker: import("svelte").Component<$$ComponentProps, {}, "">;
type ColorPicker = ReturnType<typeof ColorPicker>;
export default ColorPicker;

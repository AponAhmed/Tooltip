import Tooltip from "./src/Tooltip";

export const tooltip = function (selector = ".tooltip", options = {}) {
    const items = document.querySelectorAll(selector);
    items.forEach((element) => {
        const position = element.dataset.position || options.position || 'right';
        const text = element.title || options.text || 'Tooltip Content';
        const tooltipOptions = {
            item: element,
            position: position,
            text: text,
            bg: options.bg || '#1a1f30',
            color: options.color || '#fff'
        };
        new Tooltip(tooltipOptions);
    });
}

export default Tooltip;


import Tooltip from "./src/Tooltip";

export function tooltip(selector = ".tooltip", options = {}) {
    document.addEventListener("DOMContentLoaded", function () {
        const items = document.querySelectorAll(selector);

        items.forEach((element) => {
            const position = element.dataset.position || options.position || 'right';
            const text = element.dataset.title || options.text || 'Tooltip Content';            
            const tooltipOptions = {
                item: element,
                position: position,
                text: text,
                bg: options.bg || '#1a1f30',
                color: options.color || '#fff'
            };
            const tooltip = new Tooltip(tooltipOptions);
        });
    });
}


export default Tooltip;


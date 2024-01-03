import "./tooltip.css";

export default class Tooltip {
    constructor({ ...args }) {
        this.item = args.item || {};
        this.position = args.position || 'right';
        this.text = args.text || false;
        this.bg = args.bg || "#1a1f30";
        this.color = args.color || "#fff";
        this.init();
        this.exrect = {};
        this.extraMargin = 10;
    }

    init() {
        this.tooltip = document.createElement('div');
        this.tooltip.classList.add('tooltip-container');

        this.tooltipTitle = document.createElement('div');
        this.tooltipTitle.classList.add('tooltip-title');

        this.tooltipArrow = document.createElement('span');
        this.tooltipArrow.classList.add('tooltip-arrow');

        this.tooltip.appendChild(this.tooltipArrow);
        this.tooltip.appendChild(this.tooltipTitle);

        this.item.addEventListener('mouseover', (e) => {
            this.showTooltip(this.item, e);
        });

        this.item.addEventListener('mouseout', () => {
            this.removeTooltip();
        });
    }

    removeTooltip() {
        let tooltip = document.querySelector('.tooltip-container');
        if (tooltip) {
            tooltip.remove();
        }
    }

    positionSet(item) {
        if (!this.position) {
            if (item.hasAttribute('data-position')) {
                // data attribute doesn't exist
                this.position = item.dataset.position;
            }
        }

        this.tooltipArrow.removeAttribute('class');
        this.tooltipArrow.removeAttribute('style');
        this.tooltipArrow.classList.add('tooltip-arrow');

        if (this.position === 'right') {
            this.tooltipArrow.style.borderRightColor = this.bg;
            this.tooltip.style.left = this.exrect.left + this.exrect.width + this.extraMargin + 'px';
            this.tooltipArrow.classList.add('arrow-left');
            let cntrT = (this.exrect.height - this.tooltipRect.height) / 2;
            this.tooltip.style.top = this.exrect.top + cntrT + 'px';
        } else if (this.position === 'left') {
            this.tooltipArrow.style.borderLeftColor = this.bg;
            this.tooltip.style.left = this.exrect.left - (this.tooltipRect.width + this.extraMargin) + 'px';
            this.tooltipArrow.classList.add('arrow-right');
            let cntrT = (this.exrect.height - this.tooltipRect.height) / 2;
            this.tooltip.style.top = this.exrect.top + cntrT + 'px';

        } else if (this.position === 'top') {
            this.tooltipArrow.style.borderTopColor = this.bg;
            this.tooltipArrow.classList.add('arrow-bottom');
            let top = this.exrect.top - (this.exrect.height + this.extraMargin);
            let left = this.exrect.left + ((this.exrect.width - this.tooltipRect.width) / 2);
            this.tooltip.style.top = top + 'px';
            this.tooltip.style.left = left + 'px';
        } else {
            this.tooltipArrow.style.borderBottomColor = this.bg;
            this.tooltipArrow.classList.add('arrow-top');
            let top = this.exrect.top + (this.exrect.height + this.extraMargin);
            let left = this.exrect.left + ((this.exrect.width - this.tooltipRect.width) / 2);
            this.tooltip.style.top = top + 'px';
            this.tooltip.style.left = left + 'px';
        }
    }

    colorSet(item) {
        if (item.hasAttribute('data-bg')) {
            this.bg = item.dataset.bg;
        } else {
            this.bg = '#1a1f30';
        }
        this.tooltip.removeAttribute('style');
        this.tooltip.style.backgroundColor = this.bg;
    }

    showTooltip(item, e) {
        if (!this.text) {
            this.text = item.title;
        }
        this.tooltipTitle.innerHTML = this.text;
        this.exrect = item.getBoundingClientRect();
        document.body.appendChild(this.tooltip);
        this.colorSet(item);
        this.tooltipRect = this.tooltip.getBoundingClientRect();
        this.positionSet(item);
    }

    all(selector = ".tooltip") {
        this.items = document.querySelectorAll(selector);
        this.items.forEach((item) => {
            this.item = item;
            this.item.addEventListener('mouseover', (e) => {
                let citem = item;
                this.showTooltip(citem, e);
            });
            this.item.addEventListener('mouseout', () => {
                this.removeTooltip();
            });
        });
    }
}

export const Component = {

    renderTo(element) {
        const initial = element.innerHTML === '';
        element.innerHTML = '';
        element.appendChild(this.renderedEl());
        if (initial) {
            this.bindEvents(element);
        }
    },

    renderedEl() {
        return document.importNode(this.template().content, true);
    },

    template() {
        const el = document.createElement('template');
        el.innerHTML = this.getHTML();
        return el;
    },

};

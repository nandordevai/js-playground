export const Component = {
    html: '',

    renderTo(element) {
        element.innerHTML = '';
        element.appendChild(this.renderedEl());
    },

    renderedEl() {
        return document.importNode(this.template().content, true);
    },

    template() {
        const el = document.createElement('template');
        el.innerHTML = this.html;
        return el;
    }
}

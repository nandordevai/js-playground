import { html } from '/lib.js';
import { Component } from '/components/component.js';

export const Todo = {...Component, 

    cssClass: 'todo',

    data: {
        items: [
        {
            id: 0,
            text: 'one',
            finished: true,
        },
        {
            id: 1,
            text: 'two',
            finished: false,
        },
        ],
    },

    bindEvents(element) {
        element.addEventListener('click', (event) => {
            const el = event.target;
            if (el.classList.contains(`${this.cssClass}__item`)) {
                const item = this.data.items.find(_ => _.id === this.getNumericId(el.id));
                item.finished = !item.finished;
                this.renderTo(element);
            }
        });
    },

    getHTML() {
        return html`
        <h1>Todo</h1>
        <ul class="${this.cssClass}">
            ${this.items()}
        </ul>
        `;
    },

    items() {
        return this.data.items.map(_ => this.item(_));
    },

    getNumericId(id) {
        return parseInt(id.split('_')[2]);
    },

    getUID(id) {
        return `${this.cssClass}_item_${id}`;
    },

    item(data) {
        return html`
        <li
            id="${this.getUID(data.id)}"
            class="${this.cssClass}__item
            ${data.finished ? `${this.cssClass}__item--finished` : ''}"
        >${data.text}</li>`;
    },

};


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
            if (event.target.classList.contains(`${this.cssClass}__item`)) {
                event.target.classList.toggle(`${this.cssClass}__item--finished`);
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

    item(data) {
        return html`<li id="${data.id}" class="${this.cssClass}__item ${data.finished ? 'finished' : ''}">${data.text}</li>`;
    },
};


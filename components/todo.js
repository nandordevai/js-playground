import { html } from '/lib.js';
import { Component } from '/components/component.js';

export const Todo = {...Component, 
    data: {
        items: [
        {
            text: 'one',
            finished: true,
        },
        {
            text: 'two',
            finished: false,
        },
        ],
    },

    getHTML() {
        return html`
        <h1>Todo</h1>
        <ul>
            ${this.items()}
        </ul>
        `;
    },

    items() {
        return this.data.items.map(_ => this.item(_));
    },

    item(data) {
        return html`<li class="${data.finished ? 'finished' : ''}">${data.text}</li>`;
    },
};


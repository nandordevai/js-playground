import { html } from '/lib.mjs';
import { Component } from '/components/component.mjs';

export const Todo = () => {
    return Object.assign({}, Component, {
        html: html`
        <h1>Todo</h1>
        `,
    });
};

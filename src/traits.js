import { traitStringId } from './utils';

export default (editor) => {
    editor.TraitManager.addType(traitStringId, {
        createInput({ component }) {
            return `<textarea>${
                component.get('strings').join('\n')
            }</textarea>`
        },

        // onEvent({ component, event }) {
        //     const value = event.target.value;
        //     console.log({ value });
        //     component.get('strings');
        // },
    });
}
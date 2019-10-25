import { traitStringId } from './utils';

export default (editor) => {
    editor.TraitManager.addType(traitStringId, {
        createInput({ component }) {
            return `<textarea>${component.get('strings').join('\n')}</textarea>`;
        },

        onUpdate({ component, elInput }) {
            elInput.value = component.get('strings').join('\n');
        }
    });
}
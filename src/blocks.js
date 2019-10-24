import { cmpId } from './utils';

export default (editor, opts = {}) => {
  const bm = editor.BlockManager;
  const { block } = opts;

  block && bm.add(cmpId, {
    label: 'Typed',
    content: { type: cmpId },
    ...block,
  });
}

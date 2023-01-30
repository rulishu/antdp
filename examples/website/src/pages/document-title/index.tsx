import str from '@antdp/document-title/README.md';
import Markdown from '../../components/Preview';

export default function Pages() {
  return (
    <Markdown
      {...str}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/document-title/README.md"
    />
  );
}
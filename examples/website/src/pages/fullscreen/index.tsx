import str from '@antdp/fullscreen/README.md';
import Markdown from '../../components/Preview';

export default function Pages() {
  return (
    <Markdown
      {...str}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/fullscreen/README.md"
    />
  );
}
import special from '../groups/special';
import positioning from '../groups/positioning';
import boxModel from '../groups/boxModel';
import typography from '../groups/typography';
import visual from '../groups/visual';
import animation from '../groups/animation';
import misc from '../groups/misc';

const configCreator = ({
  'border-in-box-model': borderInBoxModel = false,
  'empty-line-between-groups': emptyLineBetweenGroups = false,
} = {}) =>
  [
    ['Special', special],
    ['Positioning', positioning],
    ['Box Model', boxModel({ border: borderInBoxModel })],
    ['Typography', typography],
    ['Visual', visual({ border: !borderInBoxModel })],
    ['Animation', animation],
    ['Misc', misc],
  ].map(([groupName, properties]) => ({
    emptyLineBefore: emptyLineBetweenGroups ? 'always' : 'never',
    properties,
    groupName,
  }));

export default configCreator;

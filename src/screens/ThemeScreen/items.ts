import { ImageSourcePropType } from 'react-native';
import { ThemeKeysProps } from '~/styles/themes';

import empire from '~/assets/images/symbols/empire.png';
import jediOrder from '~/assets/images/symbols/jedi-order.png';
import mandalorian from '~/assets/images/symbols/mandalorian.png';
import oldRepublic from '~/assets/images/symbols/old-republic.png';
import rebelAlliance from '~/assets/images/symbols/rebel-alliance.png';

export type ItemTypes = {
  id: string;
  name: string;
  theme: ThemeKeysProps;
  icon: ImageSourcePropType;
};

export const items: ItemTypes[] = [
  {
    id: '1',
    name: 'Império Galáctico',
    theme: 'empire',
    icon: empire,
  },
  {
    id: '2',
    name: 'Ordem Jedi',
    theme: 'jedi',
    icon: jediOrder,
  },
  {
    id: '3',
    name: 'Mandaloriano',
    theme: 'mandalorian',
    icon: mandalorian,
  },
  {
    id: '4',
    name: 'Velha República',
    theme: 'old',
    icon: oldRepublic,
  },
  {
    id: '5',
    name: 'Aliança Rebelde',
    theme: 'alliance',
    icon: rebelAlliance,
  },
];

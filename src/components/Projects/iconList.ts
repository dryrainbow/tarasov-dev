import npmIcon from '../../assets/icons/npm.svg';
import extensionIcon from '../../assets/icons/extension.svg';
import pwaIcon from '../../assets/icons/pwa.svg';
import githubIcon from '../../assets/icons/github.svg';

export class Icon {
  src: string;
  offsets: {
    x: number;
    y: number;
  }
  scale: number;

  git: boolean;
  npm: boolean;

  constructor(props: {
    src: string;
    offsets?: {
      x?: number;
      y?: number;
    },
    scale?: number;

    git?: boolean;
    npm?: boolean;
  }) {
    this.src = props.src
    this.offsets = {
      x: props.offsets?.x ?? 0,
      y: props.offsets?.y ?? 0
    }
    this.scale = props.scale ?? 1
    
    this.git = !!props.git
    this.npm = !!props.npm
  }
}

export const npm = new Icon({
  src: npmIcon,
  offsets: { y: 3 },
  scale: .8,
  npm: true
})

export const extension = new Icon({
  src: extensionIcon,
})

export const pwa = new Icon({
  src: pwaIcon,
  scale: .8
})

export const github = new Icon({
  src: githubIcon,
  git: true
})


import { Dimensions } from 'react-native';

const sizes = {
  xs: {
    contentSize: {
      width: '60%',
      maxWidth: '280',
    },
  },
  sm: {
    contentSize: {
      width: '65%',
      maxWidth: '320',
    },
  },
  md: {
    contentSize: {
      width: '75%',
      maxWidth: '380',
    },
  },
  lg: {
    contentSize: {
      width: '80%',
      maxWidth: '520',
    },
  },
  xl: {
    contentSize: {
      width: '90%',
      maxWidth: '580',
    },
  },
  full: {
    contentSize: {
      width: '100%',
    },
  },
};

export const Modal = {
  baseStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    _web: { pointerEvents: 'box-none' },
    _backdropFade: { exitDuration: 150, entryDuration: 200 },
    _slide: { overlay: false, duration: 200 },
    _fade: { exitDuration: 100, entryDuration: 200 },
  },
  sizes,
  defaultProps: {
    size: 'md',
    closeOnOverlayClick: true,
  },
};

export const ModalContent = {
  baseStyle: () => {
    return {
      shadow: 1,
      rounded: 'lg',
      maxHeight: `${Dimensions.get('window').height - 150}px`,
      overflow: 'hidden',
      _light: {
        bg: 'muted.50',
        _text: {
          color: 'text.900',
        },
      },
      _dark: {
        bg: 'muted.800',
        _text: {
          color: 'text.50',
        },
      },
    };
  },
};
export const ModalCloseButton = {
  baseStyle: () => {
    return {
      position: 'absolute',
      right: '3',
      top: '3',
      zIndex: '1',
      colorScheme: 'coolGray',
      p: '2',
      _icon: {
        size: '4',
      },
      _light: {
        _icon: {
          color: 'muted.500',
        },
        _hover: {
          bg: 'muted.200',
        },
      },
      _dark: {
        _icon: {
          color: 'muted.400',
        },
        _hover: {
          bg: 'muted.700',
        },
      },
    };
  },
};
export const ModalHeader = {
  baseStyle: () => {
    return {
      p: '4',
      borderBottomWidth: '1',
      _text: {
        fontSize: 'md',
        fontWeight: 'semibold',
        lineHeight: 'sm',
      },
      _light: {
        bg: 'muted.50',
        borderColor: 'muted.300',
        _text: {
          color: 'text.900',
        },
      },
      _dark: {
        bg: 'muted.800',
        borderColor: 'muted.700',
        _text: {
          color: 'text.50',
        },
      },
    };
  },
};
export const ModalBody = {
  baseStyle: () => {
    return {
      p: '4',
      _light: {
        _text: {
          color: 'text.900',
        },
      },
      _dark: {
        _text: {
          color: 'text.50',
        },
      },
    };
  },
};
export const ModalFooter = {
  baseStyle: () => {
    return {
      p: '4',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      borderTopWidth: 1,
      _light: {
        bg: 'muted.50',
        borderColor: 'muted.300',
      },
      _dark: {
        bg: 'muted.800',
        borderColor: 'muted.700',
      },
    };
  },
};
export const ModalOverlay = {
  baseStyle: {
    position: 'absolute',
    left: '0',
    top: '0',
    opacity: '50',
    right: '0',
    bottom: '0',
  },
};

import invertColor from '../utilities/invertColor'
import toRgba from '../utilities/toRgba'

export default ({
  background = 'hsl(0, 0%, 96%)',
  black = 'hsl(0, 0%, 4%)',
  border = 'hsl(0, 0%, 8%)',
  greyDark = 'hsl(0, 0%, 29%)',
  link = 'hsl(217, 71%, 53%)',
  linkInvert = null,
  radius = '4px',
  white = 'hsl(0, 0%, 100%)',
}) => ({
  dropdown: ({
    paddingBottom = '4px',
  }) => ({
    display: 'inline-flex',
    position: 'relative',
    verticalAlign: 'top',

    '&.m8--is-active, &.m8--is-hoverable:hover': {
      '.m8--dropdown-menu': {
        display: 'block',
      },
    },

    '&.m8--is-right': {
      '.m8--dropdown-menu': {
        left: 'auto',
        right: 0,
      },
    },

    '&.m8--is-up': {
      '.m8--dropdown-menu': {
        bottom: '100%',
        paddingBottom,
        paddingTop: 'initial',
        top: 'auto',
      },
    },
  }),

  dropdownMenu: ({
    paddingTop = '4px',
    zIndex = 20,
  }) => ({
    display: 'none',
    left: '0',
    minWidth: '12rem',
    paddingTop,
    position: 'absolute',
    top: '100%',
    zIndex,
  }),

  dropdownContent: ({
    backgroundColor = white,
    borderRadius = radius,
    boxShadow = `0 2px 3px ${toRgba(black, .1)}, 0 0 0 1px ${toRgba(black, .1)}`,
  }) => ({
    backgroundColor ,
    borderRadius,
    boxShadow,
    paddingBottom: '.5rem',
    paddingTop: '.5rem',
  }),

  dropdownItem: ({
    color = greyDark,
    hoverBackgroundColor = background,
    hoverColor = black,
    activeBackgroundColor = link,
    activeColor = linkInvert || invertColor(link),
  }) => ({
    color,
    display: 'block',
    fontSize: '.875rem',
    lineHeight: 1.5,
    padding: '.375rem 1rem'
    position: 'relative',

    'a.&, button.&': {
      paddingRight: '3rem',
      textAlign: 'left',
      whiteSpace: 'nowrap',
      width: '100%',
    },

    'a.&:hover, button.&:hover': {
      backgroundColor: hoverBackgroundColor,
      color: hoverColor,
    },

    'a.&:m8--is-active, button.&:m8--is-active': {
      backgroundColor: activeBackgroundColor,
      color: activeColor,
    },
  }),

  dropdownDivider: ({
    backgroundColor = border,
  }) => ({
    backgroundColor,
    border: 'none',
    display: 'block',
    height: '1px',
    margin: '.5rem 0',
  }),
})

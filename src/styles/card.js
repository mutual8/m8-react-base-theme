import toRgba from '../utilities/toRgba'

export default ({
  black = 'hsl(0, 0%, 4%)',
  border = 'hsl(0, 0%, 8%)',
  text = 'hsl(0, 0%, 29%)',
  textStrong = 'hsl(0, 0%, 21%)',
  weightBold = '700',
  white = 'hsl(0, 0%, 100%)',
}) => ({
  card: ({
    backgroundColor = white,
    boxShadow = `0 2px 3px ${toRgba(black, 0.1)}, 0 0 0 1px ${toRgba(black, 0.1)}`,
    color = text,
  }) => ({
    backgroundColor,
    boxShadow,
    color,
    maxWidth: '100%',
    position: 'relative',
  }),

  cardHeader: ({
    backgroundColor = 'transparent',
    boxShadow = `0 1px 2px ${toRgba(black, 0.1)}`,
  }) => ({
    backgroundColor,
    alignItems: 'stretch',
    boxShadow,
    display: 'flex',
  }),

  cardHeaderTitle: ({
    color = textStrong,
    fontWeight = weightBold,
    isCentered = false,
  }) => ({
    alignItems: 'center',
    color,
    display: 'flex',
    flexGrow: 1,
    fontWeight,
    padding: '.75rem',
    justifyContent: isCentered ? 'center' : 'flex-start',
  }),

  cardHeaderIcon: () => ({
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    padding: '.75rem',
  }),

  cardImage: () => ({
    display: 'block',
    position: 'relative',
  }),

  cardContent: ({
    backgroundColor = 'transparent',
  }) => ({
    backgroundColor,
    padding: '1.5rem',
  }),

  cardFooter: ({
    backgroundColor = 'transparent',
    borderTop = `1px solid ${border}`,
  }) => ({
    backgroundColor,
    borderTop,
    alignItems: 'stretch',
    display: 'flex',
  }),

  cardFooterItem: ({
    borderDivider = `1px solid ${border}`,
  }) => ({
    alignItems: 'center',
    display: 'flex',
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
    padding: '.75rem',
    '&:not(:last-child)': {
      borderRight: borderDivider,
    },
  }),
})

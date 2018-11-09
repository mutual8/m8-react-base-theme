import Color from 'color'

export default (color, alpha) => new Color(color).alpha(alpha).rgb().string()

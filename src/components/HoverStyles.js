const K_SIZE = 35;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

  border: 'none',
  borderRadius: 4,
  backgroundColor: 'nones',
  textAlign: 'center',
  color: '#F59D59',
  fontSize: 11,
  fontFamily: 'Arial',
  padding: 4,
  cursor: 'pointer',
  textShadow: '1px 1px #fff'
};

const greatPlaceStyleHover = {
  ...greatPlaceStyle
};

export {greatPlaceStyle, greatPlaceStyleHover, K_SIZE};

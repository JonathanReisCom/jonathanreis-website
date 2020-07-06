import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// CSS from https://github.com/marvelapp/devices.css
// import './devices.min.css';
// CSS from https://github.com/philipkiely/devices.css
// import './devices.css';

// CSS from https://github.com/osrec/ResponsiveDevices.css
import './common.css';
import './ipad.css';
import './iphone.css';
import './iphonex.css';
import './imac.css';
import './androidPhone.css';
import './androidTablet.css';

// Style
import theme from 'components/Theme';
const localStyle = {
  bold: {
    fontWeight: '700',
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
  },
  imac: {
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  iphone: {
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};
const useStyles = makeStyles(localStyle);

const Component = (props) => {
  const classes = useStyles();

  const renderIMac = () => {
    return (
      <div className="imac black landscape">
        <div className="caseBorder"></div>
        <div className="case"></div>
        <div className="reflection"></div>
        <div className="screen"></div>
        <div className="stand"></div>
        <div className="base"></div>
        <div
          className={classNames({
            'content centerVH': true,
            [classes.imac]: true,
          })}
          style={{ backgroundImage: props.image ? 'url(' + props.image + ')' : null }}></div>
      </div>
    );
  };

  const renderDualRight = () => {
    return (
      <div className="imac black landscape">
        {/* imac */}
        <div className="caseBorder"> </div>
        <div className="case"></div>
        <div className="reflection"></div>
        <div className="screen"></div>
        <div className="stand"></div>
        <div className="base"></div>
        <div
          className={classNames({
            'content centerVH': true,
            [classes.imac]: true,
          })}
          style={{ backgroundImage: props.images ? 'url(' + props.images[0] + ')' : null }}></div>

        {/* Iphone */}
        <div
          style={{
            position: 'absolute',
            bottom: '-50%',
            right: '-15%',
            width: '25%',
            zIndex: 10,
          }}>
          <div className="iphonex black portrait">
            <div className="caseBorder"></div>
            <div className="case"></div>
            <div className="reflection"></div>
            <div className="screen"></div>
            <div className="camera"></div>
            <div className="speaker"></div>
            <div className="homeButtonBorder"></div>
            <div className="homeButton"></div>
            <div
              className={classNames({
                'content centerVH': true,
                [classes.iphone]: true,
              })}
              style={{ backgroundImage: props.images ? 'url(' + props.images[1] + ')' : null }}></div>
          </div>
        </div>
      </div>
    );
  };

  const renderIphone = () => {
    return (
      <div className="iphone black portrait">
        <div className="caseBorder"></div>
        <div className="case"></div>
        <div className="reflection"></div>
        <div className="screen"></div>
        <div className="camera"></div>
        <div className="speaker"></div>
        <div className="homeButtonBorder"></div>
        <div className="homeButton"></div>
        <div
          className={classNames({
            'content centerVH': true,
            [classes.iphone]: true,
          })}
          style={{ backgroundImage: props.image ? 'url(' + props.image + ')' : null }}></div>
      </div>
    );
  };

  const renderIphonex = () => {
    return (
      <div className="iphonex black portrait">
        <div className="caseBorder"></div>
        <div className="case"></div>
        <div className="reflection"></div>
        <div className="screen"></div>
        <div className="camera"></div>
        <div className="speaker"></div>
        <div className="homeButtonBorder"></div>
        <div className="homeButton"></div>
        <div
          className={classNames({
            'content centerVH': true,
            [classes.iphone]: true,
          })}
          style={{ backgroundImage: props.image ? 'url(' + props.image + ')' : null }}></div>
      </div>
    );
  };

  const renderDevice = () => {
    if (props.imac) {
      return renderIMac();
    } else if (props.dualright) {
      return renderDualRight();
    } else if (props.iphonex) {
      return renderIphonex();
    } else if (props.iphone) {
      return renderIphone();
    } else {
      return renderIphone();
    }
  };

  return (
    <div
      className="deviceContainer"
      className={classNames({
        // [classes.full]: full,
        // [classes.header]: true,
        [props.className]: props.className,
      })}>
      {renderDevice()}
    </div>
  );
};

export default Component;

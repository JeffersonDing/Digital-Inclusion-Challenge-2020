import React, { Fragment } from 'react';
import Iframe from 'react-iframe';
export default function Ide() {
  return (
    <div style={{margin:10,marginTop:100}}>
      <Iframe
        url="https://codesandbox.io/embed/busy-hypatia-05dn4?fontsize=14&hidenavigation=1&theme=dark"
        width="100%"
        height="800px"
        styles="border:0; border-radius: 4px; overflow:hidden;"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></Iframe>
    </div>
  );
}

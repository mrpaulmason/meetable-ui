import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className='landing-page'>
     <img src={logo} alt='logo' style={{width: '100px', marginLeft: '-10px', marginTop: '30px'}}/>
        <h1>
         <img src={wordmark} alt='Meetable' style={{width: '275px'}}/>
        </h1>
    <div>
        <h2>Privacy Policy</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet sem mauris, at pulvinar nisi ultrices  eu. Proin vel libero diam. Sed vitae odio tempor, pretium dui ut, faucibus leo. Nunc efficitur justo nunc. Aenean et lacus risus. Duis venenatis orci ut justo euismod, quis rhoncus libero eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam porta accumsan hendrerit. Nunc mollis ligula eu metus luctus consequat. Ut      sodales risus sed urna dapibus, dictum pharetra ex bibendum. Aliquam aliquam mi at enim pellentesque tristique. Vivamus pulvinar eu tellus in volutpat.
        </p>
    </div>
    <div className="copyright">
        <p class="smallerText">
        <img src={require('../copyright-symbol.png')} alt="copyright logo" /> 2018 Meetable  |  more@meetable.com
        </p>
     </div>
    </div>
  )
}

export default PrivacyPolicy 
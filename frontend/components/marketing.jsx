import React from 'react'

export default () => {
  return (
    <div className='marketing-card'>
      <h3 id='marketing-title'>The place where you can work forever</h3>
      <p id='marketing-body'>Copper mug ethical pinterest tacos meggings selfies
      chambray hell of banjo. Fam asymmetrical readymade, yuccie freegan 3 wolf
      moon edison bulb church-key knausgaard waistcoat jianbing wayfarers.</p>
      <div>
        <img id='channels-icon' alt='slackr-channels-img' src={window.iconChat} />
        <p id='channels-body'>Mixtape cronut farm-to-table paleo tbh leggings.
        Intelligentsia single-origin coffee migas, wolf squid blog direct trade
        VHS farm-to-table disrupt gentrify microdosing. Kinfolk godard asymmetrical
        banjo, meh humblebrag crucifix taiyaki.</p>
      </div>
      <div>
        <img id='search-icon' alt='slackr-search-img' src={window.iconSearch} />
        <p id='search-body'>Gastropub blog celiac, four loko farm-to-table hexagon irony.
        Vexillologist iPhone retro flannel. Mumblecore trust fund brooklyn vinyl post-ironic franzen hammock.
        Prism everyday carry chia twee vice.</p>
      </div>
      <div>
        <img id='integration-icon' alt='slackr-integration-img' src={window.iconIntegration} />
        <p id='integration-body'>Synth cardigan ramps, adaptogen pour-over cray schlitz
        shoreditch disrupt kombucha cold-pressed locavore humblebrag. Squid pop-up sriracha,
        fashion axe blue bottle before they sold out art party. </p>
      </div>
      <div>
        <img id='security-icon' alt='slackr-security-img' src={window.iconSecurity} />
        <p id='security-body'>Next level cred actually banh mi typewriter meh tote bag blog biodiesel
        vaporware DIY you probably haven't heard of them raclette. Literally man braid shaman
        poutine artisan. Freegan polaroid craft beer, DIY everyday carry YOLO organic.</p>
      </div>
    </div>
  )
}

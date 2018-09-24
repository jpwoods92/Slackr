import React from 'react'

export default () => {
  return (
    <div className='marketing-card'>
      <h3 id='marketing-title'>The place where you can work forever</h3>
      <p id='marketing-body'>Copper mug ethical pinterest tacos meggings selfies
      chambray hell of banjo. Fam asymmetrical readymade, yuccie freegan 3 wolf
      moon edison bulb church-key knausgaard waistcoat jianbing wayfarers.</p>
      <div className='topics'>
        <div>
          <section>
            <img id='channels-icon' alt='slackr-channels-img' src={window.iconChat} />
            <h3 id='channels-title'>Channels</h3>
          </section>
          <p id='channels-body'>Mixtape cronut farm-to-table paleo tbh leggings.
        Intelligentsia single-origin coffee migas, wolf squid blog direct trade
        VHS farm-to-table disrupt gentrify microdosing.</p>
        </div>
        <div>
          <section>
            <img id='search-icon' alt='slackr-search-img' src={window.iconSearch} />
            <h3 id='search-title'>Search</h3>
          </section>
          <p id='search-body'>Gastropub blog celiac, four loko farm-to-table hexagon irony.
        Vexillologist iPhone retro flannel.</p>
        </div>
        <div>
          <section>
            <img id='integration-icon' alt='slackr-integration-img' src={window.iconIntegration} />
            <h3 id='integration-title'>Integrations</h3>
          </section>
          <p id='integration-body'>Synth cardigan ramps, adaptogen pour-over cray schlitz
        shoreditch disrupt kombucha cold-pressed locavore humblebrag.</p>
        </div>
        <div>
          <section>
            <img id='security-icon' alt='slackr-security-img' src={window.iconSecurity} />
            <h3 id='security-title'>Security</h3>
          </section>
          <p id='security-body'>Next level cred actually banh mi typewriter meh tote bag blog biodiesel
        vaporware DIY you probably haven't heard of them raclette.</p>
        </div>
      </div>
    </div>
  )
}

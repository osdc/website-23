import './Homepage.css';

const Homepage = () =>{
    return(
        <>
        <header>
      <div className="header">
        <div className="logo">
          <img src="./images/osdc.png" alt="osdc logo" />
        </div>
        <div className="navbar">
          <li>ABOUT</li>
          <li>CONTACT</li>
        </div>
      </div>
    </header>

    <section className="logosection">
      <div className="osdclogo">
        <img src="/images/logo-removebg-preview.png" alt="OSDC DESIGN"></img>
        <div className="society">OPEN SOURCE DEVELOPERS COMMUNITY</div>
        <div className="joindiscord">
          <div className="invitition">Join our Discord Server</div>
          <div className="button">
            <div className="discordbutton">JODC Discord</div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="about">
        <div className="div1">About OSDC</div>
        <div className="div2">
          We are an Open Source Community based in and around Jaypee Institute
          of Information Technology, Noida, India. A community of web
          developers, android freaks, machine learning enthusiasts, hackers,
          designers, game developers and most significantly Explorers. We
          welcome those who believe in the open source philosophy and are
          willing to sacrifice their naps in order to change the world.
        </div>
        <div className="div3">
          We also organize various workshops, talks and hackathons in an effort
          towards encouraging more people to lean into the open source world! We
          love having late night conversations on tech and building new things.
          If you love the same just hop in, we are looking forward for your
          participation.
        </div>
      </div>
    </section>

    <section className="findus">
        <div className="socials">
            <p>Find us on</p>
            <div className="socialicons">
                <img src="./images/discord_5968759 1.png"></img>
                <img src="./images/github_3488425 1.png"></img>
                <img src="./images/telegram_3536705 1.png"></img>
                <img src="./images/twitter_5968830 1.png"></img>
                <img src="./images/facebook_1051309 1.png"></img>
            </div>
        </div>
    </section>

    <section>
        <div className="subscribe">
            <div className="subscribe-message">Subscribe to our Newsletter</div>
        <div className="emailinput">
            <div className="bg">
                <input className="email" type="email" placeholder="Drop your mail here..."></input>
                <label>Subscribe</label>
            </div>
        </div>
        </div>
    </section>

    <div className="left-blob">
        <img src="/images/left blob.png" alt="Left Blob Image"></img>
    </div>
    <div className="right-upper-blob">
        <img src="/images/right blob upper.png" alt="Right upper Blob Image"></img>
    </div>
    <div className="right-lower-blob">
        <img src="/images/right blob lower.png" alt="Right lower Blob Image"></img>
    </div>
    <div className="bottom-left-blob">
        <img src="/images/bottom left blob.png" alt="Bottom left Blob Image"></img>
    </div>
    <div className="bottom-right-blob">
        <img src="/images/bottom right blob.png" alt="Bottom right Blob Image"></img>
    </div>
    </>
    )
}

export default Homepage;
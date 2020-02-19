import React from 'react';
import './styles/global.scss'
import hamburger from './images/icon-hamburger.svg'
function App() {
  return (
    <div className="App">
      <section className="navbar">
        <nav className="main-nav flex align-center space-between container">
          <div className="nav-logo">myteam</div>
          <div className="main-menu flex align-center space-between">
            <ul className="clean-list flex">
              <li>home</li>
              <li>about</li>
            </ul>
            <div className="contact">contact us</div>
          </div>
          <div className="hamburger"><img src={hamburger} /></div>
        </nav>
      </section>
      <main className="hero">
        <div className="flex container">
          <div className="title">Find the best <span className="clr4">talent</span></div>
          <div><p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p></div>
        </div>
      </main>
      <section className="build">
        <div className="flex container">
          <div className="title">
            Build & manage distributed teams like no one else.
          </div>
          <ul className="clean-list">
            <li className="attributes flex justify-center align-center">
              <div>photo</div>
              <div className="flex column">
                <h3 className="clr4">Experienced Individuals</h3>
                <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
              </div>
            </li>
            <li className="attributes flex justify-center align-center">
              <div>photo</div>
              <div className="flex column">
                <h3 className="clr4">Experienced Individuals</h3>
                <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
              </div>
            </li>
            <li className="attributes flex justify-center align-center">
              <div>photo</div>
              <div className="flex column">
                <h3 className="clr4">Experienced Individuals</h3>
                <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="success-story">
        <div className="container">
          <h2 className="title">Delivering real results for top companies. Some of our <span className="clr5">success stories.</span></h2>
          <div className="flex space-between quote-container">
            <section className="quote">
              <p className="text-center">
                “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”
            </p>
              <h4 className="clr5 text-center">Kady Baker</h4>
              <h5 className="text-center">Product Manager at Bookmark</h5>
              <img src="" alt="" />
            </section>
            <section className="quote">
              <p className="text-center">
                “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”
            </p>
              <h4 className="clr5 text-center">Kady Baker</h4>
              <h5 className="text-center">Product Manager at Bookmark</h5>
              <img src="" alt="" />
            </section>
            <section className="quote">
              <p className="text-center">
                “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”
            </p>
              <h4 className="clr5 text-center">Kady Baker</h4>
              <h5 className="text-center">Product Manager at Bookmark</h5>
              <img src="" alt="" />
            </section>
          </div>
        </div>
      </section>
      <aside className="call-to-action">
        <div className="flex space-between container">
          <h2 className="title">Ready to get started?</h2>
          <div className="contact">contact us</div>
        </div>
      </aside>
      <footer>
        <nav className="flex align-center container">
          <div className="nav-logo">myteam</div>
          <div className="main-menu flex align-center">
            <ul className="clean-list flex">
              <li>home</li>
              <li>about</li>
            </ul>
            <div className="address">address</div>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default App;

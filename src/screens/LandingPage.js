import React from 'react'

function LandingPage({changeScreen}) {
    function handleClick(event) {
      event.preventDefault();
        console.log('switched to signin');
    
        changeScreen(1)
        // console.log('register')
        // navigate("/");
      }
  return (
    <>
          <h1>
            Unlimited trailers, teasers and more.
          </h1>
          <h2> Your one-stop destination for the latest movie trailers and teasers.</h2>
          <h3> 
            Get ready to embark on an exciting journey through the world of movies.
            Signup now to to become a Movies Zone member and unlock
            a world of captivating movie trailers and teasers. 
            With a Movies Zone account, you can save your favorite movie trailers for later, 
            allowing you to easily revisit and enjoy them whenever you want. Plus, you'll have the power 
            to review and share your thoughts on the trailers you watch, adding your voice to the 
            vibrant movie-loving community. Whether you're a passionate movie 
            enthusiast or a casual viewer looking for something new, Movies Zone has got you covered.
          </h3>
          <div className='loginScreen__input'>
            <form>
              <button onClick={handleClick} className='loginScreen__getStarted'>GET STARTED</button>
            </form>
          </div>
        </>
  )
}

export default LandingPage
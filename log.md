My thoughts and struggles while building this project.

### April 3rd, 2018
I discovered that one of the alternative auth flows Spotify has is the implicit grant flow, which doesn't require a secret key. It's about one step simpler than the authorization code flow that I was trying to implement, so things are a bit simpler now. I'm still trying to figure out how to redirect using React Router though.

### March 30th, 2018
I feel kind of bad that I haven't figured out the auth process yet. Now I've followed the basic authorization example in the React Router docs, but I need to modify it to fit the Spotify auth process of sending an initial request to get the authorization code and then sending another request to get the access token.

### March 29th, 2018
Now that I have a fetch request together, I'm trying to figure out how to call the function that sends the request to Spotify. It seems like a redirect with React Router would be very useful in this case.

### March 27th, 2018
I guess I'm having trouble trying to figure out the structure of this app. It took a while for me to figure out how I should go about actually authorizing Spotify without a backend. Decided to make the first call as a link on the login page. Still trying to figure out how to do the POST request to get the access token and where and when that call should happen.

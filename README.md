# SheCodes-weather-project
Live weather app.

Self-reflection:

I found this project to be fun and a good instrument to implement the skillset i've learned thus far from the bootcamp. The JS part was by far the most challenging for me, as on several occassions I have lost track of the variables created, referring back and forth to the HTML to check i have the correct ID/class, incorporating the correct API and finally the forecast. A lot of steep learning curves had to be overcome but I was glad that i was able to challenge myself and pushing my limits. 

As an improvement, it would be fun to link weather-related songs to the state of current weather. Ex) rainy weahter- purple rain; storm/thunderstorm- it's raining man; sunny-i'm walking on sunshine etc using external API such as spotify.
There was a lot of trouble finding the correct music streaming source without having to use o-auth as both Spotify and YouTube require that process. Deezer came across as a simple and free of charge openly-sourced music streaming service where i was able to find the music track ID and use that along with its documentation for embedding into my weather search engine.
Incorporated regular expression for song-weather condition mapping. Used i-frame for embedding songs.

To fix the autoplay bug, I discovered that users have to manually allow autoplay by clicking on the tab at the beginning of the address bar, changing the setting to allow autoplay (as the default is set to block the autoplay feature).

Netlify was chosen as the hosting website not just because it is free, but it selects the best CDN and distributes content, creating pre-built websites that load faster than on traditional hosting networks. Instead of loading the site each time the visitor goes to a page, the visitor gets a pre-loaded version straight from the nearest geographical server, sharply reducing load times.
As a result, the HTML, CSS, and JS are then deployed and distributed across a large number of content delivery networks. When a visitor tries to access my  site, it automatically chooses the data center closest to the user and serves him/her the static files.  It is easy to run the website as it connects to a git repo and every time a programmer pushes a commit, it will automatically build the site, run plugins and deploy!

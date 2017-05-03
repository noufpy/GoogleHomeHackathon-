# GoogleHomeHackathon-
# openBCI + GoogleHome

## Components of the application
1. OpenBCI Ganglion + SensorData
2. OSC in order to retrieve Data from open BCI
3. API.ai
4. GoogleCloudPlatform

## How the application works
We are using the streaming data from OpenBCI which is being transmitted from the networking tab along with the OSC. We then interpret the values and assign it to a Boolean of either True or False for stress. It is then stored in a file in which we read using our Node Server and pull the most recent value.

The system works through using API.ai’s entities along with intents in order to create the conversations of the Google Home(referred to as Home). When you have the system running, you initiate the conversation with the Home by asking to speak with OpenBCI. This allows for the system to differentiate our conversations from the other applications.

When you ask Google to help you relax, it will go and perform a /GET request to the server and read the True or False value. If the Value is true it will then play a Relax/Chill mood playlist from Spotify.  This is done by combining the Google Home API with API.ai and accessing the Spotify playlist through their API.

If you were to ask to relax and the /GET returned a false response it would respond by saying that you are already relaxed. It would then end the conversation with Home’s OpenBCI.

This is all hosted on the Google Cloud Platform allowing for it to run when combined with the OpenBCI platform.

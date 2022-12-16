# Development

### Link to Deployed Website
If you used the stencil code, this is `https://procrastinatingpanda822.github.io/react-stencil`

### Goal and Value of the Application

The goal and value of the application was intended to display a list of NBA players and have the ability to "draft" them, and in the process change the state to display aggregate stat totals based on which player was drafted or undrafted.

### Usability Principles Considered

Unfortunately, I wasn't able to implement any of the sorting or filtering functionality because I didn't have the mental capacity to fully complete this assignment.

### Organization of Components

Separate components based on functionality or purpose were created as a means to avoid the use of much too large files. For instance, the PlayerCards, which contain the visual elements of each player were separate. 

### How Data is Passed Down Through Components

For example, the JavaScript map function was used to pass data from an object containing PlayerInformation into the PlayerCards. 

### How the User Triggers State Changes

When supposed to work as intended, the click of an option on the sorting/filtering forms or the draft button should affect the state in a way where the data stored (ex. PPG, APG, etc.) will update. 

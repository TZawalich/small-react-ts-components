# Error Modal Popup

It's an error modal that blocks out the screen and requires the user to accept before continuing. Probably don't use it unless something REALLY breaks and you want to let the user know why.

## ErrorModalHolder

Contains the error message and the show/hide toggle state. In normal use you'd need to tie the show state mechanism to another event/ button, not a big "show the error!" button.

## ErrorModal
Takes in props for the title, message, and the show hide toggle function. They get displayed when the error modal is shown. 

The popup greys out the rest of the screen and requires you to click 'ok' to make it go away. s
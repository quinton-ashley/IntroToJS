# ClickAPath

Modify your PickAPath game to use illustrated buttons in addition to the prompt!

## Setup

In your `GAMES` directory make a new folder `ClickAPath` and new file `clickAPath.js` in that folder. Copy/paste from your `pickAPath.js` file into `clickAPath.js`.

## Instructions

Make at least the first "page" of the story illustrated and interactive using the mouse cursor. Instead of using `pc.prompt` to ask the user to make choices, use `pc.text`. Instead of getting player's choices via the string returned from `pc.prompt`, make buttons using `pc.button`. Search for "ASCII art" (text based art) to illustrate your story! Use at least three different text artworks.

Here are some examples of ASCII art:

```
                /||\
                ||||
                ||||
           /|\  |||| /|\
           |||  |||| d||
           |||  |||||||/
           ||b._||||~~'
           \||||||||
            `~~~||||
                ||||
                ||||
~~~~~~~~~~~~~~~~||||~~~~~~~~~~~~~~
  \/..__..--  . |||| \/  .  ..
\/         \/ \/    \/
        .  \/              \/    .
. \/             .   \/     .

------------------------------------------------
Thank you for visiting https://asciiart.website/
This ASCII pic can be found at
https://asciiart.website/index.php?art=plants/cactus

    *                             |>>>                    +
+          *                      |                   *       +
                    |>>>      _  _|_  _   *     |>>>
           *        |        |;| |;| |;|        |                 *
     +          _  _|_  _    \\.    .  /    _  _|_  _       +
 *             |;|_|;|_|;|    \\: +   /    |;|_|;|_|;|
               \\..      /    ||:+++. |    \\.    .  /           *
      +         \\.  ,  /     ||:+++  |     \\:  .  /
                 ||:+  |_   _ ||_ . _ | _   _||:+  |       *
          *      ||+++.|||_|;|_|;|_|;|_|;|_|;||+++ |          +
                 ||+++ ||.    .     .      . ||+++.|   *
+   *            ||: . ||:.     . .   .  ,   ||:   |               *
         *       ||:   ||:  ,     +       .  ||: , |      +
  *              ||:   ||:.     +++++      . ||:   |         *
     +           ||:   ||.     +++++++  .    ||: . |    +
           +     ||: . ||: ,   +++++++ .  .  ||:   |             +
                 ||: . ||: ,   +++++++ .  .  ||:   |        *
                 ||: . ||: ,   +++++++ .  .  ||:   |

------------------------------------------------
Thank you for visiting https://asciiart.website/
This ASCII pic can be found at
https://asciiart.website/index.php?art=objects/buildings

   `,.      .   .        *   .    .      .  _    ..          .
     \,~-.         *           .    .       ))       *    .
          \ *          .   .   |    *  . .  ~    .      .  .  ,
 ,           `-.  .            :               *           ,-
  -             `-.        *._/_\_.       .       .   ,-'
  -                 `-_.,     |n|     .      .       ;
    -                    \ ._/_,_\_.  .          . ,'         ,
     -                    `-.|.n.|      .   ,-.__,'         -
      -                   ._/_,_,_\_.    ,-'              -
      -                     |..n..|-`'-'                -
       -                 ._/_,_,_,_\_.                 -
         -               ,-|...n...|                  -
           -         ,-'._/_,_,_,_,_\_.              -
             -  ,-=-'     |....n....|              -
              -;       ._/_,_,_,_,_,_\_.         -
             ,-          |.....n.....|          -
           ,;         ._/_,_,_,_,_,_,_\_.         -
  `,  '.  `.  ".  `,  '.| n   ,-.   n |  ",  `.  `,  '.  `,  ',
,.:;..;;..;;.,:;,.;:,o__|__o !.|.! o__|__o;,.:;.,;;,,:;,.:;,;;:
 ][  ][  ][  ][  ][  |_i_i_H_|_|_|_H_i_i_|  ][  ][  ][  ][  ][
                     |     //=====\\     |
                     |____//=======\\____|
 gpyy                    //=========\\

------------------------------------------------
Thank you for visiting https://asciiart.website/
This ASCII pic can be found at
https://asciiart.website/index.php?art=objects/buildings

                     _
               (____/@\____)
                \\\\_V_////
             (__|_H_|I|_H_|__)
              \\\\\\_V_//////
           (___|_H_|III|_H__|__)
            \\\\\\\\_V_////////
         (___|_H__|IIIII|__H__|__)
  .:.     \\\\\\\\\\_V_//////////     .:.
.:.|' (____|__H__|IIIIIII|__H__|____) '|.:.
'|'|   \\\\\\\\\\\\\\V//////////////   |'|'
 |      |_H__H__|III   III|__H__H_|      |
Sher^

------------------------------------------------
Thank you for visiting https://asciiart.website/
This ASCII pic can be found at
https://asciiart.website/index.php?art=objects/buildings

                                  _
                        .-.      / \        _
            ^^         /   \    /^./\__   _/ \
          _        .--'\/\_ \__/.      \ /    \  ^^  ___
         / \_    _/ ^      \/  __  :'   /\/\  /\  __/   \
        /    \  /    .'   _/  /  \   ^ /    \/  \/ .`'\_/\
       /\/\  /\/ :' __  ^/  ^/    `--./.'  ^  `-.\ _    _:\ _
      /    \/  \  _/  \-' __/.' ^ _   \_   .'\   _/ \ .  __/ \
    /\  .-   `. \/     \ / -.   _/ \ -. `_/   \ /    `._/  ^  \
   /  `-.__ ^   / .-'.--'    . /    `--./ .-'  `-.  `-. `.  -  `.
 @/        `.  / /      `-.   /  .-'   / .   .'   \    \  \  .-  \%
 @(88%@)@%% @)&@&(88&@.-_=_-=_-=_-=_-=_.8@% &@&&8(8%@%8)(8@%8 8%@)%
 @88:::&(&8&&8::JGS:&`.~-_~~-~~_~-~_~-~~=.'@(&%::::%@8&8)::&#@8::::
 `::::::8%@@%:::::@%&8:`.=~~-.~~-.~~=..~'8::::::::&@8:::::&8::::::'
  `::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::'

------------------------------------------------
Thank you for visiting https://asciiart.website/
This ASCII pic can be found at
https://asciiart.website/index.php?art=nature/mountains

          _
      /b_,dM\__,_
    _/MMMMMMMMMMMm,
   _YMMMMMMMMMMMM(
  `MMMMMM/   /   \   _   ,
   MMM|  __  / __/  ( |_|
   YMM/_/# \__/# \    | |_)arry
   (.   \__/  \__/     ___
     )       _,  |    '_|_)
_____/\     _   /       | otter
    \  `._____,'
     `..___(__
              ``-.
                  \
              gnv  )

------------------------------------------------
Thank you for visiting https://asciiart.website/
This ASCII pic can be found at
https://asciiart.website/index.php?art=books/harry%20potter
```

To use the text based art in your code you will store the text art as strings. Use a backtick character (the key to the left of the number 1 key on your keyboard) to store the art. Note that if the art includes a backtick character it must be "escaped" using a backslash in front of it. "escaped" in this context means that the backtick will not be interpreted as the end of the string if their is a backslash in front of it. Because backslash is a special character also used for newlines `\n` and tabs `\t`, if you want to include an actual backslash in your text art string you must escape it as well with a backslash. This means to have one backslash show up in your text art you have to use two. You saw an example of this in the hangman text art.

Copy the text art from a website and put it into a new file in your `GAMES` folder. You can call it `art.txt` the `.txt` is the file extension used for plain text files. Use ctrl+f (command+f on macOS) to find backslashes in your text art. Enter a backslash in the find input then click find. Enter two backslashes in the replace input, then click replace all. This will replace all of the single slashes with two backslashes! Do the same for backticks, replace with backslash backtick.

The other "pages" of the story can still use the prompt but if you'd like to make them all illustrated go for it! If not move on to Level 04.

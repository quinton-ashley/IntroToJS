# Level 05 A

## Binary

You may know that computers store all data in binary, just 0s and 1s. How is that possible?

If there are only 0s and 1s how do computers even store the number 2?

## Base 10

We humans have ten fingers so our number system is based on the number 10. We use ten symbols (Arabic numerals) to represent these values 0,1,2,3,4,5,6,7,8,9 that are called digits. We don't have a separate symbol for the value ten so we use two digits

```base10
10
```

The 1 is in the tens place which is how we know it's ten. We know `100` is one hundred because the 1 is in the hundreds place.

## Base 2

Computers have switches that can either be on or off, so their number system is based on 2. Bits can either be 0 or 1, there is no single symbol for the value two, so to represent the number two they need two bits.

```base2
10
```

What?! But 10 is ten! Well in our usual base 10 number system the 1 would be in the tens place but in base 2 the 1 is in the twos place so 10 has a value of two!

## Counting in Binary

The base 2 numbers are padded with zeroes on the left side.

| Base 10 | Base 2 |
| ------: | -----: |
|       0 |   0000 |
|       1 |   0001 |
|       2 |   0010 |
|       3 |   0011 |
|       4 |   0100 |
|       5 |   0101 |
|       6 |   0110 |
|       7 |   0111 |
|       8 |   1000 |
|       9 |   1001 |
|      10 |   1010 |
|      11 |   1011 |
|      12 |   1100 |
|      13 |   1101 |
|      14 |   1110 |
|      15 |   1111 |

When counting in binary you can think of the 1 being like a 9 in decimal. When you get to 1, 11, and 111 another bit must be added to represent the next value. Note that 0010 in binary is 2 in decimal, 0100 is 4, and 1000 is 8. A 1 represents 2 raised to the power of the place value of that 1.

```
2^0 =   1
2^1 =   2
2^2 =   4
2^3 =   8
2^4 =  16
2^5 =  32
2^6 =  64
2^7 = 128
2^8 = 256
```

4 bits can be used to create 16 different possible combinations, so 4 bits can only store 16 different values, 0-15. Note that the number of values that can be stored value in a given number of bits can be calculated by doing 2 to the power of the number of bits. 2^4, two to the power of 4, (aka `2*2*2*2`) is 16!

## Convert from Binary to Decimal

We can calculate the decimal value of binary numbers by finding the sum of 2 to the power of the place value for all the places with a 1 in it.

```
1111

2^3 + 2^2 + 2^1 + 2^0 =
 8  +  4  +  2  +  1  = 15
```

## Convert from Decimal to Binary

To convert from decimal to binary, start with the biggest 2^n that is less than the decimal number you want to convert. Then keep adding the next largest 2^n until the sum adds up to the decimal number.

```
10

 8  +  2  = 10
2^3 + 2^1

1010
```

## Byte

A byte is a group of 8 bits. How many different values can be stored using 8 bits? Remember we can calculate this by doing 2 to the power of the number of bits 2^8 is... uhh. Well 2^4 is 16, so 2^5 must be 32, then 2^6 is 64, 2^7 is 128, so finally 2^8 is 256. One byte (8 bits) can store 256 different values, 0-255!

## ASCII

Computers have to store everything as binary numbers, so symbols (including letters and digits) need to be assigned a numerical value that corresponds to that symbol, like a dictionary!

Before ASCII was created, computer manufactures all devised their own methods for assigning numbers to symbols. Because of this, if you created a text file on one computer and tried to load it on a computer from a different company, it could be an indecipherable mess! ASCII was created to solve this problem.

ASCII (American Standard Code for Information Interchange) was developed during the 1960s. The purpose of ASCII is right in the name, its creators wanted ASCII to become a standard code for computers to exchange information.

ASCII only used 7 bits to encode a single character of text. This allowed for 128 different symbols and control characters (like tab/ident and escape) to be represented.

Since early personal computers used bytes (8 bits) to store characters this allowed computer companies to make extensions to ASCII that could add symbols specific to that system.

Take a look at the ASCII table:

https://www.asciitable.com/

Note that many of the control characters in ASCII were used for sending telegraphs via teleprinters and also for typing on teletype machines, making them obsolete now.

## Unicode

While ASCII successfully standardized the encoding of letters in the English alphabet, as people all over the world began to use computers a new standard was needed for encoding symbols from every written language.

Today all modern computers share a new encoding standard for text based communications called Unicode. Unicode still includes all the ASCII symbols in the beginning but has also standardized its extension to include hundreds of thousands of additional symbols. It includes tons of mathematical symbols, icons, and every emoji!

If you'd like to learn more about Unicode watch this video:

https://youtu.be/-n2nlPHEMG8

## String charCodeAt and fromCharCode

Gets the numerical value of a character.

```js
let number = 'a'.charCodeAt(0) + 1; // -> 97 + 1
let letter = String.fromCharCode(number);
console.log(letter); // -> b
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

# Level 05 B

## ASCII art

ASCII art is text based art made exclusively from symbols in the original ASCII 128 character set or extended ASCII 256 character sets. Here are a few example:

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
https://asciiart.website/index.php?art=books/harry%20potter
```

## fetch a text file

```js
let filePath = QuintOS.dir + '/art.txt';
let data = await fetch(filePath);
let txt = await data.text();
```

`QuintOS.dir` represents the file path to your game directory. `fetch` loads file data asynchronously, returns a `Response` object. If the response contains text then it can be converted to a string using the `.text()` function.

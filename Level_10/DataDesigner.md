# DataDesigner

Create a program that a 1980s video rental store employee could've used to manage the store's inventory. Back then computers didn't have a mouse so don't use any clickable buttons in this program. Just use the `txt`, `prompt`, and `alert` QuintOS functions.

## Instructions for Part A

Create a JSON file called `films.json` that will store an array of film objects.

For now just add two films inside the array. A film object should have the following properties: `id` string, `title` string, `genre` number code, `rating` number, and `description` string. The rating should be a number 1-5. Each film object should have a unique two character long `id` string.

## Instructions for Part B

Try loading the film data from the `films.json` file and at first, just log it to the JS console to see that it's working.

Add the data for one of the films to the table.

If the film title is too short, add spaces to the end of the title so that the table looks nice. If the title is too long, shorten it and add ellipsis (the "...") so that it fits in the table. HINT: use the `padEnd` and `slice` functions.

Add at least 5 more films to your `films.json` database. You can use ChatGPT to generate film data for you! Just be sure to give it the description of what a film object should contain.

Now try displaying all the films in a table. Remove the example film data from the table. Use a `for of` loop to add films to the table.

## Instructions for Part C

Create a JSON file called `members.json` which will contain an array of member objects. Add at least 3 members to the array. Each member object should have the following properties: `id` string, `name` string, and `rented` array. The `rented` array should contain the `id` strings of the films the member has rented.

When the program starts it should show a main menu prompt that gives the user three options: view a member, view a film's info, or exit (close the program).

If the user chooses to view a member, the program should display the member's name and ID. Then show the titles of the films they have rented in the same format as the films table you worked on previously. The screen for viewing a member should have a prompt with four options: go back to the main menu, view a film's info, rent a film, or return the film (delete the film from the user's rented list).

If the user chooses to view a film, the program should display the film's title, genre, rating, and description.

If the user chooses to exit the program, the program should call the QuintOS `exit` function.

If the user enters an invalid member ID, the program should display an error message and return to the main menu. If the user enters a valid member ID, the program should let the user edit the customer's rented movies list by adding or removing movies.

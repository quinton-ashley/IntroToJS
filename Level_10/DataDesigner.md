# Level 10 A

Create a program that can read, edit, and write data in a database.

## Instructions

Create a JSON file called `films.json`. Inside the object create a property called `films` which will contain an array of film objects.

Each film object should have the following properties: `id` string, `title` string, `genre` number code, `rating` number, and `description` string. The rating should be a number 1-5. Each film object should have a unique two character long `id` string. Add at least 4 more films to the array.

Your `dataDesigner.js` program should read the `films.json` file and display all the films in a table. Remove the example film data from the table. Use a `for of` loop to add films to the table.

Create a JSON file called `members.json`. Inside the object create a property called `members` which will contain an array of member objects. Add at least 3 members to the array. Each member object should have the following properties: `id` string, `name` string, and `rented` array. The `rented` array should contain the `id` strings of the films the member has rented.

Create a program that a video rental store employee would use to manage the store's inventory. Don't use any clickable buttons in this program, use the `text`, `prompt`, and `alert` functions instead.

The program should have a main menu that gives the user three options. If the user chooses to view a member, the program should display the member's name and the ID and titles of the films they have rented. If the user chooses to view a film, the program should display the film's title, genre, rating, and description. If the user chooses to exit the program, the program should call the `exit` function.

If the user enters an invalid member ID, the program should display an error message and return to the main menu. If the user enters a valid member ID, the program should let the user edit the customer's rented movies list by adding or removing movies.

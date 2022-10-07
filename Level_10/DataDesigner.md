# Level 10 A

Create a program that can read, edit, and write data in a database.

## Instructions

Create a JSON file called `films.json`. Inside the object create a property called `films` which will contain an array of film objects.

Each film object should have the following properties: `id` string, `title` string, `genre` number code, `rating` number, and `description` string. The rating should be a number 1-5. Each film object should have a unique two character long `id` string. Add at least 8 films to the array.

Your `dataDesigner.js` program should read the `films.json` file and display all the films in a table. Remove the example film data from the table. Use a `for of` loop to add films to the table.

Create a JSON file called `members.json`. Inside the object create a property called `members` which will contain an array of member objects. Add at least 3 members to the array. Each member object should have the following properties: `id` string, `name` string, and `rented` array. The `rented` array should contain the `id` strings of the films the member has rented.

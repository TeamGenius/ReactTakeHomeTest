# React Take Home Test
#### React Take Home Challenge for prospective hires
This repository should be fairly simple to get running locally if you have experience with react (project was created with the `npx create-react-app` command). (`npm start` command will get the project running once you have installed all dependencies)


---


## Challenge Requirements:
- firstly: **fork** this repository
- using the data from the `_players.json` file, create a table that has the following columns for each record (order of columns does not matter):
   - Player Name
   - Player Image 
   - Age
   - Email
   - Phone
   - Organization
   - Position
   - Handedness
- the table should display the first 10 records
- there should be a 'next' button to paginate to the next 10 results
   - once you have navigated passed the first page, there should be a 'previous' button
   - once you have reached the last page, two things should happen
      - the 'next' button should disappear or disable
      - the table should contain the remaining player records (there should be 95 records in the file, so 5 results are expected)
- clicking on a row in the table should show that players data in a summary view somewhere on the page
- finally: submit a **pull request**


### Here are some tips:
- I only expect you to make changes to the `src/App.js` file, however you are more than welcome to edit any file that you would like or create new files as you see fit
- no, you do not need to have any sorting on the table columns, nor do you need to implement any search functionality. Just a paginated table and a summary display.
- I am not concerned with styling, no need to style anything at all in fact. If you want to, feel free, but it bears no weight on the requirements!
- keep it simple, don't over-think it
- I'm really only looking for understanding of react, i.e. handling button clicks, state manipulation, etc

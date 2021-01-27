# ReactTakeHomeTest
#### React Take Home Challenge for prospective hires

---

This repository should be fairly simple to get running locally if you have experience with react. (`npm start` command will get the project running once you have installed all dependencies)

## Challenge Requirements:
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
      - the table should contain the remaining player records (there should be 96 records in the file, so 6 results are expected)
- clicking on a row in the table should show that players data in a summary view somewhere on the page



Here are some tips:
- I only expect you to make changes to the `src/App.js` file, however you are more than welcome to edit any file that you would like or create new files as you see fit
- I am not concerned with styling, no need to style anything at all in fact. If you want to, feel free, but it bears no weight on the requirements!
- I am looking for understanding of react, i.e. handling button clicks, state manipulation, etc

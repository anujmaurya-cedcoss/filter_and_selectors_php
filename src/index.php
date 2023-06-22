<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./CSS/style.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.js"></script>
    <title>Filter and Selector</title>
  </head>
  <body>
    <div class="list">
      <!-- list for OS -->
      <label for="os">
        <select id="filter-by-os">
          <option value="">-Filter by OS-</option>
          <option value="iOS">iOS</option>
          <option value="Android">Android</option>
          <option value="Windows">Windows</option>
        </select>
      </label>
      <!-- list of brands -->
      <label for="brand">
        <select id="filter-by-brand">
          <option value="">-Filter by Brand-</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="ASUS">ASUS</option>
          <option value="Microsoft">Microsoft</option>
        </select>
      </label>
    </div>
    <hr>
    <div >
      <table class="mainTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Brand</th>
            <th>OS</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody id="mainTable-id"></tbody>
      </table>
    </div>
  </body>
  <script type="module" src="./JS/script.js"></script>
</html>

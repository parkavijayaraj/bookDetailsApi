//using function to create dom element
function element(tag, classname, text) {
  let tags = document.createElement(tag);
  tags.classList = classname;
  tags.innerHTML = text;
  return tags;
}
//creating a base(container,heading,row)
let container = element("div", "container", "");
let h1 = element("h1", "text-center tittle", "Books Details");
const row = element("div", "row", "");
//fetch part using promise
const response = fetch("https://www.anapioficeandfire.com/api/books");
//it return promise
response
  .then((data) => data.json())
  .catch((error) => error.alert("no card is found"))
  .then((result) => {
    //console.log(result)
    for (let i = 0; i < result.length; i++) {
      const col = document.createElement("div");
      col.classList = "col-sm-6 col-md-4 col-lg-4 col-xl-4";
      col.innerHTML = `
   <div class="card h-100">
   <div class="card-header">
   <h5 class="card-title text-center">${result[i].name}</h5>
   </div>
   
   <div class="card-body">
   <div class="card-text text-center">
   Authors:  ${result[i].authors}</div>
   <div class="card-text text-center">
   MediaType:  ${result[i].mediaType}</div>
   
   <div class="card-text text-center">
    Publisher:   ${result[i].publisher}</div>
    
    <div class="card-text text-center">
    no. Of Pages:  ${result[i].numberOfPages}</div>
   <div class="card-text text-center">
   Country:  ${result[i].country}</div>
   </div>
  <div class="card-text text-center">
  released:${result[i].released}</div>
   </div>
    `;
      row.append(col);
    }
  });
//appending element inside the body
container.append(row);
document.body.append(h1, container);

var submitBtn = $('.submit-btn');
var listContainer = $('.list-container');

submitBtn.on("click", appendGroceryItem);
$('.list-container').on("click", ".delete-btn", deleteItem)

function appendGroceryItem() {
  var item = $('.grocery-item').val();
  listContainer.append(`
    <div class="item-section">
      <p class="item">${item}</p>
      <button class="delete-btn">Delete</button>
    </div>
  `);
  $('.grocery-item').val("");
}

function deleteItem(event) {
  event.target.parentNode.remove();
}

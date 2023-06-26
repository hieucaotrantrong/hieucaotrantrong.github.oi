// Lấy danh sách các nút "Mua"
var buyButtons = document.getElementsByClassName("buy-button");

// Lấy phần tử hiển thị giỏ hàng
var cartItemsElement = document.getElementById("cart-items");

// Lấy phần tử hiển thị tổng thanh toán
var totalPriceElement = document.getElementById("total-price");
var totalPrice = 0;

// Xử lý sự kiện khi người dùng bấm vào nút "Mua"
for (var i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener("click", function(event) {
    // Lấy thông tin về sản phẩm, giá tiền và hình ảnh từ thuộc tính dữ liệu của nút
    var item = event.target.getAttribute("data-item");
    var price = parseInt(event.target.getAttribute("data-price"));
    var image = event.target.getAttribute("data-image");

    // Tạo phần tử mới để hiển thị trong giỏ hàng
    var cartItemElement = document.createElement("li");

    // Tạo phần tử hình ảnh
    var imageElement = document.createElement("img");
    imageElement.src = image;
    imageElement.alt = item;
    imageElement.classList.add("cart-item-image");
    cartItemElement.appendChild(imageElement);

    // Tạo phần tử thông tin sản phẩm
    var infoElement = document.createElement("div");
    infoElement.textContent = item + " - " + price + " đồng";
    cartItemElement.appendChild(infoElement);

    // Thêm phần tử vào giỏ hàng
    cartItemsElement.appendChild(cartItemElement);

    // Cập nhật tổng thanh toán
    totalPrice += price;
    totalPriceElement.textContent = "Tổng thanh toán: " + totalPrice + " đồng";
  });
}

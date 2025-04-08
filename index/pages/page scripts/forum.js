document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-bar input");
    const searchButton = document.querySelector(".search-bar button");
    const contentGrid = document.querySelector(".content-grid");
    
    const listings = [
        "RX 6600 K.O Limited Edition",
        "RX 6600 K.O Overclocked Version",
        "RX 6600 K.O Black Edition",
        "RX 6600 K.O White Edition",
        "RX 6600 K.O Ultra Performance",
        "RX 6600 K.O Gaming Beast"
	"RTX 5090 Strix"
	"RTX 5090 TUF Gaming"
	"RTX 5080 Strix"
	"RTX 5080 TUF Gaming"
	"RTX 5070 Ti Strix"
	"RTX 5070 Ti TUF Gaming"
	"RTX 5070 Strix"
	"RTX 5070 TUF Gaming"
	"RTX 5060 Ti Strix"
	"RTX 5060 Ti TUF Gaming"
	"RTX 5060 Strix"
	"RTX 5060 TUF Gaming"

    ];
    
    searchButton.addEventListener("click", function () {
        const query = searchInput.value.trim().toLowerCase();
        contentGrid.innerHTML = "";
        
        if (query.includes("rx6600") || query.includes("k.o")) {
            listings.forEach(item => {
                const div = document.createElement("div");
                div.classList.add("content-box");
                div.textContent = item;
                contentGrid.appendChild(div);
            });
        } else {
            contentGrid.innerHTML = "<p>No results found.</p>";
        }
    });
});
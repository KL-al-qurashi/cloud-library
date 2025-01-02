@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    background-color: #c9d6ff;
    background: linear-gradient(to right, #e2e2e2, #c9d6ff);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
}

.container {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    overflow: hidden;
    width: 900px;
    max-width: 100%;
    padding: 20px;
}

.header {
    text-align: center;
    margin-bottom: 20px;
}

.header h1 {
    font-size: 28px;
    font-weight: 600;
    color: #512da8;
}

.search-bar {
    margin-bottom: 20px;
    text-align: center;
}

.search-bar input {
    width: 80%;
    padding: 10px;
    font-size: 16px;
    border-radius: 25px;
    border: 1px solid #512da8;
    outline: none;
}

.search-bar input:focus {
    border-color: #5c6bc0;
}

.books {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-height: 400px;
    overflow-y: auto;
    padding-right: 10px;
}

.books::-webkit-scrollbar {
    width: 8px;
}

.books::-webkit-scrollbar-thumb {
    background-color: #512da8;
    border-radius: 10px;
}

.book {
    background-color: #f5f5f5;
    border-radius: 15px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    padding: 15px;
    text-align: center;
    transition: transform 0.3s;
}

.book:hover {
    transform: translateY(-5px);
}

.book img {
    width: 120px;
    height: auto;
    border-radius: 10px;
    margin-bottom: 15px;
}

.book h3 {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
}

.book p {
    font-size: 14px;
    color: #666;
    margin-bottom: 15px;
}

.book button {
    background-color: #512da8;
    color: #fff;
    font-size: 12px;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.book button:hover {
    background-color: #5c6bc0;
}

.footer {
    text-align: center;
    margin-top: 20px;
}

.footer button {
    background-color: #512da8;
    color: #fff;
    font-size: 14px;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.footer button:hover {
    background-color: #5c6bc0;
}


.book {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    text-align: center;
}

.search-bar {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.search-bar input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.icon-button {
    margin-left: 10px;
    cursor: pointer;
    font-size: 16px;
    color: #fff;
    background-color: #f44336;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon-button .heart-icon,
.icon-button .history-icon {
    font-size: 18px;
    margin-right: 5px;
}

.hidden {
    display: none;
}

.list-container {
    position: fixed;
    width: 300px;
    max-height: 400px;
    overflow-y: auto;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 10;
}

#historyList {
    top: 100px;
    left: 20px;
}

#favoritesList {
    top: 100px;
    right: 20px;
}

.list-container h3 {
    margin-top: 0;
}

.list-container ul {
    padding: 0;
    list-style: none;
}

.list-container li {
    cursor: pointer;
    margin: 5px 0;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.list-container li:hover {
    background-color: #f1f1f1;
}

.book button.favorite-btn {
    background-color: transparent;
    color: black;
    border: none;
    cursor: pointer;
    font-size: 20px;
}

.book button.favorite-btn.favorited {
    color: red;
}

.book button.read-btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    margin-top: 5px;
    border-radius: 5px;
    cursor: pointer;
}

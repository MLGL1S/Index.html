<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NFT Market MiniApp</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<!-- ЗАГРУЗКА -->
<div id="loader">
  <div class="loader-circle"></div>
  <p>Загрузка...</p>
</div>

<!-- ВХОД -->
<div id="login-screen">
  <h1>NFT Market</h1>
  <button id="login-btn">Войти</button>
</div>

<!-- ПРИЛОЖЕНИЕ -->
<div id="app">
  <div id="market" class="page">
    <h2>Market</h2>
    <p>Пока нет предметов...</p>
  </div>
  <div id="inventory" class="page">
    <h2>Мои NFT</h2>
    <p>Инвентарь пуст</p>
  </div>
  <div id="balance" class="page">
    <h2>Баланс</h2>
    <p>0 монет</p>
  </div>
  <div id="profile" class="page">
    <h2>Профиль</h2>
    <p>Гость</p>
  </div>
</div>

<!-- НАВИГАЦИЯ -->
<div id="nav">
  <div class="nav-btn active" onclick="openPage('market')">Market</div>
  <div class="nav-btn" onclick="openPage('inventory')">NFTs</div>
  <div class="nav-btn" onclick="openPage('balance')">Balance</div>
  <div class="nav-btn" onclick="openPage('profile')">Profile</div>
</div>

<script src="script.js"></script>
</body>
</html>#

<!DOCTYPE html>
<html lang="en">
<head>
	<script type="text/javascript">
			</script>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title><?php echo htmlspecialchars((isset($seoTitle) && $seoTitle !== "") ? $seoTitle : "Home"); ?></title>
	<base href="{{base_url}}" />
	<?php echo isset($sitemapUrls) ? generateCanonicalUrl($sitemapUrls) : ""; ?>	
  <link rel="stylesheet" href="style.css">

</head>

<body>
  <div id="chat-container">
    <div id="chat-box">
      <div id="chat-log"></div>
      <input type="text" id="user-input" placeholder="Escreva sua pergunta...">
      <button onclick="sendMessage()">Enviar</button>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>

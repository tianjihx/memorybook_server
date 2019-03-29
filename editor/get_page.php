<?php
$bookname = $_GET["bookname"];
$pagename = $_GET["pagename"];
$page_path = sprintf('../data/%s/%s.json', $bookname, $pagename);
if (!file_exists($page_path))
{
    echo 'page file not found';
    return;
}
$json = file_get_contents($page_path);
echo $json;
?>


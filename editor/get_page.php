<?php
$bookname = $_GET["bookname"];
$pageno = (int)$_GET["pageno"];
$page_path = sprintf('../data/%s/p%d.json', $bookname, $pageno);
if (!file_exists($page_path))
{
    echo 'page file not found';
    return;
}
$json = file_get_contents($page_path);
echo $json;
?>


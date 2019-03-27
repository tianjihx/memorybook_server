<?php
$bookname = $_GET["bookname"];
$book_path = sprintf('../data/%s/book.json', $bookname);
if (!file_exists($book_path))
{
    echo 'book json not found';
    return;
}
$json = file_get_contents($book_path);
echo $json;
?>


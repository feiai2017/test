<?php
//    $txtfile = 'test';
//
//    $file = fopen($txtfile,'r');
//
////$i = 0;
//while (!feof($file)){
//    $tmp = fgets($file);
//
////    $tmp = preg_replace("/[A-Z]*|_|=|;|\/|[0-9]*/","",$tmp);
////    $tmp = preg_replace("/[^0-9]*/","",$tmp);
//    $tmp = preg_replace("/const*/","",$tmp);
//    echo $tmp;
//    echo '<br>';
//}
//fclose($file);
/*
$formation_ids = '1:;2:;3:';
$stage_id = 2;
$hero_ids = '3124,3455,1224';

$formation_ids = explode(';', $formation_ids);

var_dump($formation_ids);

foreach ($formation_ids as $key => $value){
    if (($stage_id - 1) == $key){
        $tmp = explode(':', $value);
        $tmp[1] = $hero_ids;
        $tmp = implode(':', $tmp);

        $formation_ids[$key] = $tmp;
    }
}

var_dump(implode(';', $formation_ids));*/

$str="1:123,12312,2345,";

preg_match_all('/:[\S]+/', $str, $mat);

var_dump($mat);

$res = sprintf('参数一:%s,参数二:%s,参数三:%s', $mat[1][0], $mat[1][1], $mat[1][2]);

var_dump($res);








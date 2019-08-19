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

$nums = [1,2,3,4,5,6,7];

$k = 3;

function rotate(&$nums, $k) {
    $len = count($nums);
    $k = $k % $len;

    $i = 0;
    $start_num = $nums[$i];
    $tmp = $nums[ ($i + $k) % $len];
    while ($tmp != $start_num){
        $tmp = $nums[ ($i + $k) % $len];
        $nums[($i+$k) % $len] = $nums[$i];
        $i = ($i+$k) % $len;
        $nums[($i+$k) % $len] = $tmp;
    }

}

rotate($nums, $k);
var_dump($nums);

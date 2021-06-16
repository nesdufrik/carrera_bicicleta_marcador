<?php
require_once('conexion.php');

$sql_puesto = "SELECT nom_ciclista, club_ciclista, cat_ciclista, sexo_ciclista, edad_ciclista FROM datos_ciclista ORDER BY sexo_ciclista ASC, cat_ciclista DESC, edad_ciclista ASC";
$ejec_puesto = $conexion->query($sql_puesto);
$res_puesto = $ejec_puesto->fetch_array(MYSQLI_ASSOC);

?>
    <script src="java/funciones.js"></script>    
    <p>Escriba en el campo de entrada para buscar en la lista:</p>  
    <input class="form-control" id="myInput" type="text" placeholder="Buscar...">
    <br>
    <table class="table table-bordered">
        <thead class="thead-light">
            <tr>
                <th>Nº</th>
                <th>Nombre Completo</th>
                <th>Club</th>
                <th>Categoria</th>
                <th>Sub Categoria</th>
            </tr>
        </thead>
        <tbody id="myTable">
            <?php $i=0; do{ $i++;
                $sexo = $res_puesto['sexo_ciclista'];
                if($sexo == 'F'){
                    $sub_cat = "Mujeres";
                }
                if($sexo != 'F'){
                    $edad = $res_puesto['edad_ciclista'];
                    if($edad>=10 && $edad<=19){
                        $sub_cat = "15 a 19 años";
                    }
                    if($edad>=20 && $edad<=24){
                        $sub_cat = "20 a 24 años";
                    }
                    if($edad>=25 && $edad<=29){
                        $sub_cat = "25 a 29 años";
                    }
                    if($edad>=30 && $edad<=34){
                        $sub_cat = "30 a 34 años";
                    }
                    if($edad>=35 && $edad<=39){
                        $sub_cat = "35 a 39 años";
                    }
                    if($edad>=40 && $edad<=44){
                        $sub_cat = "40 a 44 años";
                    }
                    if($edad>=45 && $edad<=49){
                        $sub_cat = "45 a 49 años";
                    }
                    if($edad>=50 && $edad<=54){
                        $sub_cat = "50 a 54 años";
                    }
                    if($edad>=55 && $edad<=200){
                        $sub_cat = "55 años en adelante";
                    }
                }
                echo "<tr>
                    <td>".$i."</td>
                    <td>".$res_puesto['nom_ciclista']."</td>
                    <td>".$res_puesto['club_ciclista']."</td>
                    <td>".$res_puesto['cat_ciclista']."</td>
                    <td>".$sub_cat."</td>
                </tr>";
            }while($res_puesto = $ejec_puesto->fetch_array(MYSQLI_ASSOC));?>
        </tbody>
    </table>
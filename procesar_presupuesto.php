<!DOCTYPE html>
<html>
<head>
  <title>Presupuesto interactivo - Resultado</title>
</head>
<body>
  <h1>Presupuesto interactivo - Resultado</h1>

  <table>
    <thead>
      <tr>
        <th>Artículo</th>
        <th>Cantidad</th>
        <th>Precio unitario</th>
        <th>Precio total</th>
      </tr>
    </thead>
    <tbody>
      <?php
      $articulos = $_POST['articulo'];
      $cantidades = $_POST['cantidad'];
      $precios_unitarios = $_POST['precio_unitario'];
      $precios_totales = $_POST['precio_total'];

      $total_presupuesto = 0;

      for ($i = 0; $i < count($articulos); $i++) {
        $precio_total = $cantidades[$i] * $precios_unitarios[$i];
        $precios_totales[$i] = $precio_total;
        $total_presupuesto += $precio_total;

        echo "<tr>";
        echo "<td>" . $articulos[$i] . "</td>";
        echo "<td>" . $cantidades[$i] . "</td>";
        echo "<td>" . $precios_unitarios[$i] . "</td>";
        echo "<td>" . $precio_total . "</td>";
        echo "</tr>";
      }
      ?>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">Total presupuesto:</td>
        <td><?php echo $total_presupuesto; ?></td>
      </tr>
    </tfoot>
  </table>
</body>
</html>

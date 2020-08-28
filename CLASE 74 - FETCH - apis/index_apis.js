/**
  * Sobre APIs REST
  * 
  * Las apis rest suelen ser la forma más común de comunicación
  * entre un frontend y un backend.
  * Estas, a pesar de estar hechas por programadores, no 
  * quedan libradas a la decisión. Hay una serie de patrones
  * que se suelen seguir para desarrollarlas.
  * 
  * Métodos de comunicación
  *     Los métodos pueden ser GET, POST, PUT, y DELETE.
  * Concretamente:
  * GET: Estoy diciendo que voy a buscar información en el recurso (API)
  * POST: Estoy diciendo que voy a insertar algo nuevo en el recurso
  * PUT: Estoy diciendo que voy a modificar algo existente en el recurso
  * DELETE: Estoy diciendo que voy a eliminar algo existente en el recurso
  * 
  * Para comprender como funcionan, podriamos decir que las URLs son lo que 
  * definen sobre qué vamos a actuar, y los métodos (o acciones), son lo que 
  * definen QUE vamos a hacer con ello.
  * Entonces, si quisiera pedir una lista de empleados de un recurso,
  * posiblemente debería pedirlo haciendo un GET a 
  * https://recurso.falso/employees
  * 
  * Ahora, si quisiera pedir un empleado, seguramente tendría que tener
  * un ID y hacer un GET en 
  * https://recurso.false/employee/1
  * 
  * A la misma URL podria pedirle un DELETE para eliminarla, o un 
  * PUT para modificarla, dado que ya tengo el ID del empleado
  * que quiero eliminar.
  * 
  * Ahora, por ultimo, para insertar un nuevo empleado
  * simplemente deberia hacer un POST a
  * https://recurso.false/employee
  * 
  * De esta forma voy a encontrar muy facilmente como funcionan las APIs rest
  * de una forma mas o menos estandar.
  * 
  * 
  */
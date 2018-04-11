# restful-DB
API:

command          | type | url                     | header-key  | header-value    | body 
---------------- | ---  | ----------------------- | ----------- |---------------- |---------------------------------------					
create table     |	POST|	http://ip:3000/api/table|	Content-Type|	application/json|{"name":"t1","columns":["col1","col2"]}
query  table     |	GET |	http://ip:3000/api/table|	Content-Type|	application/json|
edit   table     |	PUT |	http://ip:3000/api/table|	Content-Type|	application/json|
delete table     |DELETE|	http://ip:3000/api/table|	Content-Type|	application/json|
insert data      |	POST|	http://ip:3000/api/data |	Content-Type|	application/json|{tableName:'t1',datas:[{col1:'',col2:''},{col1:'',col2:''}}
query  data      |	GET |	http://ip:3000/api/data |	Content-Type|	application/json|{tableName:'t1', id:2/col1:'aa'}
edit   data      |	PUT |	http://ip:3000/api/data |	Content-Type|	application/json|{tableName:'t1', update:{ co1:'aaa'} ,where:{ id:11}}
delete data      |DELETE|	http://ip:3000/api/data |	Content-Type|	application/json|{id:2/col1:'aa'}

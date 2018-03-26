# restful-DB

command          | type | url                     | header-key  | header-value    | body 
---------------- | ---  | ----------------------- | ----------- |---------------- |---------------------------------------					
create table     |	POST|	http://ip:3000/api/table|	Content-Type|	application/json|{"name":"t1","columns":["col1","col2"]}
create table     |	GET |	http://ip:3000/api/table|	Content-Type|	application/json|
create table     |	PUT |	http://ip:3000/api/table|	Content-Type|	application/json|
create table     |DELETE|	http://ip:3000/api/data |	Content-Type|	application/json|
create table     |	POST|	http://ip:3000/api/data |	Content-Type|	application/json|{tableName:'t1',datas:[{col1:'',col2:''},{col1:'',col2:''}}
create table     |	GET |	http://ip:3000/api/data |	Content-Type|	application/json|{tableName:'t1', id:2/col1:'aa'}
create table     |	PUT |	http://ip:3000/api/data |	Content-Type|	application/json|{tableName:'t1', update:{ co1:'aaa'} ,where:{ id:11}}
create table     |DELETE|	http://ip:3000/api/data |	Content-Type|	application/json|{id:2/col1:'aa'}

# restful-DB
这是一个最简单的文档型本地数据库。
最初制作的初衷是因为另一个想法：本地聊天工具需要一个简单的存储，所以想到了以Restful的形式实现一个简单的创建表，添加数据的功能。
实现过程中遇到了跨域，fetch解决跨域等问题，如果你也遇到了类似问题，可以在client中寻找解决方案。
client包是个独立运行的客户端，与产品无关，仅作为参考，可以随时移出。


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

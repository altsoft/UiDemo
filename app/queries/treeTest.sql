/**
 *
 * @author user
 * @name treeTest
 * @public
 */ 
Select t.owners_id as id, null as aName, t1.owner as pID
from OWNERS t, PETS t1
where 1=0
union
Select t.owners_id as id, t.firstname as aName, null as pID 
From OWNERS t
union
Select t1.pets_id as id, t1.name as aName, t1.owner as pID
From PETS t1






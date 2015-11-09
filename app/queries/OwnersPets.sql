/**
 *
 * @author user
 * @name OwnersPets
 * @public
 */ 
Select t.owners_id as id, t.firstname as aName, null as owner_id 
From OWNERS t
union
Select t1.pets_id as id, t1.name as aName, t1.owner_id as owner_id
From PETS t1






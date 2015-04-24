/**
 * 
 * @author user
 * @name OwnersQuery
 * @public
 */
Select t1.OWNERS_ID, (t1.FIRSTNAME || ' ' || t1.LASTNAME) AS fullName, t1.ADDRESS
, t1.CITY, t1.TELEPHONE, t1.email 
From OWNERS t1
 Where t1.LASTNAME Like :lastNamePattern
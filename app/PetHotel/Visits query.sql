/**
 * Gets all visits for concrete owner.
 * @public
 * @author vv
 * @name VisitsQuery
 */ 
Select t1.VISIT_ID, t1.PET_ID, t1.FROMDATE
, t1.TODATE, t1.DESCRIPTION, t1.ispaid
From VISIT t1
, #PetsQuery q1
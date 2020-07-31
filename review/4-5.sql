
-- 4：

select name, chinese, math, english, chinese + english + math as sumScore, sumScore / 3 as avgScore from (
    select nameA, english from table
    left join nameB, math from table on nameA = nameB,
    left join nameC, chinese from table on name = nameC
)
order by sumScore desc;

-- 5：
with ( select users.id as userId, name from users
where deleted = 0
) as validUsers,
(
 select roles.name as roleName, id as roleId
 from roles
 where roleId = 1 or roleId = 2
) as validRoles,
(
 select distinct user_id from user_role_map
 left join validRoles on role_id = roleId
 where role_id = 1 or role_id = 2
) as validUserInRoles,
(
 select user_id, salary, created_time, row_number(partion by user_id) as rId from user_salary_records
 where month(created_time) = @monthInput and salary > 10000
 order by created_time desc
) as validRecords,
select userId, name, roleName, salary, created_time from validUser
left join validUserInRoles on user_id = userId
left join validRecords on user_id = userId
where rId = 1
const teams = [
    { name: 'team 1', members: ['a', 'b'] },
    { name: 'team 2', members: ['c', 'd'] }
]

function* getMember(members) {
    for (let i = 0; i < members.length; i++) {
        yield members[i];
    }
}

function* getTeams(teams) {
    for (let j = 0; j < teams.length; j++) {
        yield* getMember(teams[j].members);
    }
}

const obj = getTeams(teams);
console.log(obj.next());
console.log(obj.next());

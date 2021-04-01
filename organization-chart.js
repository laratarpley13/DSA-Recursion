let organization = [
    {name: "Zuckerberg", parent: null},
    {name: "Schroepfer", parent: "Zuckerberg"},
    {name: "Bostworth", parent: "Schroepfer"},
    {name: "Steve", parent: "Bostworth"},
    {name: "Kyle", parent: "Bostworth"},
    {name: "Andra", parent: "Bostworth"},
    {name: "Zhao", parent: "Schroepfer"},
    {name: "Richie", parent: "Zhao"},
    {name: "Sofia", parent: "Zhao"},
    {name: "Jen", parent: "Zhao"},
    {name: "Schrage", parent: "Zuckerberg"},
    {name: "VanDyck", parent: "Schrage"},
    {name: "Sabrina", parent: "VanDyck"},
    {name: "Michelle", parent: "VanDyck"},
    {name: "Josh", parent: "VanDyck"},
    {name: "Swain", parent: "Schrage"},
    {name: "Blanch", parent: "Swain"},
    {name: "Tom", parent: "Swain"},
    {name: "Joe", parent: "Swain"},
    {name: "Sandberg", parent: "Zuckerberg"},
    {name: "Goler", parent: "Sandberg"},
    {name: "Eddie", parent: "Goler"},
    {name: "Julie", parent: "Goler"},
    {name: "Annie", parent: "Goler"},
    {name: "Hernandez", parent: "Sandberg"},
    {name: "Rowi", parent: "Hernandez"},
    {name: "Inga", parent: "Hernandez"},
    {name: "Morgan", parent: "Hernandez"},
    {name: "Moissinac", parent: "Sandberg"},
    {name: "Amy", parent: "Moissinac"},
    {name: "Chuck", parent: "Moissinac"},
    {name: "Vinni", parent: "Moissinac"},
    {name: "Kelley", parent: "Sandberg"},
    {name: "Eric", parent: "Kelley"},
    {name: "Ana", parent: "Kelley"},
    {name: "Wes", parent: "Kelley"},
];

const organizeDirectory = function(directory, parent) {
    let list = [];
    directory.filter(function(d) {
        return d.parent === parent
    }).forEach(function(d) {
        let cd = d;
        cd.child = organizeDirectory(directory, d.name)
        return list.push(cd);
    })
    return list;    
}

let results = organizeDirectory(organization, null);
console.log(JSON.stringify(results, null, '  '));
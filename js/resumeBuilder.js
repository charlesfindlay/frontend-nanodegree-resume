var skillList = ["ASP.NET", "MVC", "Python", "C#", "Javascript"];

var bio = {
    "name": "Charles Findlay",
    "role": "Junior .NET Developer",
    "image": "images/charles.jpg",
    "welcome": "Eager to help with your next project",
    "contact": "charles@charlesfinday.net",
    "skills": skillList
};


var work = {};
work["position"] = "Freelance";


var education = {
    "schools" : [
        {
            "school": "Grand Circus",
            "city" : "Detroit, MI",
            "major" : ".NET Development Bootcamp",
            "grad" : 2015
        },
        {
            "school" : "Thunderbird, The American Graduate School of International Management",
            "city" : "Phoenix, AZ",
            "major" : "MBA",
            "grad" : 1999
        }
    ]
};

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    
    $("#skills").append(formattedSkill);
}

//alert(HTMLskillsStart);
//$("#main").append("Charles findlay");
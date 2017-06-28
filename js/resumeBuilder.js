/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Milanda",
    "role": "FE Engineer",
    "contacts": {
        "mobile": "13208756",
        "email": "nwhals@163.com",
        "github": "MilandaYuan",
        "location": "BeiJing"
    },
    "welcomeMessage": "hello I am Milanda!",
    "skills": ["awesome", "singing", "running", "dancing"],
    "biopic": "images/mi.jpg",
    "display": function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var fomattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var fomattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var fomattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var fomattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var biopic = HTMLbioPic.replace("%data%", bio.biopic);

        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);
        $('#header').append(biopic);
        $('#header').append(formattedWelcomeMessage);
        $('#header').append(HTMLskillsStart);

        $('#topContacts,#footerContacts').append(fomattedMobile);
        $('#topContacts,#footerContacts').append(fomattedEmail);
        $('#topContacts,#footerContacts').append(fomattedGithub);
        $('#topContacts,#footerContacts').append(fomattedLocation);

        for (var i = 0; i < bio.skills.length; i++) {
            $('#skills').append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "ABC International",
            "title": "operater",
            "location": "BeiJing",
            "dates": "2014-January 1st 2017",
            "description": "In the second phase of the study, the deception was revealed. The students were told that the real point of the experiment was to gauge their responses to thinking they were right or wrong. (This, it turned out, was also a deception.) Finally, the students were asked to estimate how many suicide notes they had actually categorized correctly, and how many they thought an average student would get right."
        },
        {
            "employer": "Lenden International",
            "title": "Designer",
            "location": "ShenZhen",
            "dates": "2012-January 1st 2014",
            "description": "At this point, something curious happened. The students in the high-score group said that they thought they had, in fact, done quite well—significantly better than the average student—even though, as they’d just been told, they had zero grounds for believing this. Conversely, those who’d been assigned to the low-score group said that they thought they had done significantly worse than the average student—a conclusion that was equally unfounded."
        }
    ],
    "display": function () {
        for (var i = 0; i < work.jobs.length; i++) {
            $('#workExperience').append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            $('.work-entry:last').append(formattedEmployerTitle);
            $('.work-entry:last').append(formattedLocation);
            $('.work-entry:last').append(formattedDates);
            $('.work-entry:last').append(formattedDescription);

        }
    }
};

var projects = {
    projects: [
        {
            "title": "project 1",
            "dates": "2016",
            "description": "In the second phase of the study, the deception was revealed. The students were told that the real point of the experiment was to gauge their responses to thinking they were right or wrong. ",
            "images": ["images/p1.jpg", "images/p2.jpg"]
        },
        {
            "title": "project 2",
            "dates": "2017",
            "description": "In the second phase of the study, the deception was revealed. The students were told that the real point of the experiment was to gauge their responses to thinking they were right or wrong. ",
            "images": ["images/p1.jpg", "images/p2.jpg"]
        }
    ],
    "display": function () {
/*  for循环不易读
        for (var i = 0; i < projects.projects.length; i++) {
            $('#projects').append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);


            $('.project-entry:last').append(formattedTitle);
            $('.project-entry:last').append(formattedDates);
            $('.project-entry:last').append(formattedDescription);


            if (projects.projects[i].images.length > 0) {
                for (var j = 0; j < projects.projects[i].images.length; j++) {
                    var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                    $('.project-entry:last').append(formattedImages);
                }
            }
        }
*/

        //forEach循环较为易读
        projects.projects.forEach(function(val){
            $('#projects').append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", val.title);
            var formattedDates = HTMLprojectDates.replace("%data%", val.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", val.description);


            $('.project-entry:last').append(formattedTitle);
            $('.project-entry:last').append(formattedDates);
            $('.project-entry:last').append(formattedDescription);

            if (val.images.length > 0) {
                for (var i = 0; i<val.images.length; i++) {
                    var formattedImages = HTMLprojectImage.replace("%data%", val.images[i]);
                    $('.project-entry:last').append(formattedImages);
                }
            }
        })

    }
};

var education = {
    "schools": [
        {
            "name": "Agriculture University",
            "location": "Beijing",
            "degree": "bachelor",
            "majors": "music",
            "dates": "2012",
            "url": "http://www.baidu.com"
        },
        {
            "name": "Southern University",
            "location": "ShenZhen",
            "degree": "master",
            "majors": "design",
            "dates": "2016",
            "url": "http://www.sina.com.cn"
        }
    ],
    "onlineCourses": {
        "title": "JavaScript",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://cn.udacity.com/"
    },
    "display": function () {
        for (var i = 0; i < education.schools.length; i++) {
            $('#education').append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            formattedSchoolName = formattedSchoolName.replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDegreeName = formattedSchoolName + formattedSchoolDegree;
            $('.education-entry:last').append(formattedSchoolDegreeName);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $('.education-entry:last').append(formattedSchoolLocation);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $('.education-entry:last').append(formattedSchoolDates);

            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $('.education-entry:last').append(formattedSchoolMajor);
        }

        $('.education-entry:last').append(HTMLonlineClasses);
        var formattedOnlineCoursesTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses.title);
        formattedOnlineCoursesTitle = formattedOnlineCoursesTitle.replace("#", education.onlineCourses.url);
        var formattedOnlineCoursesSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses.school);
        var formattedOnlineCoursesSchoolTitle = formattedOnlineCoursesTitle + formattedOnlineCoursesSchool;
        $('.education-entry:last').append(formattedOnlineCoursesSchoolTitle);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses.dates);
        $('.education-entry:last').append(formattedOnlineDates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses.url);
        formattedOnlineURL = formattedOnlineURL.replace("#",education.onlineCourses.url );
        $('.education-entry:last').append(formattedOnlineURL);

    }

};

$('#mapDiv').append(googleMap);


var parts = [bio, work, projects, education];
parts.forEach(function (part) {
    part.display();
});











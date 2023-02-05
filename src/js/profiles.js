let profiles = [];

$.getJSON("../data/profiles.json", function (data) {
    profiles = data;
    search();
});

function search() {
    text = $("#search-field").val();
    $("#profile-data").html(`<div class="message-list" id="profile-list"></div>`);

    matchedProfiles = profiles.filter(profile => {
        let name = profile.name.first.toLowerCase() + profile.name.last.toLowerCase();
        if (name.startsWith(text.toLowerCase()))
            return profile;
    });

    if (matchedProfiles.length == 0) {
        $("#profile-data").html(`<b>No results found</b>`);
    }

    matchedProfiles.forEach(profile => {
        const profilesListHTML = `
        <div class="message pointer" onclick="displayProfile(${profile.id})">
            <div class="mail-grid">
                <img src=${profile.picture.thumbnail} alt="Avatar" class="center">
                <div><b>${profile.name.first} ${profile.name.last}</b></div>
            </div>
        </div>`;

        $("#profile-list").append(profilesListHTML);
    });
}

const visitedProfilesE26 = {
    1: false,
    2: false,
    69: false
}

function displayProfile(profileID) {
    profiles.forEach(profile => {
        if(profile.id == 27){
            startEvent(12);
        } else if(profile.id == 44){
            startEvent(16);
        }

        if (profile.id == profileID) {
            let profileHTML = `
            <img class="profile-img center" src=${profile.picture.thumbnail} alt="Avatar">
            <div>
                <b>Name:</b> <span class="name">${profile.name.first} ${profile.name.last}</span><br>
                <b>DOB:</b> <span class="date">${profile.dob.date}</span><br>
                <b>Bio:</b> <span class="name">${profile.bio}</span><br>
                <b>Email:</b> <span class="name">${profile.email}</span><br>
                <b>Phone:</b> <span class="name">${profile.phone}</div><br>
            </div>`;

            $("#profile-data").html(profileHTML);
        }
    });

    visitedProfilesE26[profileID] = true;
    let c = 0;
    for (key in visitedProfilesE26) {
        c += visitedProfilesE26[key]?1:0;
    }
    if (c===3) {
        startEvent(26);
    }
}

function search() {
    text = $("#search-field").val();
    $("#profile-data").html(`<ul class="message-list" id="profile-list"></ul>`);

    // Find the profile in json
    $.getJSON("../data/profiles.json", function (data) {
        profiles = data;
        
        matchedProfiles = data.filter(profile => {
            let name = profile.name.first.toLowerCase() + profile.name.last.toLowerCase();
            if (name.startsWith(text.toLowerCase()))
                return profile;
        });

        if (matchedProfiles.length == 0) {
            $("#profile-data").html(`<b>No results found</b>`);
        }

        matchedProfiles.forEach(profile => {
            profilesListHTML = `
            <div>
            <button onclick="displayProfile(${profile.id})"><b>${profile.name.title} ${profile.name.first} ${profile.name.last}</b></button>
            </div>
            `;
            $("#profile-list").append(profilesListHTML);
        });
    });
}

function displayProfile(profileID) {
    $.getJSON("../data/profiles.json", function (data) {
        profiles = data;

        matchedProfile = data.forEach(profile => {
            if (profile.id == profileID) {
                let profileHTML = `
                <img src=${profile.picture.thumbnail} alt="Avatar" class="center">
                <div>
                    <b>Name:</b>
                    <div class="name">${profile.name.title} ${profile.name.first} ${profile.name.last}</div>
                    <b>DOB: </b>
                    <div class="date">${profile.dob.date}</div>
                    <b>Bio:</b>
                    <div class="name">
                    ${profile.bio}
                    </div>
                    <b>Email:</b>
                    <div class="name">
                        ${profile.email}
                    </div>
                    <b>Phone:</b>
                    <div class="name">
                        ${profile.phone}
                    </div>
                </div>
                `;

                $("#profile-data").html(profileHTML);
            }
        });
    });
}

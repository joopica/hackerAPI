"use strict";
const Constants = require("./general.constant");

const authRoutes = {
    "login": {
        requestType: Constants.REQUEST_TYPES.POST,
        uri: "/api/auth/login"
    },
    "logout": {
        requestType: Constants.REQUEST_TYPES.POST,
        uri: "/api/auth/logout"
    },
    "invite": {
        requestType: Constants.REQUEST_TYPES.POST,
        uri: "/api/auth/invite"
    },
    "getSelfRoleBindindings": {
        requestType: Constants.REQUEST_TYPES.GET,
        uri: "/api/auth/rolebindings/" + Constants.ROLE_CATEGORIES.SELF
    },
    "getAnyRoleBindings": {
        requestType: Constants.REQUEST_TYPES.GET,
        uri: "/api/auth/rolebindings/" + Constants.ROLE_CATEGORIES.ALL
    }
};

const accountRoutes = {
    "getSelf": {
        requestType: Constants.REQUEST_TYPES.GET,
        uri: "/api/account/self"
    },
    "getSelfById": {
        requestType: Constants.REQUEST_TYPES.GET,
        uri: "/api/account/" + Constants.ROLE_CATEGORIES.SELF,
    },
    "getAnyById": {
        requestType: Constants.REQUEST_TYPES.GET,
        uri: "/api/account/" + Constants.ROLE_CATEGORIES.ALL,
    },
    "post": {
        requestType: Constants.REQUEST_TYPES.POST,
        uri: "/api/account/"
    },
    "patchSelfById": {
        requestType: Constants.REQUEST_TYPES.PATCH,
        uri: "/api/account/" + Constants.ROLE_CATEGORIES.SELF,
    },
    "patchAnyById": {
        requestType: Constants.REQUEST_TYPES.PATCH,
        uri: "/api/account/" + Constants.ROLE_CATEGORIES.ALL,
    },
    "inviteAccount": {
        requestType: Constants.REQUEST_TYPES.POST,
        uri: "/api/account/invite"
    }
};

const hackerRoutes = {
    "getSelfById": {
        requestType: Constants.REQUEST_TYPES.GET,
        uri: "/api/hacker/" + Constants.ROLE_CATEGORIES.SELF,
    },
    "getAnyById": {
        requestType: Constants.REQUEST_TYPES.GET,
        uri: "/api/hacker/" + Constants.ROLE_CATEGORIES.ALL,
    },
    "getSelfResumeById": {
        requestType: Constants.REQUEST_TYPES.GET,
        uri: "/api/hacker/resume/" + Constants.ROLE_CATEGORIES.SELF,
    },
    "getAnyResumeById": {
        requestType: Constants.REQUEST_TYPES.GET,
        uri: "/api/hacker/resume/" + Constants.ROLE_CATEGORIES.ALL,
    },
    "post": {
        requestType: Constants.REQUEST_TYPES.POST,
        uri: "/api/hacker/",
    },
    "postSelfResumeById": {
        requestType: Constants.REQUEST_TYPES.POST,
        uri: "/api/hacker/resume/" + Constants.ROLE_CATEGORIES.SELF,
    },
    "postAnyResumeById": {
        requestType: Constants.REQUEST_TYPES.POST,
        uri: "/api/hacker/resume/" + Constants.ROLE_CATEGORIES.ALL,
    },
    "patchSelfById": {
        requestType: Constants.REQUEST_TYPES.PATCH,
        uri: "/api/hacker/" + Constants.ROLE_CATEGORIES.SELF,
    },
    "patchAnyById": {
        requestType: Constants.REQUEST_TYPES.PATCH,
        uri: "/api/hacker/" + Constants.ROLE_CATEGORIES.ALL,
    },
    "patchAnyStatusById": {
        requestType: Constants.REQUEST_TYPES.PATCH,
        uri: "/api/hacker/status/" + Constants.ROLE_CATEGORIES.ALL,
    },
    "patchSelfStatusById": {
        requestType: Constants.REQUEST_TYPES.PATCH,
        uri: "/api/hacker/status/" + Constants.ROLE_CATEGORIES.SELF,
    },
    "patchSelfCheckInById": {
        requestType: Constants.REQUEST_TYPES.PATCH,
        uri: "/api/hacker/checkin/" + Constants.ROLE_CATEGORIES.SELF,
    },
    "patchAnyCheckInById": {
        requestType: Constants.REQUEST_TYPES.PATCH,
        uri: "/api/hacker/checkin/" + Constants.ROLE_CATEGORIES.ALL,
    },
    "patchSelfConfirmationById": {
        requestType: Constants.REQUEST_TYPES.PATCH,
        uri: "/api/hacker/confirmation/" + Constants.ROLE_CATEGORIES.SELF,
    },
};

const sponsorRoutes = {
    "getSelfById": {
        requestType: Constants.REQUEST_TYPES.GET,
        uri: "/api/sponsor/" + Constants.ROLE_CATEGORIES.SELF,
    },
    "getAnyById": {
        requestType: Constants.REQUEST_TYPES.GET,
        uri: "/api/sponsor/" + Constants.ROLE_CATEGORIES.ALL,
    },
    "post": {
        requestType: Constants.REQUEST_TYPES.POST,
        uri: "/api/sponsor/",
    },
};

const teamRoutes = {
    "getSelfById": {
        requestType: Constants.REQUEST_TYPES.GET,
        uri: "/api/team/" + Constants.ROLE_CATEGORIES.SELF,
    },
    "getAnyById": {
        requestType: Constants.REQUEST_TYPES.GET,
        uri: "/api/team/" + Constants.ROLE_CATEGORIES.ALL,
    },
    "post": {
        requestType: Constants.REQUEST_TYPES.POST,
        uri: "/api/team/",
    },
};

const volunteerRoutes = {
    "post": {
        requestType: Constants.REQUEST_TYPES.POST,
        uri: "/api/volunteer/",
    },
};

const allRoutes = {
    "Auth": authRoutes,
    "Account": accountRoutes,
    "Hacker": hackerRoutes,
    "Sponsor": sponsorRoutes,
    "Team": teamRoutes,
    "Volunteer": volunteerRoutes,
};

/**
 * returns all the routes as a list
 * @return {{requestType: string, uri: string}[]}
 */
function listAllRoutes() {
    let routes = [];

    for (let routeGroupKey in allRoutes) {
        if (!allRoutes.hasOwnProperty(routeGroupKey)) {
            continue;
        }

        const routeGroup = allRoutes[routeGroupKey];
        for (let routeKey in routeGroup) {
            if (!routeGroup.hasOwnProperty(routeKey)) {
                continue;
            }

            const route = routeGroup[routeKey];
            routes.push(route);
        }
    }

    return routes;
}

module.exports = {
    authRoutes: authRoutes,
    accountRoutes: accountRoutes,
    hackerRoutes: hackerRoutes,
    sponsorRoutes: sponsorRoutes,
    teamRoutes: teamRoutes,
    volunteerRoutes: volunteerRoutes,
    allRoutes: allRoutes,
    listAllRoutes: listAllRoutes,
};
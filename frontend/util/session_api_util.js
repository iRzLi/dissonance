
export const signup = (formUser) => {
    return $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user: formUser },
    });
};

// Gives user, all of its  servers, rooms, and messages
/**
 *
 * user : {}
 *
 * servers: {
 *   1:{},
 *   2:{}
 * }
 * rooms: {
 *   1:{},
 *   2:{}
 * }
 * messages: {
 *   1:{},
 *   2:{}
 * }
 */

export const login = (formUser) => {
    return $.ajax({
        method: "POST",
        url: "/api/session",
        data: { user: formUser },
    });
};

export const logout = () => {
    return $.ajax({
        method: "DELETE",
        url: "/api/session"
    });
};

// Needs name
export const createServer = (formServer) => {
    return $.ajax({
        method: "POST",
        url: "/api/servers",
        data: {server: formServer},
    });
};

export const joinServer = joinLink => {
    return $.ajax({
        method: "POST",
        url: `/api/servers/${joinLink}`,
    });
};


// Gives itself, all of its  users, rooms, and messages
/**
 * 
 * server : {}
 * 
 * users: {
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

export const requestServer = id => {
    return $.ajax({
        method: "GET",
        url: `/api/servers/${id}`,
    });
};

export const deletetServer = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/servers/${id}`,
    });
};
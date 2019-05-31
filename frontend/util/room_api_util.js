
//Needs name and server_id
export const createRoom = (formRoom) => {
    return $.ajax({
        method: "POST",
        url: "/api/rooms",
        data: { room: formRoom },
    });
};

// Gives back room and all of its messages
/**
 * 
 * room : {},
 * messages: {
 *   1:{},
 *   2:{}
 * }
 */
export const requestRoom = id => {
    return $.ajax({
        method: "GET",
        url: `/api/rooms/${id}`,
    });
};

export const deletetRoom = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/rooms/${id}`,
    });
};
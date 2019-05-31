//Needs body
export const createMessage = (roomId, formMessage) => {
    return $.ajax({
        method: "POST",
        url: `/api/rooms/${roomId}/messages`,
        data: { message: formMessage },
    });
};

// Gives all messages in a room
/**
 *
 * messages: {
 *   1:{},
 *   2:{}
 * }
 */
export const requestRoomMessages = (roomId) => {
    return $.ajax({
        method: "GET",
        url: `/api/rooms/${roomId}/messages`,
    });
};

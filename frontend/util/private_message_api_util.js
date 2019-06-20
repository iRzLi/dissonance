export const createPrivateMessage = (roomId, formMessage) => {
    return $.ajax({
        method: "POST",
        url: `/api/private_rooms/${roomId}/private_messages`,
        data: { private_message: formMessage },
    });
};

// Gives all messages in a room
/**
 *
 * private_messages: {
 *   1:{},
 *   2:{}
 * }
 */
export const requestPrivateRoomMessages = (roomId) => {
    return $.ajax({
        method: "GET",
        url: `/api/private_rooms/${roomId}/private_messages`,
    });
};

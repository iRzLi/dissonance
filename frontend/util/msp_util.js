export const getMyServers = (state, userId) => {
    return state.entities.users[userId].server_ids.map(serverId=>{
        return state.entities.servers[serverId];
    });
};


export const getMyRooms = (state, serverId) => {
    return state.entities.servers[serverId].room_ids.map(
        (roomId) => {
            return state.entities.rooms[roomId];
        }
    );
};

export const getMyMessages = (state, roomId) => {
    return state.entities.rooms[roomId].message_ids.map(
        messageId => {
            return state.entities.messages[messageId];
        }
    );
}
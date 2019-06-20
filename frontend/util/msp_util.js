export const getMyServers = (state) => {
    // return state.entities.servers[serverId];
    const userId = state.session.id;
    let arr = [];
    state.entities.users[userId].server_ids.forEach(serverId => {
        if (state.entities.servers[serverId] && state.entities.servers[serverId].public === true) {
            arr.push(state.entities.servers[serverId]);
        }
    });
    arr = arr.sort(compareIds);

    state.entities.users[userId].server_ids.forEach(serverId => {
        if (state.entities.servers[serverId] && state.entities.servers[serverId].public === false) {
            arr.unshift(state.entities.servers[serverId]);
        }
    });
    return arr;
};


export const getMyRooms = (state, serverId) => {
    return state.entities.servers[serverId].room_ids.map(
        (roomId) => {
            return state.entities.rooms[roomId];
        }
    );
};

export const getMyMessages = (state, roomId) => {
    const message_arr = [];
    state.entities.rooms[roomId].message_ids.forEach(
        messageId => {
            if (state.entities.messages[messageId]){
                message_arr.push(state.entities.messages[messageId]);
            }
        }
    );

    return message_arr.sort(compareIds);
};

function compareIds(a, b) {
    return a.id - b.id;
}


export const getMyPrivateRooms = (state) => {
    if (state.entities.users[state.session.id].private_room_ids){
        return state.entities.users[state.session.id].private_room_ids.map(
            (roomId) => {
                return state.entities.private_rooms[roomId];
            }
        );
    } else {
        return [];
    }
    
};
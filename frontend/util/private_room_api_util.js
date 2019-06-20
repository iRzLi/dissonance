// private_room = PrivateRoom.create!(user1_id: admin.id, user2_id: guest.id)
// params.require(:private_rooms).permit(:user1_id,:user2_id)
export const createPrivateRoom = (formRoom) => {
    return $.ajax({
        method: "POST",
        url: "/api/private_rooms",
        data: { private_room: formRoom },
    });
};

/**
 * 
 * {
    "private_rooms": {
        "1": {
        "id": 1,
        "name": "Admin#158",
        "other_user_id": 1,
        "user_ids": [
            1,
            2
            ],
        "private_messages_ids": [
            1
            ]
        }
    },
    "users": {
        ...
        "message_ids": [
            1,
            2,
            3
            ],
        "private_room_ids": [
            1
        ]
    },

    "private_messages": {
        "1": {
            "id": 1,
            "private_room_id": 1,
            "user_id": 2,
            "body": "HEY!!",
            "created_at": "2019-06-19T20:56:42.863Z",
            "updated_at": "2019-06-19T20:56:42.863Z"
        }
    }
 */


 /**
  * 
  * {
"private_room": {
    "id": 1,
    "name": "Admin#158",
    "other_user_id": 1,
    "user_ids": [
        1,
        2
    ],
    "private_messages_ids": [
        1
    ]
},
"users": {},
"private_messages": {}
  */

export const requestPrivateRoom = id => {
    return $.ajax({
        method: "GET",
        url: `/api/private_rooms/${id}`,
    });
};

// returns private rooms of current user
export const requestPrivateRooms = () => {
    return $.ajax({
        method: "GET",
        url: "/api/private_rooms",
    });
};

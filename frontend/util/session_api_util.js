
export const signup = (formUser) => {
    return $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user: formUser },
    });
};


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